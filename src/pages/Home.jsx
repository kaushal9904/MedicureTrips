import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useWeb3Form } from "../hooks/useWeb3Form";

/**
 * ─────────────────────────────────────────────────────────────
 * ASSETS — single source of truth for every image/video path.
 * ─────────────────────────────────────────────────────────────
 * To swap any media file later: replace the file in your project's
 * `public/images/` folder (keep the same filename, or update the
 * path string below to match the new filename) — nothing else in
 * this component needs to change.
 *
 * IMPORTANT: these files must physically exist at
 * `public/images/<filename>` in your project (Vite/CRA convention).
 * If your project puts static files somewhere else, adjust the
 * '/images/' prefix below to match.
 * ─────────────────────────────────────────────────────────────
 */
const ASSETS = {
  // Hero slider
  heroVideoSlide1: "/images/Home Page Ban-1 16x9.mp4",
  heroVideoSlide2: "/images/Home Banner 2.mp4",
  aboutSectionVideo: "/images/banner-2.mp4",
  heroVideoSlide3: "/images/Home Banner 3.mp4",

  // Technology / "Why choose Medicure Trip" section
  whyChooseVideo: "/images/1031x1023 Why choose Medicure Trip.mp4",

  // Appointment section
  healJourneyVideo: "/images/heal journey 803x414.mp4",

  // Testimonial section
  realStoryVideo: "/images/Real story 1138x1037.mp4",

  // Services section images
  cardiologyImg: "/images/Cardiology-service 1321x523.jpg",
  neurologyImg: "/images/Neurology-service 1321x523.jpg",
  orthopedicsImg: "/images/Orthopedics-service 1321x523.jpg",
  oncologyImg: "/images/Oncology-service 1321x523.jpg",
  maternityImg: "/images/Maternity-service 1321x523.jpg",

  // Team / doctor avatars
  drAvatar1: "/images/DR avatar 468x525.jpg",
  drAvatar2: "/images/DR avatar 468x525 2_.jpg",
  drAvatar3: "/images/DR avatar 468x525 3_.jpg",
  drAvatar4: "/images/DR avatar 468x525 4.jpg",

  // Partner hospital images
  hospitalArtemis: "/images/Artemis Hospital468x525.jpg",
  hospitalMedanta: "/images/Medanta Hospital 468x525 4.jpg",
  hospitalFortis: "/images/Fortis Hospital 468x525 3_.jpg",
  hospitalMax: "/images/Max Hospital 468x525 2_.jpg",

  // Blog thumbnails
  blog1Img: "/images/Blog 1 early warn 636x375_.jpg",
  blog2Img: "/images/Blog 2 mind Body 636x375_.jpg",
  blog3Img: "/images/Blog 3 rob knees 636x375_.jpg",
};

