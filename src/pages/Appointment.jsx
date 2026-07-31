import { Link } from 'react-router-dom';

const Appointment = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" style={{ backgroundImage: "url('/assets/img/page_header_bg.webp')" }}>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Appointment</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Appointment</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="cs_appointment_section_5">
        <div className="container">
          <div className="row cs_gap_y_30">
            {/* Left Column */}
            <div className="col-lg-6">
              <div className="cs_appointment_content">
                <div className="cs_section_heading_style_1 cs_mb_24">
                  <h2 className="cs_section_title cs_fs_40 cs_semibold cs_mb_6">Why book with Hospil?</h2>
                  <p className="cs_section_desc mb-0">Instant confirmation • Video consult or in-person • Free follow-up within 7 days</p>
                </div>
                <ul className="cs_appountment_features cs_mb_58 cs_mb_lg_30 cs_mp_0">
                  <li>
                    <img src="/assets/img/icons/time-line.svg" alt="Clock icon" />
                    <span><strong className="cs_semibold cs_primary_color">Minimal waiting time</strong> - Priority scheduling</span>
                  </li>
                  <li>
                    <img src="/assets/img/icons/nurse-line.svg" alt="Specialists icon" />
                    <span><strong className="cs_semibold cs_primary_color">200+ specialists</strong> - Multidisciplinary care</span>
                  </li>
                  <li>
                    <img src="/assets/img/icons/article-line.svg" alt="Document icon" />
                    <span><strong className="cs_semibold cs_primary_color">Insurance &amp; cashless</strong> - Direct billing</span>
                  </li>
                </ul>
                <div className="cs_content_bottom">
                  <div className="cs_appointment_img cs_parallax cs_radius_20 position-relative">
                    <img src="/assets/img/appointment_img_5.webp" alt="Hospital hallway" />
                    <div className="cs_appointment_help_cta cs_fs_20 cs_semibold cs_white_color">
                      <span>Need help? Call us:</span>
                      <a href="tel:9958192249" aria-label="Call us to 9958192249">9958192249</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="col-lg-6">
              <div className="cs_appointment_form_wrapper">
                <div className="cs_appointment_heading cs_mb_24">
                  <h3 className="cs_fs_40 cs_semibold cs_mb_6">Book an Appointment</h3>
                  <p className="mb-0">Fill the details below. Our team will confirm within 2 hours.</p>
                </div>
                <form action="#" className="cs_appointment_form_1 row cs_gap_y_24" onSubmit={e => e.preventDefault()}>
                  <div className="col-12">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="appt-name">Full Name</label>
                      <input type="text" name="name" id="appt-name" className="cs_form_field" placeholder="Enter your name" autoComplete="off" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="appt-phone">Phone Number</label>
                      <input type="text" name="phone" id="appt-phone" className="cs_form_field" placeholder="Enter your phone" autoComplete="off" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="appt-email">Email Address</label>
                      <input type="email" name="email" id="appt-email" className="cs_form_field" placeholder="Enter your email address" autoComplete="off" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="appt-department">Department</label>
                      <select className="cs_form_field cs_choice" name="department" id="appt-department" defaultValue="">
                        <option disabled value="">Select department</option>
                        <option>Cardiology</option>
                        <option>Neurology</option>
                        <option>Oncology</option>
                        <option>Maternity</option>
                        <option>Orthopedics</option>
                        <option>Pulmonology</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="appt-doctor">Preferred Doctor</label>
                      <select className="cs_form_field cs_choice" name="doctor" id="appt-doctor" defaultValue="">
                        <option disabled value="">Select doctor</option>
                        <option>Dr. Gregory Bynum</option>
                        <option>Dr. Lori Fletcher</option>
                        <option>Dr. Philip Johnson</option>
                        <option>Dr. Aline Briscoe</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5 position-relative">
                      <label htmlFor="appt-date">Date</label>
                      <input type="text" name="date" id="appt-date" className="cs_form_field cs_datepicker" data-format="Y-m-d" placeholder="Select date" />
                      <img src="/assets/img/icons/calendar.svg" alt="Calendar icon" className="cs_date_icon position-absolute" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5 position-relative">
                      <label htmlFor="appt-time">Preferred Time</label>
                      <input type="text" name="time" id="appt-time" className="cs_form_field cs_timepicker" data-format="h:i K" placeholder="Select preferred time" />
                      <span className="cs_time_icon position-absolute"></span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="appt-message">Additional Notes (optional)</label>
                      <textarea name="message" rows="3" id="appt-message" className="cs_form_field" placeholder="Describe your symptom here..."></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="cs_btn_style_2 cs_primary_color cs_semibold cs_radius_5">
                      <span>Confirm Appointment</span>
                      <img src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                    </button>
                  </div>
                </form>
              </div>
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

export default Appointment;
