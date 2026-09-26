// Read-only access to the doctor/hospital database. The JSON is generated
// from database/ by `npm run db` — edit the CSVs, not the JSON.
import doctors from './db/doctors.json';
import hospitals from './db/hospitals.json';

const doctorsBySlug = new Map(doctors.map(d => [d.slug, d]));
const hospitalsById = new Map(hospitals.map(h => [h.id, h]));
const hospitalsBySlug = new Map(hospitals.map(h => [h.slug, h]));

export const doctorPath = slug => `/doctor/${slug}`;
export const hospitalPath = slug => `/hospital/${slug}`;

export const getDoctors = () => doctors;

export const getDoctorBySlug = slug => doctorsBySlug.get(slug) ?? null;

export const getHospitals = () => hospitals;

export const getHospitalById = id => (id ? hospitalsById.get(id) ?? null : null);

export const getHospitalBySlug = slug => hospitalsBySlug.get(slug) ?? null;

export const getSpecialties = () =>
  [...new Set(doctors.map(d => d.specialty).filter(Boolean))].sort();

export const getDoctorsAtHospital = hospitalId => doctors.filter(d => d.hospitalId === hospitalId);

// Specialties covered by a hospital's doctors, most doctors first.
export function getHospitalSpecialties(hospitalId) {
  const counts = new Map();
  for (const d of getDoctorsAtHospital(hospitalId)) {
    if (d.specialty) counts.set(d.specialty, (counts.get(d.specialty) ?? 0) + 1);
  }
  return [...counts].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([s]) => s);
}

// Other doctors in the same specialty, same-hospital ones first.
export function getRelatedDoctors(doctor, limit = 3) {
  return doctors
    .filter(d => d.slug !== doctor.slug && d.specialty === doctor.specialty && !d.isPlaceholder)
    .sort((a, b) => Number(b.hospitalId === doctor.hospitalId) - Number(a.hospitalId === doctor.hospitalId))
    .slice(0, limit);
}
