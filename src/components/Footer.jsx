import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="cs_footer_style_1 cs_primary_bg">
      <div className="cs_footer_main">
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-xl-4 col-lg-3 col-md-12">
              <div className="cs_footer_widget cs_text_widget">
                <div className="cs_footer_logo cs_mb_24 cs_mb_lg_20">
                  <img src="/assets/img/logo2.svg" alt="Medicure Trip Logo" />
                </div>
                <p className="cs_footer_desc cs_mb_24">Top medical treatments and tour packages in India for international patients, with a trusted network of top hospitals and expert doctors.</p>
                <h2 className="cs_social_heading cs_fs_24 cs_medium cs_white_color cs_mb_22">Social Media</h2>
                <div className="cs_social_btns_style_1">
                  <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                  <a href="#" aria-label="Twitter X"><i className="fa-brands fa-x-twitter"></i></a>
                  <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_medium cs_white_color cs_mb_24 cs_mb_lg_20">Quick Links</h2>
                <ul className="cs_footer_widget_nav cs_mp_0">
                  <li><Link to="/about-us.html">About Us</Link></li>
                  <li><Link to="/doctors.html">Partner Hospitals</Link></li>
                  <li><Link to="/services.html">Treatments</Link></li>
                  <li><Link to="/appointment.html">Free Consultation</Link></li>
                  <li><Link to="/faq.html">FAQ</Link></li>
                  <li><Link to="/testimonials.html">Patient Feedback</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_medium cs_white_color cs_mb_24 cs_mb_lg_20">Specialties</h2>
                <ul className="cs_footer_widget_nav cs_mp_0">
                  <li><Link to="/service-details.html">Organ Transplant</Link></li>
                  <li><Link to="/service-details.html">Cardiology</Link></li>
                  <li><Link to="/service-details.html">Neuro Surgery</Link></li>
                  <li><Link to="/service-details.html">Spine Surgery</Link></li>
                  <li><Link to="/service-details.html">Orthopedic</Link></li>
                  <li><Link to="/service-details.html">Cancer</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-5">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_medium cs_white_color cs_mb_24 cs_mb_lg_20">Get in Touch</h2>
                <ul className="cs_footer_contact cs_mp_0">
                  <li>
                    <img src="/assets/img/icons/location-pin.svg" alt="Location" className="cs_contact_icon" />
                    <div>
                      <span className="cs_fs_20 cs_bold cs_white_color cs_mb_6">Visit Us</span>
                      <p className="mb-0">Delhi, India</p>
                    </div>
                  </li>
                  <li>
                    <img src="/assets/img/icons/phone.svg" alt="Phone" className="cs_contact_icon" />
                    <div>
                      <a href="tel:9958192249" aria-label="Make phone call" className="cs_fs_20 cs_bold cs_white_color cs_mb_6">9958192249</a>
                      <p className="mb-0">Monday - Sunday (Working All Day)</p>
                    </div>
                  </li>
                  <li>
                    <img src="/assets/img/icons/emain.svg" alt="Email" className="cs_contact_icon" />
                    <div>
                      <a href="mailto:info@medicuretrip.com" aria-label="Send mail" className="cs_fs_20 cs_bold cs_white_color cs_mb_6">info@medicuretrip.com</a>
                      <p className="mb-0">Reply Within 2-4 Hours</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom">
        <div className="container">
          <div className="cs_newsletter_style_1 cs_accent_bg cs_radius_5 cs_mb_40">
            <div className="cs_newsletter_heading">
              <h2 className="cs_newsletter_title cs_fs_40 cs_semibold cs_white_color mb-0">Health Insights & Updates</h2>
              <p className="cs_newsletter_subtitle mb-0">Subscribe to receive wellness tips, free health checkup offers, and Medicure Trip news.</p>
            </div>
            <form className="cs_newsletter_form position-relative" onSubmit={e => e.preventDefault()}>
              <input type="email" name="email" className="cs_newsletter_inpu cs_white_bg cs_radius_5" placeholder="Enter your email address" autoComplete="off" />
              <button type="submit" aria-label="Sign up button" className="cs_btn_style_1 cs_primary_color cs_semibold cs_radius_5">
                <span><i className="fa-regular fa-paper-plane"></i></span>
                <span>Subscribe</span>
              </button>
            </form>
          </div>
          <div className="cs_footer_bottom_content">
            <p className="cs_footer_copyright mb-0">&copy; {year} <span className="cs_white_color">Medicure Trip</span>. All Rights Reserved.</p>
            <ul className="cs_footer_bottom_nav cs_mp_0">
              <li><Link to="/term-condition.html" aria-label="Terms of Use">Terms of Use</Link></li>
              <li><Link to="/privacy-policy.html" aria-label="Privacy Policy">Privacy Policy</Link></li>
              <li><Link to="/faq.html" aria-label="FAQ">FAQ</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
