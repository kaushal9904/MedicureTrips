// Matches the raw photos in images/doctors image/ and images/Hospital/ to
// database records by name, then writes resized WebP copies to
// public/images/doctors/<slug>.webp and public/images/hospitals/<slug>.webp,
// which `npm run db` picks up. Run `npm run images` after adding photos.
import { readdir, readFile, stat, mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { parseCsv } from './build-db.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');

const SOURCES = [
  {
    dir: 'images/doctors image',
    csv: 'database/doctors.csv',
    out: 'public/images/doctors',
    width: 600,
    // Filenames that don't match a doctor's name exactly.
    aliases: {
      'arunkumargiridirector': 'dr-arun-kumar-giri',
      'madhukarbhardwai': 'dr-madhukar-bhardwaj',
      'ramjimalhotra': 'dr-ramji-mehrotra',
      'vikasagarwaldirector': 'dr-vikas-agarwal',
      'ashishaggarwal': 'dr-ashish-agarwal',
    },
  },
  {
    dir: 'images/Hospital',
    csv: 'database/hospitals.csv',
    out: 'public/images/hospitals',
    width: 1200,
    aliases: {},
  },
];

// "Dr. (Col) Anil Dhall.webp", "Prof. (Col.) Dr. Bipin Walia.jpg" and
// "dr-anil-dhall" all reduce to the bare name.
const nameKey = s => s.toLowerCase()
  .replace(/(\.(jpe?g|png|webp|avif|cms))+$/g, '')
  .replace(/468x525/g, '')
  .replace(/\b(dr|prof|col|brig|padma shri)\b\.?/g, '')
  .replace(/[^a-z]/g, '');

async function importSource({ dir, csv, out, width, aliases }) {
  const rows = parseCsv(await readFile(path.join(ROOT, csv), 'utf-8'));
  const bySlug = new Map(rows.map(r => [r.slug, r]));
  const byKey = new Map(rows.flatMap(r => [[nameKey(r.name), r], [nameKey(r.slug), r]]));

  const files = (await readdir(path.join(ROOT, dir))).filter(f => /\.(jpe?g|png|webp|avif|cms)$/i.test(f));

  // When a record has several photos, the most recently uploaded one wins.
  const chosen = new Map();
  const unmatched = [];
  for (const file of files) {
    const key = nameKey(file);
    const row = bySlug.get(aliases[key]) ?? byKey.get(key);
    if (!row) { unmatched.push(file); continue; }
    const { mtimeMs } = await stat(path.join(ROOT, dir, file));
    const current = chosen.get(row.slug);
    if (!current || mtimeMs > current.mtimeMs) chosen.set(row.slug, { file, mtimeMs });
  }

  await mkdir(path.join(ROOT, out), { recursive: true });
  for (const [slug, { file }] of chosen) {
    await sharp(path.join(ROOT, dir, file))
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(path.join(ROOT, out, `${slug}.webp`));
  }

  const missing = rows.filter(r => !chosen.has(r.slug)).map(r => r.name);
  console.log(`${dir}: ${chosen.size}/${rows.length} records have a photo -> ${out}/`);
  if (missing.length) console.log(`  No photo: ${missing.join(', ')}`);
  if (unmatched.length) console.log(`  Unused files (no matching record): ${unmatched.join(', ')}`);
}

for (const source of SOURCES) await importSource(source);
