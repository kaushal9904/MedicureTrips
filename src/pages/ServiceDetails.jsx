import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const conditions = [
  { title: 'Stroke', desc: 'Rapid response clot retrieval, thrombolysis, and rehabilitation.' },
  { title: 'Epilepsy', desc: 'Advanced EEG monitoring, medication & surgical options.' },
  { title: 'Spinal Disorders', desc: 'Herniated discs, spinal stenosis, minimally invasive spine surgery.' },
  { title: "Parkinson's Disease", desc: 'Deep brain stimulation (DBS), movement disorder clinic.' },
  { title: 'Chronic Migraine', desc: 'Botulinum toxin, CGRP therapies & nerve blocks.' },
  { title: 'Brain Tumors', desc: 'Neuro-oncology, awake craniotomy, and targeted therapy.' },
];

const technologies = [
  { title: '3T MRI & fMRI', desc: 'High-resolution brain mapping for surgical planning.', icon: '/assets/img/icons/heart2.svg', color: 'cs_color_1' },
  { title: 'Intraoperative Neuro Monitoring', desc: 'Real-time nerve monitoring during spine/brain surgery.', icon: '/assets/img/icons/line-chart.svg', color: 'cs_color_2' },
  { title: 'Robotic Neurosurgery', desc: 'Minimally invasive biopsies & DBS electrode placement.', icon: '/assets/img/icons/shield-cross-line.svg', color: 'cs_color_3' },
  { title: 'Neurovascular Suite', desc: 'Mechanical thrombectomy for acute stroke.', icon: '/assets/img/icons/team-line.svg', color: 'cs_color_4' },
];

const neuroDoctors = [
  { name: 'Artemis Hospital', creds: 'NABH & JCI Accredited', img: '/assets/img/team_img_1.webp' },
  { name: 'Medanta Hospital', creds: 'NABH & JCI Accredited', img: '/assets/img/team_img_2.webp' },
  { name: 'Marengo Asia Hospital', creds: 'NABH & JCI Accredited', img: '/assets/img/team_img_3.webp' },
];

const testimonials = [
  { name: 'Gloria J Martin', role: 'Patient', avatar: '/assets/img/avatar_10.webp', quote: '"Medicure Trip exceeded my expectations with their seamless medical services. The attention to detail and personalized care made my journey to wellness stress-free and comfortable."' },
  { name: 'Joey A Travis', role: 'Customer', avatar: '/assets/img/avatar_4.webp', quote: '"Trusting Medicure Trip for my medical needs was the best decision. They not only provided quality healthcare but also ensured a smooth experience, from treatment to recovery."' },
  { name: 'Russell V Flint', role: 'Customer', avatar: '/assets/img/avatar_3.webp', quote: '"Exceptional service! Medicure Trip made navigating international healthcare straightforward. Their dedication to patient satisfaction shines through in every aspect of their services."' },
  { name: 'Gretchen P Stanley', role: 'Manager', avatar: '/assets/img/avatar_5.webp', quote: '"Reliable and efficient! Medicure Trip took care of all my medical and travel arrangements seamlessly. I highly recommend their services for anyone seeking top-notch healthcare solutions."' },
];

