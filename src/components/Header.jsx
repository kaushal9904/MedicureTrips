import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const LANG_CODES = { en: 'ENG', es: 'SPA', fr: 'FRA', de: 'DEU', ar: 'ARA', bn: 'BEN' }

export default function Header({ isShop }) {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: t('nav.home'), path: '/', children: [
      { label: t('nav.homeChildren.generalHospital'), path: '/' },
      { label: t('nav.homeChildren.healthcareCenter'), path: '/home-v2.html' },
      { label: t('nav.homeChildren.childCare'), path: '/home-v3.html' },
      { label: t('nav.homeChildren.dentalCare'), path: '/home-v4.html' },
      { label: t('nav.homeChildren.eyeCare'), path: '/home-v5.html' },
    ]},
    { label: t('nav.about'), path: '/about-us.html' },
    { label: t('nav.services'), path: '/services.html' },
    { label: t('nav.pages'), path: '#', children: [
      { label: t('nav.pagesChildren.ourDoctors'), path: '/our-doctors.html' },
      { label: t('nav.pagesChildren.partnerHospitals'), path: '/doctors.html' },
      { label: t('nav.pagesChildren.ourPackages'), path: '/packages.html' },
      /* Disabled per request, keep entries for future re-enable:
      { label: 'Doctor Details', path: '/doctor-details.html' },
      { label: 'Account Login', path: '/login.html' },
      { label: 'Account Register', path: '/register.html' },
      { label: 'Our Events', path: '/event.html' },
      { label: 'Event Details', path: '/event-details.html' },
      { label: 'Our Facilities', path: '/facilities.html' },
      { label: 'Our Pricing Plan', path: '/pricing.html' },
      { label: 'FAQ with Answer', path: '/faq.html' },
      { label: 'Our Testimonial', path: '/testimonials.html' },
      { label: 'Patient Resource', path: '/patient-resource.html' },
      { label: 'Career Opportunity', path: '/career.html' },
      { label: '404 Error', path: '/error-404.html' },
      */
    ]},
    { label: t('nav.blog'), path: '/blog.html' },
    { label: t('nav.contact'), path: '/contact-us.html' },
    /* Disabled per request, keep entry for future re-enable:
    { label: 'Shop', path: '/shop.html', children: [
      { label: 'Medical Shop', path: '/shop.html' },
      { label: 'Shop Details', path: '/shop-details.html' },
      { label: 'Shopping Cart', path: '/cart.html' },
      { label: 'Checkout', path: '/checkout.html' },
    ]},
    */
  ]

  if (isShop) {
    return (
      <header className="cs_site_header cs_style_1 cs_sticky_header" aria-label="Main header">
        <div className="cs_main_header position-relative">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link to="/" aria-label="Home page" className="cs_site_brand">
                  <img src="/assets/img/logo.svg" alt="Medicure Trip Logo" />
                </Link>
              </div>
              <div className="cs_main_header_right">
                <div className="cs_header_btns_wrapper">
                  <Link to="/login.html" aria-label="Login" className="cs_header_icon_btn">
                    <img src="/assets/img/icons/user.svg" alt="User icon" />
                  </Link>
                  <Link to="/cart.html" aria-label="Cart" className="cs_header_icon_btn">
                    <img src="/assets/img/icons/shopping-cart.svg" alt="Cart icon" />
                    <span className="cs_cart_count">0</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className={`cs_site_header cs_style_1 cs_sticky_header${scrolled ? ' cs_sticky_active' : ''}`} aria-label="Main header">
      <div className="cs_top_header cs_accent_bg">
        <div className="container">
          <div className="cs_top_header_in">
            <div className="cs_top_header_left">
              <ul className="cs_contact_list cs_mp_0">
                <li className="cs_contact_item cs_fs_14 cs_white_color">
                  <span className="cs_contact_text">{t('topbar.sendMail')}
                    <a href="mailto:shivammehra20244@gmail.com" aria-label="Send email">shivammehra20244@gmail.com</a>
                  </span>
                </li>
                <li className="cs_contact_item cs_fs_14 cs_white_color">
                  <span className="cs_contact_text">{t('topbar.callUs')}
                    <a href="tel:9958192249" aria-label="Call us">9958192249</a>
                  </span>
                </li>
              </ul>
            </div>
            <div className="cs_top_header_right">
              <ul className="cs_contact_list cs_mp_0">
                <li className="cs_contact_item cs_fs_14 cs_white_color">
                  <Link to="/location.html" aria-label="Go to location page">
                    <span>{t('topbar.location')}</span>
                  </Link>
                </li>
                <li className="cs_language_select cs_fs_14 cs_white_color position-relative">
                  <span className="cs_language_switcher" onClick={() => setLangOpen(!langOpen)}>
                    <img src="/assets/img/icons/global.svg" alt="Language icon" />
                    <span className="cs_contact_icon">{t('topbar.lang')}</span>
                    <span className="cs_language text-capitalize">{LANG_CODES[i18n.language] || 'ENG'}</span>
                  </span>
                  <div className="cs_language_dropdown" style={{ display: langOpen ? 'block' : 'none' }}>
                    <button onClick={() => { i18n.changeLanguage('en'); setLangOpen(false) }}>ENG</button>
                    <button onClick={() => { i18n.changeLanguage('es'); setLangOpen(false) }}>SPA</button>
                    <button onClick={() => { i18n.changeLanguage('fr'); setLangOpen(false) }}>FRA</button>
                    <button onClick={() => { i18n.changeLanguage('de'); setLangOpen(false) }}>DEU</button>
                    <button onClick={() => { i18n.changeLanguage('ar'); setLangOpen(false) }}>ARA</button>
                    <button onClick={() => { i18n.changeLanguage('bn'); setLangOpen(false) }}>BEN</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_main_header position-relative">
        <div className="container">
          <div className="cs_main_header_in">
            <div className="cs_main_header_left">
              <Link to="/" aria-label="Home page" className="cs_site_brand">
                <img src="/assets/img/logo.svg" alt="Medicure Trip Logo" />
              </Link>
            </div>
            <div className="cs_main_header_center">
              <nav className={`cs_nav${menuOpen ? ' active' : ''}`} aria-label="Main navigation">
                <div className={`cs_nav_list_wrapper${menuOpen ? ' active' : ''}`}>
                  <ul className="cs_nav_list cs_mp_0">
                    {navItems.map((item, idx) => (
                      <li key={idx} className={item.children ? 'menu-item-has-children' : ''}>
                        {item.children ? (
                          <>
                            <a href={item.path} onClick={(e) => { if (item.path === '#') e.preventDefault() }}>{item.label}</a>
                            <button
                              type="button"
                              className={`cs_menu_dropdown_toggle${openSubmenu === idx ? ' active' : ''}`}
                              aria-label={`Toggle ${item.label} submenu`}
                              aria-expanded={openSubmenu === idx}
                              onClick={() => setOpenSubmenu(openSubmenu === idx ? null : idx)}
                            >
                              <span></span>
                            </button>
                            <ul className="cs_dropdown_list cs_mp_0" style={{ display: openSubmenu === idx ? 'block' : undefined }}>
                              {item.children.map((child, cidx) => (
                                <li key={cidx}><Link to={child.path} onClick={() => { setMenuOpen(false); setOpenSubmenu(null) }}>{child.label}</Link></li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <Link to={item.path} onClick={() => setMenuOpen(false)}>{item.label}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                  <button type="button" className="cs_close_nav" onClick={() => setMenuOpen(false)}></button>
                </div>
              </nav>
              <button type="button" className="cs_menu_toggle" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
              </button>
            </div>
            <div className="cs_main_header_right">
              <div className="cs_header_btns_wrapper">
                <button type="button" aria-label="Search" className="cs_search_btn" onClick={() => setSearchOpen(true)}>
                  <img src="/assets/img/icons/search.svg" alt="Search icon" />
                </button>
                <a href="tel:9958192249" aria-label="Emergency call" className="cs_btn_style_2 cs_primary_color cs_semibold cs_radius_5">
                  <img src="/assets/img/icons/phone2.svg" alt="Phone icon" />
                  <span>{t('buttons.emergency')}</span>
                </a>
                <Link to="/appointment.html" aria-label="Book an appointment" className="cs_btn_style_1 cs_accent_bg cs_white_color cs_semibold cs_radius_5">
                  <img src="/assets/img/icons/calendar.svg" alt="Calendar icon" />
                  <span>{t('buttons.appointment')}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`cs_header_search${searchOpen ? ' active' : ''}`}>
        <div className="cs_header_search_in">
          <div className="container">
            <div className="cs_header_search_box">
              <form className="cs_search_form position-relative" onSubmit={e => e.preventDefault()}>
                <input type="search" name="search-text" placeholder={t('search.placeholder')} autoComplete="off" />
                <button className="cs_search_btn" type="submit">
                  <img src="/assets/img/icons/search.svg" alt="Search icon" />
                </button>
              </form>
              <button className="cs_close" type="button" onClick={() => setSearchOpen(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="cs_sidenav_overlay" onClick={() => setSearchOpen(false)}></div>
      </div>
    </header>
  )
}
