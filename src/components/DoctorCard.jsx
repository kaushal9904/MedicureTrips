import Link from './TrackedLink';
import { doctorPath } from '../data/db';

// Photo card linking to a doctor's profile. The whole photo is clickable via
// the stretched .cs_card_link; the booking button sits above it.
const DoctorCard = ({ doctor, showHospital = true, showBooking = true }) => (
  <div className="cs_team_style_2 cs_doctor_card cs_radius_20 position-relative overflow-hidden">
    <div className="cs_team_img">
      <img src={doctor.image} alt={`${doctor.name} photo`} loading="lazy" decoding="async" />
    </div>
    <div className="cs_team_info text-center">
      <Link to={doctorPath(doctor.slug)} className="cs_card_link" aria-label={`View ${doctor.name}'s profile`} tabIndex={-1} />
      {showBooking && (
        <Link to="/contact-us" aria-label="Book a consultation with this doctor" className="cs_btn_style_1 cs_danger_bg cs_white_color cs_semibold cs_radius_5 cs_mb_13">
          <img src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
          <span>Book Consultation</span>
        </Link>
      )}
      <h3 className="cs_team_title cs_fs_20 cs_bold cs_white_color cs_mb_12">
        <Link to={doctorPath(doctor.slug)}>{doctor.name}</Link>
      </h3>
      <p className="cs_team_subtitle cs_white_color mb-0">{doctor.designation ?? doctor.specialty}</p>
      {showHospital && doctor.hospitalName && (
        <p className="cs_team_subtitle cs_white_color mb-0">{doctor.hospitalName}</p>
      )}
    </div>
  </div>
);

export default DoctorCard;
