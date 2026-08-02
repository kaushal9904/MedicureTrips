import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { submitToWeb3Forms } from '../lib/web3forms'

export default function Footer() {
  const { t } = useTranslation()
  const location = useLocation()
  const year = new Date().getFullYear()
  const [newsletterStatus, setNewsletterStatus] = useState('idle') // idle | sending | success | error
  const [newsletterError, setNewsletterError] = useState('')

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    setNewsletterStatus('sending')
    try {
      const result = await submitToWeb3Forms(e.target, `Newsletter Signup — ${location.pathname}`)
      if (result.success) {
        setNewsletterStatus('success')
        e.target.reset()
      } else {
        setNewsletterError(result.message || '')
        setNewsletterStatus('error')
      }
    } catch (err) {
      console.error('[web3forms] network/unexpected error:', err)
      setNewsletterError(err?.message || '')
      setNewsletterStatus('error')
    }
  }

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
                <p className="cs_footer_desc cs_mb_24">{t('footer.desc')}</p>
                <h2 className="cs_social_heading cs_fs_24 cs_medium cs_white_color cs_mb_22">{t('footer.socialMedia')}</h2>
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
                <h2 className="cs_footer_widget_title cs_fs_24 cs_medium cs_white_color cs_mb_24 cs_mb_lg_20">{t('footer.quickLinks')}</h2>
                <ul className="cs_footer_widget_nav cs_mp_0">
                  <li><Link to="/about-us.html">{t('footer.links.aboutUs')}</Link></li>
                  <li><Link to="/doctors.html">{t('footer.links.partnerHospitals')}</Link></li>
                  <li><Link to="/services.html">{t('footer.links.treatments')}</Link></li>
                  <li><Link to="/appointment.html">{t('footer.links.freeConsultation')}</Link></li>
                  <li><Link to="/faq.html">{t('footer.links.faq')}</Link></li>
                  <li><Link to="/testimonials.html">{t('footer.links.patientFeedback')}</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_medium cs_white_color cs_mb_24 cs_mb_lg_20">{t('footer.specialtiesTitle')}</h2>
                <ul className="cs_footer_widget_nav cs_mp_0">
                  <li><Link to="/service-details.html?slug=organ-transplant">{t('footer.spec.organTransplant')}</Link></li>
                  <li><Link to="/service-details.html?slug=cardiology">{t('footer.spec.cardiology')}</Link></li>
                  <li><Link to="/service-details.html?slug=neuro-surgery">{t('footer.spec.neuroSurgery')}</Link></li>
                  <li><Link to="/service-details.html?slug=spine-surgery">{t('footer.spec.spineSurgery')}</Link></li>
                  <li><Link to="/service-details.html?slug=orthopedic">{t('footer.spec.orthopedic')}</Link></li>
                  <li><Link to="/service-details.html?slug=cancer">{t('footer.spec.cancer')}</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-5">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_medium cs_white_color cs_mb_24 cs_mb_lg_20">{t('footer.getInTouch')}</h2>
                <ul className="cs_footer_contact cs_mp_0">
                  <li>
                    <img src="/assets/img/icons/location-pin.svg" alt="Location" className="cs_contact_icon" />
                    <div>
                      <span className="cs_fs_20 cs_bold cs_white_color cs_mb_6">{t('footer.visitUs')}</span>
                      <p className="mb-0">{t('footer.visitUsSub')}</p>
                    </div>
                  </li>
                  <li>
                    <img src="/assets/img/icons/phone.svg" alt="Phone" className="cs_contact_icon" />
                    <div>
                      <a href="tel:9958192249" aria-label="Make phone call" className="cs_fs_20 cs_bold cs_white_color cs_mb_6">9958192249</a>
                      <p className="mb-0">{t('footer.callSub')}</p>
                    </div>
                  </li>
                  <li>
                    <img src="/assets/img/icons/emain.svg" alt="Email" className="cs_contact_icon" />
                    <div>
                      <a href="mailto:shivammehra20244@gmail.com" aria-label="Send mail" className="cs_fs_20 cs_bold cs_white_color cs_mb_6">shivammehra20244@gmail.com</a>
                      <p className="mb-0">{t('footer.emailSub')}</p>
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
              <h2 className="cs_newsletter_title cs_fs_40 cs_semibold cs_white_color mb-0">{t('footer.newsletterTitle')}</h2>
              <p className="cs_newsletter_subtitle mb-0">{t('footer.newsletterSubtitle')}</p>
            </div>
            <form className="cs_newsletter_form position-relative" onSubmit={handleNewsletterSubmit}>
              <input type="email" name="email" className="cs_newsletter_inpu cs_white_bg cs_radius_5" placeholder={t('footer.emailPlaceholder')} autoComplete="off" disabled={newsletterStatus === 'sending'} />
              <button type="submit" aria-label="Sign up button" className="cs_btn_style_1 cs_primary_color cs_semibold cs_radius_5" disabled={newsletterStatus === 'sending'}>
                <span><i className="fa-regular fa-paper-plane"></i></span>
                <span>{newsletterStatus === 'sending' ? '...' : t('footer.subscribe')}</span>
              </button>
              {newsletterStatus === 'success' && <p className="cs_fs_14 mb-0 cs_mt_12 cs_white_color">Thanks for subscribing!</p>}
              {newsletterStatus === 'error' && <p className="cs_fs_14 mb-0 cs_mt_12 cs_white_color">{newsletterError || 'Something went wrong. Please try again.'}</p>}
            </form>
          </div>
          <div className="cs_footer_bottom_content">
            <p className="cs_footer_copyright mb-0">&copy; {year} <span className="cs_white_color">Medicure Trip</span>. {t('footer.copyrightSuffix')}</p>
            <ul className="cs_footer_bottom_nav cs_mp_0">
              <li><Link to="/term-condition.html" aria-label="Terms of Use">{t('footer.termsOfUse')}</Link></li>
              <li><Link to="/privacy-policy.html" aria-label="Privacy Policy">{t('footer.privacyPolicy')}</Link></li>
              <li><Link to="/faq.html" aria-label="FAQ">{t('footer.links.faq')}</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
