import { Link } from 'react-router-dom';
import { useState } from 'react';

const visaTypes = [
  {
    name: 'e-Medical Visa',
    icon: 'fa-passport',
    bestFor: 'Patients from an e-visa eligible country who want the fastest, fully online route',
    duration: 'Typically issued within a few working days',
    validity: 'Valid for 120 days from issue date, up to 3 entries, 60 days per visit',
  },
  {
    name: 'Regular Medical Visa',
    icon: 'fa-stamp',
    bestFor: 'Patients whose country isn’t e-visa eligible, or whose treatment spans several visits',
    duration: 'Processed through your nearest Indian embassy or consulate, usually 1–3 weeks',
    validity: 'Valid for up to 1 year with multiple entries, and extendable while in India',
  },
  {
    name: 'Medical Attendant Visa',
    icon: 'fa-user-group',
    bestFor: 'A spouse, parent, sibling or friend joining you for support during treatment',
    duration: 'Filed alongside the patient’s own visa application',
    validity: 'Runs on the same dates and duration as the patient’s medical visa',
  },
];

const steps = [
  { step: '01', title: 'Send Us Your Case', desc: 'Share your diagnosis, scans and medical history with our care team so we can match you to the right hospital and specialist.', icon: 'fa-file-medical' },
  { step: '02', title: 'Get Your Invitation Letter', desc: 'Once a hospital confirms your treatment plan, we request your official invitation letter on your behalf — this is the one document every India medical visa needs.', icon: 'fa-envelope-open-text' },
  { step: '03', title: 'Prepare Your Paperwork', desc: 'We walk you through every form and document on your checklist before you submit anything, so nothing bounces back for corrections.', icon: 'fa-folder-open' },
  { step: '04', title: 'Submit Your Application', desc: 'Apply through the government e-visa portal for an e-Medical Visa, or through your local Indian embassy for a regular medical visa.', icon: 'fa-passport' },
  { step: '05', title: 'Land And Get Settled', desc: 'We track your application status, and once your visa is stamped, arrange your airport pickup, local transport and hospital-side accommodation.', icon: 'fa-plane-arrival' },
];

const documents = [
  'A passport valid for at least 6 more months, with 2 blank visa pages',
  'One recent, passport-standard photograph',
  'Your hospital invitation letter — we obtain this for you',
  'Copies of your diagnostic reports and referring doctor’s letter',
  'Bank statement or sponsor letter showing funds for treatment and stay',
  'A recent utility bill or ID showing your current home address',
];

const faqs = [
  {
    q: 'How far in advance should I apply for an India medical visa?',
    a: 'Start the process 3–4 weeks before you plan to travel. Once your hospital confirms your treatment dates and issues your invitation letter, most patients are ready to submit their visa application within a week.',
  },
  {
    q: 'Can my spouse or a family member travel with me?',
    a: 'Yes — up to two people can join you on a Medical Attendant Visa, filed together with your own application and valid for the exact same period.',
  },
  {
    q: 'Is there a fee for Medicure Trip’s visa support?',
    a: 'No. Guiding you through the paperwork and arranging your hospital invitation letter is included in your treatment coordination at no extra charge — you only ever pay the government’s own visa fee.',
  },
  {
    q: 'Do children traveling with a patient need their own visa?',
    a: 'Yes, every traveler needs an individual visa, including infants and children. A minor usually applies under the same attendant category as the accompanying parent.',
  },
  {
    q: 'What happens if my treatment runs longer than expected?',
    a: 'If your doctor extends your recovery timeline, your hospital can support a visa extension application through India’s FRRO (Foreigners Regional Registration Office) — our coordinators help you file it.',
  },
];

