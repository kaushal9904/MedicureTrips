import Link from '../components/TrackedLink';
const sections = [
  { id: 'acceptance', title: '1. Acceptance of Terms' },
  { id: 'medical-services', title: '2. Medical Services & Use' },
  { id: 'telehealth', title: '3. Telehealth & Online Consultations' },
  { id: 'appointments', title: '4. Appointments & Cancellations' },
  { id: 'privacy', title: '5. Privacy & Data Protection' },
  { id: 'payments', title: '6. Payments & Insurance' },
  { id: 'liability', title: '7. Limitation of Liability' },
  { id: 'modifications', title: '8. Modifications & Contact' },
];

const TermCondition = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" style={{ backgroundImage: "url('/assets/img/page_header_bg.webp')" }}>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Terms & Conditions</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Terms & Conditions</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Content */}
      <section className="cs_terms_section">
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
              <div className="cs_terms_content cs_white_bg cs_radius_20 cs_p_40">
                <div className="cs_terms_meta cs_mb_30">
                  <p className="cs_fs_14 cs_secondary_color mb-0">
                    <i className="fa-solid fa-calendar-days cs_me_6"></i> Last Updated: June 06, 2026
                  </p>
                </div>

                <div className="cs_terms_intro cs_mb_30">
                  <p className="cs_fs_16">These Terms and Conditions govern your use of the services, website, and digital platforms provided by Medicure Trip. By accessing or using our services, you agree to be bound by these terms.</p>
                </div>

                <div id="acceptance" className="cs_policy_section cs_mb_30">
                  <h3 className="cs_fs_24 cs_semibold cs_mb_16">1. Acceptance of Terms</h3>
                  <p className="cs_fs_16 cs_mb_12">By accessing or using any service provided by Medicure Trip — including our website, mobile application, patient portal, telehealth platform, or in-person services — you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>
                  <p className="cs_fs_16">If you are accepting these terms on behalf of a minor or another individual, you represent that you have the legal authority to do so. If you do not agree with any part of these terms, you must immediately discontinue use of our services.</p>
                </div>

                <div id="medical-services" className="cs_policy_section cs_mb_30">
                  <h3 className="cs_fs_24 cs_semibold cs_mb_16">2. Medical Services & Use</h3>
                  <p className="cs_fs_16 cs_mb_12">Medicure Trip provides a range of medical services including consultations, diagnostics, treatments, surgical procedures, pharmacy services, and wellness programs. All services are delivered by qualified, licensed medical professionals in accordance with applicable healthcare regulations.</p>
                  <ul className="cs_policy_list cs_mb_12">
                    <li>Services are subject to availability and may be modified without prior notice.</li>
                    <li>Medical advice provided through our platforms does not replace an in-person consultation for emergency conditions.</li>
                    <li>Patients are responsible for providing accurate and complete medical history information.</li>
                    <li>Medicure Trip reserves the right to decline service in cases of medical contraindications or inappropriate use.</li>
                    <li>All medical records are maintained in compliance with applicable healthcare data regulations.</li>
                  </ul>
                </div>

                <div id="telehealth" className="cs_policy_section cs_mb_30">
                  <div className="cs_warning_note cs_accent_bg_light cs_radius_10 cs_p_20 cs_mb_16">
                    <i className="fa-solid fa-triangle-exclamation cs_accent_color cs_me_8"></i>
                    <span className="cs_fs_14 cs_semibold">Important: Telehealth services are not a substitute for emergency care. If you are experiencing a medical emergency, please call 911 or visit your nearest emergency department immediately.</span>
                  </div>
                  <h3 className="cs_fs_24 cs_semibold cs_mb_16">3. Telehealth & Online Consultations</h3>
                  <p className="cs_fs_16 cs_mb_12">Medicure Trip offers telehealth consultation services for non-emergency medical conditions. By using our telehealth platform, you acknowledge and agree to the following:</p>
                  <ul className="cs_policy_list cs_mb_12">
                    <li>Telehealth consultations are conducted via secure, HIPAA-compliant video and messaging platforms.</li>
                    <li>Technical requirements include a stable internet connection, compatible device, and a private environment.</li>
                    <li>The healthcare provider may determine that your condition is not suitable for telehealth and recommend an in-person visit.</li>
                    <li>Prescriptions issued via telehealth are subject to state and federal pharmacy regulations.</li>
                    <li>Telehealth records are maintained as part of your complete medical file.</li>
                    <li>Insurance coverage for telehealth services varies by plan. Patients should verify coverage before scheduling.</li>
                  </ul>
                </div>

                <div id="appointments" className="cs_policy_section cs_mb_30">
                  <h3 className="cs_fs_24 cs_semibold cs_mb_16">4. Appointments & Cancellations</h3>
                  <p className="cs_fs_16 cs_mb_12">Our appointment policies are designed to ensure efficient use of medical resources and quality care for all patients:</p>
                  <ul className="cs_policy_list cs_mb_12">
                    <li><strong>Scheduling:</strong> Appointments can be booked online, by phone, or in person. Online bookings are confirmed via email and SMS.</li>
                    <li><strong>Cancellation:</strong> Cancellations must be made at least 24 hours before the scheduled appointment time. Late cancellations may incur a fee.</li>
                    <li><strong>No-Show Policy:</strong> Patients who miss appointments without prior notice may be subject to a no-show fee and may be required to prepay for future appointments.</li>
                    <li><strong>Rescheduling:</strong> Patients may reschedule appointments up to 2 hours before the scheduled time without penalty through the patient portal or by calling our appointment desk.</li>
                    <li><strong>Late Arrivals:</strong> Arriving more than 15 minutes late may result in reduced consultation time or the need to reschedule.</li>
                  </ul>
                </div>

                <div id="privacy" className="cs_policy_section cs_mb_30">
                  <h3 className="cs_fs_24 cs_semibold cs_mb_16">5. Privacy & Data Protection</h3>
                  <p className="cs_fs_16 cs_mb_12">Your privacy is fundamental to our practice. Our collection, use, and protection of your personal and medical information is governed by our <Link to="/privacy-policy" className="cs_accent_color cs_semibold">Privacy Policy</Link>, which is incorporated into these Terms by reference.</p>
                  <ul className="cs_policy_list cs_mb_12">
                    <li>We comply with all applicable data protection laws, including HIPAA, HITECH, and state privacy regulations.</li>
                    <li>Medical records are stored securely and access is restricted to authorized healthcare personnel.</li>
                    <li>Patient data is never sold to third parties for marketing purposes.</li>
                    <li>You have the right to request access to, correction of, or deletion of your personal data, subject to legal retention requirements.</li>
                  </ul>
                </div>

                <div id="payments" className="cs_policy_section cs_mb_30">
                  <h3 className="cs_fs_24 cs_semibold cs_mb_16">6. Payments & Insurance</h3>
                  <p className="cs_fs_16 cs_mb_12">Payment for services is expected at the time of service unless alternative arrangements have been made:</p>
                  <ul className="cs_policy_list cs_mb_12">
                    <li>We accept major credit/debit cards, cash, checks, and electronic transfers.</li>
                    <li>Insurance claims are filed as a courtesy; however, patients are ultimately responsible for all charges.</li>
                    <li>Out-of-pocket costs, co-pays, and deductibles are due at the time of service.</li>
                    <li>Payment plans may be available for qualifying patients upon request and approval by our billing department.</li>
                    <li>Unpaid balances may be referred to a collections agency after 90 days of non-payment.</li>
                    <li>Fee schedules are subject to change; patients will be notified of any changes affecting scheduled services.</li>
                  </ul>
                </div>

                <div id="liability" className="cs_policy_section cs_mb_30">
                  <div className="cs_info_note cs_accent_bg_light cs_radius_10 cs_p_20 cs_mb_16">
                    <i className="fa-solid fa-circle-info cs_accent_color cs_me_8"></i>
                    <span className="cs_fs_14">This section outlines the limits of Medicure Trip's liability. Please read carefully to understand your rights and our obligations.</span>
                  </div>
                  <h3 className="cs_fs_24 cs_semibold cs_mb_16">7. Limitation of Liability</h3>
                  <p className="cs_fs_16 cs_mb_12">While we strive to provide the highest standard of care, certain limitations apply:</p>
                  <ul className="cs_policy_list cs_mb_12">
                    <li>Medicure Trip shall not be liable for any indirect, incidental, consequential, or punitive damages arising from use of our services.</li>
                    <li>Our liability for medical malpractice claims is limited to the extent permitted by applicable law.</li>
                    <li>We are not responsible for outcomes resulting from incomplete or inaccurate patient-provided information.</li>
                    <li>Third-party services, products, or links accessed through our platforms are not under our control or endorsement.</li>
                    <li>Force majeure events (natural disasters, pandemics, system failures) may affect service availability; we will not be liable for resulting delays or disruptions.</li>
                    <li>Our total aggregate liability for any claim shall not exceed the amount paid by the patient for the specific service in question.</li>
                  </ul>
                </div>

                <div id="modifications" className="cs_policy_section cs_mb_30">
                  <h3 className="cs_fs_24 cs_semibold cs_mb_16">8. Modifications & Contact</h3>
                  <p className="cs_fs_16 cs_mb_12">Medicure Trip reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on this page with an updated "Last Updated" date. Material changes will be communicated to registered patients via email or through a notice on our website.</p>
                  <p className="cs_fs_16 cs_mb_12">Your continued use of our services after any modifications constitutes acceptance of the revised terms. We encourage you to review these terms periodically.</p>
                  <p className="cs_fs_16">For questions, concerns, or requests related to these Terms and Conditions, please contact:</p>
                  <div className="cs_contact_info_box cs_gray2_bg cs_radius_10 cs_p_20 cs_mt_12">
                    <p className="cs_fs_16 mb-4"><strong>Medicure Trip – Legal Department</strong></p>
                    <p className="cs_fs_16 mb-4"><i className="fa-solid fa-location-dot cs_accent_color cs_me_8"></i> 58 Blue Spruce Lane, Baltimore, MD 2321</p>
                    <p className="cs_fs_16 mb-4"><i className="fa-solid fa-envelope cs_accent_color cs_me_8"></i> <a href="mailto:shivammehra20244@gmail.com" className="cs_accent_color">shivammehra20244@gmail.com</a></p>
                    <p className="cs_fs_16 mb-0"><i className="fa-solid fa-phone cs_accent_color cs_me_8"></i> <a href="tel:9958192249" className="cs_accent_color">9958192249</a></p>
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

export default TermCondition;
