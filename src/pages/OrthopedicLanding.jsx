import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useWeb3Form } from '../hooks/useWeb3Form';
import { costEstimates, formatUSD, formatRange } from '../data/costEstimates';
import './OrthopedicLanding.css';

const WHATSAPP_NUMBER = '919958192249';
const PHONE_TEL = '9958192249';
const PHONE_DISPLAY = '+91 99581 92249';

const ASSETS = {
  heroBg: '/images/Orthopedics-service 1321x523.jpg',
  whyImg: '/images/Orthopedic.jpg',
};

const procedureSlugs = ['orthopedic-surgery', 'single-knee-replacement', 'single-hip-replacement'];
const procedures = costEstimates.filter((item) => procedureSlugs.includes(item.slug));

const savingsPct = (india, usaMax) => Math.round((1 - india / usaMax) * 100);

const doctors = [
  {
    name: 'Dr. A. V. Gurava Reddy',
    hospital: 'KIMS Hospitals, Hyderabad',
    focus: 'Joint Replacement',
    img: '/images/Dr. A. V. Gurava Reddy.jpg',
  },
  {
    name: 'Dr. Ashok Rajgopal',
    hospital: 'Medanta – The Medicity, Gurugram',
    focus: 'Robotic Knee & Hip Replacement, Sports Injuries',
    img: '/images/Dr. Ashok Rajgopal.jpg',
  },
  {
    name: 'Dr. Dinshaw Pardiwala',
    hospital: 'Kokilaben Dhirubhai Ambani Hospital, Mumbai',
    focus: 'Sports Medicine, Arthroscopy',
    img: '/images/Dr. Dinshaw Pardiwala.jpg',
  },
  {
    name: 'Dr. IPS Oberoi',
    hospital: 'Artemis Hospital, Gurugram',
    focus: 'Joint Replacement, Arthroscopy, Sports Medicine',
    img: '/images/Dr. IPS Oberoi.jpg',
  },
  {
    name: 'Dr. Subhash Jangid',
    hospital: 'Fortis Memorial Research Institute, Gurugram',
    focus: 'Knee & Hip Replacement, Robotic Orthopedics',
    img: '/assets/img/team_img_20.webp',
  },
  {
    name: 'Dr. H. S. Chhabra',
    hospital: 'Indian Spinal Injuries Centre, New Delhi',
    focus: 'Complex Spine & Orthopedic Reconstruction',
    img: '/images/Dr. H. S. Chhabra.jpg',
  },
];

const whyChoose = [
  {
    icon: '/assets/img/icons/robotic-surgery.svg',
    title: 'Robotic-Assisted Precision',
    desc: 'Da Vinci & Mako robotic systems for millimeter-accurate implant placement and less tissue damage.',
  },
  {
    icon: '/assets/img/icons/hospital.svg',
    title: 'JCI & NABH Accredited',
    desc: 'Treatment only at internationally accredited hospitals meeting the same safety standards as the US and UK.',
  },
  {
    icon: '/assets/img/icons/time-line.svg',
    title: 'No Waiting Lists',
    desc: 'Surgery scheduled within days of your consultation — not the months-long queues common back home.',
  },
  {
    icon: '/assets/img/icons/price-tag.svg',
    title: 'Transparent, All-Inclusive Pricing',
    desc: 'One fixed quote covers surgery, implant, hospital stay and physiotherapy — no hidden bills.',
  },
  {
    icon: '/assets/img/icons/stethoscope.svg',
    title: 'Senior Surgeons, Not Trainees',
    desc: 'Every procedure is performed personally by a senior joint-replacement specialist with 15+ years experience.',
  },
  {
    icon: '/assets/img/icons/shield-cross-line.svg',
    title: 'Faster Recovery Protocols',
    desc: 'Minimally invasive technique plus structured physiotherapy gets most patients walking within 24-48 hours.',
  },
];

