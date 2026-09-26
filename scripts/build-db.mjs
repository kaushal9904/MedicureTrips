// Builds the site's doctor/hospital database from the files in database/.
// Run `npm run db` after replacing the CSVs with a fresh export, editing
// database/featured.json, or running `npm run images`.
//
// Output: src/data/db/doctors.json and src/data/db/hospitals.json, which the
// app imports directly (so every profile is bundled and prerendered — no
// runtime API or credentials needed).
import { readFile, writeFile, readdir, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = path.resolve(import.meta.dirname, '..');
const PUBLIC = path.join(ROOT, 'public');
const OUT_DIR = path.join(ROOT, 'src/data/db');
const FALLBACK_IMG = '/images/DR avatar 468x525.jpg';

// RFC 4180 CSV parser: handles quoted fields, "" escapes and newlines in quotes.
export function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') inQuotes = false;
      else field += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); rows.push(row); row = []; field = '';
    } else field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }

  const [header, ...body] = rows.filter(r => r.some(v => v !== ''));
  return body.map(r => Object.fromEntries(header.map((h, i) => [h, r[i] ?? ''])));
}

const text = v => (v ?? '').trim() || null;
const int = v => (text(v) && !Number.isNaN(Number(v)) ? Number(v) : null);
function json(v, fallback) {
  if (!text(v)) return fallback;
  try { return JSON.parse(v); } catch { return fallback; }
}

// "Dr. I P S Oberoi" and "Dr. IPS Oberoi.jpg" both normalise to "ipsoberoi".
const nameKey = s => s.toLowerCase()
  .replace(/\.(jpe?g|png|webp)$/, '')
  .replace(/\(.*?\)/g, '')
  .replace(/^(prof\.?\s*)?(\(.*?\)\s*)?dr\.?\s*/, '')
  .replace(/[^a-z]/g, '');

// Legacy photos in public/images named "Dr. Name.jpg" (pre-`npm run images`).
async function buildLegacyImageIndex() {
  const files = await readdir(path.join(PUBLIC, 'images'));
  const index = new Map();
  for (const f of files) {
    if (/^dr/i.test(f) && /\.(jpe?g|png|webp)$/i.test(f)) index.set(nameKey(f), `/images/${f}`);
  }
  return index;
}

const publicFile = url => (existsSync(path.join(PUBLIC, decodeURI(url))) ? url : null);

function resolveDoctorImage(row, legacyIndex) {
  return publicFile(`/images/doctors/${row.slug}.webp`)
    ?? (text(row.image_url) && publicFile(text(row.image_url)))
    ?? legacyIndex.get(nameKey(row.name))
    ?? FALLBACK_IMG;
}

// Featured slugs come first in list order; the rest keep their fallback order.
function byFeatured(featured, fallback) {
  const rank = new Map(featured.map((slug, i) => [slug, i]));
  return (a, b) => (rank.get(a.slug) ?? Infinity) - (rank.get(b.slug) ?? Infinity) || fallback(a, b);
}

async function main() {
  const [doctorCsv, hospitalCsv, featuredJson] = await Promise.all([
    readFile(path.join(ROOT, 'database/doctors.csv'), 'utf-8'),
    readFile(path.join(ROOT, 'database/hospitals.csv'), 'utf-8'),
    readFile(path.join(ROOT, 'database/featured.json'), 'utf-8'),
  ]);
  const featured = JSON.parse(featuredJson);
  const legacyIndex = await buildLegacyImageIndex();

  const hospitals = parseCsv(hospitalCsv).map(h => ({
    id: h.id,
    slug: h.slug,
    name: h.name,
    city: text(h.city),
    description: text(h.description),
    image: publicFile(`/images/hospitals/${h.slug}.webp`) ?? (text(h.image_url) && publicFile(text(h.image_url))),
    accreditations: json(h.accreditations, []),
    address: text(h.address),
    establishedYear: int(h.established_year),
    bedCount: int(h.bed_count),
    icuBeds: int(h.icu_beds),
    departments: json(h.departments, []),
    hospitalType: text(h.hospital_type),
    ownership: text(h.ownership),
    timings: text(h.timings),
    departmentHeads: json(h.department_heads, []),
    isFeatured: featured.hospitals.includes(h.slug),
  })).sort(byFeatured(featured.hospitals, (a, b) => a.name.localeCompare(b.name)));

  const hospitalById = new Map(hospitals.map(h => [h.id, h]));

  const doctors = parseCsv(doctorCsv).map(d => {
    const hospital = hospitalById.get(d.hospital_id);
    return {
      id: d.id,
      slug: d.slug,
      name: d.name,
      specialty: text(d.specialty),
      designation: text(d.designation),
      department: text(d.department),
      hospitalId: hospital?.id ?? null,
      hospitalName: hospital?.name ?? text(d.hospital_name),
      experienceYears: int(d.experience_years),
      bio: text(d.bio),
      image: resolveDoctorImage(d, legacyIndex),
      education: json(d.education, []),
      awards: json(d.awards, []),
      careerHistory: json(d.career_history, []),
      publications: json(d.publications, []),
      consultationFee: int(d.consultation_fee),
      isFeatured: featured.doctors.includes(d.slug),
      // Placeholder rows are department heads imported with partial data.
      isPlaceholder: d.is_placeholder === 'true',
    };
  }).sort(byFeatured(featured.doctors, (a, b) =>
    Number(a.isPlaceholder) - Number(b.isPlaceholder)
    || nameKey(a.name).localeCompare(nameKey(b.name)),
  ));

  const slugs = new Set();
  for (const d of doctors) {
    if (slugs.has(d.slug)) throw new Error(`Duplicate doctor slug: ${d.slug}`);
    slugs.add(d.slug);
  }
  const unknownFeatured = [
    ...featured.doctors.filter(s => !slugs.has(s)),
    ...featured.hospitals.filter(s => !hospitals.some(h => h.slug === s)),
  ];
  if (unknownFeatured.length) console.warn(`featured.json lists unknown slugs: ${unknownFeatured.join(', ')}`);

  await mkdir(OUT_DIR, { recursive: true });
  await writeFile(path.join(OUT_DIR, 'doctors.json'), JSON.stringify(doctors, null, 2) + '\n');
  await writeFile(path.join(OUT_DIR, 'hospitals.json'), JSON.stringify(hospitals, null, 2) + '\n');

  const withPhoto = doctors.filter(d => d.image !== FALLBACK_IMG).length;
  const hospitalsWithPhoto = hospitals.filter(h => h.image).length;
  console.log(`Wrote ${doctors.length} doctors (${withPhoto} with photos) and ${hospitals.length} hospitals (${hospitalsWithPhoto} with photos) to src/data/db/`);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch(err => { console.error(err); process.exitCode = 1; });
}
