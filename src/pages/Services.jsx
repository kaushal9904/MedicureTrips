import { Link } from 'react-router-dom';
import { useState } from 'react';
import { services } from '../data/services';

const Services = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const visibleServices = services.slice(0, visibleCount);
  const hasMore = visibleCount < services.length;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_page_header_video position-relative">
        <div className="cs_page_header_video_bg">
          <video autoPlay muted loop playsInline>
            <source src="/images/Services Main Banner.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Services</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Services</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="cs_services_section_5 slider-section" aria-label="Our services">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_type_3 cs_center_column mx-auto text-center cs_mb_48 cs_mb_lg_40">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17">// TREATMENTS</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Top-Notch Treatment Options for International Patients</h2>
          </div>
          <div className="row cs_gap_y_24 cs_mb_48 cs_mb_lg_40 justify-content-center">
            {visibleServices.map((service, i) => (
              <div key={i} className="col-xl-4 col-md-6">
                <div className="cs_service_card_4 cs_gray2_bg cs_radius_20">
                  <div className="cs_card_body">
                    <h3 className="cs_card_title cs_fs_24 cs_medium cs_mb_20 cs_mb_lg_12">
                      <Link to={`/service-details.html?slug=${service.slug}`}>{service.title}</Link>
                    </h3>
                    <p className="cs_card_desc cs_mb_24 cs_mb_lg_16">{service.desc}</p>
                    <ul className="cs_card_tags cs_mp_0 cs_mb_30 cs_mb_lg_24">
                      {service.tags.map((tag, j) => <li key={j}>{tag}</li>)}
                    </ul>
                  </div>
                  <Link to={`/service-details.html?slug=${service.slug}`} aria-label={`Open ${service.title}`} className="cs_card_img cs_radius_15">
                    <img src={service.img} alt={service.title} />
                    <span className="cs_card_btn cs_white_bg cs_center cs_radius_50">
                      <img src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {hasMore && (
            <div className="cs_center">
              <button type="button" className="cs_btn_style_2 cs_type_1 cs_primary_color cs_semibold cs_radius_5" onClick={() => setVisibleCount(services.length)}>
                <span>Load More</span>
                <img src="/assets/img/icons/loader-line.svg" alt="Loader icon" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="container">
          <div className="cs_cta_style_1 cs_radius_20 cs_bg_filed position-relative" style={{ backgroundImage: "url('/assets/img/cta_bg_2.webp')" }}>
            <div className="row cs_gap_y_30">
              <div className="col-lg-6">
                <div className="cs_cta_text">
                  <h2 className="cs_cta_title cs_fs_40 cs_semibold cs_mb_10">Need a Personalized Treatment Plan?</h2>
                  <p className="cs_cta_subtitle cs_mb_30">Our expert doctors are here to guide you with tailored care pathways & second opinions.</p>
                  <Link to="/appointment.html" aria-label="Book Free Consultation" className="cs_btn_style_1 cs_danger_bg cs_white_color cs_semibold cs_radius_5">
                    <img src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                    <span>Book Free Consultation</span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cs_cta_img">
                  <img src="/images/Personalized Treatment 1061x647.jpg" alt="Personalized Treatment" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="cs_feature_section_1">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center-column cs_mb_48 cs_mb_lg_40 text-center">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Why Choose Medicure Trip</h2>
          </div>
          <div className="row cs_gap_y_24">
            <div className="col-xl-3 col-md-6">
              <div className="cs_feature_card_1 cs_radius_20 cs_color_1">
                <div className="cs_feature_card_header cs_mb_24">
                  <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10"><img src="/assets/img/icons/heart2.svg" alt="Cutting-Edge icon" /></div>
                  <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Qualified Panel</h2>
                </div>
                <p className="cs_feature_desc mb-0">Premier surgeons & partner hospitals</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="cs_feature_card_1 cs_radius_20 cs_color_2">
                <div className="cs_feature_card_header cs_mb_24">
                  <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10"><img src="/assets/img/icons/line-chart.svg" alt="Specialists icon" /></div>
                  <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Affordability</h2>
                </div>
                <p className="cs_feature_desc mb-0">~30% of Western treatment costs</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="cs_feature_card_1 cs_radius_20 cs_color_3">
                <div className="cs_feature_card_header cs_mb_24">
                  <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10"><img src="/assets/img/icons/shield-cross-line.svg" alt="Minimal Wait icon" /></div>
                  <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">ISO 27001 Certified</h2>
                </div>
                <p className="cs_feature_desc mb-0">Your data & privacy, protected</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="cs_feature_card_1 cs_radius_20 cs_color_4">
                <div className="cs_feature_card_header cs_mb_24">
                  <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10"><img src="/assets/img/icons/team-line.svg" alt="Insurance icon" /></div>
                  <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">End-to-End Support</h2>
                </div>
                <p className="cs_feature_desc mb-0">Visa, travel, stay & recovery</p>
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

export default Services;