const MedicalVisa = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_bg_filed" style={{ backgroundImage: "url('/assets/img/page_header_bg.webp')" }}>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">India Medical Visa Guide</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Medical Visa</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="cs_visa_intro_section">
        <div className="container">
          <div className="row cs_gap_y_30 align-items-center">
            <div className="col-lg-7">
              <div className="cs_section_heading_style_1 cs_mb_16">
                <span className="cs_cost_breakdown_badge">Visa &amp; Travel Support</span>
                <h2 className="cs_section_title cs_fs_40 cs_semibold cs_mt_16 cs_mb_16">Applying For An India Medical Visa, Made Simple</h2>
                <p className="cs_section_desc mb-0">International patients need a valid medical visa to receive treatment in India. The paperwork looks intimidating on paper, but with a confirmed hospital and the right documents in hand, most applications move quickly. Our patient coordinators handle the part that trips people up most — securing your hospital invitation letter — at no cost to you.</p>
              </div>
              <ul className="cs_visa_highlight_list cs_mp_0">
                <li><i className="fa-solid fa-circle-check"></i><span>Hospital invitation letters arranged on your behalf, free of charge</span></li>
                <li><i className="fa-solid fa-circle-check"></i><span>A plain-language document checklist before you file anything</span></li>
                <li><i className="fa-solid fa-circle-check"></i><span>Attendant visa guidance for up to two accompanying family members</span></li>
              </ul>
            </div>
            <div className="col-lg-5">
              <div className="cs_visa_intro_card cs_radius_20 cs_accent_bg cs_white_color text-center">
                <i className="fa-solid fa-passport cs_visa_intro_icon"></i>
                <h3 className="cs_fs_24 cs_semibold cs_white_color cs_mb_10">Waiting On An Invitation Letter?</h3>
                <p className="cs_white_color mb-0 cs_mb_20">Send us your reports and we'll request it from your matched hospital as part of your treatment plan.</p>
                <Link to="/appointment" className="cs_btn_style_1 cs_white_bg cs_primary_color cs_semibold cs_radius_5">
                  <span>Talk To A Coordinator</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Types Section */}
      <section className="cs_visa_types_section cs_gray2_bg">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column mx-auto text-center cs_mb_48 cs_mb_lg_40">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Which India Medical Visa Applies To You?</h2>
            <p className="cs_section_desc mb-0 cs_mt_16">India issues three visa categories for treatment-related travel. Your nationality and treatment plan decide which one you'll need — our team confirms it once we have your details.</p>
          </div>
          <div className="row cs_gap_y_24">
            {visaTypes.map((visa, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="cs_visa_type_card cs_white_bg cs_radius_20 cs_h_100">
                  <div className="cs_visa_type_icon cs_accent_bg cs_white_color cs_center cs_radius_50">
                    <i className={`fa-solid ${visa.icon}`}></i>
                  </div>
                  <h3 className="cs_fs_22 cs_semibold cs_mb_16 cs_mt_20">{visa.name}</h3>
                  <div className="cs_visa_type_row">
                    <span className="cs_visa_type_label">Best For</span>
                    <p className="mb-0">{visa.bestFor}</p>
                  </div>
                  <div className="cs_visa_type_row">
                    <span className="cs_visa_type_label">Processing Time</span>
                    <p className="mb-0">{visa.duration}</p>
                  </div>
                  <div className="cs_visa_type_row">
                    <span className="cs_visa_type_label">Validity</span>
                    <p className="mb-0">{visa.validity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="cs_visa_eligibility_note text-center">
            <i className="fa-solid fa-circle-info"></i>
            e-Medical Visa eligibility depends on your passport's country of issue and changes from time to time. Tell our coordinators your nationality and travel dates, and we'll confirm the exact route open to you before you start any paperwork.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="cs_process_section_2">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column cs_mb_50 text-center">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">How We Coordinate Your Visa, Start To Finish</h2>
          </div>
          <div className="row cs_gap_y_30">
            {steps.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="cs_process_card cs_radius_20 text-center cs_mb_24">
                  <div className="cs_process_icon cs_accent_bg cs_white_color cs_center cs_radius_50 cs_mb_24">
                    <i className={`fa-solid ${item.icon} cs_fs_24`}></i>
                  </div>
                  <div className="cs_process_step cs_accent_color cs_fs_14 cs_semibold">STEP {item.step}</div>
                  <h3 className="cs_process_title cs_fs_24 cs_semibold cs_mb_12">{item.title}</h3>
                  <p className="cs_process_desc mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Checklist */}
      <section className="cs_visa_docs_section cs_gray2_bg">
        <div className="container">
          <div className="row cs_gap_y_30 align-items-center">
            <div className="col-lg-6">
              <div className="cs_section_heading_style_1 cs_mb_24">
                <h2 className="cs_section_title cs_fs_40 cs_semibold cs_mb_10">What You'll Need To Apply</h2>
                <p className="cs_section_desc mb-0">This is the core paperwork every India medical visa application asks for. Our coordinators review each document with you before submission, so incomplete paperwork never holds up your travel dates.</p>
              </div>
              <Link to="/contact-us" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5">
                <img src="/assets/img/icons/emain.svg" alt="Email icon" />
                <span>Ask About Your Documents</span>
              </Link>
            </div>
            <div className="col-lg-6">
              <ul className="cs_visa_doc_list cs_white_bg cs_radius_20 cs_mp_0">
                {documents.map((doc, i) => (
                  <li key={i}>
                    <span className="cs_visa_doc_icon"><i className="fa-solid fa-check"></i></span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why coordination matters — SEO body copy */}
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h2 className="cs_fs_28 cs_semibold cs_mb_16">Why Most Medical Visa Delays Are Avoidable</h2>
              <p className="cs_secondary_color">
                The single biggest reason a medical visa application stalls isn't the embassy — it's a missing or mismatched document discovered after submission. A passport nearing expiry, a hospital letter that doesn't match the treatment dates on the application, or a referral letter that's too vague about the diagnosis can all send a case back for correction and cost you a week or more.
              </p>
              <p className="cs_secondary_color mb-0">
                Because we're coordinating your hospital admission and your visa paperwork at the same time, we catch these mismatches before you file rather than after. Your invitation letter, treatment dates and travel plan stay consistent from the first document to the last, which is what actually keeps an India medical visa application moving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="cs_faq_section">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center_column mx-auto text-center cs_mb_48 cs_mb_lg_40">
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Common Questions About The India Medical Visa</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="cs_faq_accordion">
                {faqs.map((faq, i) => (
                  <div key={i} className={`cs_faq_item ${openFaq === i ? 'active' : ''}`}>
                    <button
                      type="button"
                      className="cs_faq_question"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                    >
                      <span className="cs_faq_question_text cs_fs_18 cs_semibold">{faq.q}</span>
                      <span className="cs_faq_icon">
                        <i className={`fa-solid ${openFaq === i ? 'fa-minus' : 'fa-plus'}`}></i>
                      </span>
                    </button>
                    <div className="cs_faq_answer" style={{ maxHeight: openFaq === i ? '500px' : '0' }}>
                      <p className="cs_faq_answer_text cs_secondary_color">{faq.a}</p>
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
                  <h2 className="cs_cta_title cs_fs_40 cs_semibold cs_mb_10">Let's Get Your Visa Moving</h2>
                  <p className="cs_cta_subtitle cs_mb_30">Send over your medical reports and preferred travel window — we'll confirm your visa category and start your hospital invitation letter right away.</p>
                  <Link to="/appointment" aria-label="Book a Free Consultation" className="cs_btn_style_1 cs_danger_bg cs_white_color cs_semibold cs_radius_5">
                    <img src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                    <span>Book Free Consultation</span>
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

export default MedicalVisa;
