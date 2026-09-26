import { useParams } from 'react-router-dom';
import Link from '../components/TrackedLink';
import { useWeb3Form } from '../hooks/useWeb3Form';
import DoctorCard from '../components/DoctorCard';
import { getDoctorBySlug, getHospitalById, getRelatedDoctors, hospitalPath } from '../data/db';
import Error404 from './Error404';

const CheckList = ({ items }) => (
  <ul className="cs_doctor_list cs_mp_0">
    {items.map((item, i) => (
      <li key={i}><img src="/assets/img/icons/check-double.svg" alt="" /><span>{item}</span></li>
    ))}
  </ul>
);

const Block = ({ title, children }) => (
  <div className="cs_doctor_block cs_mb_48 cs_mb_lg_24">
    <h3 className="cs_doctor_block_title cs_fs_40 cs_semibold cs_mb_24 cs_mb_lg_16">{title}</h3>
    {children}
  </div>
);

const DoctorProfile = () => {
  const { slug } = useParams();
  const doctor = getDoctorBySlug(slug);
  const enquiryForm = useWeb3Form(doctor ? `Doctor Profile — ${doctor.name}` : 'Doctor Profile');

  if (!doctor) return <Error404 />;

  const hospital = getHospitalById(doctor.hospitalId);
  const related = getRelatedDoctors(doctor);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const stats = [
    doctor.experienceYears && { value: `${doctor.experienceYears}+ years`, label: 'Experience' },
    doctor.specialty && { value: doctor.specialty, label: 'Specialty' },
    doctor.awards.length > 0 && { value: doctor.awards.length, label: doctor.awards.length === 1 ? 'Award & honour' : 'Awards & honours' },
  ].filter(Boolean);

  const hasDetails = doctor.bio || doctor.education.length || doctor.careerHistory.length
    || doctor.awards.length || doctor.publications.length;

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_gray2_bg">
        <div className="container">
          <div className="cs_page_header_in">
            <div className="cs_profile_header_person cs_mb_10">
              <img className="cs_avatar_md" src={doctor.image} alt="" />
              <div>
                <h1 className="cs_page_header_title cs_fs_40 cs_bold mb-0">{doctor.name}</h1>
                {doctor.specialty && <p className="cs_accent_color cs_semibold mb-0">{doctor.specialty}</p>}
              </div>
            </div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/our-doctors">Our Doctors</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{doctor.name}</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="cs_doctor_details">
        <div className="container">
          {/* Hero */}
          <div className="cs_doctor_hero">
            <div className="row cs_gap_y_30">
              <div className="col-lg-4">
                <div className="cs_doctor_img cs_radius_20">
                  <img src={doctor.image} alt={`${doctor.name} photo`} />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="cs_doctor_info">
                  {doctor.department && (
                    <p className="cs_doctor_role cs_accent_color cs_fs_14 cs_semibold cs_mb_17">// {doctor.department.toUpperCase()}</p>
                  )}
                  <h2 className="cs_doctor_name cs_fs_40 cs_semibold cs_mb_12">{doctor.name}</h2>
                  {doctor.designation && <p className="cs_doctor_credentials cs_mb_12">{doctor.designation}</p>}
                  {doctor.hospitalName && (
                    <p className="cs_accent_color cs_semibold cs_mb_24">
                      {hospital
                        ? <Link to={hospitalPath(hospital.slug)}>{hospital.name}{hospital.city ? `, ${hospital.city}` : ''}</Link>
                        : doctor.hospitalName}
                    </p>
                  )}
                  {stats.length > 0 && (
                    <ul className="cs_doctor_stats cs_mp_0 cs_mb_24">
                      {stats.map(s => (
                        <li key={s.label}><strong>{s.value}</strong><span>{s.label}</span></li>
                      ))}
                    </ul>
                  )}
                  <Link to="/contact-us" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5">
                    <img src="/assets/img/icons/calendar.svg" alt="" />
                    <span>Book a Consultation</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row cs_gap_y_40">
            {/* Main profile */}
            <div className="col-lg-8">
              <div className="cs_doctor_main">
                {doctor.bio && (
                  <Block title="About">
                    <p className="mb-0">{doctor.bio}</p>
                  </Block>
                )}
                {doctor.education.length > 0 && (
                  <Block title="Education & Training">
                    <CheckList items={doctor.education} />
                  </Block>
                )}
                {doctor.careerHistory.length > 0 && (
                  <Block title="Experience">
                    <ul className="cs_doctor_timeline cs_mp_0">
                      {doctor.careerHistory.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </Block>
                )}
                {doctor.awards.length > 0 && (
                  <Block title="Awards & Achievements">
                    <CheckList items={doctor.awards} />
                  </Block>
                )}
                {doctor.publications.length > 0 && (
                  <Block title="Publications & Contributions">
                    <CheckList items={doctor.publications} />
                  </Block>
                )}
                {!hasDetails && (
                  <Block title="About">
                    <p className="mb-0">
                      We're still compiling {doctor.name}'s full profile. Send us an enquiry and our team will share
                      their qualifications, experience and availability with you.
                    </p>
                  </Block>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <aside className="cs_sidebar_style_1">
                {hospital && (
                  <div className="cs_sidebar_widget cs_primary_bg cs_radius_20">
                    <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_white_color cs_mb_16">Practises At</h3>
                    {hospital.image && (
                      <Link to={hospitalPath(hospital.slug)} className="cs_sidebar_hospital_img cs_mb_16">
                        <img src={hospital.image} alt={hospital.name} loading="lazy" />
                      </Link>
                    )}
                    <p className="cs_semibold cs_mb_12">
                      <Link to={hospitalPath(hospital.slug)} className="cs_white_color">{hospital.name} →</Link>
                    </p>
                    <ul className="cs_visiting_hours cs_color_1 cs_mp_0">
                      {hospital.address && (
                        <li><span className="cs_hours_value cs_secondary2_color">{hospital.address}</span></li>
                      )}
                      {hospital.accreditations.length > 0 && (
                        <li>
                          <span className="cs_hours_label cs_white_color">Accreditations:</span>
                          <span className="cs_hours_value cs_secondary2_color">{hospital.accreditations.join(', ')}</span>
                        </li>
                      )}
                      {hospital.bedCount && (
                        <li>
                          <span className="cs_hours_label cs_white_color">Beds:</span>
                          <span className="cs_hours_value cs_secondary2_color">{hospital.bedCount}</span>
                        </li>
                      )}
                      {hospital.establishedYear && (
                        <li>
                          <span className="cs_hours_label cs_white_color">Established:</span>
                          <span className="cs_hours_value cs_secondary2_color">{hospital.establishedYear}</span>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
                {hospital?.departments.length > 0 && (
                  <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20">
                    <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_primary_color cs_mb_16">Hospital Departments</h3>
                    <ul className="cs_hospital_facts cs_mp_0">
                      {hospital.departments.map(d => <li key={d}>{d}</li>)}
                    </ul>
                  </div>
                )}
                <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_primary_color cs_mb_20">Enquire About {doctor.name}</h3>
                  <form className="cs_appointment_form" onSubmit={enquiryForm.handleSubmit}>
                    <input type="hidden" name="doctor" value={doctor.name} />
                    <div className="cs_input_wrap cs_white_bg cs_radius_5">
                      <label htmlFor="booking-name" className="cs_form_label cs_primary_color cs_semibold">Full Name</label>
                      <input type="text" id="booking-name" name="name" className="cs_form_field" placeholder="Enter your name" autoComplete="off" />
                    </div>
                    <div className="cs_input_wrap cs_white_bg cs_radius_5">
                      <label htmlFor="booking-phone" className="cs_form_label cs_primary_color cs_semibold">Phone Number</label>
                      <input type="tel" id="booking-phone" name="phone" className="cs_form_field" placeholder="Enter your Phone number" autoComplete="off" />
                    </div>
                    <div className="cs_input_wrap cs_white_bg cs_radius_5">
                      <label htmlFor="booking-symptoms" className="cs_form_label cs_primary_color cs_semibold">Brief symptoms</label>
                      <textarea id="booking-symptoms" name="symptoms" className="cs_form_field" rows="3" placeholder="Brief your symptoms"></textarea>
                    </div>
                    <button type="submit" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5 w-100 justify-content-center" disabled={enquiryForm.status === 'sending'}>
                      <img src="/assets/img/icons/calendar.svg" alt="" />
                      <span>{enquiryForm.status === 'sending' ? 'Sending...' : 'Enquire Now'}</span>
                    </button>
                    {enquiryForm.status === 'success' && <p className="cs_fs_14 mb-0 cs_mt_12" style={{ color: '#1a7f37' }}>Thanks! We'll contact you shortly.</p>}
                    {enquiryForm.status === 'error' && <p className="cs_fs_14 mb-0 cs_mt_12" style={{ color: '#c0392b' }}>{enquiryForm.errorMessage || 'Something went wrong. Please try again.'}</p>}
                  </form>
                </div>
              </aside>
            </div>
          </div>

          {/* Related doctors */}
          {related.length > 0 && (
            <div className="cs_mt_80">
              <div className="cs_section_heading_style_1 cs_center-column cs_mb_48 cs_mb_lg_40 text-center">
                <h2 className="cs_section_title cs_fs_40 cs_bold mb-0">Other {doctor.specialty} Specialists</h2>
              </div>
              <div className="row cs_gap_y_24 justify-content-center">
                {related.map(doc => (
                  <div key={doc.id} className="col-lg-4 col-sm-6">
                    <DoctorCard doctor={doc} showBooking={false} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <button type="button" id="scrollToTopBtn" className="cs_scrollup_btn" onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </main>
  );
};

export default DoctorProfile;