const process = [
  {
    step: '01',
    title: 'Free Consult & X-ray Review',
    desc: 'Share your reports via WhatsApp or the form below. Our orthopedic panel gives a diagnosis and fixed-price quote within 24-48 hours.',
  },
  {
    step: '02',
    title: 'Visa & Travel Planning',
    desc: 'We issue your hospital invitation letter and coordinate your medical visa, flights and airport pickup.',
  },
  {
    step: '03',
    title: 'Pre-Op Assessment',
    desc: 'Meet your surgeon in person on arrival and complete pre-surgical tests the same day.',
  },
  {
    step: '04',
    title: 'Robotic-Assisted Surgery',
    desc: 'Your procedure is performed by a senior surgeon with 24/7 nursing care through your hospital stay.',
  },
  {
    step: '05',
    title: 'Recovery & Follow-Up',
    desc: 'Structured in-hospital physiotherapy, plus remote follow-up sessions once you are back home.',
  },
];

const testimonials = [
  {
    quote: "I'd been told an 8-month wait for a knee replacement back home. Medicure Trip got me operated on within two weeks of my first call, by a surgeon who'd done thousands of these. I was walking with support the next day.",
    author: 'Margaret H.',
    role: 'Total Knee Replacement — United Kingdom',
    avatar: '/assets/img/avatar_4.webp',
  },
  {
    quote: 'The robotic hip replacement cost a fraction of the US quotes I received, and the hospital felt more like a 5-star clinic than what I expected. My care manager handled every detail from visa to physiotherapy.',
    author: 'Robert D.',
    role: 'Hip Replacement — United States',
    avatar: '/assets/img/avatar_5.webp',
  },
  {
    quote: "What impressed me most was the transparency — one quote, no surprise bills. Recovery has been faster than my doctor at home predicted, and the follow-up physio calls have continued even after I flew back.",
    author: 'Amina K.',
    role: 'Bilateral Knee Replacement — UAE',
    avatar: '/assets/img/avatar_1.webp',
  },
];

const faqs = [
  {
    q: 'Is robotic-assisted knee or hip replacement actually safer than traditional surgery?',
    a: 'Robotic guidance lets the surgeon place the implant with sub-millimeter accuracy and preserve more healthy bone and soft tissue than freehand techniques. Combined with senior surgeons who perform hundreds of these procedures a year, it typically means less blood loss, less post-op pain, and a faster return to walking.',
  },
  {
    q: 'How long do I need to stay in India for a joint replacement?',
    a: "Most patients plan for 12-16 days total: a few days for pre-op assessment, 3-5 days in hospital after surgery, and roughly a week of supervised physiotherapy before you're cleared to fly home. Your exact timeline is confirmed in your personalised quote.",
  },
  {
    q: "What's included in the quoted package price?",
    a: 'Your fixed quote covers the surgeon and surgery fee, the implant, operating theatre and anaesthesia charges, your hospital room stay, post-op medication, and an in-hospital physiotherapy program. International flights, hotel stay before/after hospital, and visa fees are quoted separately so there are no surprises.',
  },
  {
    q: 'Can a family member or companion stay with me?',
    a: 'Yes. We arrange an attendant visa and can book a companion room or nearby hotel for the person travelling with you, and our care manager keeps them updated throughout your surgery and recovery.',
  },
  {
    q: 'What happens if I have a complication after I return home?',
    a: 'Your surgeon and care manager remain reachable by phone and video call for post-op follow-up, and your complete medical records and imaging are handed over before you leave so any local doctor can pick up your case seamlessly if needed.',
  },
  {
    q: 'Do I need a medical visa, and will Medicure Trip help me get one?',
    a: "Yes, most international patients travel on an India Medical Visa. We provide the hospital invitation letter your embassy requires free of charge and guide you through the application step by step — see our full Medical Visa Guide for details.",
  },
];

