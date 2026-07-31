import { Link } from 'react-router-dom';

const relatedDoctors = [
  { name: 'Marengo Asia Hospital', specialty: 'Neuro Surgery · NABH & JCI Accredited', img: '/assets/img/team_img_2.webp' },
  { name: 'Fortis Hospital', specialty: 'Orthopedic · NABH & JCI Accredited', img: '/assets/img/team_img_3.webp' },
  { name: 'Max Hospital', specialty: 'Cancer Care · NABH & JCI Accredited', img: '/assets/img/team_img_4.webp' },
];

const DoctorDetails = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" style={{ backgroundImage: "url('/assets/img/page_header_bg.webp')" }}>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Hospital Details</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Hospital Details</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Doctor Details */}
      <section className="cs_doctor_details">
        <div className="container">
          <div className="cs_doctor_hero">
            <div className="row cs_gap_y_30">
              <div className="col-lg-4">
                <div className="cs_doctor_img cs_radius_20">
                  <img src="/assets/img/team_img_5.webp" alt="Artemis Hospital" />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="cs_doctor_info">
                  <p className="cs_doctor_role cs_accent_color cs_fs_14 cs_semibold cs_mb_17">// PARTNER HOSPITAL</p>
                  <h2 className="cs_doctor_name cs_fs_40 cs_semibold cs_mb_12">Artemis Hospital</h2>
                  <p className="cs_doctor_credentials cs_mb_12">NABH & JCI Accredited | Multi-specialty Tertiary Care</p>
                  <div className="cs_rating_container cs_mb_24">
                    <div className="cs_rating" data-rating="5"><div className="cs_rating_percentage"></div></div>
                    <span className="cs_rating_text">4.9 out of 5 based on 5K+ reviews</span>
                  </div>
                  <p className="cs_doctor_bio cs_mb_20">One of our trusted partner hospitals in Delhi NCR, offering multi-specialty tertiary care with modern infrastructure and internationally trained specialists. Medicure Trip coordinates your consultation, treatment schedule, and stay with this hospital directly.</p>
                  <div className="cs_social_btns_style_1 cs_mb_48 cs_mb_lg_30">
                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  </div>
                  <ul className="cs_doctor_features cs_mp_0">
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check icon" /><span>NABH & JCI Accredited</span></li>
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check icon" /><span>Multi-specialty Care</span></li>
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check icon" /><span>International Patient Desk</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row cs_gap_y_40">
            <div className="col-lg-8">
              <div className="cs_doctor_main">
                <div className="cs_doctor_block cs_mb_48 cs_mb_lg_24">
                  <h3 className="cs_doctor_block_title cs_fs_40 cs_semibold cs_mb_24 cs_mb_lg_16">About This Hospital</h3>
                  <p className="cs_mb_16">Artemis Hospital is one of Medicure Trip's trusted partner hospitals in Delhi NCR, recognized for its multi-specialty tertiary care, modern medical infrastructure, and internationally trained specialists across cardiology, neuro surgery, orthopedics, and more.</p>
                  <p className="mb-0">As your medical tourism partner, Medicure Trip coordinates every step of your visit here — from your first consultation to travel, accommodation, treatment, and recovery.</p>
                </div>
                <div className="cs_doctor_block cs_mb_48 cs_mb_lg_24">
                  <h3 className="cs_doctor_block_title cs_fs_40 cs_semibold cs_mb_24 cs_mb_lg_16">Specialties Available</h3>
                  <ul className="cs_doctor_list cs_mp_0">
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check icon" /><span>Cardiology</span></li>
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check icon" /><span>Organ Transplant</span></li>
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check icon" /><span>Neuro & Spine Surgery</span></li>
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check icon" /><span>Orthopedic Surgery</span></li>
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check icon" /><span>Cancer Care</span></li>
                  </ul>
                </div>
                <div className="cs_doctor_block cs_mb_48 cs_mb_lg_24">
                  <h3 className="cs_doctor_block_title cs_fs_40 cs_semibold cs_mb_24 cs_mb_lg_16">Accreditations</h3>
                  <ul className="cs_doctor_list cs_mp_0">
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check icon" /><span><strong>NABH Accredited</strong> — National Accreditation Board for Hospitals</span></li>
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check icon" /><span><strong>JCI Accredited</strong> — Joint Commission International</span></li>
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check icon" /><span>International Patient Services Desk</span></li>
                  </ul>
                </div>
                <div className="cs_doctor_block">
                  <h3 className="cs_doctor_block_title cs_fs_40 cs_semibold cs_mb_24 cs_mb_lg_16">What Patients Say</h3>
                  <ul className="cs_testimonial_list cs_mp_0">
                    <li>
                      <div className="cs_doctor_testimonial cs_radius_10">
                        <blockquote>"Medicure Trip exceeded my expectations with their seamless medical services. The attention to detail and personalized care made my journey to wellness stress-free and comfortable."</blockquote>
                        <small className="cs_testimonial_author">— Gloria J Martin</small>
                      </div>
                    </li>
                    <li>
                      <div className="cs_doctor_testimonial cs_radius_10">
                        <blockquote>"Trusting Medicure Trip for my medical needs was the best decision. They not only provided quality healthcare but also ensured a smooth experience, from treatment to recovery."</blockquote>
                        <small className="cs_testimonial_author">— Joey A Travis</small>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="cs_sidebar_style_1">
                <div className="cs_sidebar_widget cs_primary_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_white_color cs_mb_16">Availability</h3>
                  <ul className="cs_visiting_hours cs_color_1 cs_mp_0">
                    <li>
                      <span className="cs_hours_label cs_white_color">Mon–Sun:</span>
                      <span className="cs_hours_value cs_secondary2_color">Working All Day</span>
                    </li>
                    <li>
                      <span className="cs_hours_label cs_white_color">Emergency:</span>
                      <span className="cs_hours_value cs_secondary2_color">Available on-call</span>
                    </li>
                    <li>
                      <span className="cs_hours_label cs_white_color">Location:</span>
                      <span className="cs_hours_value cs_secondary2_color">Delhi NCR, India</span>
                    </li>
                  </ul>
                </div>
                <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_primary_color cs_mb_20">Direct Contact</h3>
                  <ul className="cs_visiting_hours cs_mp_0">
                    <li><a href="tel:9958192249">9958192249</a></li>
                    <li><a href="mailto:shivammehra20244@gmail.com">shivammehra20244@gmail.com</a></li>
                  </ul>
                </div>
                <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_primary_color cs_mb_20">Enquire Now</h3>
                  <form className="cs_appointment_form" onSubmit={e => e.preventDefault()}>
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
                    <button type="submit" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5 w-100 justify-content-center">
                      <img src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                      <span>Enquire Now</span>
                    </button>
                  </form>
                </div>
              </aside>
            </div>
          </div>

          {/* Related Doctors */}
          <div className="cs_mt_80">
            <div className="cs_section_heading_style_1 cs_center-column cs_mb_48 cs_mb_lg_40 text-center">
              <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17 text-uppercase">// Related Hospitals</p>
              <h2 className="cs_section_title cs_fs_40 cs_bold mb-0">Explore Our Other Partner Hospitals</h2>
            </div>
            <div className="row cs_gap_y_24 justify-content-center">
              {relatedDoctors.map((doc, i) => (
                <div key={i} className="col-xl-4 col-lg-6 col-sm-6">
                  <div className="cs_team_Style_1">
                    <div className="cs_team_img cs_radius_20 cs_mb_24 position-relative">
                      <img src={doc.img} alt={`${doc.name} image`} />
                      <div className="cs_team_contact">
                        <div className="cs_team_social">
                          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                          <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                          <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                          <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                        <Link to="/contact-us.html" aria-label="Enquire about this hospital" className="cs_btn_style_1 cs_white_color cs_semibold cs_radius_5">
                          <img src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                          <span>Enquire Now</span>
                        </Link>
                      </div>
                    </div>
                    <div className="cs_team_info">
                      <h3 className="cs_team_title cs_fs_20 cs_bold cs_mb_12">
                        <Link to="/doctors.html" aria-label="View partner hospitals">{doc.name}</Link>
                      </h3>
                      <p className="cs_team_subtitle mb-0">{doc.specialty}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <button type="button" id="scrollToTopBtn" className="cs_scrollup_btn" onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </main>
  );
};

export default DoctorDetails;
