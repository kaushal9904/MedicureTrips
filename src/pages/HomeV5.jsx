import { useEffect, useRef, useState } from 'react';
import Link from '../components/TrackedLink';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { useWeb3Form } from '../hooks/useWeb3Form';

const HomeV5 = () => {
  const odometerRefs = useRef([]);
  const [activeFaq, setActiveFaq] = useState(null);
  const appointmentForm = useWeb3Form('Eye Care Page — Appointment Form');

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

  const services = [
    { title: 'Comprehensive Eye Exams', desc: 'Complete vision assessment using advanced diagnostic technology for accurate prescriptions and early detection of eye conditions.', icon: 'fa-eye', features: ['Visual Acuity Testing', 'Retinal Examination', 'Glaucoma Screening', 'Contact Lens Fitting'] },
    { title: 'Cataract Surgery', desc: 'Advanced phacoemulsification with premium intraocular lenses for clear vision restoration with minimal downtime.', icon: 'fa-microscope', features: ['Premium IOL Options', 'Laser-Assisted Surgery', 'Same-Day Procedure', 'Quick Recovery'] },
    { title: 'LASIK & Refractive Surgery', desc: 'Vision correction procedures to eliminate dependence on glasses and contacts with lasting results.', icon: 'fa-bolt', features: ['Custom LASIK', 'PRK Surgery', 'Implantable Lenses', 'Free Consultation'] },
    { title: 'Glaucoma Treatment', desc: 'Comprehensive glaucoma management with medical, laser, and surgical options to preserve your vision.', icon: 'fa-shield-halved', features: ['Early Detection', 'Medication Management', 'Laser Treatment', 'Surgical Options'] },
  ];

  const whyChoose = [
    { title: 'Advanced Technology', desc: 'Latest ophthalmic equipment including OCT, fundus cameras, and visual field analyzers.', icon: 'fa-microchip' },
    { title: 'Expert Surgeons', desc: 'Board-certified ophthalmologists with thousands of successful procedures.', icon: 'fa-user-doctor' },
    { title: 'Personalized Care', desc: 'Individualized treatment plans tailored to your specific eye health needs.', icon: 'fa-heart' },
    { title: 'Affordable Excellence', desc: 'World-class eye care at competitive prices with insurance acceptance.', icon: 'fa-hand-holding-dollar' },
  ];

  const team = [
    { name: 'Dr. Amanda Foster', credentials: 'MD, FEBO', specialty: 'Cataract & Refractive Surgery Specialist', img: '/images/DR avatar 468x525.jpg' },
    { name: 'Dr. Richard Nguyen', credentials: 'MD, PhD', specialty: 'Glaucoma & Retinal Disease Expert', img: '/images/DR avatar 468x525 2_.jpg' },
    { name: 'Dr. Catherine Lee', credentials: 'MD, FAAO', specialty: 'Pediatric Ophthalmologist', img: '/images/DR avatar 468x525 3_.jpg' },
    { name: 'Dr. Thomas Baker', credentials: 'MD, FACS', specialty: 'Cornea & External Disease Specialist', img: '/images/DR avatar 468x525 4.jpg' },
  ];

  const equipment = [
    { title: 'OCT Scanner', desc: 'High-resolution optical coherence tomography for detailed retinal imaging.', img: '/assets/img/equipment_1.webp' },
    { title: 'Phaco Machine', desc: 'Advanced phacoemulsification system for precise cataract surgery.', img: '/assets/img/equipment_2.webp' },
    { title: 'LASIK Platform', desc: 'State-of-the-art excimer laser for custom vision correction.', img: '/assets/img/equipment_3.webp' },
    { title: 'Visual Field Analyzer', desc: 'Comprehensive peripheral vision testing for glaucoma detection.', img: '/assets/img/equipment_4.webp' },
  ];

  const testimonials = [
    { quote: 'After years of wearing thick glasses, LASIK at Medicure Trip gave me perfect vision. The procedure was quick, painless, and the results are incredible. I wish I had done it sooner!', author: 'Jennifer Collins', role: 'LASIK Patient', avatar: '/assets/img/avatar_9.webp' },
    { quote: 'The cataract surgery was seamless. Dr. Foster explained everything clearly and the recovery was faster than expected. My vision is better than it has been in years!', author: 'Robert Mitchell', role: 'Cataract Surgery Patient', avatar: '/assets/img/avatar_10.webp' },
    { quote: 'As a parent, finding a good pediatric ophthalmologist for my daughter was crucial. Dr. Lee is amazing with children and caught a vision issue early that could have caused problems later.', author: 'Maria Santos', role: 'Parent', avatar: '/assets/img/avatar_11.webp' },
  ];

  const faqs = [
    { question: 'At what age should my child have their first eye exam?', answer: 'Children should have their first comprehensive eye exam at 6 months of age, then again at 3 years, and before starting school. Regular screenings are essential for early detection of vision problems.' },
    { question: 'How do I know if I need LASIK surgery?', answer: 'LASIK is ideal for adults with stable prescriptions, healthy corneas, and realistic expectations. During a free consultation, we evaluate your eye health, corneal thickness, and lifestyle needs to determine if LASIK is right for you.' },
    { question: 'Is cataract surgery painful?', answer: 'Cataract surgery is virtually painless. We use topical anesthesia (eye drops) and the procedure takes about 15-20 minutes. Most patients experience minimal discomfort and can resume normal activities within a few days.' },
    { question: 'What are the signs of glaucoma?', answer: 'Glaucoma often has no symptoms in early stages. Signs may include peripheral vision loss, eye pain, headaches, and halos around lights. Regular comprehensive eye exams are the best way to detect glaucoma early.' },
    { question: 'How often should adults have eye exams?', answer: 'Adults aged 18-39 should have a comprehensive eye exam every 2 years. Those 40-54 should be examined every 1-2 years, and adults 55+ should have annual exams. If you have risk factors like diabetes, more frequent exams may be needed.' },
  ];

  return (
    <main>
      {/* Hero Section — same banner style as the home page (cs_hero_style_1) */}
      <section>
        <div className="cs_hero_slider_wrapper position-relative">
          <Swiper modules={[EffectFade]} slidesPerView={1} speed={600}>
            <SwiperSlide>
              <div className="cs_hero_style_1 cs_hero_eye_care position-relative">
                <div className="cs_hero_parallax_bg cs_hero_video_bg">
                  <video autoPlay muted loop playsInline preload="auto">
                    <source src="/images/Eye Care Banner.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="container">
                  <div className="cs_hero_content_wrapper">
                    <div className="cs_hero_content">
                      <h1 className="cs_hero_title cs_fs_96 cs_bold">See Clearly, Live Fully</h1>
                      <p className="cs_hero_desc cs_fs_18">Advanced vision care with cutting-edge technology and expert ophthalmologists. Your eyes deserve the best care possible.</p>
                      <div className="cs_hero_btns">
                        <Link to="/appointment" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5">
                          <span><i className="fa-solid fa-calendar-check"></i></span>
                          <span>Book Eye Exam</span>
                        </Link>
                        <Link to="/services" className="cs_btn_style_2 cs_primary_color cs_semibold cs_radius_5">
                          <span>Our Services</span>
                          <span><i className="fa-solid fa-arrow-right"></i></span>
                        </Link>
                      </div>
                      <div className="cs_eye_hero_info_cards">
                        <div className="cs_eye_hero_info_card cs_white_bg cs_radius_10">
                          <i className="fa-solid fa-eye cs_accent_color cs_fs_24"></i>
                          <div>
                            <span className="cs_fs_14 cs_bold">50,000+</span>
                            <span className="cs_fs_12">Successful Surgeries</span>
                          </div>
                        </div>
                        <div className="cs_eye_hero_info_card cs_white_bg cs_radius_10">
                          <i className="fa-solid fa-user-doctor cs_accent_color cs_fs_24"></i>
                          <div>
                            <span className="cs_fs_14 cs_bold">20+</span>
                            <span className="cs_fs_12">Expert Specialists</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* About Section */}
      <section className="cs_about_style_5">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_50 text-center">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">
              Your Trusted Partner <br /> in Vision Health
            </h2>
          </div>
          <div className="row cs_gap_y_30">
            <div className="col-lg-6">
              <div className="cs_about_card cs_white_bg cs_radius_20 cs_p_40">
                <div className="cs_about_card_icon cs_accent_bg cs_white_color cs_center cs_radius_50 cs_mb_24">
                  <i className="fa-solid fa-bullseye cs_fs_24"></i>
                </div>
                <h3 className="cs_fs_24 cs_semibold cs_mb_12">Our Mission</h3>
                <p className="cs_mb_0">To provide exceptional eye care services that improve and preserve vision for patients of all ages. We combine advanced technology with compassionate care to deliver optimal outcomes and enhance quality of life.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_about_card cs_white_bg cs_radius_20 cs_p_40">
                <div className="cs_about_card_icon cs_accent_bg cs_white_color cs_center cs_radius_50 cs_mb_24">
                  <i className="fa-solid fa-eye cs_fs_24"></i>
                </div>
                <h3 className="cs_fs_24 cs_semibold cs_mb_12">Our Vision</h3>
                <p className="cs_mb_0">To be the leading eye care center recognized for clinical excellence, innovation, and patient satisfaction. We aspire to make world-class vision care accessible to everyone in our community.</p>
              </div>
            </div>
          </div>
          <div className="cs_partners_section cs_mt_50">
            <p className="cs_fs_14 cs_center_column text-center cs_mb_24">Trusted by Leading Eye Care Organizations</p>
            <Swiper
              modules={[Autoplay]}
              slidesPerView={4}
              spaceBetween={40}
              loop={true}
              speed={3000}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              freeMode={true}
              breakpoints={{ 0: { slidesPerView: 2 }, 768: { slidesPerView: 4 } }}
            >
              {[1, 2, 3, 4].map((i) => (
                <SwiperSlide key={i}>
                  <div className="cs_partner_item">
                    <img src={`/assets/img/partner_logo_${i}.svg`} alt={`Partner ${i}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Services Slider */}
      <section className="cs_service_section_5 cs_gray_bg">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_50 text-center">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">
              Comprehensive Eye Care <br /> Services for Every Need
            </h2>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={2}
            spaceBetween={24}
            loop={true}
            speed={600}
            pagination={{ clickable: true, el: '.cs_service_pagination' }}
            navigation={{ prevEl: '.cs_service_prev', nextEl: '.cs_service_next' }}
            breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 } }}
          >
            {services.map((service, i) => (
              <SwiperSlide key={i}>
                <div className="cs_service_card_5 cs_radius_20 cs_white_bg">
                  <div className="cs_service_header cs_mb_24">
                    <div className="cs_service_icon cs_accent_bg cs_white_color cs_center cs_radius_50 cs_mb_16">
                      <i className={`fa-solid ${service.icon} cs_fs_24`}></i>
                    </div>
                    <h3 className="cs_service_title cs_fs_24 cs_semibold mb-0">{service.title}</h3>
                  </div>
                  <p className="cs_service_desc cs_mb_24">{service.desc}</p>
                  <ul className="cs_service_features cs_mp_0 cs_mb_24">
                    {service.features.map((feat, j) => (
                      <li key={j}>
                        <img src="/assets/img/icons/check-double.svg" alt="Check icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/services" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5">
                    <span>Learn More</span>
                    <span><i className="fa-solid fa-arrow-right"></i></span>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
            <div className="cs_pagination_wrapper d-flex justify-content-center cs_mt_24">
              <div className="cs_service_pagination"></div>
            </div>
          </Swiper>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="cs_whychoose_section_5">
        <div className="container">
          <div className="row cs_gap_y_30 align-items-center">
            <div className="col-lg-6">
              <div className="cs_whychoose_img cs_parallax cs_radius_20 position-relative">
                <img src="/images/Excellence in Vision Care 1031x1031.jpg" alt="Eye Care Technology" />
                <div className="cs_whychoose_badge cs_accent_bg cs_white_color cs_radius_20">
                  <div className="cs_whychoose_badge_number cs_fs_60 cs_bold">
                    <span className="odometer" ref={(el) => { if (el) odometerRefs.current[0] = el; }} data-count-to="25"></span>+
                  </div>
                  <div className="cs_whychoose_badge_text">Years of Excellence</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_whychoose_content">
                <div className="cs_section_heading_style_1 cs_mb_48">
                  <h2 className="cs_section_title cs_fs_40 cs_bold mb-0">Excellence in Vision Care</h2>
                </div>
                <div className="row cs_gap_y_24">
                  {whyChoose.map((item, i) => (
                    <div key={i} className="col-sm-6">
                      <div className="cs_whychoose_card cs_white_bg cs_radius_15 cs_p_24">
                        <div className="cs_whychoose_icon cs_accent_bg cs_white_color cs_center cs_radius_50 cs_mb_16">
                          <i className={`fa-solid ${item.icon} cs_fs_20`}></i>
                        </div>
                        <h4 className="cs_fs_18 cs_semibold cs_mb_8">{item.title}</h4>
                        <p className="cs_fs_14 mb-0">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
              {['Vision Clarity', 'Advanced LASIK', 'Expert Surgeons', 'Modern Technology', 'Affordable Care', 'Patient First'].map((item, i) => (
                <div key={i} className="cs_ticker_item cs_fs_40 cs_semibold cs_white_color">
                  <img src="/assets/img/icons/star.svg" alt="Star" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="cs_ticker_content cs_ticker_items_list">
              {['Vision Clarity', 'Advanced LASIK', 'Expert Surgeons', 'Modern Technology', 'Affordable Care', 'Patient First'].map((item, i) => (
                <div key={`dup-${i}`} className="cs_ticker_item cs_fs_40 cs_semibold cs_white_color">
                  <img src="/assets/img/icons/star.svg" alt="Star" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section className="cs_team_section_5 cs_gray_bg">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_48 text-center">
            <h2 className="cs_section_title cs_fs_40 cs_bold mb-0">
              Meet Our Expert <br /> Ophthalmologists
            </h2>
          </div>
          <div className="row cs_gap_y_24">
            {team.map((doc, i) => (
              <div key={i} className="col-lg-3 col-sm-6">
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

      {/* Equipment Slider */}
      <section className="cs_equipment_section_5">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_50 text-center">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">
              State-of-the-Art <br /> Eye Care Technology
            </h2>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            speed={800}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            pagination={{ clickable: true, el: '.cs_equipment_pagination' }}
            navigation={{ prevEl: '.cs_equipment_prev', nextEl: '.cs_equipment_next' }}
          >
            {equipment.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="cs_equipment_slide cs_radius_20 position-relative">
                  <div className="cs_equipment_img cs_bg_filed" style={{ backgroundImage: `url('${item.img}')` }}></div>
                  <div className="cs_equipment_content cs_white_bg cs_radius_20">
                    <h3 className="cs_fs_32 cs_semibold cs_mb_12">{item.title}</h3>
                    <p className="cs_mb_24">{item.desc}</p>
                    <Link to="/about-us" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5">
                      <span>Learn More</span>
                      <span><i className="fa-solid fa-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="cs_equipment_controls">
              <div className="cs_equipment_prev"><i className="fa-solid fa-arrow-left"></i></div>
              <div className="cs_equipment_pagination"></div>
              <div className="cs_equipment_next"><i className="fa-solid fa-arrow-right"></i></div>
            </div>
          </Swiper>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="cs_appointment_section_5 cs_gray_bg">
        <div className="container">
          <div className="row cs_gap_y_30">
            <div className="col-lg-6">
              <div className="cs_appointment_content">
                <div className="cs_section_heading_style_1 cs_mb_24">
                  <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Schedule Your Eye Exam Today</h2>
                </div>
                <p className="cs_mb_24">Book your comprehensive eye examination with our expert ophthalmologists. Early detection is key to preserving your vision.</p>
                <div className="cs_appointment_features cs_mb_24">
                  <div className="cs_appointment_feature">
                    <i className="fa-solid fa-clock cs_accent_color cs_fs_24"></i>
                    <div>
                      <span className="cs_fs_16 cs_semibold">Quick & Easy Booking</span>
                      <span className="cs_fs_14">Schedule in just 2 minutes</span>
                    </div>
                  </div>
                  <div className="cs_appointment_feature">
                    <i className="fa-solid fa-shield-halved cs_accent_color cs_fs_24"></i>
                    <div>
                      <span className="cs_fs_16 cs_semibold">Insurance Accepted</span>
                      <span className="cs_fs_14">We work with most providers</span>
                    </div>
                  </div>
                  <div className="cs_appointment_feature">
                    <i className="fa-solid fa-calendar-check cs_accent_color cs_fs_24"></i>
                    <div>
                      <span className="cs_fs_16 cs_semibold">Same-Day Appointments</span>
                      <span className="cs_fs_14">Available for urgent needs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_appointment_form_wrapper cs_white_bg cs_radius_20">
                <form className="cs_appointment_form_1 row cs_gap_y_24" onSubmit={appointmentForm.handleSubmit}>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="fullName">Full Name</label>
                      <input type="text" id="fullName" name="name" className="cs_form_field" placeholder="Enter your name" />
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
                      <label htmlFor="service">Service Type</label>
                      <select className="cs_form_field cs_choice" id="service" name="service" defaultValue="">
                        <option disabled value="">Select service</option>
                        <option>Comprehensive Eye Exam</option>
                        <option>Cataract Consultation</option>
                        <option>LASIK Evaluation</option>
                        <option>Glaucoma Screening</option>
                        <option>Pediatric Eye Exam</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="doctor">Preferred Doctor</label>
                      <select className="cs_form_field cs_choice" id="doctor" name="doctor" defaultValue="">
                        <option disabled value="">Select doctor</option>
                        <option>Dr. A. V. Gurava Reddy</option>
                        <option>Dr. Aditya Gupta</option>
                        <option>Dr. Ajay Kaul</option>
                        <option>Dr. Ajitabh Srivastava</option>
                        <option>Dr. Alok Ranjan</option>
                        <option>Dr. Amal Roy Chaudhoory</option>
                        <option>Dr. Amit Verma</option>
                        <option>Dr. Anil Mandhani</option>
                        <option>Dr. Arun Saroha</option>
                        <option>Dr. Arvinder Singh Soin</option>
                        <option>Dr. Ashish Sabharwal</option>
                        <option>Dr. Ashok Kumar Vaid</option>
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
                  <div className="col-12">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="message">Reason for Visit</label>
                      <textarea id="message" name="message" rows="3" className="cs_form_field" placeholder="Describe your eye concerns..."></textarea>
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

      {/* Contact Info */}
      <section className="cs_contact_info_section_5">
        <div className="container">
          <div className="row cs_gap_y_24">
            {[
              { icon: 'fa-location-dot', title: 'Visit Us', info: '123 Vision Street, Eye Care Tower, New York, NY 10001', link: '/contact-us', linkText: 'Get Directions' },
              { icon: 'fa-phone', title: 'Call Us', info: '9958192249', link: 'tel:9958192249', linkText: 'Call Now' },
              { icon: 'fa-clock', title: 'Working Hours', info: 'Mon-Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 4:00 PM\nSun: Emergency Only', link: null, linkText: '' },
              { icon: 'fa-envelope', title: 'Email Us', info: 'shivammehra20244@gmail.com', link: 'mailto:shivammehra20244@gmail.com', linkText: 'Send Email' },
            ].map((item, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="cs_contact_card cs_white_bg cs_radius_20 text-center">
                  <div className="cs_contact_icon cs_accent_bg cs_white_color cs_center cs_radius_50 cs_mb_16">
                    <i className={`fa-solid ${item.icon} cs_fs_24`}></i>
                  </div>
                  <h4 className="cs_fs_20 cs_semibold cs_mb_12">{item.title}</h4>
                  <p className="cs_fs_14 cs_mb_16 whitespace-pre-line">{item.info}</p>
                  {item.link && (
                    item.link.startsWith('tel:') || item.link.startsWith('mailto:') ? (
                      <a href={item.link} className="cs_btn_style_2 cs_primary_color cs_semibold cs_radius_5">
                        <span>{item.linkText}</span>
                      </a>
                    ) : (
                      <Link to={item.link} className="cs_btn_style_2 cs_primary_color cs_semibold cs_radius_5">
                        <span>{item.linkText}</span>
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Marquee — disabled per request, keep markup for future re-enable
      <section className="cs_testimonial_section_5 cs_gray_bg">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_50 text-center">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">
              What Our Patients Say <br /> About Our Eye Care
            </h2>
          </div>
          <div className="cs_testimonial_marquee">
            <div className="cs_testimonial_marquee_inner">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div key={i} className="cs_testimonial_card cs_radius_20 cs_white_bg">
                  <span className="cs_quote_icon cs_mb_16">
                    <img src="/assets/img/quote.svg" alt="Quote" />
                  </span>
                  <div className="cs_rating cs_mb_16" data-rating="5">
                    <div className="cs_rating_percentage"></div>
                  </div>
                  <blockquote className="cs_mb_24">"{t.quote}"</blockquote>
                  <div className="cs_testimonial_author">
                    <div className="cs_author_img">
                      <img src={t.avatar} alt={t.author} className="cs_radius_50" />
                    </div>
                    <div className="cs_author_info">
                      <h3 className="cs_author_name cs_fs_18 cs_bold cs_mb_4">{t.author}</h3>
                      <p className="cs_author_designation mb-0">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Work Process */}
      <section className="cs_process_section_5">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_50 text-center">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">
              Your Journey to Better <br /> Vision Starts Here
            </h2>
          </div>
          <div className="row cs_gap_y_30">
            {[{ step: '01', title: 'Book Online', desc: 'Schedule your eye appointment through our easy online booking system or call us directly.', icon: 'fa-calendar-check' }, { step: '02', title: 'Eye Examination', desc: 'Comprehensive eye assessment using advanced diagnostic technology by our expert team.', icon: 'fa-eye' }, { step: '03', title: 'Treatment Plan', desc: 'Personalized treatment recommendations based on your specific eye health needs.', icon: 'fa-file-medical' }, { step: '04', title: 'Clear Vision', desc: 'Achieve optimal vision through expert care, follow-up support, and ongoing wellness.', icon: 'fa-sun' }].map((item, i) => (
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

      {/* FAQ Section */}
      <section className="cs_faq_section_5 cs_gray_bg">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_50 text-center">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">
              Frequently Asked Questions <br /> About Eye Care
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="cs_accordion_style_5">
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

export default HomeV5;
