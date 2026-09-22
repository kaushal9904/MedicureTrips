import Link from '../components/TrackedLink';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useWeb3Form } from '../hooks/useWeb3Form';

const team = [
  { name: 'Artemis Hospital', creds: 'NABH & JCI Accredited', designation: 'Cardiology', specialty: 'Multi-specialty Tertiary Care', img: '/images/Artemis Hospital468x525.jpg' },
  { name: 'Medanta Hospital', creds: 'NABH & JCI Accredited', designation: 'Neuro Surgery', specialty: 'Multi-specialty Tertiary Care', img: '/images/Medanta Hospital 468x525 4.jpg' },
  { name: 'Fortis Hospital', creds: 'NABH & JCI Accredited', designation: 'Orthopedic', specialty: 'Multi-specialty Tertiary Care', img: '/images/Fortis Hospital 468x525 3_.jpg' },
  { name: 'Max Hospital', creds: 'NABH & JCI Accredited', designation: 'Cancer Care', specialty: 'Multi-specialty Tertiary Care', img: '/images/Max Hospital 468x525 2_.jpg' },
];

const testimonials = [
  { name: 'Gloria J Martin', role: 'Patient', avatar: '/assets/img/avatar_10.webp', quote: '"Medicure Trip exceeded my expectations with their seamless medical services. The attention to detail and personalized care made my journey to wellness stress-free and comfortable."' },
  { name: 'Joey A Travis', role: 'Customer', avatar: '/assets/img/avatar_4.webp', quote: '"Trusting Medicure Trip for my medical needs was the best decision. They not only provided quality healthcare but also ensured a smooth experience, from treatment to recovery."' },
  { name: 'Russell V Flint', role: 'Customer', avatar: '/assets/img/avatar_3.webp', quote: '"Exceptional service! Medicure Trip made navigating international healthcare straightforward. Their dedication to patient satisfaction shines through in every aspect of their services."' },
  { name: 'Gretchen P Stanley', role: 'Manager', avatar: '/assets/img/avatar_5.webp', quote: '"Reliable and efficient! Medicure Trip took care of all my medical and travel arrangements seamlessly. I highly recommend their services for anyone seeking top-notch healthcare solutions."' },
];