const ServiceDetails = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" style={{ backgroundImage: "url('/assets/img/page_header_bg.webp')" }}>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Service Details</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Service Details</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="cs_service_details_section pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="cs_service_details">
                <div className="cs_service_details_block cs_mb_24">
                  <h2 className="cs_fs_40 cs_semibold cs_mb_24">Neuro Surgery</h2>
                  <p className="cs_service_details_lead mb-0">Advanced neurosurgical interventions for optimal brain and spinal health — coordinated with our partner hospitals for international patients.</p>
                </div>
                <div className="cs_service_banner cs_radius_15 cs_mb_48 cs_mb_lg_30">
                  <img src="/assets/img/service_details_img_1.webp" alt="Neuro Surgery" />
                </div>
                <div className="cs_service_details_block cs_mb_48 cs_mb_lg_24">
                  <h3 className="cs_fs_40 cs_semibold cs_mb_24">Overview</h3>
                  <p className="mb-0">Medicure Trip partners with leading neurosurgery centers in Delhi NCR, equipped with advanced neuroimaging, electrophysiology labs, and dedicated neuro-ICUs. Our network provides compassionate, evidence-based care for all neurological conditions — from headaches to complex brain tumors — while we handle your visa, travel, and stay.</p>
                </div>
                <div className="cs_service_details_block cs_mb_48 cs_mb_lg_30">
                  <h3 className="cs_service_block_heading cs_fs_40 cs_semibold cs_mb_32">Conditions We Treat</h3>
                  <ul className="cs_conditions_list cs_mp_0">
                    {conditions.map((c, i) => (
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
                    {technologies.map((tech, i) => (
                      <div key={i} className="col-xl-6 col-lg-12 col-md-6">
                        <div className={`cs_feature_card_1 ${tech.color} cs_radius_20`}>
                          <div className="cs_feature_card_header cs_mb_20">
                            <span className="cs_feature_icon cs_white_bg cs_radius_10 cs_center"><img src={tech.icon} alt={tech.title} /></span>
                            <h4 className="cs_feature_title cs_fs_24 cs_medium mb-0">{tech.title}</h4>
                          </div>
                          <p className="cs_feature_desc mb-0">{tech.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="cs_service_details_block cs_mb_48 cs_mb_lg_30">
                  <h3 className="cs_service_block_heading cs_fs_40 cs_semibold cs_mb-24">Partner Hospitals for Neuro Surgery</h3>
                  <div className="row cs_gap_y_24 justify-content-center">
                    {neuroDoctors.map((doc, i) => (
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
                            <p className="cs_team_subtitle mb-0">{doc.creds}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="cs_service_details_block">
                  <h3 className="cs_fs_30 cs_semibold cs_mb_34 cs_mb_lg_24">Why Choose Medicure Trip for Neuro Surgery</h3>
                  <ul className="cs_service_features_list cs_mp_0">
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check icon" /><span>24/7 Stroke Rapid Response Team</span></li>
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check icon" /><span>Minimally invasive endoscopic brain surgery</span></li>
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check icon" /><span>Dedicated Neuro-ICU with 1:1 nursing</span></li>
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check icon" /><span>Neuro-rehabilitation & physiotherapy</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="cs_sidebar_style_1">
                <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_mb_22">Quick Links</h3>
                  <ul className="cs_service_category_list cs_mp_0">
                    <li><Link to="/doctors.html">Partner Hospitals</Link></li>
                    <li><Link to="/services.html">All Treatments</Link></li>
                    <li><Link to="/faq.html">FAQ</Link></li>
                    <li><Link to="/about-us.html">About Medicure Trip</Link></li>
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
                  <form className="cs_appointment_form" onSubmit={e => e.preventDefault()}>
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
                        <option>Stroke / TIA</option>
                        <option>Epilepsy</option>
                        <option>Migraine / Headache</option>
                        <option>Parkinson's Disease</option>
                        <option>Spine Disorder</option>
                      </select>
                    </div>
                    <div className="cs_input_wrap cs_white_bg cs_radius_5">
                      <label htmlFor="sd-symptoms">Brief symptoms</label>
                      <textarea name="symptoms" rows="2" id="sd-symptoms" className="cs_form_field" placeholder="Brief your symptoms"></textarea>
                    </div>
                    <button type="submit" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5">
                      <img src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                      <span>Enquire Now</span>
                    </button>
                  </form>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Slider */}
      <section className="cs_testimonial_section_5">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center-column cs_mb_48 cs_mb_lg_40 text-center">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17 text-uppercase">// Real patient experiences</p>
            <h2 className="cs_section_title cs_fs_40 cs_bold mb-0">Trusted by Patients Around the World</h2>
          </div>
        </div>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={24}
          loop={true}
          speed={10000}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
            1400: { slidesPerView: 5 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="cs_testimonial_style_5 cs_white_bg cs_radius_20">
                <div className="cs_testimonial_author">
                  <div className="cs_author_img"><img src={t.avatar} alt={t.name} /></div>
                  <div className="cs_author_info">
                    <h3 className="cs_author_name cs_fs_24 cs_bold mb-0">{t.name}</h3>
                    <p className="cs_author_designation mb-0">{t.role}</p>
                  </div>
                </div>
                <div className="cs_rating cs_mb_18" data-rating="5"><div className="cs_rating_percentage"></div></div>
                <blockquote>{t.quote}</blockquote>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <button type="button" id="scrollToTopBtn" className="cs_scrollup_btn" onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </main>
  );
};

export default ServiceDetails;
