import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HomeV2 = () => {
  const odometerRefs = useRef([]);
  const [activeService, setActiveService] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    const initOdometers = async () => {
      if (typeof window !== 'undefined' && window.Odometer) {
        odometerRefs.current.forEach((el) => {
          if (el && !el.classList.contains('odometer-initialized')) {
            const target = parseInt(el.getAttribute('data-count-to'), 10);
            if (!isNaN(target)) {
              const odometer = new window.Odometer({ el, value: 0, format: 'd', theme: 'default' });
              odometer.render();
              odometer.update(target);
              el.classList.add('odometer-initialized');
            }
          }
        });
      }
    };
    const timer = setTimeout(initOdometers, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const btn = document.getElementById('scrollToTopBtn');
      if (btn) {
        btn.classList.toggle('cs_show', window.scrollY > 300);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const tickerItems = ['Healing with heart', 'Treating with technology', 'Compassionate Care', 'Advanced Medicine', 'Expert Doctors', 'Modern Facility'];

  const services = [
    { title: 'Cardiology', slug: 'cardiology', icon: '/assets/img/icons/cardiology.svg', desc: 'Advanced cardiac care including interventional procedures, preventive heart wellness, and 24/7 cardiac cath lab support.', features: ['ECG, Echo & TMT', 'Cardiac Cath Lab', 'Heart Failure Management'], img: '/images/Cardiology-service 1321x523.jpg' },
    { title: 'Neurology', slug: 'neuro-surgery', icon: '/assets/img/icons/neurology.svg', desc: 'Comprehensive brain, spine & nerve care with stroke management, epilepsy surgery, and neuro-rehabilitation.', features: ['Neuro-Imaging', 'Stroke Recovery', 'Epilepsy Monitoring'], img: '/images/Neurology-service 1321x523.jpg' },
    { title: 'Orthopedics', slug: 'orthopedic', icon: '/assets/img/icons/orthopedics.svg', desc: 'Joint replacement, sports medicine, trauma surgery, and minimally invasive orthopedic procedures.', features: ['Joint Replacement', 'Sports Injury Clinic', 'Spine Surgery'], img: '/images/Orthopedics-service 1321x523.jpg' },
    { title: 'Oncology', slug: 'cancer', icon: '/assets/img/icons/oncology.svg', desc: 'Precision oncology, chemotherapy, immunotherapy, and compassionate palliative support.', features: ['Chemotherapy', 'Radiation Therapy', 'Palliative Care'], img: '/images/Oncology-service 1321x523.jpg' },
    { title: 'Maternity', slug: null, icon: '/assets/img/icons/maternity.svg', desc: 'Holistic pregnancy care, high-risk obstetrics, and state-of-the-art delivery suites.', features: ['Prenatal Care', 'High-Risk Pregnancy', 'NICU Support'], img: '/images/Maternity-service 1321x523.jpg' },
  ];

  const pricingPackages = [
    { name: 'Essential Health Check', price: '$399', features: ['Complete Blood Count', 'Lipid Profile', 'Thyroid Screening', 'Liver Function Tests', 'Kidney Function Tests', 'Urinalysis'], recommended: false },
    { name: 'Comprehensive Wellness', price: '$449', features: ['All Essential Tests', 'ECG & Chest X-Ray', 'Diabetes Screening', 'Vitamin D & B12', 'Cancer Markers', 'Diet Consultation'], recommended: true },
    { name: 'Executive Premium', price: '$249', features: ['All Comprehensive Tests', 'MRI Brain & Spine', 'Cardiac Stress Test', 'Hormone Panel', 'Genetic Screening', 'Personal Health Report'], recommended: false },
  ];

  const team = [
    { name: 'Dr. Gregory Bynum', credentials: 'MD, FRCP', designation: 'Cardiology', specialty: 'Senior Interventional Cardiologist', img: '/images/DR avatar 468x525.jpg' },
    { name: 'Dr. Lori Fletcher', credentials: 'MBBS, MS', designation: 'Neurology', specialty: 'Chief Neurosurgeon Specialist', img: '/images/DR avatar 468x525 2_.jpg' },
    { name: 'Dr. Philip Johnson', credentials: 'DNB Ortho', designation: 'Orthopedics', specialty: 'Joint Replacement & Medicine', img: '/images/DR avatar 468x525 3_.jpg' },
    { name: 'Dr. Aline Briscoe', credentials: 'MD Oncology', designation: 'Oncology', specialty: 'Hematologist & Medical Oncologist', img: '/images/DR avatar 468x525 4.jpg' },
  ];

  const testimonials = [
    { quote: 'The healthcare center provided exceptional care for our entire family. The doctors were attentive, the facilities were world-class, and we felt genuinely cared for throughout our visit.', author: 'Sarah Mitchell', role: 'Healthcare Member', avatar: '/images/bottom last 666x666.jpg' },
    { quote: 'From the moment we walked in, the professionalism and warmth of the staff was remarkable. The diagnostic center is truly advanced and the results were quick and accurate.', author: 'James Robertson', role: 'Wellness Client', avatar: '/images/bottom last 666x666.jpg' },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="cs_hero_style_2 position-relative">
        <div className="cs_hero_parallax_bg cs_bg_filed" style={{ backgroundImage: "url('/assets/img/hero_bg_v2.webp')" }}></div>
        <div className="container">
          <div className="row align-items-center cs_gap_y_30">
            <div className="col-lg-6">
              <div className="cs_hero_content">
                <h1 className="cs_hero_title cs_fs_96 cs_bold">Healing Beyond Boundaries</h1>
                <p className="cs_hero_desc cs_fs_18">Your trusted partner in comprehensive healthcare with advanced diagnostics, expert physicians, and compassionate care for every member of your family.</p>
                <div className="cs_hero_btns">
                  <Link to="/doctors" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5">
                    <span><i className="fa-solid fa-stethoscope"></i></span>
                    <span>Find a Doctor</span>
                  </Link>
                  <Link to="/about-us" className="cs_btn_style_2 cs_primary_color cs_semibold cs_radius_5">
                    <span>Learn More</span>
                    <span><i className="fa-solid fa-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_hero_images">
                <div className="cs_hero_img_1 cs_radius_20">
                  <img src="/images/Healing 1 422x650_.jpg" alt="Healthcare Center" />
                </div>
                <div className="cs_hero_badge cs_accent_bg cs_white_color cs_radius_20">
                  <div className="cs_hero_badge_number cs_fs_40 cs_bold">15+</div>
                  <div className="cs_hero_badge_text">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="cs_feature_section_2 pb-0">
        <div className="container">
          <div className="row cs_gap_y_24">
            <div className="col-xl-4 col-md-6">
              <div className="cs_feature_card_2 cs_radius_20 cs_color_1">
                <div className="cs_feature_icon cs_accent_bg cs_center cs_radius_10">
                  <img src="/assets/img/icons/microscope-line.svg" alt="Diagnostics icon" />
                </div>
                <h3 className="cs_feature_title cs_fs_24 cs_medium cs_mb_12">Advanced Diagnostics</h3>
                <p className="cs_feature_desc mb-0">State-of-the-art laboratory and imaging center with AI-powered diagnostics for accurate results.</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="cs_feature_card_2 cs_radius_20 cs_color_2">
                <div className="cs_feature_icon cs_accent_bg cs_center cs_radius_10">
                  <img src="/assets/img/icons/first-aid-kit.svg" alt="Emergency icon" />
                </div>
                <h3 className="cs_feature_title cs_fs_24 cs_medium cs_mb_12">24/7 Emergency Care</h3>
                <p className="cs_feature_desc">
                  Round-the-clock emergency services with
                  <span className="cs_accent_color cs_bold"> <span className="odometer" ref={(el) => { if (el) odometerRefs.current[0] = el; }} data-count-to="5"></span> min</span>
                  average response time.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="cs_feature_card_2 cs_radius_20 cs_color_3">
                <div className="cs_feature_icon cs_accent_bg cs_center cs_radius_10">
                  <img src="/assets/img/icons/medical-team.svg" alt="Expert Panel icon" />
                </div>
                <h3 className="cs_feature_title cs_fs_24 cs_medium cs_mb_12">Expert Panel</h3>
                <p className="cs_feature_desc mb-0">Over 200+ internationally trained specialists across 40+ medical departments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="cs_about_style_2 cs_gray_bg">
        <div className="container">
          <div className="row cs_gap_y_30 align-items-center">
            <div className="col-lg-6">
              <div className="cs_about_img cs_parallax cs_radius_20 position-relative">
                <img src="/images/Dedicated 2 804x914.jpg" alt="Healthcare Center" />
                <div className="cs_about_badge cs_accent_bg cs_white_color cs_radius_20">
                  <i className="fa-solid fa-award cs_fs_40"></i>
                  <span className="cs_fs_14">Award Winning Healthcare</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_about_content">
                <div className="cs_section_heading_style_1">
                  <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Dedicated to Your Health & Wellbeing</h2>
                </div>
                <p className="cs_about_desc cs_mb_24">Founded with a vision to revolutionize healthcare, our center combines advanced medical technology with human warmth. Our multidisciplinary team of specialists, state-of-the-art infrastructure, and patient-first philosophy have made us a trusted name.</p>
                <div className="cs_about_features cs_mb_24">
                  <div className="cs_about_feature_item">
                    <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>24/7 Emergency & Trauma Care</span>
                  </div>
                  <div className="cs_about_feature_item">
                    <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Advanced Diagnostic Laboratory</span>
                  </div>
                  <div className="cs_about_feature_item">
                    <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Modern Surgical Suites</span>
                  </div>
                  <div className="cs_about_feature_item">
                    <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Digital Health Records</span>
                  </div>
                  <div className="cs_about_feature_item">
                    <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Insurance & Cashless Claims</span>
                  </div>
                  <div className="cs_about_feature_item">
                    <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                    <span>Multilingual Support Staff</span>
                  </div>
                </div>
                <div className="cs_about_quote cs_mb_24">
                  <blockquote>"Healthcare is not just about treating illness — it's about promoting wellness and enriching lives."</blockquote>
                </div>
                <Link to="/about-us" className="cs_btn_style_1 cs_primary_color cs_semibold cs_radius_5">
                  <span>More About Us</span>
                  <span><i className="fa-solid fa-arrow-right"></i></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker Section */}
      <div className="cs_ticker_1 cs_accent_bg">
        <div className="container-fluid overflow-hidden">
          <div className="cs_ticker_in">
            <div className="cs_ticker_content cs_ticker_items_list">
              {tickerItems.map((item, i) => (
                <div key={i} className="cs_ticker_item cs_fs_40 cs_semibold cs_white_color">
                  <img src="/assets/img/icons/star.svg" alt="Star" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="cs_ticker_content cs_ticker_items_list">
              {tickerItems.map((item, i) => (
                <div key={`dup-${i}`} className="cs_ticker_item cs_fs_40 cs_semibold cs_white_color">
                  <img src="/assets/img/icons/star.svg" alt="Star" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="cs_service_section_2 cs_gray_bg">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_50 text-center">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">
              Comprehensive Healthcare <br /> Services for All Ages
            </h2>
          </div>
          <div className="cs_service_toggle_wrapper">
            {services.map((service, i) => (
              <div key={i} className={`cs_service_toggle_item cs_radius_15 cs_mb_12 ${activeService === i ? 'active' : ''}`}>
                <div className="cs_service_toggle_header" onClick={() => setActiveService(activeService === i ? null : i)}>
                  <div className="cs_service_toggle_left">
                    <div className="cs_service_icon cs_center cs_radius_10">
                      <img src={service.icon} alt={service.title} />
                    </div>
                    <h3 className="cs_service_title cs_fs_24 cs_medium mb-0">{service.title}</h3>
                  </div>
                </div>
                <div className="cs_service_toggle_content">
                  <div className="row cs_gap_y_24 align-items-center">
                    <div className="col-lg-6">
                      <p className="cs_service_desc">{service.desc}</p>
                      <ul className="cs_service_features cs_mp_0">
                        {service.features.map((feat, j) => (
                          <li key={j}>
                            <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to={service.slug ? `/service-details?slug=${service.slug}` : '/services'} className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5 cs_mt_24">
                        <span>Learn More</span>
                        <span><i className="fa-solid fa-arrow-right"></i></span>
                      </Link>
                    </div>
                    <div className="col-lg-6">
                      <div className="cs_service_img cs_radius_20">
                        <img src={service.img} alt={service.title} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="cs_pricing_section_2">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_50 text-center">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">
              Affordable Health Checkup <br /> Packages for Your Peace of Mind
            </h2>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={3}
            spaceBetween={24}
            loop={true}
            speed={600}
            pagination={{ clickable: true, el: '.cs_pricing_pagination' }}
            navigation={{ prevEl: '.cs_pricing_prev', nextEl: '.cs_pricing_next' }}
            breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } }}
          >
            {pricingPackages.map((pkg, i) => (
              <SwiperSlide key={i}>
                <div className={`cs_pricing_card cs_radius_20 cs_mb_24 ${pkg.recommended ? 'cs_pricing_card_featured' : ''}`}>
                  {pkg.recommended && <div className="cs_pricing_badge cs_accent_bg cs_white_color cs_radius_50">Most Popular</div>}
                  <div className="cs_pricing_header">
                    <h3 className="cs_pricing_title cs_fs_24 cs_semibold">{pkg.name}</h3>
                    <div className="cs_pricing_price">
                      <span className="cs_pricing_amount cs_fs_60 cs_bold cs_accent_color">{pkg.price}</span>
                      <span className="cs_pricing_period">/package</span>
                    </div>
                  </div>
                  <ul className="cs_pricing_features cs_mp_0">
                    {pkg.features.map((feat, j) => (
                      <li key={j}>
                        <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/appointment" className={`cs_btn_style_1 cs_radius_5 w-100 text-center ${pkg.recommended ? 'cs_accent_bg cs_white_color' : 'cs_primary_color cs_semibold'}`}>
                    <span>Book Package</span>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
            <div className="cs_pagination_wrapper d-flex justify-content-center cs_mt_24">
              <div className="cs_pricing_pagination"></div>
            </div>
          </Swiper>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="cs_technology_section_2 cs_gray_bg">
        <div className="container">
          <div className="row cs_gap_y_30">
            <div className="col-lg-6">
              <div className="cs_technology_content">
                <div className="cs_section_heading_style_1 cs_mb_48">
                  <h2 className="cs_section_title cs_fs_40 cs_bold mb-0">Where Care Meets Excellence</h2>
                </div>
                <div className="cs_accordion_style_2">
                  {[{ title: 'Accredited Facility', desc: 'NABH and JCI accredited hospital with international standards of patient safety and quality care.' }, { title: 'Cutting-Edge Technology', desc: 'Latest medical equipment including 3T MRI, CT scanners, robotic surgery systems, and AI diagnostics.' }, { title: 'Patient-Centric Approach', desc: 'Personalized treatment plans, dedicated care coordinators, and transparent communication at every step.' }, { title: 'Affordable Excellence', desc: 'World-class healthcare at competitive prices with cashless insurance, EMI options, and no hidden costs.' }].map((item, i) => (
                    <div key={i} className={`cs_accordion_item cs_mb_12 ${activeAccordion === i ? 'active' : ''}`}>
                      <div className="cs_accordion_header cs_radius_15" onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}>
                        <div className="cs_accordion_left">
                          <span className="cs_accordion_number cs_accent_color cs_bold">0{i + 1}</span>
                          <h4 className="cs_accordion_title cs_fs_20 cs_semibold mb-0">{item.title}</h4>
                        </div>
                        <div className="cs_accordion_icon">
                          <i className={`fa-solid fa-chevron-${activeAccordion === i ? 'up' : 'down'}`}></i>
                        </div>
                      </div>
                      <div className="cs_accordion_content">
                        <p className="mb-0">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_technology_img cs_parallax cs_radius_20 position-relative">
                <img src="/images/Care Meets 3 636x777.jpg" alt="Healthcare Facility" />
                <div className="cs_technology_badges">
                  <div className="cs_facility_badge cs_accent_bg cs_white_color cs_radius_15">
                    <i className="fa-solid fa-hospital cs_fs_24"></i>
                    <span className="cs_fs_14">NABH Accredited</span>
                  </div>
                  <div className="cs_facility_badge cs_white_bg cs_radius_15">
                    <i className="fa-solid fa-shield-halved cs_fs_24 cs_accent_color"></i>
                    <span className="cs_fs_14">JCI Certified</span>
                  </div>
                  <div className="cs_facility_badge cs_accent_bg cs_white_color cs_radius_15">
                    <i className="fa-solid fa-certificate cs_fs_24"></i>
                    <span className="cs_fs_14">ISO 9001:2015</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="cs_process_section_2">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_50 text-center">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">
              Simple Steps to Your <br /> Healthcare Journey
            </h2>
          </div>
          <div className="row cs_gap_y_30">
            {[{ step: '01', title: 'Book Appointment', desc: 'Schedule your visit online or by phone. Choose your preferred doctor and time slot.', icon: 'fa-calendar-check' }, { step: '02', title: 'Consultation', desc: 'Meet with our expert physicians who will conduct thorough examination and diagnosis.', icon: 'fa-user-doctor' }, { step: '03', title: 'Get Treated', desc: 'Receive personalized treatment plan with world-class care and follow-up support.', icon: 'fa-heart-pulse' }].map((item, i) => (
              <div key={i} className="col-lg-4">
                <div className="cs_process_card cs_radius_20 text-center cs_mb_24">
                  <div className="cs_process_icon cs_accent_bg cs_white_color cs_center cs_radius_50 cs_mb_24">
                    <i className={`fa-solid ${item.icon} cs_fs_24`}></i>
                  </div>
                  <div className="cs_process_step cs_accent_color cs_fs_14 cs_semibold">STEP {item.step}</div>
                  <h3 className="cs_process_title cs_fs_24 cs_semibold cs_mb_12">{item.title}</h3>
                  <p className="cs_process_desc mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="cs_team_section_2 cs_gray_bg">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_48 text-center">
            <h2 className="cs_section_title cs_fs_40 cs_bold mb-0">
              Meet Our Expert <br /> Healthcare Professionals
            </h2>
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
                      <Link to="/appointment" className="cs_btn_style_1 cs_white_color cs_semibold cs_radius_5">
                        <img src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                        <span>Appointment</span>
                      </Link>
                    </div>
                  </div>
                  <div className="cs_team_info">
                    <h3 className="cs_team_title cs_fs_20 cs_bold cs_mb_12">
                      <Link to="/doctor-details">{doc.name} <span>({doc.credentials})</span></Link>
                    </h3>
                    <p className="cs_team_subtitle mb-0">{doc.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="cs_testimonial_section_2">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_48 text-center">
            <h2 className="cs_section_title cs_fs_40 cs_bold mb-0">
              What Our Patients Say <br /> About Our Healthcare Center
            </h2>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            loop={true}
            speed={600}
            pagination={{ clickable: true, el: '.cs_testimonial_pagination' }}
            navigation={{ prevEl: '.cs_testimonial_prev', nextEl: '.cs_testimonial_next' }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="cs_testimonial_style_2 cs_radius_20">
                  <div className="row align-items-center cs_gap_y_30">
                    <div className="col-lg-4">
                      <div className="cs_testimonial_img cs_radius_20">
                        <img src={t.avatar} alt={t.author} />
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="cs_testimonial_content">
                        <span className="cs_quote_icon">
                          <img src="/assets/img/quote.svg" alt="Quote" />
                        </span>
                        <blockquote>"{t.quote}"</blockquote>
                        <div className="cs_testimonial_author">
                          <div className="cs_author_img">
                            <img src={t.avatar} alt={t.author} className="cs_radius_50" />
                          </div>
                          <div className="cs_author_info">
                            <h3 className="cs_author_name cs_fs_20 cs_bold cs_mb_6">{t.author}</h3>
                            <p className="cs_author_designation mb-0">{t.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="cs_pagination_wrapper d-flex justify-content-center cs_mt_24">
              <div className="cs_testimonial_pagination"></div>
            </div>
          </Swiper>
        </div>
      </section>

      {/* Scroll to Top */}
      <button type="button" id="scrollToTopBtn" className="cs_scrollup_btn" onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </main>
  );
};

export default HomeV2;
