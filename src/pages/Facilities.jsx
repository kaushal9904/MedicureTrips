import Link from '../components/TrackedLink';
const facilities = [
  {
    id: 1,
    img: '/assets/img/facility_img_1.webp',
    title: 'Advanced Surgical Suites',
    description: 'Our state-of-the-art operating rooms are equipped with the latest surgical technology, including robotic-assisted surgery systems, advanced imaging, and integrated monitoring for maximum precision and patient safety.',
  },
  {
    id: 2,
    img: '/assets/img/facility_img_2.webp',
    title: 'Intensive Care Unit (ICU)',
    description: 'A fully equipped 24/7 ICU with individual patient monitoring, ventilator support, and a dedicated team of intensivists and critical care nurses ensuring round-the-clock life-saving care.',
  },
  {
    id: 3,
    img: '/assets/img/facility_img_3.webp',
    title: 'Diagnostic Imaging Center',
    description: 'Comprehensive imaging services including 3T MRI, CT scan, digital X-ray, ultrasound, and mammography — all interpreted by board-certified radiologists for fast and accurate diagnosis.',
  },
  {
    id: 4,
    img: '/assets/img/facility_img_4.webp',
    title: 'Rehabilitation & Physiotherapy',
    description: 'A modern rehab center with hydrotherapy pools, exercise therapy stations, electrotherapy equipment, and trained physiotherapists providing personalized recovery programs.',
  },
  {
    id: 5,
    img: '/assets/img/facility_img_5.webp',
    title: 'Maternity & Neonatal Unit',
    description: 'Comfortable delivery suites, labor rooms, and a Level III NICU with specialized neonatologists ensuring the best care for mothers and newborns, including premature and high-risk infants.',
  },
  {
    id: 6,
    img: '/assets/img/facility_img_6.webp',
    title: 'Pharmacy & Medical Store',
    description: 'An in-house 24-hour pharmacy stocked with a wide range of medications, surgical supplies, and medical devices — providing convenient access to prescribed treatments for all patients.',
  },
];

const Facilities = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" style={{ backgroundImage: "url('/assets/img/page_header_bg.webp')" }}>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Our Facilities</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Facilities</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="cs_facilities_section">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column mx-auto text-center cs_mb_48 cs_mb_lg_40">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Equipped With Cutting-Edge Technology and Designed for Patient Comfort, Safety, and Faster Recovery</h2>
          </div>
          <div className="row cs_gap_y_24">
            {facilities.map((facility) => (
              <div key={facility.id} className="col-lg-4 col-md-6">
                <article className="cs_facility_card cs_radius_20 cs_gray2_bg">
                  <div className="cs_facility_img cs_radius_20 cs_mb_20">
                    <img src={facility.img} alt={facility.title} loading="lazy" decoding="async" />
                  </div>
                  <div className="cs_facility_body cs_px_24 cs_pb_30">
                    <h3 className="cs_facility_title cs_fs_22 cs_medium cs_mb_12">{facility.title}</h3>
                    <p className="cs_facility_desc cs_secondary_color cs_mb_20">{facility.description}</p>
                    <Link to="/services" className="cs_read_more cs_accent_color cs_fs_16 cs_semibold">
                      Learn More <img src="/assets/img/icons/arrow-right.svg" alt="Arrow" className="cs_read_more_icon" />
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="container">
          <div className="cs_cta_style_1 cs_radius_20 cs_bg_filed position-relative" style={{ backgroundImage: "url('/assets/img/cta_bg_2.webp')" }}>
            <div className="row cs_gap_y_30">
              <div className="col-lg-6">
                <div className="cs_cta_text">
                  <h2 className="cs_cta_title cs_fs_40 cs_semibold cs_mb_10">Experience World-Class Healthcare</h2>
                  <p className="cs_cta_subtitle cs_mb_30">Schedule a visit to our facility and see firsthand the advanced technology and compassionate care that sets Medicure Trip apart.</p>
                  <Link to="/appointment" aria-label="Book a Visit" className="cs_btn_style_1 cs_danger_bg cs_white_color cs_semibold cs_radius_5">
                    <img src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                    <span>Book a Visit</span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cs_cta_icon_panel cs_radius_20 position-relative">
                  <i className="fa-solid fa-hospital"></i>
                  <span className="cs_cta_icon_panel_shape cs_cta_icon_panel_shape_1"></span>
                  <span className="cs_cta_icon_panel_shape cs_cta_icon_panel_shape_2"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="cs_feature_section_1">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center-column cs_mb_48 cs_mb_lg_40 text-center">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Why Our Facilities Stand Out</h2>
          </div>
          <div className="row cs_gap_y_24">
            <div className="col-xl-3 col-md-6">
              <div className="cs_feature_card_1 cs_radius_20 cs_color_1">
                <div className="cs_feature_card_header cs_mb_24">
                  <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10"><img src="/assets/img/icons/heart2.svg" alt="Technology icon" /></div>
                  <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Latest Technology</h2>
                </div>
                <p className="cs_feature_desc mb-0">Robotic surgery, 3T MRI &amp; advanced imaging</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="cs_feature_card_1 cs_radius_20 cs_color_2">
                <div className="cs_feature_card_header cs_mb_24">
                  <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10"><img src="/assets/img/icons/line-chart.svg" alt="Clean icon" /></div>
                  <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Hygienic Environment</h2>
                </div>
                <p className="cs_feature_desc mb-0">International sterilization standards</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="cs_feature_card_1 cs_radius_20 cs_color_3">
                <div className="cs_feature_card_header cs_mb_24">
                  <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10"><img src="/assets/img/icons/shield-cross-line.svg" alt="Safety icon" /></div>
                  <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Patient Safety</h2>
                </div>
                <p className="cs_feature_desc mb-0">24/7 monitoring &amp; emergency protocols</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="cs_feature_card_1 cs_radius_20 cs_color_4">
                <div className="cs_feature_card_header cs_mb_24">
                  <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10"><img src="/assets/img/icons/team-line.svg" alt="Comfort icon" /></div>
                  <h2 className="cs_feature_title cs_fs_24 cs_medium mb-0">Patient Comfort</h2>
                </div>
                <p className="cs_feature_desc mb-0">Private rooms, WiFi &amp; concierge service</p>
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

export default Facilities;
