import { Link } from 'react-router-dom';

const sections = [
  { id: 'acceptance', title: '1. Acceptance of This Policy' },
  { id: 'data-collection', title: '2. Data Collection' },
  { id: 'use-of-data', title: '3. Use of Data' },
  { id: 'data-sharing', title: '4. Data Sharing' },
  { id: 'data-security', title: '5. Data Security' },
  { id: 'cookies', title:  '6. Cookies & Tracking' },
  { id: 'user-rights', title: '7. User Rights' },
  { id: 'changes', title: '8. Changes to This Policy' },
];

const PrivacyPolicy = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" style={{ backgroundImage: "url('/assets/img/page_header_bg.webp')" }}>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Privacy Policy</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Privacy Policy</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="cs_privacy_policy_section">
        <div className="container">
          <div className="row cs_gap_y_40">
            {/* Sidebar */}
            <div className="col-lg-4 order-lg-2">
              <aside className="cs_sidebar_style_1 cs_sticky_sidebar">
                <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20 cs_p_30">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_mb_20">On This Page</h3>
                  <ul className="cs_sidebar_nav cs_mp_0">
                    {sections.map((sec) => (
                      <li key={sec.id}>
                        <a href={`#${sec.id}`} className="cs_sidebar_link">
                          <i className="fa-solid fa-chevron-right cs_fs_12"></i>
                          <span>{sec.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>

            {/* Main Content */}
            <div className="col-lg-8">
              <div className="cs_privacy_content cs_white_bg cs_radius_20 cs_p_40">
                <div className="cs_privacy_meta cs_mb_30">
                  <p className="cs_fs_14 cs_secondary_color mb-0">
                    <i className="fa-solid fa-calendar-days cs_me_6"></i> Last Updated: January 01, 2026
                  </p>
                </div>

                <div className="cs_privacy_intro cs_mb_30">
                  <p className="cs_fs_16">At Medicure Trip, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, protect, and handle your personal information when you use our services, website, and digital platforms.</p>
                </div>

                <div id="acceptance" className="cs_policy_section cs_mb_30">
                  <h3 className="cs_fs_24 cs_semibold cs_mb_16">1. Acceptance of This Policy</h3>
                  <p className="cs_fs_16 cs_mb_12">By accessing or using our services, website, mobile application, or any digital platform operated by Medicure Trip, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.</p>
                  <p className="cs_fs_16">If you do not agree with any part of this policy, we advise you to discontinue use of our services immediately. Your continued use of our services constitutes ongoing acceptance of our privacy practices.</p>
                </div>

                <div id="data-collection" className="cs_policy_section cs_mb_30">
                  <h3 className="cs_fs_24 cs_semibold cs_mb_16">2. Data Collection</h3>
                  <p className="cs_fs_16 cs_mb_12">We may collect the following categories of personal data:</p>
                  <ul className="cs_policy_list cs_mb_12">
                    <li><strong>Personal Identification:</strong> Full name, date of birth, gender, address, phone number, email address, government-issued ID numbers.</li>
                    <li><strong>Medical Information:</strong> Health records, diagnosis, treatment history, prescriptions, lab results, insurance details.</li>
                    <li><strong>Financial Data:</strong> Payment information, insurance policy numbers, billing records, and transaction history.</li>
                    <li><strong>Technical Data:</strong> IP address, browser type, device information, operating system, cookies, and usage analytics.</li>
                    <li><strong>Communication Data:</strong> Emails, chat transcripts, feedback forms, and call recordings for quality assurance.</li>
                  </ul>
                  <p className="cs_fs_16">Data is collected through appointment forms, patient registration, website interactions, mobile applications, and direct communications with our staff.</p>
                </div>

                <div id="use-of-data" className="cs_policy_section cs_mb_30">
                  <h3 className="cs_fs_24 cs_semibold cs_mb_16">3. Use of Data</h3>
                  <p className="cs_fs_16 cs_mb_12">Your personal information is used for the following purposes:</p>
                  <ul className="cs_policy_list cs_mb_12">
                    <li>To provide and manage healthcare services including appointments, diagnoses, treatments, and follow-up care.</li>
                    <li>To process insurance claims and coordinate with third-party payers.</li>
                    <li>To send appointment reminders, lab report notifications, and health-related communications.</li>
                    <li>To improve our services, website functionality, and patient experience through analytics.</li>
                    <li>To comply with legal obligations, regulatory requirements, and accreditation standards.</li>
                    <li>To conduct research and quality improvement studies (with anonymized data where applicable).</li>
                    <li>To communicate about health campaigns, wellness programs, and hospital updates (with opt-out options).</li>
                  </ul>
                </div>

                <div id="data-sharing" className="cs_policy_section cs_mb_30">
                  <h3 className="cs_fs_24 cs_semibold cs_mb_16">4. Data Sharing</h3>
                  <p className="cs_fs_16 cs_mb_12">We do not sell your personal data. However, we may share information with:</p>
                  <ul className="cs_policy_list cs_mb_12">
                    <li><strong>Healthcare Providers:</strong> Specialists, laboratories, pharmacies, and allied health professionals involved in your care.</li>
                    <li><strong>Insurance Partners:</strong> For claim processing, pre-authorization, and billing coordination.</li>
                    <li><strong>Regulatory Bodies:</strong> When required by law, court orders, or regulatory compliance.</li>
                    <li><strong>Service Providers:</strong> IT infrastructure, cloud hosting, analytics tools, and communication platforms operating under strict data protection agreements.</li>
                    <li><strong>Emergency Situations:</strong> When disclosure is necessary to protect the life or health of the patient or others.</li>
                  </ul>
                  <p className="cs_fs_16">All third-party partners are contractually obligated to protect your data to the same standards outlined in this policy.</p>
                </div>

                <div id="data-security" className="cs_policy_section cs_mb_30">
                  <h3 className="cs_fs_24 cs_semibold cs_mb_16">5. Data Security</h3>
                  <p className="cs_fs_16 cs_mb_12">We implement robust security measures to safeguard your personal data, including:</p>
                  <ul className="cs_policy_list cs_mb_12">
                    <li>256-bit SSL encryption for all data in transit.</li>
                    <li>Encrypted storage for sensitive medical and financial records.</li>
                    <li>Multi-factor authentication for staff access to patient records.</li>
                    <li>Regular security audits, vulnerability assessments, and penetration testing.</li>
                    <li>Staff training on data protection, HIPAA compliance, and privacy best practices.</li>
                    <li>Incident response protocols for breach notification within 72 hours.</li>
                  </ul>
                  <p className="cs_fs_16">While we take every reasonable precaution, no method of transmission over the internet is 100% secure. We encourage patients to use strong passwords and keep their login credentials confidential.</p>
                </div>

                <div id="cookies" className="cs_policy_section cs_mb_30">
                  <h3 className="cs_fs_24 cs_semibold cs_mb_16">6. Cookies & Tracking</h3>
                  <p className="cs_fs_16 cs_mb_12">Our website uses cookies and similar tracking technologies to:</p>
                  <ul className="cs_policy_list cs_mb_12">
                    <li>Remember your preferences and settings for future visits.</li>
                    <li>Analyze website traffic patterns and user behavior to improve content.</li>
                    <li>Enable social media features and embedded content from third-party platforms.</li>
                    <li>Deliver relevant health content and personalized recommendations.</li>
                  </ul>
                  <p className="cs_fs_16">You can manage cookie preferences through your browser settings. Disabling cookies may affect certain website functionalities, including appointment booking and patient portal access.</p>
                </div>

                <div id="user-rights" className="cs_policy_section cs_mb_30">
                  <h3 className="cs_fs_24 cs_semibold cs_mb_16">7. User Rights</h3>
                  <p className="cs_fs_16 cs_mb_12">You have the following rights regarding your personal data:</p>
                  <ul className="cs_policy_list cs_mb_12">
                    <li><strong>Right to Access:</strong> Request a copy of all personal data we hold about you.</li>
                    <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                    <li><strong>Right to Deletion:</strong> Request deletion of your data, subject to legal and medical record retention requirements.</li>
                    <li><strong>Right to Opt-Out:</strong> Unsubscribe from marketing communications at any time.</li>
                    <li><strong>Right to Data Portability:</strong> Request your data in a structured, machine-readable format.</li>
                    <li><strong>Right to Lodge a Complaint:</strong> File a complaint with the relevant data protection authority if you believe your rights have been violated.</li>
                  </ul>
                  <p className="cs_fs_16">To exercise any of these rights, please contact our Data Protection Officer at <a href="mailto:shivammehra20244@gmail.com" className="cs_accent_color">shivammehra20244@gmail.com</a>.</p>
                </div>

                <div id="changes" className="cs_policy_section cs_mb_30">
                  <h3 className="cs_fs_24 cs_semibold cs_mb_16">8. Changes to This Policy</h3>
                  <p className="cs_fs_16 cs_mb_12">We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated "Last Updated" date. Material changes will be communicated via email to registered patients or through a prominent notice on our website.</p>
                  <p className="cs_fs_16">We encourage you to review this policy periodically. Your continued use of our services after changes are posted constitutes acceptance of the revised policy.</p>
                </div>

                <div className="cs_privacy_contact cs_accent_bg_light cs_radius_10 cs_p_24">
                  <h4 className="cs_fs_18 cs_semibold cs_mb_8">Questions About This Policy?</h4>
                  <p className="cs_fs_16 mb-0">Contact our Data Protection Officer at <a href="mailto:shivammehra20244@gmail.com" className="cs_accent_color cs_semibold">shivammehra20244@gmail.com</a> or call <a href="tel:9958192249" className="cs_accent_color cs_semibold">9958192249</a>.</p>
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

export default PrivacyPolicy;