const Home = () => {
  const heroSwiperInstance = useRef(null);
  const testimonialSwiperInstance = useRef(null);
  const odometerRefs = useRef([]);
  const instantBooking = useWeb3Form("Home Page — Instant Booking Widget");
  const appointmentForm = useWeb3Form("Home Page — Book an Appointment Form");

  useEffect(() => {
    const initOdometers = async () => {
      if (typeof window !== "undefined" && window.Odometer) {
        odometerRefs.current.forEach((el) => {
          if (el && !el.classList.contains("odometer-initialized")) {
            const target = parseInt(el.getAttribute("data-count-to"), 10);
            if (!isNaN(target)) {
              const odometer = new window.Odometer({
                el,
                value: 0,
                format: "d",
                theme: "default",
              });
              odometer.render();
              odometer.update(target);
              el.classList.add("odometer-initialized");
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
      const btn = document.getElementById("scrollToTopBtn");
      if (btn) {
        if (window.scrollY > 300) {
          btn.classList.add("cs_show");
        } else {
          btn.classList.remove("cs_show");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const tickerItems = [
    "Organ Transplant",
    "Cardiology",
    "Neuro Surgery",
    "Spine Surgery",
    "Orthopedic",
    "Urology",
    "ENT",
    "Plastic Surgery",
    "Cancer",
  ];

  const services = [
    {
      title: "Cardiology",
      icon: "/assets/img/icons/cardiology.svg",
      img: ASSETS.cardiologyImg,
      desc: "Heart care that combines expertise, technology, and heartfelt compassion.",
      features: [
        "Partner cardiac centers in Delhi NCR",
        "Bypass, angioplasty & valve care",
        "Pre & post-op coordination",
      ],
    },
    {
      title: "Neuro Surgery",
      icon: "/assets/img/icons/neurology.svg",
      img: ASSETS.neurologyImg,
      desc: "Advanced neurosurgical interventions for optimal brain and spinal health.",
      features: [
        "Brain & spinal surgery",
        "Advanced neuro-imaging",
        "Recovery & rehab support",
      ],
    },
    {
      title: "Orthopedic",
      icon: "/assets/img/icons/orthopedics.svg",
      img: ASSETS.orthopedicsImg,
      desc: "Orthopedic excellence, restoring mobility and enhancing musculoskeletal health.",
      features: [
        "Joint replacement surgery",
        "Sports & trauma injuries",
        "Minimally invasive procedures",
      ],
    },
    {
      title: "Cancer",
      icon: "/assets/img/icons/oncology.svg",
      img: ASSETS.oncologyImg,
      desc: "Holistic cancer care with advanced treatments and compassionate support.",
      features: [
        "Leading oncology centers",
        "Chemotherapy & immunotherapy",
        "Compassionate patient support",
      ],
    },
  ];

  const team = [
    {
      name: "Artemis Hospital",
      credentials: "NABH & JCI Accredited",
      designation: "Cardiology",
      specialty: "Multi-specialty Tertiary Care",
      img: ASSETS.hospitalArtemis,
    },
    {
      name: "Medanta Hospital",
      credentials: "NABH & JCI Accredited",
      designation: "Neuro Surgery",
      specialty: "Multi-specialty Tertiary Care",
      img: ASSETS.hospitalMedanta,
    },
    {
      name: "Fortis Hospital",
      credentials: "NABH & JCI Accredited",
      designation: "Orthopedic",
      specialty: "Multi-specialty Tertiary Care",
      img: ASSETS.hospitalFortis,
    },
    {
      name: "Max Hospital",
      credentials: "NABH & JCI Accredited",
      designation: "Cancer Care",
      specialty: "Multi-specialty Tertiary Care",
      img: ASSETS.hospitalMax,
    },
  ];

  const blogPosts = [
    {
      title: "Early Warning Signs of Stroke: B.E. F.A.S.T Guide",
      category: "Cardiology",
      date: "April 05, 2026",
      readTime: "7 min read",
      img: ASSETS.blog1Img,
    },
    {
      title: "Mind-Body Connection: How Stress Affects Physical Health",
      category: "Mental Wellness",
      date: "April 04, 2026",
      readTime: "5 min read",
      img: ASSETS.blog2Img,
    },
    {
      title: "Robotic Knee Replacement: Faster Recovery & Less Pain",
      category: "Orthopedics",
      date: "April 02, 2026",
      readTime: "7 min read",
      img: ASSETS.blog3Img,
    },
  ];

  const testimonials = [
    {
      quote:
        "Medicure Trip exceeded my expectations with their seamless medical services. The attention to detail and personalized care made my journey to wellness stress-free and comfortable.",
      author: "Gloria J Martin",
      role: "Patient",
      avatar: "/assets/img/avatar_4.webp",
    },
    {
      quote:
        "Trusting Medicure Trip for my medical needs was the best decision. They not only provided quality healthcare but also ensured a smooth experience, from treatment to recovery.",
      author: "Joey A Travis",
      role: "Customer",
      avatar: "/assets/img/avatar_5.webp",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section>
        <div className="cs_hero_slider_wrapper position-relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            onSwiper={(swiper) => (heroSwiperInstance.current = swiper)}
            slidesPerView={1}
            loop={true}
            speed={600}
            effect="slide"
            pagination={{ type: "fraction", el: ".cs_hero_slider_counter" }}
          >
            <SwiperSlide>
              <div className="cs_hero_style_1 position-relative">
                <div className="cs_hero_parallax_bg cs_hero_video_bg">
                  <video autoPlay muted loop playsInline>
                    <source src={ASSETS.heroVideoSlide1} type="video/mp4" />
                  </video>
                </div>
                <div className="container">
                  <div className="cs_hero_content_wrapper">
                    <div className="cs_hero_content">
                      <div className="cs_hero_subtitle cs_accent_color cs_fs_14">
                        // MEDICAL TOURISM MADE SIMPLE
                      </div>
                      <h1 className="cs_hero_title cs_fs_96 cs_bold">
                        Welcome to Medicure Trip
                      </h1>
                      <p className="cs_hero_desc cs_fs_18">
                        Unlock the best medical treatments and tour packages in
                        India with our trusted network of top hospitals and
                        expert doctors.
                      </p>
                      <div className="cs_hero_btns">
                        <Link
                          to="/contact-us.html"
                          className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5"
                        >
                          <span>
                            <i className="fa-solid fa-stethoscope"></i>
                          </span>
                          <span>Get Free Consultation</span>
                        </Link>
                        <div className="cs_visiting_hours">
                          <span className="cs_bold">We're Available:</span>{" "}
                          Monday - Sunday (All Day)
                        </div>
                      </div>
                    </div>
                    <form
                      className="cs_ib_card"
                      onSubmit={instantBooking.handleSubmit}
                    >
                      <div className="cs_header cs_accent_color">
                        <span className="cs_dot"></span>
                        <span className="cs_title cs_fs_20 cs_semibold">
                          Instant Booking
                        </span>
                      </div>
                      <div className="cs_field_item cs_radius_5">
                        <label className="cs_field_label cs_fs_12 mb-0">
                          Treatment
                        </label>
                        <input
                          className="cs_field_value"
                          name="treatment"
                          placeholder="Cardiology"
                          required
                        />
                      </div>
                      <div className="cs_field_item cs_radius_5">
                        <label className="cs_field_label cs_fs_12 mb-0">
                          Available Date
                        </label>
                        <input
                          className="cs_field_value"
                          name="available_date"
                          placeholder="Tomorrow, 09:30 AM"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5"
                        disabled={instantBooking.status === "sending"}
                      >
                        <span>
                          {instantBooking.status === "sending"
                            ? "Sending..."
                            : "Check Availability"}
                        </span>
                      </button>
                      {instantBooking.status === "success" && (
                        <p className="cs_fs_14 mb-0" style={{ color: "#1a7f37" }}>
                          Thanks! We'll contact you shortly.
                        </p>
                      )}
                      {instantBooking.status === "error" && (
                        <p className="cs_fs_14 mb-0" style={{ color: "#c0392b" }}>
                          {instantBooking.errorMessage || "Something went wrong. Please try again."}
                        </p>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cs_hero_style_1 position-relative">
                <div className="cs_hero_parallax_bg cs_hero_video_bg">
                  <video autoPlay muted loop playsInline>
                    <source src={ASSETS.heroVideoSlide2} type="video/mp4" />
                  </video>
                </div>
                <div className="container">
                  <div className="cs_hero_content_wrapper">
                    <div className="cs_hero_content">
                      <div className="cs_hero_subtitle cs_accent_color cs_fs_14">
                        // MEDICAL TOURISM MADE SIMPLE
                      </div>
                      <h1 className="cs_hero_title cs_fs_96 cs_bold">
                        Experience World-Class Care
                      </h1>
                      <p className="cs_hero_desc cs_fs_18">
                        High-quality, affordable healthcare solutions tailored
                        to international patients — your journey to wellness
                        begins here.
                      </p>
                      <div className="cs_hero_btns">
                        <Link
                          to="/contact-us.html"
                          className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5"
                        >
                          <span>
                            <i className="fa-solid fa-stethoscope"></i>
                          </span>
                          <span>Get Free Consultation</span>
                        </Link>
                        <div className="cs_visiting_hours">
                          <span className="cs_bold">We're Available:</span>{" "}
                          Monday - Sunday (All Day)
                        </div>
                      </div>
                    </div>
                    <form
                      className="cs_ib_card"
                      onSubmit={instantBooking.handleSubmit}
                    >
                      <div className="cs_header cs_accent_color">
                        <span className="cs_dot"></span>
                        <span className="cs_title cs_fs_20 cs_semibold">
                          Instant Booking
                        </span>
                      </div>
                      <div className="cs_field_item cs_radius_5">
                        <label className="cs_field_label cs_fs_12 mb-0">
                          Treatment
                        </label>
                        <input
                          className="cs_field_value"
                          name="treatment"
                          placeholder="Cardiology"
                          required
                        />
                      </div>
                      <div className="cs_field_item cs_radius_5">
                        <label className="cs_field_label cs_fs_12 mb-0">
                          Available Date
                        </label>
                        <input
                          className="cs_field_value"
                          name="available_date"
                          placeholder="Tomorrow, 09:30 AM"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5"
                        disabled={instantBooking.status === "sending"}
                      >
                        <span>
                          {instantBooking.status === "sending"
                            ? "Sending..."
                            : "Check Availability"}
                        </span>
                      </button>
                      {instantBooking.status === "success" && (
                        <p className="cs_fs_14 mb-0" style={{ color: "#1a7f37" }}>
                          Thanks! We'll contact you shortly.
                        </p>
                      )}
                      {instantBooking.status === "error" && (
                        <p className="cs_fs_14 mb-0" style={{ color: "#c0392b" }}>
                          {instantBooking.errorMessage || "Something went wrong. Please try again."}
                        </p>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="cs_hero_style_1 position-relative">
                <div className="cs_hero_parallax_bg cs_hero_video_bg">
                  <video autoPlay muted loop playsInline>
                    <source src={ASSETS.heroVideoSlide3} type="video/mp4" />
                  </video>
                </div>
                <div className="container">
                  <div className="cs_hero_content_wrapper">
                    <div className="cs_hero_content">
                      <div className="cs_hero_subtitle cs_accent_color cs_fs_14">
                        // MEDICAL TOURISM MADE SIMPLE
                      </div>
                      <h1 className="cs_hero_title cs_fs_96 cs_bold">
                        Your Trusted Medical Tourism Partner
                      </h1>
                      <p className="cs_hero_desc cs_fs_18">
                        From medical visa to recovery, we coordinate every step
                        of your treatment journey in India — at roughly 30% of
                        the cost in Western countries.
                      </p>
                      <div className="cs_hero_btns">
                        <Link
                          to="/contact-us.html"
                          className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5"
                        >
                          <span>
                            <i className="fa-solid fa-stethoscope"></i>
                          </span>
                          <span>Get Free Consultation</span>
                        </Link>
                        <div className="cs_visiting_hours">
                          <span className="cs_bold">We're Available:</span>{" "}
                          Monday - Sunday (All Day)
                        </div>
                      </div>
                    </div>
                    <form
                      className="cs_ib_card"
                      onSubmit={instantBooking.handleSubmit}
                    >
                      <div className="cs_header cs_accent_color">
                        <span className="cs_dot"></span>
                        <span className="cs_title cs_fs_20 cs_semibold">
                          Instant Booking
                        </span>
                      </div>
                      <div className="cs_field_item cs_radius_5">
                        <label className="cs_field_label cs_fs_12 mb-0">
                          Treatment
                        </label>
                        <input
                          className="cs_field_value"
                          name="treatment"
                          placeholder="Cardiology"
                          required
                        />
                      </div>
                      <div className="cs_field_item cs_radius_5">
                        <label className="cs_field_label cs_fs_12 mb-0">
                          Available Date
                        </label>
                        <input
                          className="cs_field_value"
                          name="available_date"
                          placeholder="Tomorrow, 09:30 AM"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5"
                        disabled={instantBooking.status === "sending"}
                      >
                        <span>
                          {instantBooking.status === "sending"
                            ? "Sending..."
                            : "Check Availability"}
                        </span>
                      </button>
                      {instantBooking.status === "success" && (
                        <p className="cs_fs_14 mb-0" style={{ color: "#1a7f37" }}>
                          Thanks! We'll contact you shortly.
                        </p>
                      )}
                      {instantBooking.status === "error" && (
                        <p className="cs_fs_14 mb-0" style={{ color: "#c0392b" }}>
                          {instantBooking.errorMessage || "Something went wrong. Please try again."}
                        </p>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Nav controls live OUTSIDE <Swiper> — required so Swiper doesn't
              count them as an extra slide. */}
          <div className="cs_controller_1">
            <div
              className="slider-prev"
              onClick={() => heroSwiperInstance.current?.slidePrev()}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className="swiper-pagination cs_hero_slider_counter"></div>
            <div
              className="slider-next"
              onClick={() => heroSwiperInstance.current?.slideNext()}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="cs_feature_section_1 pb-0">
        <div className="container">
          <div className="row cs_gap_y_24">
            <div className="col-xl-3 col-md-6">
              <div className="cs_feature_card_1 cs_radius_20 cs_color_1">
                <div className="cs_feature_card_header cs_mb_15">
                  <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10">
                    <img
                      src="/assets/img/icons/calendar.svg"
                      alt="Doctor icon"
                    />
                  </div>
                  <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">
                    Free Consultation
                  </h2>
                </div>
                <p className="cs_feature_desc mb-0">
                  Get a free consultation and treatment plan from our partner
                  specialists.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="cs_feature_card_1 cs_radius_20 cs_color_2">
                <div className="cs_feature_card_header cs_mb_15">
                  <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10">
                    <img
                      src="/assets/img/icons/user.svg"
                      alt="Find Doctor icon"
                    />
                  </div>
                  <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">
                    Medical Visa & Travel
                  </h2>
                </div>
                <p className="cs_feature_desc mb-0">
                  We arrange your medical visa, airport transfers, and
                  accommodation.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="cs_feature_card_1 cs_radius_20 cs_color_3">
                <div className="cs_feature_card_header cs_mb_15">
                  <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10">
                    <img
                      src="/assets/img/icons/first-aid-kit.svg"
                      alt="Toolbox icon"
                    />
                  </div>
                  <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">
                    Top Partner Hospitals
                  </h2>
                </div>
                <p className="cs_feature_desc mb-0">
                  Treatment at India's leading JCI &amp; NABH accredited
                  hospitals.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="cs_feature_card_1 cs_radius_20 cs_color_4">
                <div className="cs_feature_card_header cs_mb_15">
                  <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10">
                    <img src="/assets/img/icons/video.svg" alt="Video icon" />
                  </div>
                  <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">
                    End-to-End Care
                  </h2>
                </div>
                <p className="cs_feature_desc mb-0">
                  Meals, recovery, and rehabilitation support for your full
                  stay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="cs_about_style_1">
        <div className="container">
          <div className="row cs_gap_y_30">
            <div className="col-lg-6">
              <div className="cs_about_img cs_parallax cs_radius_20 position-relative">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="cs_radius_20"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                >
                  <source src={ASSETS.aboutSectionVideo} type="video/mp4" />
                </video>
                <div className="cs_about_rating cs_accent_bg cs_radius_20">
                  <p className="cs_rating_text cs_white_color">
                    5k+ reviews based on client feedback.
                  </p>
                  <div className="cs_rating_value cs_fs_60 cs_bold cs_white_color">
                    4.9/5
                  </div>
                  <div className="cs_rating" data-rating="5">
                    <div className="cs_rating_percentage"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_about_content">
                <div className="cs_section_heading_style_1">
                  <p className="cs_section_subtitle cs_accent_color cs_fs_14">
                    // About US
                  </p>
                  <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">
                    Your Health Journey Starts Here
                  </h2>
                </div>
                <blockquote>
                  "We offer the top treatment and tour packages for
                  international patients coming to India."
                </blockquote>
                <div className="cs_about_text">
                  <p className="cs_about_desc">
                    Medicure Trip connects international patients with India's
                    leading hospitals and expert doctors across modern,
                    holistic, and alternative treatment modalities. We arrange
                    your medical visa, airport transfers, accommodation, meals,
                    surgeon consultations, and lab work — delivering quality
                    healthcare at roughly 30% of the cost in most Western
                    countries. We're an ISO 27001 certified organization and
                    have assisted 1000+ patients since our inception.
                  </p>
                  <div className="cs_btns_wrapper">
                    <Link
                      to="/about-us.html"
                      aria-label="Go to about us page"
                      className="cs_btn_style_1 cs_primary_color cs_semibold cs_radius_5"
                    >
                      <span>More About Us</span>
                      <span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </Link>
                    {/* Disabled per request, keep entry for future re-enable:
                    <div className="cs_trusted_by">
                      <div className="cs_avatar_wrapper">
                        <div className="cs_avatar cs_center cs_radius_50">
                          <img src="/assets/img/avatar_1.webp" alt="Avatar" />
                        </div>
                        <div className="cs_avatar cs_center cs_radius_50">
                          <img src="/assets/img/avatar_2.webp" alt="Avatar" />
                        </div>
                        <div className="cs_avatar cs_center cs_radius_50">
                          <img src="/assets/img/avatar_3.webp" alt="Avatar" />
                        </div>
                      </div>
                      <p className="cs_trusted_text cs_fs_14 mb-0">
                        Trusted by 10k+ Patients
                      </p>
                    </div>
                    */}
                  </div>
                  <div className="cs_funfact_style_1">
                    <div className="cs_funfact_item">
                      <div className="cs_funfact_number cs_fs_60 cs_bold cs_accent_color">
                        <span
                          className="odometer"
                          ref={(el) => {
                            if (el) odometerRefs.current[0] = el;
                          }}
                          data-count-to="98"
                        ></span>
                        %
                      </div>
                      <div className="cs_funfact_title">
                        Patient Satisfaction
                      </div>
                    </div>
                    <div className="cs_funfact_item">
                      <div className="cs_funfact_number cs_fs_60 cs_bold cs_accent_color">
                        <span
                          className="odometer"
                          ref={(el) => {
                            if (el) odometerRefs.current[1] = el;
                          }}
                          data-count-to="12"
                        ></span>
                        +
                      </div>
                      <div className="cs_funfact_title">
                        Awards & Accreditations
                      </div>
                    </div>
                  </div>
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
              {tickerItems.map((item, i) => (
                <div
                  key={i}
                  className="cs_ticker_item cs_fs_40 cs_semibold cs_white_color"
                >
                  <img src="/assets/img/icons/star.svg" alt="Star" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="cs_ticker_content cs_ticker_items_list">
              {tickerItems.map((item, i) => (
                <div
                  key={`dup-${i}`}
                  className="cs_ticker_item cs_fs_40 cs_semibold cs_white_color"
                >
                  <img src="/assets/img/icons/star.svg" alt="Star" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="cs_service_section_1 cs_gray_bg">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_columb cs_mb_50 cs_mb_lg_40 text-center">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14">
              // TREATMENTS
            </p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">
              Top-Notch Treatment Options for <br /> International Patients.
            </h2>
          </div>
          <div className="cs_sticky_section">
            {services.map((service, i) => (
              <div
                key={i}
                className="cs_service_card_1 cs_radius_20 cs_sticky_card"
              >
                <div className="cs_service_content cs_white_bg cs_radius_15">
                  <div className="cs_service_header">
                    <div className="cs_service_icon cs_center cs_radius_10">
                      <img src={service.icon} alt={service.title} />
                    </div>
                    <h3 className="cs_service_title cs_fs_24 cs_medium mb-0">
                      <Link
                        to={`/service-details.html?slug=${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                        aria-label={`Go to ${service.title} details page`}
                      >
                        {service.title}
                      </Link>
                    </h3>
                  </div>
                  <p className="cs_service_desc">{service.desc}</p>
                  <ul className="cs_service_features cs_mp_0">
                    {service.features.map((feat, j) => (
                      <li key={j}>
                        <img
                          src="/assets/img/icons/check-double.svg"
                          alt="Check icon"
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="cs_service_img cs_bg_filed cs_radius_20"
                  style={{ backgroundImage: `url('${service.img}')` }}
                >
                  <Link
                    to={`/service-details.html?slug=${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    aria-label={`Go to ${service.title} details page`}
                    className="cs_service_btn cs_accent_bg cs_white_color cs_radius_50"
                  >
                    <img
                      src="/assets/img/icons/arrow-right.svg"
                      alt="Right arrow"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center cs_mt_40">
            <Link
              to="/services.html"
              className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5"
            >
              <span>View All 9 Treatments</span>
              <span>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Technology / Why Choose Section */}
      <section className="cs_technology_section_1">
        <div className="container">
          <div className="row cs_gap_y_30">
            <div className="col-lg-6">
              <div className="cs_technology_img cs_parallax cs_radius_20 position-relative">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="cs_radius_20"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                >
                  <source src={ASSETS.whyChooseVideo} type="video/mp4" />
                </video>
                <div className="cs_technology_text">
                  <div className="cs_accredited_badge cs_accent_bg cs_white_color cs_radius_50">
                    <div className="cs_circular_text">
                      <img
                        src="/assets/img/circular_text.svg"
                        alt="Circular Text"
                      />
                    </div>
                    <Link
                      to="/contact-us.html"
                      className="cs_call_btn cs_center cs_white_bg cs_radius_50"
                    >
                      <img
                        src="/assets/img/icons/phone3.svg"
                        alt="Phone icon"
                      />
                    </Link>
                  </div>
                  <ul className="cs_feature_list cs_white_color cs_mp_0">
                    <li>
                      <img
                        src="/assets/img/icons/check-double.svg"
                        alt="Check icon"
                      />
                      <span>NABH Accredited Hospital of the Year</span>
                    </li>
                    <li>
                      <img
                        src="/assets/img/icons/check-double.svg"
                        alt="Check icon"
                      />
                      <span>Digital Health Records Seamless care</span>
                    </li>
                    <li>
                      <img
                        src="/assets/img/icons/check-double.svg"
                        alt="Check icon"
                      />
                      <span>Zero waiting Priority appointments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_technology_content">
                <div className="cs_section_heading_style_1 cs_mb_48 cs_mb_lg_40">
                  <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17">
                    // Why choose Medicure Trip
                  </p>
                  <h2 className="cs_section_title cs_fs_40 cs_bold cs_mb_6">
                    Where Care & Technology Unite
                  </h2>
                  <p className="cs_section_desc mb-0">
                    We don't just treat illnesses — we restore lives with
                    empathy, precision, and integrity.
                  </p>
                </div>
                <div className="cs_feature_grid_1">
                  <div className="cs_feature_card_1 cs_radius_20 cs_color_1">
                    <div className="cs_feature_card_header">
                      <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10">
                        <img
                          src="/assets/img/icons/stethoscope.svg"
                          alt="Stethoscope icon"
                        />
                      </div>
                      <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">
                        Elite Specialists
                      </h2>
                    </div>
                    <p className="cs_feature_desc mb-0">
                      Over 200+ internationally trained doctors, 24/7
                      availability across 40+ specialties.
                    </p>
                  </div>
                  <div className="cs_feature_card_1 cs_radius_20 cs_color_2">
                    <div className="cs_feature_card_header">
                      <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10">
                        <img
                          src="/assets/img/icons/robotic-surgery.svg"
                          alt="Surgery icon"
                        />
                      </div>
                      <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">
                        Robotic Surgery
                      </h2>
                    </div>
                    <p className="cs_feature_desc mb-0">
                      State-of-the-art Da Vinci Xi, 3T MRI, AI diagnostics for
                      unmatched precision.
                    </p>
                  </div>
                  <div className="cs_feature_card_1 cs_radius_20 cs_color_3">
                    <div className="cs_feature_card_header">
                      <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10">
                        <img
                          src="/assets/img/icons/hospital.svg"
                          alt="Hospital icon"
                        />
                      </div>
                      <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">
                        Holistic Approach
                      </h2>
                    </div>
                    <p className="cs_feature_desc mb-0">
                      Patient-centric rooms, multilingual staff, nutritional
                      therapy & rehab support.
                    </p>
                  </div>
                  <div className="cs_feature_card_1 cs_radius_20 cs_color_4">
                    <div className="cs_feature_card_header">
                      <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10">
                        <img
                          src="/assets/img/icons/price-tag.svg"
                          alt="Price tag icon"
                        />
                      </div>
                      <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">
                        Transparent Pricing
                      </h2>
                    </div>
                    <p className="cs_feature_desc mb-0">
                      Cashless insurance, affordable packages & EMI options — no
                      hidden costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="cs_team_section_1 cs_gray2_bg">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_48 text-center">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17 text-uppercase">
              // Our Network
            </p>
            <h2 className="cs_section_title cs_fs_40 cs_bold mb-0">
              Our Qualified Panel of <br /> Partner Hospitals
            </h2>
          </div>
          <div className="row cs_gap_y_24">
            {team.map((doc, i) => (
              <div key={i} className="col-lg-3 col-sm-6">
                <div className="cs_team_Style_1">
                  <div className="cs_team_img cs_radius_20 cs_mb_24 position-relative">
                    <img src={doc.img} alt={`${doc.name} image`} />
                    <span className="cs_team_designation cs_gray3_bg cs_fs_14 position-absolute">
                      {doc.designation}
                    </span>
                    <div className="cs_team_contact">
                      <div className="cs_team_social">
                        <a href="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href="#">
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                      <Link
                        to="/contact-us.html"
                        aria-label="Enquire about this hospital"
                        className="cs_btn_style_1 cs_white_color cs_semibold cs_radius_5"
                      >
                        <img
                          src="/assets/img/icons/calendar.svg"
                          alt="Calendar icon"
                        />
                        <span>Enquire Now</span>
                      </Link>
                    </div>
                  </div>
                  <div className="cs_team_info">
                    <h3 className="cs_team_title cs_fs_20 cs_bold cs_mb_12">
                      <Link
                        to="/doctors.html"
                        aria-label="View partner hospitals"
                      >
                        {doc.name}
                      </Link>
                    </h3>
                    <p className="cs_team_subtitle mb-0">
                      {doc.credentials} &middot; {doc.specialty}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="cs_appointment_section_1">
        <div className="container">
          <div className="row cs_gap_y_30">
            <div className="col-lg-6">
              <div className="cs_appointment_content">
                <div className="cs_section_heading_style_1 cs_mb_12">
                  <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17 text-uppercase">
                    // Instant Confirmation
                  </p>
                  <h2 className="cs_section_title cs_fs_40 cs_bold mb-0">
                    Your Health Journey Starts Here
                  </h2>
                </div>
                <ul className="cs_appountment_features cs_mb_24 list-unstyled p-0">
                  <li>
                    <img
                      src="/assets/img/icons/time-line.svg"
                      alt="Clock icon"
                    />
                    <span>Free consultation within 24 hours</span>
                  </li>
                  <li>
                    <img src="/assets/img/icons/video.svg" alt="Video icon" />
                    <span>Video consult with partner specialists</span>
                  </li>
                  <li>
                    <img
                      src="/assets/img/icons/article-line.svg"
                      alt="Document icon"
                    />
                    <span>Medical visa & travel assistance</span>
                  </li>
                </ul>
                <div className="cs_content_bottom">
                  <div className="cs_appointment_img cs_parallax cs_radius_20 cs_mb_14">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="cs_radius_20"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    >
                      <source src={ASSETS.healJourneyVideo} type="video/mp4" />
                    </video>
                  </div>
                  <div className="cs_funfact_style_1">
                    <div className="cs_funfact_item">
                      <div className="cs_funfact_number cs_fs_60 cs_bold cs_accent_color cs_primary_font">
                        <span
                          className="odometer"
                          ref={(el) => {
                            if (el) odometerRefs.current[2] = el;
                          }}
                          data-count-to="15"
                        ></span>
                        K+
                      </div>
                      <div className="cs_funfact_title">Happy Patients</div>
                    </div>
                    <div className="cs_funfact_item">
                      <div className="cs_funfact_number cs_fs_60 cs_bold cs_accent_color cs_primary_font">
                        <span
                          className="odometer"
                          ref={(el) => {
                            if (el) odometerRefs.current[3] = el;
                          }}
                          data-count-to="24"
                        ></span>
                        /
                        <span
                          className="odometer"
                          ref={(el) => {
                            if (el) odometerRefs.current[4] = el;
                          }}
                          data-count-to="7"
                        ></span>
                      </div>
                      <div className="cs_funfact_title">Emergency</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_appointment_form_wrapper">
                <div className="cs_appointment_heading cs_mb_24">
                  <h3 className="cs_fs_40 cs_semibold cs_mb_6">
                    Book a Free Consultation
                  </h3>
                  <p className="mb-0">
                    Fill the details below — we'll confirm within 2hrs.
                  </p>
                </div>
                <form
                  className="cs_appointment_form_1 row cs_gap_y_24"
                  onSubmit={appointmentForm.handleSubmit}
                >
                  <div className="col-12">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="cs_form_field"
                        placeholder="Enter your name"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        className="cs_form_field"
                        placeholder="Enter your phone"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="cs_form_field"
                        placeholder="Enter your email address"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="department">Service</label>
                      <select
                        className="cs_form_field cs_choice"
                        name="department"
                        id="department"
                        defaultValue=""
                      >
                        <option disabled value="">
                          Select department
                        </option>
                        <option>Cardiology</option>
                        <option>Neurology</option>
                        <option>Oncology</option>
                        <option>Maternity</option>
                        <option>Orthopedics</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="doctor">Preferred Doctor</label>
                      <select
                        className="cs_form_field cs_choice"
                        name="doctor"
                        id="doctor"
                        defaultValue=""
                      >
                        <option disabled value="">
                          Select Doctor
                        </option>
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
                      <label htmlFor="date">Date</label>
                      <input
                        type="text"
                        name="date"
                        id="date"
                        className="cs_form_field"
                        placeholder="Select date"
                      />
                      <img
                        src="/assets/img/icons/calendar.svg"
                        alt="Calendar icon"
                        className="cs_date_icon position-absolute"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5 position-relative">
                      <label htmlFor="time">Preferred Time</label>
                      <input
                        type="text"
                        name="time"
                        id="time"
                        className="cs_form_field"
                        placeholder="Select time"
                      />
                      <span className="cs_time_icon position-absolute"></span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="message">
                        Additional Notes (optional)
                      </label>
                      <textarea
                        name="message"
                        rows="3"
                        id="message"
                        className="cs_form_field"
                        placeholder="Describe your symptom here..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="cs_btn_style_2 cs_primary_color cs_semibold cs_radius_5"
                      disabled={appointmentForm.status === "sending"}
                    >
                      <span>
                        {appointmentForm.status === "sending"
                          ? "Sending..."
                          : "Confirm Appointment"}
                      </span>
                      <img
                        src="/assets/img/icons/arrow-right.svg"
                        alt="Arrow"
                      />
                    </button>
                    {appointmentForm.status === "success" && (
                      <p className="cs_fs_14 mb-0 cs_mt_12" style={{ color: "#1a7f37" }}>
                        Thanks! We'll contact you shortly.
                      </p>
                    )}
                    {appointmentForm.status === "error" && (
                      <p className="cs_fs_14 mb-0 cs_mt_12" style={{ color: "#c0392b" }}>
                        {appointmentForm.errorMessage || "Something went wrong. Please try again."}
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section — disabled per request
      <section className="cs_testimonial_section_1 cs_gray4_bg">
        <div className="container">
          <div className="row cs_gap_y_30">
            <div className="col-lg-6 order-lg-2">
              <div className="cs_testimonial_img position-relative">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="cs_radius_20"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                >
                  <source src={ASSETS.realStoryVideo} type="video/mp4" />
                </video>
                <div className="cs_ticker_container">
                  <div className="cs_ticker_1">
                    <div className="cs_ticker_in">
                      <div className="cs_ticker_content cs_ticker_items_list">
                        <div className="cs_ticker_item cs_fs_20 cs_semibold cs_white_color">
                          <span>Rated 4.9 out of 5 based on 5K+ reviews</span>
                          <img src="/assets/img/icons/star2.svg" alt="Star" />
                        </div>
                        <div className="cs_ticker_item cs_fs_20 cs_semibold cs_white_color">
                          <span>Rated 4.9 out of 5 based on 5K+ reviews</span>
                          <img src="/assets/img/icons/star2.svg" alt="Star" />
                        </div>
                      </div>
                      <div className="cs_ticker_content cs_ticker_items_list">
                        <div className="cs_ticker_item cs_fs_20 cs_semibold cs_white_color">
                          <span>Rated 4.9 out of 5 based on 5K+ reviews</span>
                          <img src="/assets/img/icons/star2.svg" alt="Star" />
                        </div>
                        <div className="cs_ticker_item cs_fs_20 cs_semibold cs_white_color">
                          <span>Rated 4.9 out of 5 based on 5K+ reviews</span>
                          <img src="/assets/img/icons/star2.svg" alt="Star" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_testimonial_content">
                <div className="cs_section_heading_style_1 cs_mb_12">
                  <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17 text-uppercase">
                    // Real stories· Real care
                  </p>
                  <h2 className="cs_section_title cs_fs_40 cs_bold mb-0">
                    What Our Patients Say About the Medicure Trip Experience
                  </h2>
                </div>

                <div className="cs_testimonial_slider_wrapper position-relative">
                  <Swiper
                    modules={[Navigation]}
                    onSwiper={(swiper) =>
                      (testimonialSwiperInstance.current = swiper)
                    }
                    slidesPerView={1}
                    loop={true}
                    speed={600}
                    effect="slide"
                  >
                    {testimonials.map((t, i) => (
                      <SwiperSlide key={i}>
                        <div className="cs_testimonial_style_1">
                          <div className="cs_testimonial_header cs_mb_24">
                            <span className="cs_quote_icon">
                              <img
                                src="/assets/img/quote.svg"
                                alt="Quote image"
                              />
                            </span>
                            <div className="cs_rating" data-rating="5">
                              <div className="cs_rating_percentage"></div>
                            </div>
                          </div>
                          <blockquote>"{t.quote}"</blockquote>
                          <div className="cs_testimonial_author">
                            <div className="cs_author_img">
                              <img
                                src={t.avatar}
                                alt={t.author}
                                className="cs_radius_50"
                              />
                            </div>
                            <div className="cs_author_info">
                              <h3 className="cs_author_name cs_fs_20 cs_bold cs_mb_12">
                                {t.author}
                              </h3>
                              <p className="cs_author_designation mb-0">
                                {t.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <div className="cs_controller_2">
                    <div
                      className="slider-prev"
                      onClick={() =>
                        testimonialSwiperInstance.current?.slidePrev()
                      }
                    >
                      <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <div
                      className="slider-next"
                      onClick={() =>
                        testimonialSwiperInstance.current?.slideNext()
                      }
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Blog Section */}
      <section className="cs_blog_section_1">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_48 text-center">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17 text-uppercase">
              // Latest news & Blogs
            </p>
            <h2 className="cs_section_title cs_fs_40 cs_bold mb-0">
              Patient Stories — Crafted by <br /> Our Medical Experts.
            </h2>
          </div>
          <div className="row cs_gap_y_24">
            {blogPosts.map((post, i) => (
              <div key={i} className="col-lg-4">
                <div className="cs_post_style_1">
                  <Link
                    to="/blog-details.html"
                    aria-label="Read the post details"
                    className="cs_post_img cs_radius_20 cs_mb_22 overflow-hidden"
                  >
                    <img src={post.img} alt="Post image" />
                    <span className="cs_post_category cs_fs_14">
                      {post.category}
                    </span>
                  </Link>
                  <div className="cs_post_info">
                    <div className="cs_post_meta_wrapper cs_mb_20">
                      <div className="cs_post_meta cs_fs_14">
                        <img
                          src="/assets/img/icons/calendar.svg"
                          alt="Calendar icon"
                        />
                        <span className="cs_posted_date">{post.date}</span>
                      </div>
                      <div className="cs_post_meta cs_fs_14">
                        <img
                          src="/assets/img/icons/time-line.svg"
                          alt="Timer icon"
                        />
                        <span className="cs_reading_duration">
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                    <h3 className="cs_post_title cs_fs_24 cs_medium cs_mb_48 cs_mb_lg_24">
                      <Link
                        to="/blog-details.html"
                        aria-label="Read the post details"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <div className="cs_post_author_read">
                      <div className="cs_post_author">
                        <span className="cs_author_icon cs_center cs_radius_50">
                          <img src="/assets/img/favicon.webp" alt="Author icon" />
                        </span>
                        <span className="cs_author_title">By Admin</span>
                      </div>
                      <Link
                        to="/blog-details.html"
                        aria-label="Read the post details"
                        className="cs_btn_style_2 cs_primary_color cs_semibold cs_radius_5"
                      >
                        <span>Read Full Story</span>
                        <img
                          src="/assets/img/icons/arrow-right.svg"
                          alt="Arrow"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll to Top */}
      <button
        type="button"
        id="scrollToTopBtn"
        className="cs_scrollup_btn"
        onClick={scrollToTop}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </main>
  );
};

export default Home;