const OrthopedicLanding = () => {
  const odometerRefs = useRef([]);
  const [openFaq, setOpenFaq] = useState(0);
  const quoteForm = useWeb3Form('Orthopedic Landing Page — Free Quote Form');

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
  const scrollToForm = (e) => {
    e.preventDefault();
    document.getElementById('ol-quote-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <main className="ol_page">
      {/* Hero */}
      <section className="ol_hero">
        <div className="ol_hero_bg" style={{ backgroundImage: `url('${ASSETS.heroBg}')` }} />
        <div className="container">
          <div className="row cs_gap_y_40 align-items-start">
            <div className="col-lg-6">
              <div className="ol_hero_content">
                <span className="ol_badge">
                  <i className="fa-solid fa-bone"></i> Orthopedic Care for International Patients
                </span>
                <h1 className="ol_hero_title">
                  Walk Pain-Free Again — World-Class Joint Replacement in India, Up to 90% Less Than the US &amp; UK
                </h1>
                <p className="ol_hero_desc">
                  Robotic-assisted knee &amp; hip replacement by senior orthopedic surgeons at JCI &amp; NABH
                  accredited hospitals — one transparent price, no waiting lists, full recovery support.
                </p>
                <ul className="ol_hero_trust_row">
                  <li><i className="fa-solid fa-shield-heart"></i> JCI &amp; NABH Accredited Hospitals</li>
                  <li><i className="fa-solid fa-robot"></i> Robotic-Assisted Surgery</li>
                  <li><i className="fa-solid fa-user-doctor"></i> 700+ Joint Replacements Performed</li>
                </ul>
                <div className="ol_hero_cta_row">
                  <a href="#ol-quote-form" onClick={scrollToForm} className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5">
                    <span><i className="fa-solid fa-stethoscope"></i></span>
                    <span>Get My Free Surgery Quote</span>
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I would like a free quote for orthopedic surgery in India.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ol_whatsapp_link"
                  >
                    <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                  </a>
                </div>
                <p className="ol_hero_phone">
                  <i className="fa-solid fa-phone"></i> Prefer to talk? Call{' '}
                  <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ol_quote_card" id="ol-quote-form">
                <div className="ol_quote_card_head">
                  <h3>Get a Free, No-Obligation Quote</h3>
                  <p>Free &middot; Confidential &middot; We reply within 24 hours</p>
                </div>
                <form className="ol_quote_form" onSubmit={quoteForm.handleSubmit}>
                  <div className="ol_form_row">
                    <label htmlFor="ol-name">Full Name</label>
                    <input type="text" id="ol-name" name="name" placeholder="Enter your name" autoComplete="off" required />
                  </div>
                  <div className="ol_form_row ol_form_row_half">
                    <div>
                      <label htmlFor="ol-phone">Phone / WhatsApp</label>
                      <input type="text" id="ol-phone" name="phone" placeholder="With country code" autoComplete="off" required />
                    </div>
                    <div>
                      <label htmlFor="ol-email">Email Address</label>
                      <input type="email" id="ol-email" name="email" placeholder="Enter your email" autoComplete="off" required />
                    </div>
                  </div>
                  <div className="ol_form_row">
                    <label htmlFor="ol-procedure">Procedure Needed</label>
                    <select id="ol-procedure" name="procedure" defaultValue="">
                      <option disabled value="">Select a procedure</option>
                      <option>Single Knee Replacement</option>
                      <option>Bilateral Knee Replacement</option>
                      <option>Hip Replacement</option>
                      <option>Sports Injury / Arthroscopy</option>
                      <option>Not sure yet — need advice</option>
                    </select>
                  </div>
                  <div className="ol_form_row">
                    <label htmlFor="ol-message">Tell us about your condition (optional)</label>
                    <textarea id="ol-message" name="message" rows="3" placeholder="e.g. diagnosis, X-ray findings, how long you've had pain..."></textarea>
                  </div>
                  <button type="submit" className="ol_form_submit" disabled={quoteForm.status === 'sending'}>
                    <span>{quoteForm.status === 'sending' ? 'Sending...' : 'Get My Free Quote'}</span>
                    <img src="/assets/img/icons/arrow-right.svg" alt="Arrow" />
                  </button>
                  <p className="ol_form_trust">
                    <i className="fa-solid fa-lock"></i> 100% Confidential
                    <span>&middot;</span>
                    <i className="fa-solid fa-bolt"></i> Reply within 24 hours
                  </p>
                  {quoteForm.status === 'success' && (
                    <p className="ol_form_status ol_form_status_success">Thanks! We'll contact you shortly.</p>
                  )}
                  {quoteForm.status === 'error' && (
                    <p className="ol_form_status ol_form_status_error">
                      {quoteForm.errorMessage || 'Something went wrong. Please try again.'}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stat Bar */}
      <section className="ol_stats">
        <div className="container">
          <div className="row cs_gap_y_24">
            <div className="col-lg-3 col-sm-6">
              <div className="ol_stat_item">
                <div className="ol_stat_number">
                  <span className="odometer" ref={(el) => el && (odometerRefs.current[0] = el)} data-count-to="700"></span>+
                </div>
                <div className="ol_stat_label">Joint Replacements Performed</div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="ol_stat_item">
                <div className="ol_stat_number">
                  <span className="odometer" ref={(el) => el && (odometerRefs.current[1] = el)} data-count-to="98"></span>%
                </div>
                <div className="ol_stat_label">Patient Satisfaction</div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="ol_stat_item">
                <div className="ol_stat_number">
                  <span className="odometer" ref={(el) => el && (odometerRefs.current[2] = el)} data-count-to="70"></span>%
                </div>
                <div className="ol_stat_label">Average Cost Savings</div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="ol_stat_item">
                <div className="ol_stat_number">
                  <span className="odometer" ref={(el) => el && (odometerRefs.current[3] = el)} data-count-to="15"></span>+
                </div>
                <div className="ol_stat_label">Partner Orthopedic Centers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="ol_pricing">
        <div className="container">
          <div className="ol_section_heading text-center">
            <span className="ol_pricing_badge">Cost Comparison</span>
            <h2>What You'll Pay in India vs. the USA &amp; UK</h2>
            <p>Same robotic technology, same implant brands, board-certified surgeons — at a fraction of the price.</p>
          </div>
          <div className="row cs_gap_y_24">
            {procedures.map((item) => (
              <div key={item.slug} className="col-lg-4 col-md-6">
                <div className="ol_price_card">
                  <span className="ol_price_ribbon">Save up to {savingsPct(item.india, item.usa[1])}%</span>
                  <div className="ol_price_card_header">
                    <span className="ol_price_icon"><i className={`fa-solid ${item.icon}`}></i></span>
                    <h3>{item.title}</h3>
                  </div>
                  <p className="ol_price_desc">{item.description}</p>
                  <div className="ol_price_row ol_price_row_india">
                    <span><span className="ol_dot ol_dot_india"></span>India</span>
                    <strong>From {formatUSD(item.india)}</strong>
                  </div>
                  <div className="ol_price_row">
                    <span><span className="ol_dot"></span>USA</span>
                    <span className="ol_price_muted">{formatRange(item.usa)}</span>
                  </div>
                  <div className="ol_price_row">
                    <span><span className="ol_dot"></span>UK</span>
                    <span className="ol_price_muted">{formatRange(item.uk)}</span>
                  </div>
                  <ul className="ol_price_includes">
                    {item.includes.map((inc, i) => (
                      <li key={i}><i className="fa-solid fa-circle-check"></i>{inc}</li>
                    ))}
                  </ul>
                  <a href="#ol-quote-form" onClick={scrollToForm} className="ol_price_cta">
                    Get Exact Quote <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="ol_pricing_disclaimer">
            <i className="fa-solid fa-circle-info"></i> Estimates are indicative based on published hospital rates;
            your final quote depends on diagnosis, implant choice and hospital selected. International travel,
            accommodation and visa fees are not included above.
          </p>
        </div>
      </section>

      {/* Doctors */}
      <section className="ol_doctors">
        <div className="container">
          <div className="ol_section_heading text-center">
            <h2>Meet India's Top Orthopedic Surgeons</h2>
            <p>Senior, internationally trained specialists — every surgery is performed by the named surgeon, not a trainee.</p>
          </div>
          <div className="row cs_gap_y_24">
            {doctors.map((doc, i) => (
              <div key={i} className="col-lg-4 col-sm-6">
                <div className="ol_doctor_card">
                  <div className="ol_doctor_img">
                    <img src={doc.img} alt={`${doc.name} photo`} loading="lazy" decoding="async" />
                  </div>
                  <div className="ol_doctor_info">
                    <h3>{doc.name}</h3>
                    <p className="ol_doctor_hospital">{doc.hospital}</p>
                    <p className="ol_doctor_focus">{doc.focus}</p>
                    <Link to="/contact-us.html" className="ol_doctor_cta">
                      <i className="fa-solid fa-calendar-check"></i> Book Consultation
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="ol_why">
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-lg-5">
              <div className="ol_why_img">
                <img src={ASSETS.whyImg} alt="Orthopedic surgical team at work" loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="ol_section_heading">
                <h2>Why International Patients Choose Us for Orthopedic Surgery</h2>
                <p>We don't just save you money — we remove every source of friction between you and a pain-free recovery.</p>
              </div>
              <div className="ol_why_grid">
                {whyChoose.map((item, i) => (
                  <div key={i} className="ol_why_card">
                    <span className="ol_why_icon"><img src={item.icon} alt="" /></span>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="ol_process">
        <div className="container">
          <div className="ol_section_heading text-center">
            <h2>Your Treatment Journey, Step by Step</h2>
            <p>From first message to walking pain-free — here's exactly what to expect.</p>
          </div>
          <div className="ol_process_track">
            {process.map((step, i) => (
              <div key={i} className="ol_process_step">
                <span className="ol_process_number">{step.step}</span>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="ol_testimonials">
        <div className="container">
          <div className="ol_section_heading text-center">
            <h2>What Our Orthopedic Patients Say</h2>
          </div>
          <div className="row cs_gap_y_24">
            {testimonials.map((t, i) => (
              <div key={i} className="col-lg-4">
                <div className="ol_testimonial_card">
                  <div className="cs_rating" data-rating="5"><div className="cs_rating_percentage"></div></div>
                  <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                  <div className="ol_testimonial_author">
                    <img src={t.avatar} alt={t.author} />
                    <div>
                      <h5>{t.author}</h5>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ol_faq">
        <div className="container">
          <div className="ol_section_heading text-center">
            <h2>Orthopedic Surgery in India — Your Questions Answered</h2>
          </div>
          <div className="ol_faq_list">
            {faqs.map((faq, i) => (
              <div key={i} className={`ol_faq_item ${openFaq === i ? 'active' : ''}`}>
                <button type="button" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}>
                  <span>{faq.q}</span>
                  <i className={`fa-solid ${openFaq === i ? 'fa-minus' : 'fa-plus'}`}></i>
                </button>
                <div className="ol_faq_answer" style={{ maxHeight: openFaq === i ? '400px' : '0' }}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="ol_final_cta">
        <div className="container">
          <div className="ol_final_cta_inner">
            <span className="ol_final_cta_urgency"><i className="fa-solid fa-clock"></i> Limited free video-consultation slots this month</span>
            <h2>Ready to Move Without Pain?</h2>
            <p>Get a free, no-obligation consultation and personalised quote from our orthopedic team today.</p>
            <div className="ol_final_cta_btns">
              <a href="#ol-quote-form" onClick={scrollToForm} className="cs_btn_style_1 cs_accent_bg cs_white_color cs_radius_5">
                <span><i className="fa-solid fa-stethoscope"></i></span>
                <span>Get My Free Quote</span>
              </a>
              <a href={`tel:${PHONE_TEL}`} className="ol_final_cta_call">
                <i className="fa-solid fa-phone"></i> {PHONE_DISPLAY}
              </a>
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

export default OrthopedicLanding;
