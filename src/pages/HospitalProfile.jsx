import { useParams } from 'react-router-dom';
import Link from '../components/TrackedLink';
import DoctorCard from '../components/DoctorCard';
import { useWeb3Form } from '../hooks/useWeb3Form';
import {
  getHospitalBySlug, getDoctorsAtHospital, getHospitalSpecialties, getDoctorBySlug, doctorPath,
} from '../data/db';
import Error404 from './Error404';

const Block = ({ title, children }) => (
  <div className="cs_doctor_block cs_mb_48 cs_mb_lg_24">
    <h3 className="cs_doctor_block_title cs_fs_40 cs_semibold cs_mb_24 cs_mb_lg_16">{title}</h3>
    {children}
  </div>
);

const HospitalProfile = () => {
  const { slug } = useParams();
  const hospital = getHospitalBySlug(slug);
  const enquiryForm = useWeb3Form(hospital ? `Hospital Profile — ${hospital.name}` : 'Hospital Profile');

  if (!hospital) return <Error404 />;

  const doctors = getDoctorsAtHospital(hospital.id);
  const specialties = getHospitalSpecialties(hospital.id);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const stats = [
    hospital.establishedYear && { value: hospital.establishedYear, label: 'Established' },
    hospital.bedCount && { value: hospital.bedCount, label: 'Beds' },
    hospital.icuBeds && { value: hospital.icuBeds, label: 'ICU beds' },
    doctors.length > 0 && { value: doctors.length, label: doctors.length === 1 ? 'Specialist' : 'Specialists' },
  ].filter(Boolean);

  const departmentHeads = hospital.departmentHeads.filter(g => g.heads.length > 0);

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_gray2_bg">
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Hospital Profile</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/doctors">Partner Hospitals</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{hospital.name}</li>
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
              <div className="col-lg-5">
                <div className="cs_doctor_img cs_hospital_img cs_radius_20">
                  <img src={hospital.image ?? '/assets/img/team_img_5.webp'} alt={hospital.name} />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="cs_doctor_info">
                  <p className="cs_doctor_role cs_accent_color cs_fs_14 cs_semibold cs_mb_17">
                    // {[hospital.city, hospital.hospitalType].filter(Boolean).join(' · ').toUpperCase()}
                  </p>
                  <h2 className="cs_doctor_name cs_fs_40 cs_semibold cs_mb_12">{hospital.name}</h2>
                  {hospital.ownership && <p className="cs_doctor_credentials cs_mb_20">{hospital.ownership}</p>}
                  {hospital.accreditations.length > 0 && (
                    <ul className="cs_doctor_features cs_mp_0 cs_mb_24">
                      {hospital.accreditations.map(a => (
                        <li key={a}><img src="/assets/img/icons/check-double.svg" alt="" /><span>{a} Accredited</span></li>
                      ))}
                    </ul>
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
                    <span>Get a Free Quote</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row cs_gap_y_40">
            <div className="col-lg-8">
              <div className="cs_doctor_main">
                {hospital.description && (
                  <Block title="About">
                    <p className="mb-0">{hospital.description}</p>
                  </Block>
                )}
                {specialties.length > 0 && (
                  <Block title="Specialties Available">
                    <ul className="cs_doctor_features cs_specialty_chips cs_mp_0">
                      {specialties.map(s => (
                        <li key={s}><img src="/assets/img/icons/check-double.svg" alt="" /><span>{s}</span></li>
                      ))}
                    </ul>
                  </Block>
                )}
                {hospital.departments.length > 0 && (
                  <Block title="Departments">
                    <ul className="cs_doctor_list cs_two_col_list cs_mp_0">
                      {hospital.departments.map(d => (
                        <li key={d}><img src="/assets/img/icons/check-double.svg" alt="" /><span>{d}</span></li>
                      ))}
                    </ul>
                  </Block>
                )}
                {departmentHeads.length > 0 && (
                  <Block title="Heads of Department">
                    <div className="cs_dept_heads">
                      {departmentHeads.map(group => (
                        <div key={group.department} className="cs_dept_group">
                          <h4 className="cs_fs_20 cs_semibold cs_mb_16">{group.department}</h4>
                          <ul className="cs_mp_0">
                            {group.heads.map(head => {
                              const doctor = getDoctorBySlug(head.doctorSlug);
                              return (
                                <li key={head.doctorSlug}>
                                  <Link to={doctorPath(head.doctorSlug)} className="cs_dept_head">
                                    <img className="cs_avatar_sm" src={doctor?.image ?? head.image_url} alt="" loading="lazy" />
                                    <span>
                                      <strong>{head.name}</strong>
                                      <small>{head.title}</small>
                                    </span>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                          {group.note && <p className="cs_fs_14 cs_mt_12 mb-0"><em>{group.note}</em></p>}
                        </div>
                      ))}
                    </div>
                  </Block>
                )}
              </div>
            </div>

            <div className="col-lg-4">
              <aside className="cs_sidebar_style_1">
                <div className="cs_sidebar_widget cs_primary_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_white_color cs_mb_16">At a Glance</h3>
                  <ul className="cs_visiting_hours cs_color_1 cs_mp_0">
                    {hospital.address && (
                      <li>
                        <span className="cs_hours_label cs_white_color">Address:</span>
                        <span className="cs_hours_value cs_secondary2_color">{hospital.address}</span>
                      </li>
                    )}
                    {hospital.timings && (
                      <li>
                        <span className="cs_hours_label cs_white_color">Hours:</span>
                        <span className="cs_hours_value cs_secondary2_color">{hospital.timings}</span>
                      </li>
                    )}
                    {hospital.hospitalType && (
                      <li>
                        <span className="cs_hours_label cs_white_color">Type:</span>
                        <span className="cs_hours_value cs_secondary2_color">{hospital.hospitalType}</span>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_primary_color cs_mb_20">Enquire About This Hospital</h3>
                  <form className="cs_appointment_form" onSubmit={enquiryForm.handleSubmit}>
                    <input type="hidden" name="hospital" value={hospital.name} />
                    <div className="cs_input_wrap cs_white_bg cs_radius_5">
                      <label htmlFor="booking-name" className="cs_form_label cs_primary_color cs_semibold">Full Name</label>
                      <input type="text" id="booking-name" name="name" className="cs_form_field" placeholder="Enter your name" autoComplete="off" />
                    </div>
                    <div className="cs_input_wrap cs_white_bg cs_radius_5">
                      <label htmlFor="booking-phone" className="cs_form_label cs_primary_color cs_semibold">Phone Number</label>
                      <input type="tel" id="booking-phone" name="phone" className="cs_form_field" placeholder="Enter your Phone number" autoComplete="off" />
                    </div>
                    <div className="cs_input_wrap cs_white_bg cs_radius_5">
                      <label htmlFor="booking-symptoms" className="cs_form_label cs_primary_color cs_semibold">Treatment needed</label>
                      <textarea id="booking-symptoms" name="symptoms" className="cs_form_field" rows="3" placeholder="Brief your symptoms or treatment"></textarea>
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

          {/* Doctors at this hospital */}
          {doctors.length > 0 && (
            <div className="cs_mt_80">
              <div className="cs_section_heading_style_1 cs_center-column cs_mb_48 cs_mb_lg_40 text-center">
                <h2 className="cs_section_title cs_fs_40 cs_bold mb-0">Doctors at {hospital.name}</h2>
              </div>
              <div className="row cs_gap_y_24 justify-content-center">
                {doctors.map(doc => (
                  <div key={doc.id} className="col-xl-3 col-lg-4 col-sm-6">
                    <DoctorCard doctor={doc} showHospital={false} />
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

export default HospitalProfile;