const AboutUs = () => {
  const appointmentForm = useWeb3Form('About Us Page — Appointment Form');
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_page_header_video position-relative">
        <div className="cs_page_header_video_bg">
          <video autoPlay muted loop playsInline preload="auto">
            <source src="/images/Banner Video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">About Us</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">About Us</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="cs_about_style_2 pb-0">
        <div className="container">
          <div className="cs_section_heading_style_2 cs_mb_48 cs_mb_lg_40">
            <div className="cs_section_heading_left">
            </div>
            <div className="cs_section_heading_right">
              <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">We Believe World-Class Medical Care Should be Accessible, Affordable, & Compassionate.</h2>
            </div>
          </div>
          <div className="row cs_gap_y_30">
            <div className="col-xl-5 col-lg-6">
              <div className="cs_about_img cs_radius_20 cs_parallax position-relative">
                <img src="/images/About last img 804x914.jpg" alt="Compassionate Doctors" />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="cs_about_content">
                <div className="cs_about_text cs_mb_48 cs_mb_lg_30">
                  <p className="cs_about_desc cs_mb_22">We offer the top treatment and tour packages for international patients coming to India, partnering with leading hospitals and medical experts across modern, holistic, and alternative treatment modalities — all while keeping costs at roughly 30% of what you'd pay in most Western countries.</p>
                  <ul className="cs_about_features_list cs_mp_0">
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check icon" /><span>Medical visa assistance</span></li>
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check icon" /><span>Airport transfers & lodging</span></li>
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check icon" /><span>Surgeon consultations & lab work</span></li>
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check icon" /><span>Affordable & transparent pricing</span></li>
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check icon" /><span>ISO 27001 certified data security</span></li>
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check icon" /><span>Rehabilitation & recovery support</span></li>
                  </ul>
                  <Link to="/doctors" aria-label="Go to partner hospitals page" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5">
                    <span>Meet Our Partner Hospitals</span>
                    <span><i className="fa-solid fa-arrow-right"></i></span>
                  </Link>
                </div>
                <div className="cs_about_testimonial_wrap">
                  <div className="cs_testimonial cs_gray2_bg cs_radius_20 position-relative">
                    <blockquote>"Your health is our mission — we treat every patient like family."</blockquote>
                    <p className="cs_fs_20 cs_semibold cs_primary_color mb-0">— The Medicure Trip Team</p>
                    <img src="/assets/img/icons/quote.svg" alt="Quote icon" className="cs_quote_icon" />
                  </div>
                  <div className="cs_award cs_gray3_bg cs_radius_20">
                    <div className="cs_award_icon">
                      <img src="/assets/img/icons/award.svg" alt="Award icon" className="cs_award_icon" />
                    </div>
                    <div className="cs_award_info">
                      <h3 className="cs_fs_20 cs_semibold cs_secondary_font cs_mb_12">ISO 27001 Certified</h3>
                      <p className="mb-0">1000+ patients assisted since inception</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="cs_feature_section_5">
        <div className="container">
          <div className="row cs_gap_y_24 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="cs_about_card cs_color_1 cs_radius_20">
                <div className="cs_card_header cs_mb_28 cs_mb_lg_20">
                  <div className="cs_card_icon"><img src="/assets/img/icons/mission.svg" alt="Mission icon" /></div>
                  <h3 className="cs_card_title cs_fs_24 cs_medium mb-0">Our Mission</h3>
                </div>
                <p className="cs_card_desc mb-0">To make world-class medical treatment accessible and affordable for international patients, backed by a trusted network of hospitals and specialists.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_about_card cs_color_2 cs_radius_20">
                <div className="cs_card_header cs_mb_28 cs_mb_lg_20">
                  <div className="cs_card_icon"><img src="/assets/img/icons/eye.svg" alt="Vision icon" /></div>
                  <h3 className="cs_card_title cs_fs_24 cs_medium mb-0">Our Vision</h3>
                </div>
                <p className="cs_card_desc mb-0">To be the most trusted medical tourism partner for patients travelling to India, known for transparency, quality, and compassionate care.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_about_card cs_color_3 cs_radius_20">
                <div className="cs_card_header cs_mb_28 cs_mb_lg_20">
                  <div className="cs_card_icon"><img src="/assets/img/icons/heart-bit.svg" alt="Philosophy icon" /></div>
                  <h3 className="cs_card_title cs_fs_24 cs_medium mb-0">Our Philosophy</h3>
                </div>
                <p className="cs_card_desc mb-0">Friendly, ethical, and transparent service — treating every patient with the same care we'd want for our own family.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="cs_ticker_1 p-0">
        <div className="container-fluid overflow-hidden">
          <div className="cs_ticker_in">
            <div className="cs_ticker_content cs_ticker_text">
              <div className="cs_ticker_item cs_shadow_none cs_fs_75 cs_bold">Your Health, Our Priority — Anywhere in the World.</div>
              <div className="cs_ticker_item cs_shadow_none cs_fs_75 cs_bold">Your Health, Our Priority — Anywhere in the World.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <section className="cs_technology_section_2 cs_gray_bg">
        <div className="container">
          <div className="row cs_gap_y_30 align-items-end">
            <div className="col-xl-6">
              <div className="cs_technology_content">
                <div className="cs_section_heading_style_1 cs_mb_48 cs_mb_lg_40">
                  <h2 className="cs_section_title cs_fs_40 cs_bold cs_mb_6">Where Care & Technology Unite</h2>
                  <p className="cs_section_desc mb-0">We don't just treat illnesses — we restore lives with empathy, precision, and integrity.</p>
                </div>
                <div className="cs_feature_grid_1">
                  <div className="cs_feature_card_1 cs_white_bg cs_radius_20">
                    <div className="cs_feature_card_header">
                      <div className="cs_feature_icon cs_accent_bg cs_center cs_radius_10"><img src="/assets/img/icons/stethoscope.svg" alt="Stethoscope icon" /></div>
                      <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Elite Specialists</h2>
                    </div>
                    <p className="cs_feature_desc mb-0">Over 200+ internationally trained doctors, 24/7 availability across 40+ specialties.</p>
                  </div>
                  <div className="cs_feature_card_1 cs_white_bg cs_radius_20">
                    <div className="cs_feature_card_header">
                      <div className="cs_feature_icon cs_accent_bg cs_center cs_radius_10"><img src="/assets/img/icons/robotic-surgery.svg" alt="Surgery icon" /></div>
                      <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Robotic Surgery</h2>
                    </div>
                    <p className="cs_feature_desc mb-0">State-of-the-art Da Vinci Xi, 3T MRI, AI diagnostics for unmatched precision.</p>
                  </div>
                  <div className="cs_feature_card_1 cs_white_bg cs_radius_20">
                    <div className="cs_feature_card_header">
                      <div className="cs_feature_icon cs_accent_bg cs_center cs_radius_10"><img src="/assets/img/icons/hospital.svg" alt="Hospital icon" /></div>
                      <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Holistic Approach</h2>
                    </div>
                    <p className="cs_feature_desc mb-0">Patient-centric rooms, multilingual staff, nutritional therapy & rehab support.</p>
                  </div>
                  <div className="cs_feature_card_1 cs_white_bg cs_radius_20">
                    <div className="cs_feature_card_header">
                      <div className="cs_feature_icon cs_accent_bg cs_center cs_radius_10"><img src="/assets/img/icons/price-tag.svg" alt="Price tag icon" /></div>
                      <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Transparent Pricing</h2>
                    </div>
                    <p className="cs_feature_desc mb-0">Cashless insurance, affordable packages & EMI options — no hidden costs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="cs_technology_img cs_parallax cs_radius_20 position-relative">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="cs_radius_20"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                >
                  <source src="/images/banner-2.mp4" type="video/mp4" />
                </video>
                <div className="cs_technology_text">
                  <div className="cs_accredited_badge cs_accent_bg cs_white_color cs_radius_50">
                    <div className="cs_circular_text"><img src="/assets/img/circular_text.svg" alt="Circular Text" /></div>
                    <Link to="/contact-us" className="cs_call_btn cs_center cs_white_bg cs_radius_50"><img src="/assets/img/icons/phone3.svg" alt="Phone icon" /></Link>
                  </div>
                  <ul className="cs_feature_list cs_white_color cs_mp_0">
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check icon" /><span>NABH Accredited Hospital of the Year</span></li>
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check icon" /><span>Digital Health Records Seamless care</span></li>
                    <li><img src="/assets/img/icons/check-double.svg" alt="Check icon" /><span>Zero waiting Priority appointments</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className="cs_work_section_1 position-relative pb-0">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_48 cs_mb_lg_40 text-center">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Three Seamless Steps From <br />Free Consultation to Recovery</h2>
          </div>
          <div className="row cs_gap_y_30 justify-content-center position-relative z-1">
            <div className="col-lg-4 col-md-6">
              <div className="cs_work_card_1 cs_center_column text-center position-relative">
                <div className="cs_work_img cs_center cs_radius_50 cs_white_bg"><img src="/assets/img/icons/telehealth.svg" alt="Free Consultation icon" /></div>
                <div className="cs_work_info">
                  <span className="cs_work_step cs_center cs_accent_bg cs_white_color cs_radius_50 cs_fs_20 cs_semibold cs_mb_22 cs_mb_lg_16">01</span>
                  <h3 className="cs_work_title cs_fs_24 cs_medium cs_mb_22 cs_mb_lg_12">Free Consultation</h3>
                  <p className="cs_work_desc mb-0">Share your medical reports and get a free consultation with our partner specialists — no obligation.</p>
                </div>
                <span className="cs_work_card_shape position-absolute"><img src="/assets/img/arrow_shape_1.svg" alt="Arrow shape" /></span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_work_card_1 cs_center_column text-center position-relative">
                <div className="cs_work_img cs_center cs_radius_50 cs_white_bg"><img src="/assets/img/icons/transport.svg" alt="Visa & Travel Arranged icon" /></div>
                <div className="cs_work_info">
                  <span className="cs_work_step cs_center cs_accent_bg cs_white_color cs_radius_50 cs_fs_20 cs_semibold cs_mb_22 cs_mb_lg_16">02</span>
                  <h3 className="cs_work_title cs_fs_24 cs_medium cs_mb_22 cs_mb_lg_12">Visa & Travel Arranged</h3>
                  <p className="cs_work_desc mb-0">We handle your medical visa, flights, airport transfers, and accommodation in India.</p>
                </div>
                <span className="cs_work_card_shape position-absolute"><img src="/assets/img/arrow_shape_1.svg" alt="Arrow shape" /></span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_work_card_1 cs_center_column text-center position-relative">
                <div className="cs_work_img cs_center cs_radius_50 cs_white_bg"><img src="/assets/img/icons/first-aid-kit.svg" alt="Treatment & Recovery icon" /></div>
                <div className="cs_work_info">
                  <span className="cs_work_step cs_center cs_accent_bg cs_white_color cs_radius_50 cs_fs_20 cs_semibold cs_mb_22 cs_mb_lg_16">03</span>
                  <h3 className="cs_work_title cs_fs_24 cs_medium cs_mb_22 cs_mb_lg_12">Treatment & Recovery</h3>
                  <p className="cs_work_desc mb-0">Receive treatment at a partner hospital, with meal planning, rehab, and follow-up support until you're home.</p>
                </div>
                <span className="cs_work_card_shape position-absolute"><img src="/assets/img/arrow_shape_1.svg" alt="Arrow shape" /></span>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_work_bg_shape position-absolute"><img src="/assets/img/vector_shape_1.svg" alt="Vector bg" /></div>
      </section>

      {/* Core Values */}
      <section className="cs_feature_section_1">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center-column cs_mb_48 text-center">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Our Core Values</h2>
          </div>
          <div className="row cs_gap_y_24">
            <div className="col-xl-3 col-md-6">
              <div className="cs_feature_card_1 cs_radius_20 cs_color_1">
                <div className="cs_feature_card_header cs_mb_15">
                  <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10"><img src="/assets/img/icons/heart2.svg" alt="Compassion icon" /></div>
                  <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Compassion</h2>
                </div>
                <p className="cs_feature_desc mb-0">For the weary and worried, may better tools bring quieter nights.</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="cs_feature_card_1 cs_radius_20 cs_color_2">
                <div className="cs_feature_card_header cs_mb_15">
                  <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10"><img src="/assets/img/icons/line-chart.svg" alt="Excellence icon" /></div>
                  <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Excellence</h2>
                </div>
                <p className="cs_feature_desc mb-0">Clinical precision and continuous improvement.</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="cs_feature_card_1 cs_radius_20 cs_color_3">
                <div className="cs_feature_card_header cs_mb_15">
                  <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10"><img src="/assets/img/icons/shield-cross-line.svg" alt="Safety icon" /></div>
                  <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Safety</h2>
                </div>
                <p className="cs_feature_desc mb-0">Gold-standard protocols for patient security.</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="cs_feature_card_1 cs_radius_20 cs_color_4">
                <div className="cs_feature_card_header cs_mb_15">
                  <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10"><img src="/assets/img/icons/team-line.svg" alt="Teamwork icon" /></div>
                  <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Teamwork</h2>
                </div>
                <p className="cs_feature_desc mb-0">Collaborative, multi-disciplinary approach.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="cs_team_section_1 cs_gray2_bg">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center-column cs_mb_48 cs_mb_lg_40 text-center">
            <h2 className="cs_section_title cs_fs_40 cs_bold mb-0">Our Qualified Panel of <br />Partner Hospitals</h2>
          </div>
          <div className="row cs_gap_y_24">
            {team.map((doc, i) => (
              <div key={i} className="col-lg-3 col-sm-6">
                <div className="cs_team_Style_1">
                  <div className="cs_team_img cs_radius_20 cs_mb_24 position-relative">
                    <img src={doc.img} alt={`${doc.name} image`} />
                    <span className="cs_team_designation cs_gray3_bg cs_fs_14 position-absolute">{doc.designation}</span>
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
                    <p className="cs_team_subtitle mb-0">{doc.creds} &middot; {doc.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Slider — disabled per request
      <section className="cs_testimonial_section_5 pb-0">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center-column cs_mb_48 cs_mb_lg_40 mx-auto text-center">
            <h2 className="cs_section_title cs_fs_40 cs_bold mb-0">Trusted by Patients Around the World</h2>
          </div>
        </div>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={24}
          loop={true}
          speed={9000}
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
      */}

      {/* Appointment CTA */}
      <section className="cs_appointment_section_3">
        <div className="container">
          <div className="row cs_gap_y_24">
            <div className="col-xl-12 order-xl-2">
              <div className="cs_appointment_right">
                <div className="row cs_gap_y_24 align-items-end">
                  <div className="col-xl-8 col-lg-12 order-xl-2">
                    <div className="cs_appointment_container">
                      <div className="cs_appointment_heading cs_mb_48 cs_mb_lg_40">
                        <h2 className="cs_fs_40 cs_semibold cs_mb_6">Book an Appointment</h2>
                        <p className="mb-0">Fill the details below — we'll confirm within 2hrs.</p>
                      </div>
                      <div className="cs_appointment_form_wrapper cs_gray3_bg cs_radius_20">
                        <form className="cs_appointment_form_2 cs_type_1 row cs_gap_y_24" onSubmit={appointmentForm.handleSubmit}>
                          <div className="col-12">
                            <div className="cs_input_wrap cs_white_bg cs_radius_5">
                              <label htmlFor="appt-name">Full Name</label>
                              <input type="text" name="name" id="appt-name" className="cs_form_field" placeholder="Enter your name" autoComplete="off" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="cs_input_wrap cs_white_bg cs_radius_5">
                              <label htmlFor="appt-phone">Phone Number</label>
                              <input type="text" name="phone" id="appt-phone" className="cs_form_field" placeholder="Enter your phone" autoComplete="off" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="cs_input_wrap cs_white_bg cs_radius_5">
                              <label htmlFor="appt-email">Email Address</label>
                              <input type="email" name="email" id="appt-email" className="cs_form_field" placeholder="Enter your email address" autoComplete="off" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="cs_input_wrap cs_white_bg cs_radius_5">
                              <label htmlFor="appt-department">Treatment</label>
                              <select className="cs_form_field cs_choice" name="department" id="appt-department" defaultValue="">
                                <option disabled value="">Select treatment</option>
                                <option>Organ Transplant</option>
                                <option>Cardiology</option>
                                <option>Neuro Surgery</option>
                                <option>Spine Surgery</option>
                                <option>Orthopedic</option>
                                <option>Urology</option>
                                <option>ENT</option>
                                <option>Plastic Surgery</option>
                                <option>Cancer</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="cs_input_wrap cs_white_bg cs_radius_5">
                              <label htmlFor="appt-doctor">Preferred Hospital</label>
                              <select className="cs_form_field cs_choice" name="doctor" id="appt-doctor" defaultValue="">
                                <option disabled value="">Select hospital</option>
                                <option>Artemis Hospital</option>
                                <option>Marengo Asia Hospital</option>
                                <option>Medanta Hospital</option>
                                <option>Fortis Hospital</option>
                                <option>BLK Hospital</option>
                                <option>Max Hospital</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="cs_input_wrap cs_white_bg cs_radius_5 position-relative">
                              <label htmlFor="appt-date">Date</label>
                              <input type="text" name="date" id="appt-date" className="cs_form_field" placeholder="Select date" />
                              <img src="/assets/img/icons/calendar.svg" alt="Calendar icon" className="cs_date_icon position-absolute" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="cs_input_wrap cs_white_bg cs_radius_5 position-relative">
                              <label htmlFor="appt-time">Preferred Time</label>
                              <input type="text" name="time" id="appt-time" className="cs_form_field" placeholder="Select preferred time" />
                              <span className="cs_time_icon position-absolute"></span>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="cs_input_wrap cs_white_bg cs_radius_5">
                              <label htmlFor="appt-message">Additional Notes (optional)</label>
                              <textarea name="message" rows="3" id="appt-message" className="cs_form_field" placeholder="Describe your symptom here..."></textarea>
                            </div>
                          </div>
                          <div className="col-12">
                            <button type="submit" className="cs_btn_style_2 cs_primary_color cs_semibold cs_radius_5" disabled={appointmentForm.status === 'sending'}>
                              <span>{appointmentForm.status === 'sending' ? 'Sending...' : 'Confirm Appointment'}</span>
                              <img src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                            </button>
                            {appointmentForm.status === 'success' && <p className="cs_fs_14 mb-0 cs_mt_12" style={{ color: '#1a7f37' }}>Thanks! We'll contact you shortly.</p>}
                            {appointmentForm.status === 'error' && <p className="cs_fs_14 mb-0 cs_mt_12" style={{ color: '#c0392b' }}>{appointmentForm.errorMessage || 'Something went wrong. Please try again.'}</p>}
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-12">
                    <div className="cs_appointment_promise cs_radius_20 overflow-hidden position-relative">
                      <h3 className="cs_appointment_promise_title cs_fs_24 cs_semibold cs_primary_color mb-0">Your Health, Our Priority.</h3>
                      <div className="cs_appointment_promise_img">
                        <img src="/images/last-img-636x549.jpeg" alt="Hospital care team" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="cs_appointment_map cs_radius_20">
                <iframe src="https://maps.google.com/maps?q=Delhi,India&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=&amp;output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen title="Medicure Trip location map"></iframe>
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

export default AboutUs;
