import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HomeV4 = () => {
  const odometerRefs = useRef([]);
  const [activeTab, setActiveTab] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const btn = document.getElementById('scrollToTopBtn');
      if (btn) btn.classList.toggle('cs_show', window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const features = [
    { title: 'Modern Technology', desc: 'Latest dental equipment including digital X-rays, intraoral cameras, and laser dentistry for precise, comfortable treatments.', icon: 'fa-microscope' },
    { title: 'Gentle Care', desc: 'Sedation options and gentle techniques ensure your dental experience is comfortable and anxiety-free.', icon: 'fa-heart' },
    { title: 'Expert Dentists', desc: 'Board-certified dental professionals with specialized training in cosmetic, restorative, and surgical dentistry.', icon: 'fa-user-doctor' },
    { title: 'Affordable Plans', desc: 'Flexible payment options, insurance acceptance, and transparent pricing for all dental procedures.', icon: 'fa-wallet' },
  ];

  const services = [
    { title: 'General Dentistry', desc: 'Comprehensive dental exams, cleanings, fillings, and preventive care to maintain your oral health.', icon: 'fa-tooth', features: ['Routine Exams & Cleanings', 'Dental Fillings', 'Gum Disease Treatment', 'Root Canal Therapy'], img: '/images/General Dentistry 1068x300.jpg' },
    { title: 'Cosmetic Dentistry', desc: 'Transform your smile with professional whitening, veneers, bonding, and complete smile makeovers.', icon: 'fa-smile', features: ['Teeth Whitening', 'Porcelain Veneers', 'Dental Bonding', 'Smile Design'], img: '/images/Cosmetic Dentistry 1068x300.jpg' },
    { title: 'Orthodontics', desc: 'Straighten teeth with traditional braces, clear aligners, and invisible braces for a perfect smile.', icon: 'fa-teeth', features: ['Traditional Braces', 'Clear Aligners', 'Retainers', 'Jaw Correction'], img: '/images/Orthodontics 1068x300.jpg' },
    { title: 'Oral Surgery', desc: 'Expert surgical care including extractions, implants, and jaw surgery with advanced techniques.', icon: 'fa-stethoscope', features: ['Tooth Extraction', 'Dental Implants', 'Bone Grafting', 'TMJ Treatment'], img: '/images/Oral Surgery 1068x300.jpg' },
    { title: 'Pediatric Dentistry', desc: 'Specialized dental care for children in a fun, friendly environment to build positive oral habits.', icon: 'fa-child', features: ['Child-Friendly Environment', 'Preventive Treatments', 'Sealants & Fluoride', 'Early Orthodontic Assessment'], img: '/images/Pediatric Dentistry 1068x300.jpg' },
    { title: 'Emergency Care', desc: 'Immediate dental emergency services for broken teeth, severe pain, and urgent oral health issues.', icon: 'fa-truck-medical', features: ['Same-Day Appointments', 'Emergency Extractions', 'Pain Management', 'Temporary Repairs'], img: '/images/Emergency Care 1068x300.jpg' },
  ];

  const experts = [
    { name: 'Dr. Jessica Williams', credentials: 'DDS, FAGD', specialty: 'General & Cosmetic Dentistry', desc: 'With over 15 years of experience, Dr. Williams specializes in smile transformations and restorative dentistry.', img: '/assets/img/team_img_9.webp' },
    { name: 'Dr. Robert Anderson', credentials: 'DMD, MS', specialty: 'Orthodontics & Aligners', desc: 'Board-certified orthodontist specializing in Invisalign, clear aligners, and complex bite corrections.', img: '/assets/img/team_img_10.webp' },
    { name: 'Dr. Maria Garcia', credentials: 'DDS, DABOI', specialty: 'Oral & Maxillofacial Surgery', desc: 'Expert in dental implants, wisdom tooth extraction, and reconstructive jaw surgery.', img: '/assets/img/team_img_11.webp' },
    { name: 'Dr. David Park', credentials: 'DDS, FAGD', specialty: 'Pediatric Dentistry', desc: 'Dedicated to making dental visits fun and comfortable for children of all ages.', img: '/assets/img/team_img_12.webp' },
  ];

  const pricingPlans = [
    { name: 'Basic Plan', price: '$39', period: '/month', desc: 'Essential dental care for individuals', features: ['2 Cleanings per year', '1 Exam per visit', 'Digital X-rays', 'Emergency Consultations', '10% Off Procedures'], recommended: false },
    { name: 'Family Plan', price: '$59', period: '/month', desc: 'Comprehensive care for the whole family', features: ['4 Cleanings per year', 'Unlimited Exams', 'Digital X-rays', 'Priority Scheduling', '20% Off Procedures', 'Free Whitening Kit'], recommended: true },
    { name: 'Premium Plan', price: '$99', period: '/month', desc: 'Maximum coverage with premium benefits', features: ['Unlimited Cleanings', 'Unlimited Exams', 'All X-rays Included', 'Same-Day Appointments', '30% Off All Procedures', 'Free Whitening Kit', 'Orthodontic Discount'], recommended: false },
  ];

  const testimonials = [
    { quote: 'The dental team completely transformed my smile. The veneers look so natural and the entire process was comfortable and professional. I can\'t stop smiling!', author: 'Jennifer Adams', role: 'Cosmetic Dentistry Patient', avatar: '/images/Dental Bottom last 696x696.jpg' },
    { quote: 'My kids actually look forward to their dental visits now. The pediatric team is amazing with children and the office is so welcoming and fun.', author: 'Michael Brown', role: 'Parent of 3', avatar: '/images/Dental Bottom last 696x696.jpg' },
    { quote: 'After years of hiding my teeth, I finally got the smile I always wanted. The clear aligners were practically invisible and the results are incredible.', author: 'Sarah Wilson', role: 'Orthodontics Patient', avatar: '/images/Dental Bottom last 696x696.jpg' },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="cs_hero_style_4 position-relative">
        <div className="cs_hero_parallax_bg cs_bg_filed" style={{ backgroundImage: "url('/assets/img/hero_bg_v4.webp')" }}></div>
        <div className="container">
          <div className="row align-items-center cs_gap_y_30">
            <div className="col-lg-6">
              <div className="cs_hero_content">
                <div className="cs_hero_subtitle cs_accent_color cs_fs_14">// DENTAL CARE CENTER</div>
                <h1 className="cs_hero_title cs_fs_96 cs_bold">Advanced Dental Care at Medicure Trip</h1>
                <p className="cs_hero_desc cs_fs_18">Your trusted partner in comprehensive dental health. From routine cleanings to complete smile makeovers, we deliver excellence in dental care.</p>
                <div className="cs_hero_btns">
                  <Link to="/appointment.html" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5">
                    <span><i className="fa-solid fa-calendar-check"></i></span>
                    <span>Book Appointment</span>
                  </Link>
                  <Link to="/services.html" className="cs_btn_style_2 cs_primary_color cs_semibold cs_radius_5">
                    <span>Our Services</span>
                    <span><i className="fa-solid fa-arrow-right"></i></span>
                  </Link>
                </div>
                {/* Hero patient avatars — disabled per request, keep markup for future re-enable
                <div className="cs_hero_avatars cs_mt_24">
                  <div className="cs_avatar_wrapper">
                    <div className="cs_avatar cs_center cs_radius_50">
                      <img src="/images/Dental 2 400x400.jpg" alt="Patient" />
                    </div>
                    <div className="cs_avatar cs_center cs_radius_50">
                      <img src="/images/Dental 2 400x400.jpg" alt="Patient" />
                    </div>
                    <div className="cs_avatar cs_center cs_radius_50">
                      <img src="/images/Dental 2 400x400.jpg" alt="Patient" />
                    </div>
                  </div>
                  <p className="cs_trusted_text cs_fs_14 mb-0">Trusted by 10,000+ Happy Patients</p>
                </div>
                */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_hero_img cs_radius_20">
                <img src="/images/dental care 1 925x720.jpg" alt="Dental Care" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Side Header / Off-canvas */}
      <div className={`cs_side_header ${sidebarOpen ? 'active' : ''}`}>
        <button className="cs_side_header_toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <i className={`fa-solid fa-${sidebarOpen ? 'xmark' : 'bars'}`}></i>
        </button>
        <div className="cs_side_header_content">
          <h3 className="cs_fs_24 cs_semibold cs_mb_24">Quick Links</h3>
          <ul className="cs_side_nav cs_mp_0">
            <li><Link to="/" onClick={() => setSidebarOpen(false)}><i className="fa-solid fa-home"></i> Home</Link></li>
            <li><Link to="/about-us.html" onClick={() => setSidebarOpen(false)}><i className="fa-solid fa-user"></i> About Us</Link></li>
            <li><Link to="/services.html" onClick={() => setSidebarOpen(false)}><i className="fa-solid fa-tooth"></i> Services</Link></li>
            <li><Link to="/doctors.html" onClick={() => setSidebarOpen(false)}><i className="fa-solid fa-user-doctor"></i> Our Dentists</Link></li>
            <li><Link to="/appointment.html" onClick={() => setSidebarOpen(false)}><i className="fa-solid fa-calendar"></i> Appointment</Link></li>
            <li><Link to="/contact-us.html" onClick={() => setSidebarOpen(false)}><i className="fa-solid fa-phone"></i> Contact Us</Link></li>
          </ul>
          <div className="cs_side_header_contact cs_mt_24">
            <p className="cs_fs_14"><i className="fa-solid fa-phone cs_accent_color"></i> 9958192249</p>
            <p className="cs_fs_14"><i className="fa-solid fa-envelope cs_accent_color"></i> shivammehra20244@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="cs_feature_section_4 cs_gray_bg">
        <div className="container">
          <div className="row cs_gap_y_24">
            {features.map((feat, i) => (
              <div key={i} className="col-xl-3 col-md-6">
                <div className="cs_feature_card_4 cs_radius_20 cs_white_bg text-center">
                  <div className="cs_feature_icon cs_accent_bg cs_white_color cs_center cs_radius_50 cs_mb_24">
                    <i className={`fa-solid ${feat.icon} cs_fs_24`}></i>
                  </div>
                  <h3 className="cs_feature_title cs_fs_20 cs_semibold cs_mb_12">{feat.title}</h3>
                  <p className="cs_feature_desc mb-0">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="cs_about_style_4">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_50 text-center">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14">// ABOUT US</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">
              Your Trusted Dental <br /> Care Partner
            </h2>
          </div>
          <div className="row cs_gap_y_30 align-items-center cs_mb_50">
            <div className="col-lg-6">
              <div className="cs_about_img cs_parallax cs_radius_20">
                <img src="/images/Dental 2 400x400.jpg" alt="Dental Care" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_about_content">
                <p className="cs_about_desc cs_mb_24">With state-of-the-art facilities and a team of internationally trained dental professionals, we provide comprehensive oral healthcare. Our patient-first approach ensures comfortable, effective treatments tailored to your unique needs.</p>
                <div className="cs_about_features cs_mb_24">
                  <div className="cs_about_feature_item">
                    <i className="fa-solid fa-check cs_accent_color"></i>
                    <span>Advanced Digital Diagnostics</span>
                  </div>
                  <div className="cs_about_feature_item">
                    <i className="fa-solid fa-check cs_accent_color"></i>
                    <span>Sterilized & Safe Environment</span>
                  </div>
                  <div className="cs_about_feature_item">
                    <i className="fa-solid fa-check cs_accent_color"></i>
                    <span>Personalized Treatment Plans</span>
                  </div>
                  <div className="cs_about_feature_item">
                    <i className="fa-solid fa-check cs_accent_color"></i>
                    <span>Emergency Dental Services</span>
                  </div>
                </div>
                <Link to="/about-us.html" className="cs_btn_style_1 cs_primary_color cs_semibold cs_radius_5">
                  <span>Learn More</span>
                  <span><i className="fa-solid fa-arrow-right"></i></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row cs_gap_y_30 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="cs_about_img cs_parallax cs_radius_20">
                <img src="/images/dental 971x423.jpg" alt="Dental Technology" />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="cs_about_content">
                <div className="cs_about_quote cs_mb_24">
                  <blockquote>"A healthy smile is a window to overall wellness. We're dedicated to helping you achieve and maintain optimal oral health."</blockquote>
                </div>
                <div className="cs_about_badge cs_accent_bg cs_white_color cs_radius_20 cs_inline-flex cs_p_16 cs_gap_12">
                  <i className="fa-solid fa-award cs_fs_32"></i>
                  <div>
                    <span className="cs_fs_14 cs_bold">Recognized as</span>
                    <span className="cs_fs_14">Best Dental Clinic 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Sticky Scrolling */}
      <section className="cs_service_section_4 cs_gray_bg">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_50 text-center">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14">// SERVICES</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">
              Complete Dental Services <br /> for Every Need
            </h2>
          </div>
          <div className="cs_sticky_section">
            {services.map((service, i) => (
              <div key={i} className="cs_service_card_4 cs_radius_20 cs_sticky_card cs_mb_24">
                <div className="row align-items-center cs_gap_y_30">
                  <div className="col-lg-6">
                    <div className="cs_service_content cs_white_bg cs_radius_15">
                      <div className="cs_service_header cs_mb_24">
                        <div className="cs_service_icon cs_accent_bg cs_white_color cs_center cs_radius_50 cs_mb_16">
                          <i className={`fa-solid ${service.icon} cs_fs_24`}></i>
                        </div>
                        <h3 className="cs_service_title cs_fs_24 cs_semibold mb-0">{service.title}</h3>
                      </div>
                      <p className="cs_service_desc cs_mb_24">{service.desc}</p>
                      <ul className="cs_service_features cs_mp_0">
                        {service.features.map((feat, j) => (
                          <li key={j}>
                            <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to="/services.html" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5 cs_mt_24">
                        <span>Learn More</span>
                        <span><i className="fa-solid fa-arrow-right"></i></span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="cs_service_img cs_radius_20">
                      <img src={service.img} alt={service.title} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="cs_process_section_4">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_50 text-center">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14">// HOW IT WORKS</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">
              Your Journey to a <br /> Perfect Smile
            </h2>
          </div>
          <div className="row cs_gap_y_30">
            {[{ step: '01', title: 'Consultation', desc: 'Meet with our dental experts for a comprehensive oral health assessment and treatment planning.', icon: 'fa-comments' }, { step: '02', title: 'Diagnosis', desc: 'Advanced digital imaging and diagnostics to create your personalized treatment roadmap.', icon: 'fa-x-ray' }, { step: '03', title: 'Treatment', desc: 'Expert dental procedures using the latest techniques and comfortable, gentle care.', icon: 'fa-tooth' }, { step: '04', title: 'Follow-up', desc: 'Post-treatment care, regular checkups, and ongoing support for lasting oral health.', icon: 'fa-heart-pulse' }].map((item, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="cs_process_card cs_radius_20 text-center cs_mb_24">
                  <div className="cs_process_icon cs_accent_bg cs_white_color cs_center cs_radius_50 cs_mb_24">
                    <i className={`fa-solid ${item.icon} cs_fs_24`}></i>
                  </div>
                  <div className="cs_process_step cs_accent_color cs_fs_14 cs_semibold">STEP {item.step}</div>
                  <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_12">{item.title}</h3>
                  <p className="cs_process_desc mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Experts Section — disabled per request, keep markup for future re-enable
      <section className="cs_team_section_4 cs_gray_bg">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_50 text-center">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14">// OUR EXPERTS</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">
              Meet Our Skilled <br /> Dental Professionals
            </h2>
          </div>
          <div className="cs_expert_tabs cs_mb_40">
            <div className="cs_expert_tab_nav d-flex justify-content-center cs_gap_12 cs_mb_40">
              {experts.map((expert, i) => (
                <button key={i} className={`cs_expert_tab_btn cs_radius_50 ${activeTab === i ? 'active' : ''}`} onClick={() => setActiveTab(i)}>
                  <img src={expert.img} alt={expert.name} className="cs_radius_50" />
                </button>
              ))}
            </div>
            <div className="cs_expert_tab_content">
              {experts.map((expert, i) => (
                <div key={i} className={`cs_expert_tab_pane ${activeTab === i ? 'active' : ''}`}>
                  <div className="row align-items-center cs_gap_y_30">
                    <div className="col-lg-5">
                      <div className="cs_expert_img cs_radius_20">
                        <img src={expert.img} alt={expert.name} />
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="cs_expert_content">
                        <h3 className="cs_fs_32 cs_semibold cs_mb_6">{expert.name}</h3>
                        <p className="cs_accent_color cs_semibold cs_mb_12">{expert.credentials}</p>
                        <p className="cs_fs_18 cs_semibold cs_mb_12">{expert.specialty}</p>
                        <p className="cs_mb_24">{expert.desc}</p>
                        <div className="cs_expert_social cs_mb_24">
                          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                          <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                          <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                          <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                        <Link to="/appointment.html" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5">
                          <span>Book Appointment</span>
                          <span><i className="fa-solid fa-arrow-right"></i></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Pricing Section */}
      <section className="cs_pricing_section_4">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_50 text-center">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14">// PRICING</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">
              Affordable Dental Care <br /> Plans for Everyone
            </h2>
          </div>
          <div className="row cs_gap_y_24 justify-content-center">
            {pricingPlans.map((plan, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className={`cs_pricing_card cs_radius_20 ${plan.recommended ? 'cs_pricing_card_featured' : ''}`}>
                  {plan.recommended && <div className="cs_pricing_badge cs_accent_bg cs_white_color cs_radius_50">Most Popular</div>}
                  <div className="cs_pricing_header">
                    <h3 className="cs_pricing_title cs_fs_24 cs_semibold">{plan.name}</h3>
                    <p className="cs_fs_14 cs_mb_12">{plan.desc}</p>
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
                  <Link to="/appointment.html" className={`cs_btn_style_1 cs_radius_5 w-100 text-center ${plan.recommended ? 'cs_accent_bg cs_white_color' : 'cs_primary_color cs_semibold'}`}>
                    <span>Get Started</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Slider */}
      <section className="cs_testimonial_section_4 cs_gray_bg">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_50 text-center">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14">// TESTIMONIALS</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">
              What Our Patients Say <br /> About Our Dental Care
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
                <div className="cs_testimonial_style_4 cs_radius_20 cs_white_bg">
                  <div className="row align-items-center cs_gap_y_30">
                    <div className="col-lg-4">
                      <div className="cs_testimonial_img cs_radius_20">
                        <img src={t.avatar} alt={t.author} />
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="cs_testimonial_content">
                        <span className="cs_quote_icon cs_mb_16">
                          <img src="/assets/img/quote.svg" alt="Quote" />
                        </span>
                        <div className="cs_rating cs_mb_16" data-rating="5">
                          <div className="cs_rating_percentage"></div>
                        </div>
                        <blockquote className="cs_mb_24">"{t.quote}"</blockquote>
                        <div className="cs_testimonial_author">
                          {/* Author avatar circle — disabled per request, keep markup for future re-enable
                          <div className="cs_author_img">
                            <img src={t.avatar} alt={t.author} className="cs_radius_50" />
                          </div>
                          */}
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

export default HomeV4;
