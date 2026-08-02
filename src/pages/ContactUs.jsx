import { Link } from 'react-router-dom';
import { useWeb3Form } from '../hooks/useWeb3Form';

const contactFeatures = [
  { title: 'Call Us', icon: '/assets/img/icons/phone.svg', text: '9958192249', sub: 'Monday - Sunday (All Day)', color: 'cs_color_1', link: 'tel:9958192249' },
  { title: 'Visit Us', icon: '/assets/img/icons/location-pin.svg', text: null, sub: 'Delhi, India', color: 'cs_color_2' },
  { title: 'Email Us', icon: '/assets/img/icons/emain.svg', text: 'shivammehra20244@gmail.com', sub: '24h response', color: 'cs_color_3', link: 'mailto:shivammehra20244@gmail.com' },
  { title: 'Free Consultation', icon: '/assets/img/icons/calendar.svg', text: '9958192249', sub: 'Monday - Sunday (All Day)', color: 'cs_color_4', link: 'tel:9958192249' },
];

const treatments = [
  { name: 'Organ Transplant' },
  { name: 'Cardiology' },
  { name: 'Neuro Surgery' },
  { name: 'Spine Surgery' },
  { name: 'Orthopedic' },
  { name: 'Urology' },
  { name: 'ENT' },
  { name: 'Plastic Surgery' },
  { name: 'Cancer' },
];

const ContactUs = () => {
  const contactForm = useWeb3Form('Contact Us Page — Message Form');
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Page Header */}
      <section className="cs_page_header_style_1 cs_page_header_video position-relative">
        <div className="cs_page_header_video_bg">
          <video autoPlay muted loop playsInline>
            <source src="/images/Contact Us Banner.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container">
          <div className="cs_page_header_in">
            <h1 className="cs_page_header_title cs_fs_60 cs_bold cs_mb_10">Contact Us</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb cs_breadcrumb mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="cs_support_section pb-0">
        <div className="container">
          <div className="cs_section_heading_style_1 cs_center-column mx-auto text-center cs_mb_48 cs_mb_lg_40">
            <p className="cs_section_subtitle cs_accent_color cs_fs_14 cs_mb_17">// Your Health Journey Starts Here!</p>
            <h2 className="cs_section_title cs_fs_40 cs_semibold mb-0">Whether You Have Questions or Are Ready to Begin Your Medical Journey, We're Here for You.</h2>
          </div>
          <div className="row cs_gap_y_24">
            {contactFeatures.map((feat, i) => (
              <div key={i} className="col-xl-3 col-md-6">
                <div className={`cs_feature_card_1 cs_radius_20 ${feat.color}`}>
                  <div className="cs_feature_card_header cs_mb_20">
                    <div className="cs_feature_icon cs_white_bg cs_radius_10 cs_center">
                      <img src={feat.icon} alt={`${feat.title} icon`} />
                    </div>
                    <h3 className="cs_feature_title cs_fs_24 cs_medium mb-0">{feat.title}</h3>
                  </div>
                  {feat.link ? <a href={feat.link}>{feat.text}</a> : null}
                  <p className="mb-0">{feat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="cs_contact_form_section pb-0">
        <div className="container">
          <div className="row cs_gap_y_30">
            <div className="col-xl-9 col-lg-8">
              <div className="cs_contact_form_wrap">
                <div className="cs_contact_form_heading cs_mb_48 cs_mb_lg_40">
                  <h2 className="cs_fs_40 cs_semibold cs_mb_12">Send us a Message</h2>
                  <p className="mb-0">Fill the form and we'll get back within 2 hours.</p>
                </div>
                <form className="cs_appointment_form_1 row cs_gap_y_24" onSubmit={contactForm.handleSubmit}>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="contact_name">Name</label>
                      <input type="text" name="name" id="contact_name" className="cs_form_field" placeholder="Enter your name" autoComplete="off" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="contact_email">Email</label>
                      <input type="email" name="email" id="contact_email" className="cs_form_field" placeholder="Enter your email" autoComplete="off" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="contact_phone">Phone</label>
                      <input type="text" name="phone" id="contact_phone" className="cs_form_field" placeholder="Enter your phone number" autoComplete="off" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="contact_department">Treatment</label>
                      <select className="cs_form_field cs_choice" name="department" id="contact_department" defaultValue="">
                        <option disabled value="">Select treatment</option>
                        {treatments.map((t, i) => <option key={i}>{t.name}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="cs_input_wrap cs_gray2_bg cs_radius_5">
                      <label htmlFor="contact_message">Message</label>
                      <textarea name="message" id="contact_message" rows="4" className="cs_form_field" placeholder="Write your Message here..."></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5" disabled={contactForm.status === 'sending'}>
                      <span>{contactForm.status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                      <img src="/assets/img/icons/arrow-right.svg" alt="Arrow icon" />
                    </button>
                    {contactForm.status === 'success' && <p className="cs_fs_14 mb-0 cs_mt_12" style={{ color: '#1a7f37' }}>Thanks! We'll get back to you within 2 hours.</p>}
                    {contactForm.status === 'error' && <p className="cs_fs_14 mb-0 cs_mt_12" style={{ color: '#c0392b' }}>Something went wrong. Please try again.</p>}
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <aside className="cs_sidebar_style_1">
                <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_mb_12">Treatments We Coordinate</h3>
                  <span className="cs_contact_sidebar_divider"></span>
                  <ul className="cs_contact_dept_list cs_mp_0">
                    {treatments.map((t, i) => (
                      <li key={i}><span>{t.name}</span></li>
                    ))}
                  </ul>
                </div>
                <div className="cs_sidebar_widget cs_gray2_bg cs_radius_20">
                  <h3 className="cs_widget_title cs_fs_20 cs_semibold cs_mb_12">Availability</h3>
                  <span className="cs_contact_sidebar_divider"></span>
                  <ul className="cs_contact_hours_list cs_mp_0">
                    <li><span>Mon–Sun:</span><span>Working All Day</span></li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Map */}
      <div className="cs_contact_map_section">
        <div className="container">
          <div className="cs_contact_map cs_radius_20">
            <iframe src="https://maps.google.com/maps?q=Delhi,India&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=&amp;output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen title="Medicure Trip location map"></iframe>
          </div>
        </div>
      </div>

      <button type="button" id="scrollToTopBtn" className="cs_scrollup_btn" onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </main>
  );
};

export default ContactUs;
