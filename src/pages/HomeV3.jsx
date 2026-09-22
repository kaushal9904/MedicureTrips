import { useEffect, useRef, useState } from 'react';
import Link from '../components/TrackedLink';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useWeb3Form } from '../hooks/useWeb3Form';

const HomeV3 = () => {
  const odometerRefs = useRef([]);
  const [activeTab, setActiveTab] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const appointmentForm = useWeb3Form('Child Care Page — Appointment Form');

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
      if (btn) btn.classList.toggle('cs_show', window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const tickerItems = ['Every Sniffle Monitored', 'Every Smile Celebrated', 'Gentle Care', 'Happy Kids', 'Expert Pediatricians', 'Safe Environment'];

  const partners = [
    { name: 'Partner 1', img: '/assets/img/partner_logo_1.svg' },
    { name: 'Partner 2', img: '/assets/img/partner_logo_2.svg' },
    { name: 'Partner 3', img: '/assets/img/partner_logo_3.svg' },
    { name: 'Partner 4', img: '/assets/img/partner_logo_4.svg' },
    { name: 'Partner 5', img: '/assets/img/partner_logo_5.svg' },
    { name: 'Partner 6', img: '/assets/img/partner_logo_6.svg' },
  ];

  const tabs = [
    { title: 'Sick Child Care', icon: 'fa-thermometer-half', desc: 'Expert care when your child is feeling unwell. Our pediatric specialists provide compassionate treatment for illnesses, infections, and acute conditions.', features: ['Same-day sick visits', 'On-site lab testing', 'Prescription management', 'Parent education'], img: '/images/Sick Child Care 1321x523.jpg' },
    { title: 'Well Child Daycare', icon: 'fa-sun', desc: 'Safe, nurturing environment for your child during the day with structured activities, meals, and health monitoring by certified staff.', features: ['Licensed caregivers', 'Age-appropriate activities', 'Healthy meals provided', 'Health monitoring'], img: '/images/Well Child Daycare 1321x523.jpg' },
    { title: 'Post-Hospital Transition', icon: 'fa-house-medical', desc: 'Smooth transition from hospital to home with specialized care plans, medication management, and follow-up appointments.', features: ['Care coordination', 'Medication management', 'Physical therapy', 'Family support'], img: '/images/Post-Hospital Transition  1321x523.jpg' },
    { title: 'Emergency Needs', icon: 'fa-truck-medical', desc: 'Round-the-clock emergency care for children with rapid response teams and child-friendly emergency facilities.', features: ['24/7 availability', 'Rapid response team', 'Child-friendly ER', 'Pediatric ICU'], img: '/images/Emergency Needs 1321x523.jpg' },
  ];

  const features = [
    { title: 'Child-Friendly Environment', desc: 'Colorful, welcoming spaces designed to make children feel comfortable and at ease during their visit.', icon: 'fa-child', flipFront: 'Environment', flipBack: 'Our facilities are designed with children in mind — bright colors, fun decorations, and comfortable spaces that reduce anxiety and promote healing.' },
    { title: 'Board-Certified Pediatricians', desc: 'Our team of pediatric specialists has extensive training in caring for infants, children, and adolescents.', icon: 'fa-user-doctor', flipFront: 'Pediatricians', flipBack: 'Every doctor on our team is board-certified with specialized training in pediatric medicine, ensuring the highest standard of care for your child.' },
    { title: 'Advanced Pediatric Technology', desc: 'State-of-the-art medical equipment specifically designed for pediatric diagnostics and treatment.', icon: 'fa-microscope', flipFront: 'Technology', flipBack: 'We use the latest pediatric medical technology, from advanced imaging systems to minimally invasive surgical tools, ensuring accurate diagnoses and effective treatments.' },
    { title: 'Family-Centered Care', desc: 'We involve parents in every step of the care process, ensuring you are informed and comfortable.', icon: 'fa-people-roof', flipFront: 'Family Care', flipBack: 'We believe parents are essential partners in their child\'s healthcare. Our approach keeps you informed, involved, and supported throughout every visit.' },
    { title: 'Comprehensive Wellness Programs', desc: 'From vaccination schedules to developmental screenings, we offer complete wellness programs.', icon: 'fa-heart-pulse', flipFront: 'Wellness', flipBack: 'Our wellness programs include vaccination schedules, growth monitoring, developmental screenings, nutritional guidance, and preventive health education.' },
  ];

  const team = [
    { name: 'Dr. Emily Carter', credentials: 'MD Pediatrics', designation: 'Pediatrics', specialty: 'Chief Pediatrician & Child Specialist', img: '/images/DR avatar 468x525.jpg' },
    { name: 'Dr. Michael Torres', credentials: 'DO, FAAP', designation: 'Neonatology', specialty: 'Neonatal & Infant Care Specialist', img: '/images/DR avatar 468x525 2_.jpg' },
    { name: 'Dr. Sarah Kim', credentials: 'MD', designation: 'Pediatric Surgery', specialty: 'Pediatric Surgeon & Specialist', img: '/images/DR avatar 468x525 3_.jpg' },
    { name: 'Dr. David Chen', credentials: 'MD, PhD', designation: 'Child Psychology', specialty: 'Child Psychologist & Therapist', img: '/images/DR avatar 468x525 4.jpg' },
  ];

  const admissionSteps = [
    { step: '01', title: 'Initial Consultation', desc: 'Meet with our care team to discuss your child\'s needs and our services.', icon: 'fa-comments' },
    { step: '02', title: 'Health Assessment', desc: 'Complete health evaluation to create a personalized care plan.', icon: 'fa-clipboard-list' },
    { step: '03', title: 'Registration', desc: 'Complete enrollment paperwork and set up your child\'s profile.', icon: 'fa-file-signature' },
    { step: '04', title: 'Welcome Day', desc: 'First day orientation and meeting with assigned caregivers.', icon: 'fa-hand-holding-heart' },
  ];

  const pricingPlans = [
    { name: 'Full-Day Care', price: '$1,200', period: '/month', features: ['8-hour daily care', 'All meals included', 'Structured activities', 'Health monitoring', 'Parent app access', 'Emergency support'], recommended: false },
    { name: 'Half-Day Care', price: '$750', period: '/month', features: ['4-hour daily care', 'Snacks included', 'Educational activities', 'Health monitoring', 'Parent app access', 'Flexible scheduling'], recommended: true },
  ];

  const faqs = [
    { question: 'What age group do you accept?', answer: 'We accept children from 6 months to 12 years of age. Our programs are tailored to different developmental stages with age-appropriate activities and care.' },
    { question: 'What are your operating hours?', answer: 'Our standard hours are Monday to Friday, 7:00 AM to 6:00 PM. We also offer extended hours and weekend care for emergencies. Drop-off and pick-up times are flexible.' },
    { question: 'How do you handle medical emergencies?', answer: 'We have trained medical staff on-site at all times. In case of emergency, we follow strict protocols including immediate parent notification, on-site first aid, and coordination with local hospitals if needed.' },
    { question: 'What qualifications do your staff have?', answer: 'All our caregivers are certified in pediatric first aid and CPR. Our medical staff includes board-certified pediatricians and licensed nurses with specialized pediatric training.' },
    { question: 'Can I visit my child during the day?', answer: 'Yes, parents are welcome to visit during operating hours. We also provide real-time updates through our parent app, including photos, activity reports, and health updates throughout the day.' },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="cs_hero_style_3 position-relative">
        <div className="cs_hero_parallax_bg cs_bg_filed" style={{ backgroundImage: "url('/assets/img/hero_bg_v3.webp')" }}></div>
        <div className="container">
          <div className="row align-items-center cs_gap_y_30">
            <div className="col-lg-6">
              <div className="cs_hero_content">
                <h1 className="cs_hero_title cs_fs_96 cs_bold">Healing Little Bodies Growing Big Dreams</h1>
                <p className="cs_hero_desc cs_fs_18">Compassionate pediatric care in a warm, child-friendly environment. Your child's health and happiness are our top priorities.</p>
                <div className="cs_hero_rating cs_mb_24">
                  <div className="cs_rating" data-rating="5">
                    <div className="cs_rating_percentage"></div>
                  </div>
                  <span className="cs_rating_text">Rated 4.9/5 by 2,500+ Parents</span>
                </div>
                <div className="cs_hero_btns">
                  <Link to="/appointment" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5">
                    <span><i className="fa-solid fa-calendar-check"></i></span>
                    <span>Book Appointment</span>
                  </Link>
                  <Link to="/about-us" className="cs_btn_style_2 cs_primary_color cs_semibold cs_radius_5">
                    <span>Our Services</span>
                    <span><i className="fa-solid fa-arrow-right"></i></span>
                  </Link>
                </div>
                <div className="cs_hero_users cs_mt_24">
                  <div className="cs_hero_avatars">
                    <div className="cs_hero_avatar">
                      <img src="/assets/img/avatar_1.webp" alt="Parent" />
                    </div>
                    <div className="cs_hero_avatar">
                      <img src="/assets/img/avatar_2.webp" alt="Parent" />
                    </div>
                    <div className="cs_hero_avatar">
                      <img src="/assets/img/avatar_3.webp" alt="Parent" />
                    </div>
                  </div>
                  <p className="cs_trusted_text cs_fs_14 mb-0">Trusted by 5,000+ Happy Families</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_hero_img cs_radius_20">
                <img src="/images/child care 1 527x353.jpg" alt="Happy Children" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Slider — disabled per request, keep markup for future re-enable
      <section className="cs_partners_section cs_gray_bg">
        <div className="container">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={6}
            spaceBetween={30}
            loop={true}
            speed={3000}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            freeMode={true}
            breakpoints={{ 0: { slidesPerView: 2 }, 576: { slidesPerView: 3 }, 992: { slidesPerView: 6 } }}
          >
            {partners.map((partner, i) => (
              <SwiperSlide key={i}>
                <div className="cs_partner_item">
                  <img src={partner.img} alt={partner.name} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      */}

      {/* About Section */}
      <section className="cs_about_style_3">
        <div className="container">
          <div className="row cs_gap_y_30 align-items-center">
            <div className="col-lg-6">
              <div className="cs_about_img cs_parallax cs_radius_20 position-relative">
                <img src="/images/Where Children 2 1140x768_.jpg" alt="Child Care" />
                <div className="cs_about_hours cs_white_bg cs_radius_20">
                  <h4 className="cs_fs_20 cs_semibold cs_mb_12">Opening Hours</h4>
                  <div className="cs_hours_item">
                    <span>Monday - Friday</span>
                    <span className="cs_accent_color">7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="cs_hours_item">
                    <span>Saturday</span>
                    <span className="cs_accent_color">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="cs_hours_item">
                    <span>Sunday</span>
                    <span className="cs_accent_color">Emergency Only</span>
                  </div>
                </div>
                <div className="cs_funfact_style_1">
                  <div className="cs_funfact_item">
                    <div className="cs_funfact_number cs_fs_60 cs_bold cs_white_color">
                      <span className="odometer" ref={(el) => { if (el) odometerRefs.current[0] = el; }} data-count-to="5000"></span>+
                    </div>
                    <div className="cs_funfact_title cs_white_color">Happy Children</div>
                  </div>
                  <div className="cs_funfact_item">
                    <div className="cs_funfact_number cs_fs_60 cs_bold cs_white_color">
                      <span className="odometer" ref={(el) => { if (el) odometerRefs.current[1] = el; }} data-count-to="50"></span>+
                    </div>
                    <div className="cs_funfact_title cs_white_color">Expert Staff</div>
                  </div>
                  <div className="cs_funfact_item">
                    <div className="cs_funfact_number cs_fs_60 cs_bold cs_white_color">
                      <span className="odometer" ref={(el) => { if (el) odometerRefs.current[2] = el; }} data-count-to="15"></span>+
                    </div>
                    <div className="cs_funfact_title cs_white_color">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_about_content">
                <div className="cs_section_heading_style_1">
                  <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Where Children Come First</h2>
                </div>
                <p className="cs_about_desc cs_mb_24">Our child care center provides a safe, nurturing environment where children can grow, learn, and thrive. With experienced pediatric specialists and modern facilities, we ensure every child receives the best care possible.</p>
                <Link to="/about-us" className="cs_btn_style_1 cs_primary_color cs_semibold cs_radius_5">
                  <span>Learn More About Us</span>
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

      {/* Services Tab Section */}
      <section className="cs_service_section_3 cs_gray_bg">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_50 text-center">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">
              Comprehensive Child Care <br /> Services for Every Need
            </h2>
          </div>
          <div className="cs_service_tabs">
            <div className="cs_service_tab_nav cs_mb_40">
              {tabs.map((tab, i) => (
                <button key={i} className={`cs_service_tab_btn cs_radius_10 ${activeTab === i ? 'active' : ''}`} onClick={() => setActiveTab(i)}>
                  <i className={`fa-solid ${tab.icon}`}></i>
                  <span>{tab.title}</span>
                </button>
              ))}
            </div>
            <div className="cs_service_tab_content">
              {tabs.map((tab, i) => (
                <div key={i} className={`cs_service_tab_pane ${activeTab === i ? 'active' : ''}`}>
                  <div className="row cs_gap_y_30 align-items-center">
                    <div className="col-lg-6">
                      <h3 className="cs_fs_32 cs_semibold cs_mb_16">{tab.title}</h3>
                      <p className="cs_mb_24">{tab.desc}</p>
                      <ul className="cs_service_features cs_mp_0 cs_mb_24">
                        {tab.features.map((feat, j) => (
                          <li key={j}>
                            <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to="/appointment" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5">
                        <span>Book Now</span>
                        <span><i className="fa-solid fa-arrow-right"></i></span>
                      </Link>
                    </div>
                    <div className="col-lg-6">
                      <div className="cs_service_tab_img cs_radius_20">
                        <img src={tab.img} alt={tab.title} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Flip Cards */}
      <section className="cs_features_section_3">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_50 text-center">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">
              What Makes Our Child <br /> Care Center Special
            </h2>
          </div>
          <div className="row cs_gap_y_24">
            {features.map((feat, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="cs_flip_card cs_radius_20">
                  <div className="cs_flip_card_inner">
                    <div className="cs_flip_card_front cs_accent_bg cs_white_color cs_center">
                      <i className={`fa-solid ${feat.icon} cs_fs_48 cs_mb_16`}></i>
                      <h4 className="cs_fs_24 cs_semibold">{feat.flipFront}</h4>
                    </div>
                    <div className="cs_flip_card_back cs_white_bg">
                      <i className={`fa-solid ${feat.icon} cs_fs_32 cs_accent_color cs_mb_12`}></i>
                      <h4 className="cs_fs_20 cs_semibold cs_mb_12">{feat.title}</h4>
                      <p className="cs_fs_14 mb-0">{feat.flipBack}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cs_cta_section_3">
        <div className="container">
          <div className="cs_cta_card cs_accent_bg cs_radius_20">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h2 className="cs_fs_40 cs_bold cs_white_color cs_mb_12">First Month of Medical Daycare</h2>
                <p className="cs_fs_18 cs_white_color cs_mb_24">Give your child the best start with our specialized medical daycare program. Limited time offer for new enrollments.</p>
              </div>
              <div className="col-lg-4 text-lg-end">
                <div className="cs_cta_badge cs_white_bg cs_radius_20">
                  <span className="cs_cta_discount cs_fs_60 cs_bold cs_accent_color">20%</span>
                  <span className="cs_cta_text cs_fs_20 cs_semibold">OFF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="cs_team_section_3 cs_gray_bg">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_48 text-center">
            <h2 className="cs_section_title cs_fs_40 cs_bold mb-0">
              Meet Our Caring <br /> Pediatric Specialists
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

      {/* Admission Process */}
      <section className="cs_admission_section_3">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_50 text-center">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">
              Simple Steps to <br /> Enroll Your Child
            </h2>
          </div>
          <div className="row cs_gap_y_30">
            {admissionSteps.map((step, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="cs_process_card cs_radius_20 text-center cs_mb_24">
                  <div className="cs_process_icon cs_accent_bg cs_white_color cs_center cs_radius_50 cs_mb_24">
                    <i className={`fa-solid ${step.icon} cs_fs_24`}></i>
                  </div>
                  <div className="cs_process_step cs_accent_color cs_fs_14 cs_semibold">STEP {step.step}</div>
                  <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_12">{step.title}</h3>
                  <p className="cs_process_desc mb-0">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="cs_pricing_section_3 cs_gray_bg">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_50 text-center">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">
              Affordable Child Care <br /> Plans for Every Family
            </h2>
          </div>
          <div className="row cs_gap_y_24 justify-content-center">
            {pricingPlans.map((plan, i) => (
              <div key={i} className="col-lg-5">
                <div className={`cs_pricing_card cs_radius_20 ${plan.recommended ? 'cs_pricing_card_featured' : ''}`}>
                  {plan.recommended && <div className="cs_pricing_badge cs_accent_bg cs_white_color cs_radius_50">Recommended</div>}
                  <div className="cs_pricing_header">
                    <h3 className="cs_pricing_title cs_fs_24 cs_semibold">{plan.name}</h3>
                    <div className="cs_pricing_price">
                      <span className="cs_pricing_amount cs_fs_60 cs_bold cs_accent_color">{plan.price}</span>
                      <span className="cs_pricing_period">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="cs_pricing_features cs_mp_0">
                    {plan.features.map((feat, j) => (
                      <li key={j}>
                        <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/appointment" className={`cs_radius_5 w-100 text-center ${plan.recommended ? 'cs_btn_style_1 cs_accent_bg cs_white_color' : 'cs_btn_style_2 cs_type_1 cs_primary_color cs_semibold'}`}>
                    <span>Enroll Now</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="cs_appointment_section_3">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_50 text-center">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">
              Schedule Your Child's <br /> Visit Today
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="cs_appointment_form_wrapper cs_white_bg cs_radius_20">
                <form className="cs_appointment_form_1 row cs_gap_y_24" onSubmit={appointmentForm.handleSubmit}>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="parentName">Parent's Name</label>
                      <input type="text" id="parentName" name="parent_name" className="cs_form_field" placeholder="Enter parent's name" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="childName">Child's Name</label>
                      <input type="text" id="childName" name="child_name" className="cs_form_field" placeholder="Enter child's name" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="text" id="phone" name="phone" className="cs_form_field" placeholder="Enter phone number" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" name="email" className="cs_form_field" placeholder="Enter email address" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="childAge">Child's Age</label>
                      <select className="cs_form_field cs_choice" id="childAge" name="child_age" defaultValue="">
                        <option disabled value="">Select age</option>
                        <option>6-12 months</option>
                        <option>1-2 years</option>
                        <option>3-5 years</option>
                        <option>6-8 years</option>
                        <option>9-12 years</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="service">Service Type</label>
                      <select className="cs_form_field cs_choice" id="service" name="service" defaultValue="">
                        <option disabled value="">Select service</option>
                        <option>Sick Child Care</option>
                        <option>Well Child Daycare</option>
                        <option>Post-Hospital Transition</option>
                        <option>Emergency Care</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5 position-relative">
                      <label htmlFor="date">Preferred Date</label>
                      <input type="text" id="date" name="date" className="cs_form_field" placeholder="Select date" />
                      <img src="/assets/img/icons/calendar.svg" alt="Calendar" className="cs_date_icon position-absolute" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="time">Preferred Time</label>
                      <input type="text" id="time" name="time" className="cs_form_field" placeholder="Select time" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="message">Additional Notes</label>
                      <textarea id="message" name="message" rows="3" className="cs_form_field" placeholder="Any special requirements or concerns..."></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="cs_btn_style_2 cs_primary_color cs_semibold cs_radius_5" disabled={appointmentForm.status === 'sending'}>
                      <span>{appointmentForm.status === 'sending' ? 'Sending...' : 'Book Appointment'}</span>
                      <img src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                    </button>
                    {appointmentForm.status === 'success' && <p className="cs_fs_14 mb-0 cs_mt_12" style={{ color: '#1a7f37' }}>Thanks! We'll contact you shortly.</p>}
                    {appointmentForm.status === 'error' && <p className="cs_fs_14 mb-0 cs_mt_12" style={{ color: '#c0392b' }}>{appointmentForm.errorMessage || 'Something went wrong. Please try again.'}</p>}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="cs_faq_section_3 cs_gray_bg">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_50 text-center">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">
              Frequently Asked Questions <br /> About Our Child Care
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="cs_accordion_style_3">
                {faqs.map((faq, i) => (
                  <div key={i} className={`cs_accordion_item cs_mb_12 ${activeFaq === i ? 'active' : ''}`}>
                    <div className="cs_accordion_header cs_white_bg cs_radius_15" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                      <h4 className="cs_accordion_title cs_fs_20 cs_semibold mb-0">{faq.question}</h4>
                      <div className="cs_accordion_icon">
                        <i className={`fa-solid fa-chevron-${activeFaq === i ? 'up' : 'down'}`}></i>
                      </div>
                    </div>
                    <div className="cs_accordion_content">
                      <p className="mb-0">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top */}
      <button type="button" id="scrollToTopBtn" className="cs_scrollup_btn" onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </main>
  );
};

export default HomeV3;
