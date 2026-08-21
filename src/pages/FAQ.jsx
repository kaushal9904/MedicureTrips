import { Link } from 'react-router-dom';
import { useState } from 'react';

const faqCategories = [
  { id: 'general', label: 'General' },
  { id: 'appointments', label: 'Appointments' },
  { id: 'insurance', label: 'Insurance' },
  { id: 'services', label: 'Services' },
];

const faqs = [
  {
    id: 1,
    category: 'general',
    question: 'What are the hospital visiting hours?',
    answer: 'Our general visiting hours are Monday to Friday from 9:00 AM to 7:00 PM, Saturday from 9:00 AM to 4:00 PM, and Sunday is closed except for emergency on-call services. ICU visiting hours are limited to 11:00 AM - 1:00 PM and 5:00 PM - 7:00 PM daily.',
  },
  {
    id: 2,
    category: 'general',
    question: 'Is parking available at the hospital?',
    answer: 'Yes, we offer ample free parking for patients and visitors. Our multi-level parking garage is located adjacent to the main entrance and is accessible 24/7. Valet parking is also available during business hours at the main entrance.',
  },
  {
    id: 3,
    category: 'general',
    question: 'Does the hospital have an emergency department?',
    answer: 'Yes, our Level 1 Emergency & Trauma Center is open 24 hours a day, 7 days a week. Our emergency department is staffed with board-certified emergency physicians, trauma surgeons, and specialized nurses equipped to handle all types of medical emergencies.',
  },
  {
    id: 4,
    category: 'appointments',
    question: 'How do I schedule an appointment?',
    answer: 'You can schedule an appointment by calling our appointment line at 9958192249, using our online booking form on the website, or by visiting our outpatient department in person. Online booking is available 24/7 and you will receive a confirmation via email and SMS.',
  },
  {
    id: 5,
    category: 'appointments',
    question: 'Can I reschedule or cancel my appointment?',
    answer: 'Yes, you can reschedule or cancel your appointment up to 24 hours before your scheduled time without any charges. Please call our appointment desk or use the reschedule link in your confirmation email. Late cancellations may incur a nominal fee.',
  },
  {
    id: 6,
    category: 'appointments',
    question: 'What should I bring to my first appointment?',
    answer: 'Please bring a valid photo ID, your insurance card, a list of current medications, any relevant medical records or test results, and a referral letter if required by your insurance provider. Arriving 15 minutes early helps us complete your registration smoothly.',
  },
  {
    id: 7,
    category: 'insurance',
    question: 'Which insurance plans do you accept?',
    answer: 'We accept most major insurance plans including Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, Medicare, and Medicaid. We also offer cashless claim processing for select TPA partners. Please contact our insurance desk to verify your specific coverage before your visit.',
  },
  {
    id: 8,
    category: 'insurance',
    question: 'Do you offer cashless hospitalization?',
    answer: 'Yes, we have tie-ups with multiple insurance providers and TPAs for cashless hospitalization. You can request cashless admission by contacting our insurance desk with your policy details at least 24 hours before planned admission. Emergency cashless claims are also processed on priority.',
  },
  {
    id: 9,
    category: 'services',
    question: 'What diagnostic services are available?',
    answer: 'Our diagnostic center offers a comprehensive range of services including 3T MRI, CT scan, digital X-ray, ultrasound, mammography, DEXA scan, ECG, echocardiography, TMT, pulmonary function tests, and a full-service clinical laboratory for blood work and pathology.',
  },
  {
    id: 10,
    category: 'services',
    question: 'Do you provide home healthcare services?',
    answer: 'Yes, Medicure Trip offers home healthcare services including nurse visits, physiotherapy sessions, post-surgical care, elder care, and diagnostic sample collection. Our home care team consists of trained nurses and therapists who follow the same quality standards as our hospital services.',
  },
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openId, setOpenId] = useState(null);

  const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" style={{ backgroundImage: "url('/assets/img/page_header_bg.webp')" }}>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">FAQ</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">FAQ</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="cs_faq_section">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column mx-auto text-center cs_mb_48 cs_mb_lg_40">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Find Answers to Your Questions About Our Hospital, Services, Appointments, and Insurance</h2>
          </div>
          <div className="row cs_gap_y_40">
            {/* FAQ Image */}
            <div className="col-lg-5">
              <div className="cs_faq_img cs_radius_20 cs_mb_30 cs_mb-lg-0">
                <img src="/assets/img/faq_img_1.webp" alt="FAQ illustration" className="cs_radius_20" />
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="col-lg-7">
              {/* Category Tabs */}
              <div className="cs_faq_tabs cs_mb_30">
                {faqCategories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    className={`cs_faq_tab ${activeCategory === cat.id ? 'active' : ''}`}
                    onClick={() => { setActiveCategory(cat.id); setOpenId(null); }}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* FAQ Accordion */}
              <div className="cs_faq_accordion">
                {filteredFaqs.map((faq) => (
                  <div key={faq.id} className={`cs_faq_item ${openId === faq.id ? 'active' : ''}`}>
                    <button
                      type="button"
                      className="cs_faq_question"
                      onClick={() => toggleFaq(faq.id)}
                      aria-expanded={openId === faq.id}
                    >
                      <span className="cs_faq_question_text cs_fs_18 cs_semibold">{faq.question}</span>
                      <span className="cs_faq_icon">
                        <i className={`fa-solid ${openId === faq.id ? 'fa-minus' : 'fa-plus'}`}></i>
                      </span>
                    </button>
                    <div className="cs_faq_answer" style={{ maxHeight: openId === faq.id ? '500px' : '0' }}>
                      <p className="cs_faq_answer_text cs_secondary_color">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
                  <h2 className="cs_cta_title cs_fs_40 cs_semibold cs_mb_10">Still Have Questions?</h2>
                  <p className="cs_cta_subtitle cs_mb_30">Our team is here to help. Reach out to us directly and we'll get back to you with the answers you need.</p>
                  <Link to="/contact-us" aria-label="Contact Us" className="cs_btn_style_1 cs_danger_bg cs_white_color cs_semibold cs_radius_5">
                    <img src="/assets/img/icons/emain.svg" alt="Email icon" />
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cs_cta_img">
                  <img src="/assets/img/cta_img_2.webp" alt="Doctors Team" />
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

export default FAQ;
