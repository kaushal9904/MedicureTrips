import { Link } from 'react-router-dom';

const resources = [
  { title: 'Online Lab Reports', icon: 'fa-solid fa-flask', desc: 'Access your lab test results online anytime. Simply log in with your patient ID to view and download reports.', link: '#' },
  { title: 'Patient Forms', icon: 'fa-solid fa-file-lines', desc: 'Download and complete patient registration and medical history forms before your visit to save time.', link: '#' },
  { title: 'Insurance Information', icon: 'fa-solid fa-shield-halved', desc: 'View accepted insurance plans, pre-authorization requirements, and cashless claim processing details.', link: '#' },
  { title: 'Health Library', icon: 'fa-solid fa-book-medical', desc: 'Browse our comprehensive library of health articles, condition guides, and wellness resources.', link: '#' },
  { title: 'Patient Rights', icon: 'fa-solid fa-scale-balanced', desc: 'Learn about your rights as a patient including privacy, informed consent, and grievance procedures.', link: '#' },
];

const PatientResource = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" style={{ backgroundImage: "url('/assets/img/page_header_bg.webp')" }}>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Patient Resource</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Patient Resource</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="cs_patient_resource_section">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column mx-auto text-center cs_mb_48 cs_mb_lg_40">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Everything You Need for a Seamless Healthcare Experience</h2>
          </div>
          <div className="row cs_gap_y_30">
            {resources.map((res, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="cs_feature_card_1 cs_radius_20 cs_gray2_bg cs_h_100">
                  <div className="cs_feature_card_header cs_mb_20">
                    <div className="cs_feature_icon cs_white_bg cs_center cs_radius_10">
                      <i className={`${res.icon} cs_accent_color`}></i>
                    </div>
                    <h3 className="cs_feature_title cs_fs_24 cs_medium mb-0">{res.title}</h3>
                  </div>
                  <p className="cs_feature_desc mb-0 cs_mb_20">{res.desc}</p>
                  <Link to={res.link} className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5">
                    <span>Access Now</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="cs_patient_support_section cs_gray2_bg">
        <div className="container">
          <div className="row cs_gap_y_30 align-items-center">
            <div className="col-lg-6">
              <div className="cs_section_heading_style_1 cs_mb_24">
                <h2 className="cs_section_title cs_fs_40 cs_semibold cs_mb_6">Patient Support Contact</h2>
                <p className="cs_section_desc mb-0">Our dedicated patient support team is available to assist you with any questions about services, appointments, billing, or accessing your health records.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_patient_support_info cs_white_bg cs_radius_20 cs_p_40">
                <div className="cs_support_item cs_mb_20">
                  <div className="cs_support_icon cs_accent_bg cs_white_color cs_center cs_radius_10">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="cs_support_text">
                    <h4 className="cs_fs_18 cs_semibold cs_mb_4">Patient Helpdesk</h4>
                    <a href="tel:9958192249" className="cs_primary_color">9958192249</a>
                  </div>
                </div>
                <div className="cs_support_item cs_mb_20">
                  <div className="cs_support_icon cs_accent_bg cs_white_color cs_center cs_radius_10">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="cs_support_text">
                    <h4 className="cs_fs_18 cs_semibold cs_mb_4">Email Support</h4>
                    <a href="mailto:shivammehra20244@gmail.com" className="cs_primary_color">shivammehra20244@gmail.com</a>
                  </div>
                </div>
                <div className="cs_support_item">
                  <div className="cs_support_icon cs_accent_bg cs_white_color cs_center cs_radius_10">
                    <i className="fa-solid fa-clock"></i>
                  </div>
                  <div className="cs_support_text">
                    <h4 className="cs_fs_18 cs_semibold cs_mb_4">Support Hours</h4>
                    <p className="mb-0">Mon – Sat: 8:00 AM – 8:00 PM | Sun: 9:00 AM – 5:00 PM</p>
                  </div>
                </div>
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

export default PatientResource;
