import Link from '../components/TrackedLink';
import { useSearchParams } from 'react-router-dom';
import { getServiceBySlug, partnerHospitals, techIcons } from '../data/services';
import { useWeb3Form } from '../hooks/useWeb3Form';

const ServiceDetails = () => {
  const [searchParams] = useSearchParams();
  const slug = searchParams.get('slug');
  const service = getServiceBySlug(slug);
  const enquiryForm = useWeb3Form(`${service.title} Service Page — Enquiry Form`);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>

      {/* Service Details */}
      <section className="cs_service_details_section pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="cs_service_details">
                <div className="cs_service_details_block cs_mb_24">
                  <h2 className="cs_fs_40 cs_semibold cs_mb_24">{service.title}</h2>
                  <p className="cs_service_details_lead mb-0">{service.lead}</p>
                </div>
                <div className="cs_service_banner cs_radius_15 cs_mb_48 cs_mb_lg_30">
                  <img src={service.img} alt={service.title} />
                </div>
                <div className="cs_service_details_block cs_mb_48 cs_mb_lg_24">
                  <h3 className="cs_fs_40 cs_semibold cs_mb_24">Overview</h3>
                  <p className="mb-0">{service.overview}</p>
                </div>
                <div className="cs_service_details_block cs_mb_48 cs_mb_lg_30">
                  <h3 className="cs_service_block_heading cs_fs_40 cs_semibold cs_mb_32">Conditions We Treat</h3>
                  <ul className="cs_conditions_list cs_mp_0">
                    {service.conditions.map((c, i) => (
                      <li key={i} className="cs_condition_item">
                        <span className="cs_condition_dot"></span>
                        <div className="cs_condition_body">
                          <h4 className="cs_condition_title cs_fs_24 cs_semibold cs_mb_12">{c.title}</h4>
                          <p className="cs_condition_desc mb-0">{c.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="cs_service_details_block cs_mb_48 cs_mb_lg_30">
                  <h3 className="cs_service_block_heading cs_fs_40 cs_semibold cs_mb_24">Advanced Technology & Procedures</h3>
                  <div className="row cs_gap_y_24">
                    {service.technologies.map((tech, i) => (
                      <div key={i} className="col-xl-6 col-lg-12 col-md-6">
                        <div className={`cs_feature_card_1 cs_color_${(i % 4) + 1} cs_radius_20`}>
                          <div className="cs_feature_card_header cs_mb_20">
                            <span className="cs_feature_icon cs_white_bg cs_radius_10 cs_center"><img src={techIcons[i % techIcons.length]} alt={tech.title} /></span>
                            <h4 className="cs_feature_title cs_fs_24 cs_medium mb-0">{tech.title}</h4>
                          </div>
                          <p className="cs_feature_desc mb-0">{tech.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="cs_service_details_block cs_mb_48 cs_mb_lg_30">
                  <h3 className="cs_service_block_heading cs_fs_40 cs_semibold cs_mb-24">Partner Hospitals for {service.title}</h3>
                  <div className="row cs_gap_y_24 justify-content-center">
                    {partnerHospitals.map((doc, i) => (
                      <div key={i} className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
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
                              <Link to="/contact-us" aria-label="Enquire about this hospital" className="cs_btn_style_1 cs_white_color cs_semibold cs_radius_5">
                                <img src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                                <span>Enquire Now</span>
                              </Link>
                            </div>
                          </div>
                          <div className="cs_team_info">
                            <h3 className="cs_team_title cs_fs_20 cs_bold cs_mb_12">
                              <Link to="/doctors" aria-label="View partner hospitals">{doc.name}</Link>
                            </h3>
                            <p className="cs_team_subtitle mb-0">{doc.creds}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="cs_service_details_block">
                  <h3 className="cs_fs_30 cs_semibold cs_mb_34 cs_mb_lg_24">Why Choose Medicure Trip for {service.title}</h3>
                  <ul className="cs_service_features_list cs_mp_0">
                    {service.whyChoose.map((point, i) => (
                      <li key={i}><img src="/assets/img/icons/check-double.svg" alt="Check icon" /><span>{point}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="cs_sidebar_style_1">
                <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_mb_22">Quick Links</h3>
                  <ul className="cs_service_category_list cs_mp_0">
                    <li><Link to="/doctors">Partner Hospitals</Link></li>
                    <li><Link to="/services">All Treatments</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/about-us">About Medicure Trip</Link></li>
                  </ul>
                </div>
                <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_mb_22">Availability</h3>
                  <ul className="cs_visiting_hours cs_mp_0">
                    <li><span>Mon–Sun:</span><span>Working All Day</span></li>
                  </ul>
                  <p className="cs_helpline mb-0">Enquiry Helpline: <a href="tel:9958192249">9958192249</a></p>
                </div>
                <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_mb_22">Enquire Now</h3>
                  <form className="cs_appointment_form" onSubmit={enquiryForm.handleSubmit}>
                    <div className="cs_input_wrap cs_white_bg cs_radius_5">
                      <label htmlFor="sd-name">Full Name</label>
                      <input type="text" name="name" id="sd-name" className="cs_form_field" placeholder="Enter your name" autoComplete="off" />
                    </div>
                    <div className="cs_input_wrap cs_white_bg cs_radius_5">
                      <label htmlFor="sd-phone">Phone Number</label>
                      <input type="text" name="phone" id="sd-phone" className="cs_form_field" placeholder="Enter your Phone number" autoComplete="off" />
                    </div>
                    <div className="cs_input_wrap cs_white_bg cs_radius_5">
                      <label htmlFor="sd-concern">Select Concern</label>
                      <select className="cs_form_field cs_choice" name="concern" id="sd-concern" defaultValue="">
                        <option disabled value="">Select your concern</option>
                        {service.conditions.map((c, i) => (
                          <option key={i}>{c.title}</option>
                        ))}
                      </select>
                    </div>
                    <div className="cs_input_wrap cs_white_bg cs_radius_5">
                      <label htmlFor="sd-symptoms">Brief symptoms</label>
                      <textarea name="symptoms" rows="2" id="sd-symptoms" className="cs_form_field" placeholder="Brief your symptoms"></textarea>
                    </div>
                    <button type="submit" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5" disabled={enquiryForm.status === 'sending'}>
                      <img src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                      <span>{enquiryForm.status === 'sending' ? 'Sending...' : 'Enquire Now'}</span>
                    </button>
                    {enquiryForm.status === 'success' && <p className="cs_fs_14 mb-0 cs_mt_12" style={{ color: '#1a7f37' }}>Thanks! We'll contact you shortly.</p>}
                    {enquiryForm.status === 'error' && <p className="cs_fs_14 mb-0 cs_mt_12" style={{ color: '#c0392b' }}>{enquiryForm.errorMessage || 'Something went wrong. Please try again.'}</p>}
                  </form>
                </div>
              </aside>
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

export default ServiceDetails;
