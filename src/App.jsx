import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import ScrollToTop from './components/ScrollToTop'
import useSiteAnimations from './hooks/useSiteAnimations'
import routeMeta, { defaultMeta } from './routeMeta'
import Home from './pages/Home'
import HomeV2 from './pages/HomeV2'
import HomeV3 from './pages/HomeV3'
import HomeV4 from './pages/HomeV4'
import HomeV5 from './pages/HomeV5'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import ServiceDetails from './pages/ServiceDetails'
import Doctors from './pages/Doctors'
import DoctorDetails from './pages/DoctorDetails'
import ContactUs from './pages/ContactUs'
import Blog from './pages/Blog'
import BlogSidebar from './pages/BlogSidebar'
import BlogDetails from './pages/BlogDetails'
import Appointment from './pages/Appointment'
import Shop from './pages/Shop'
import ShopDetails from './pages/ShopDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Event from './pages/Event'
import EventDetails from './pages/EventDetails'
import Facilities from './pages/Facilities'
import FAQ from './pages/FAQ'
import Testimonials from './pages/Testimonials'
import Pricing from './pages/Pricing'
import Packages from './pages/Packages'
import Career from './pages/Career'
import PatientResource from './pages/PatientResource'
import Location from './pages/Location'
import Login from './pages/Login'
import Register from './pages/Register'
import Password from './pages/Password'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermCondition from './pages/TermCondition'
import Error404 from './pages/Error404'

const shopPages = ['shop', 'shop-details', 'cart', 'checkout']

function App() {
  const location = useLocation()
  const isShopPage = shopPages.some(p => location.pathname.includes(p))

  // Initialize all site animations, re-run on route change
  useSiteAnimations([location.pathname])

  useEffect(() => {
    const meta = routeMeta[location.pathname] || defaultMeta
    document.title = meta.title
    let descTag = document.querySelector('meta[name="description"]')
    if (!descTag) {
      descTag = document.createElement('meta')
      descTag.setAttribute('name', 'description')
      document.head.appendChild(descTag)
    }
    descTag.setAttribute('content', meta.description)
  }, [location.pathname])

  return (
    <>
      <Preloader />
      <ScrollToTop />
      {!isShopPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-v2.html" element={<HomeV2 />} />
        <Route path="/home-v3.html" element={<HomeV3 />} />
        <Route path="/home-v4.html" element={<HomeV4 />} />
        <Route path="/home-v5.html" element={<HomeV5 />} />
        <Route path="/about-us.html" element={<AboutUs />} />
        <Route path="/services.html" element={<Services />} />
        <Route path="/service-details.html" element={<ServiceDetails />} />
        <Route path="/doctors.html" element={<Doctors />} />
        <Route path="/doctor-details.html" element={<DoctorDetails />} />
        <Route path="/contact-us.html" element={<ContactUs />} />
        <Route path="/blog.html" element={<Blog />} />
        <Route path="/blog-sidebar.html" element={<BlogSidebar />} />
        <Route path="/blog-details.html" element={<BlogDetails />} />
        <Route path="/appointment.html" element={<Appointment />} />
        <Route path="/shop.html" element={<><Header isShop /><Shop /></>} />
        <Route path="/shop-details.html" element={<><Header isShop /><ShopDetails /></>} />
        <Route path="/cart.html" element={<><Header isShop /><Cart /></>} />
        <Route path="/checkout.html" element={<><Header isShop /><Checkout /></>} />
        <Route path="/event.html" element={<Event />} />
        <Route path="/event-details.html" element={<EventDetails />} />
        <Route path="/facilities.html" element={<Facilities />} />
        <Route path="/faq.html" element={<FAQ />} />
        <Route path="/testimonials.html" element={<Testimonials />} />
        <Route path="/pricing.html" element={<Pricing />} />
        <Route path="/packages.html" element={<Packages />} />
        <Route path="/career.html" element={<Career />} />
        <Route path="/patient-resource.html" element={<PatientResource />} />
        <Route path="/location.html" element={<Location />} />
        <Route path="/login.html" element={<Login />} />
        <Route path="/register.html" element={<Register />} />
        <Route path="/password.html" element={<Password />} />
        <Route path="/privacy-policy.html" element={<PrivacyPolicy />} />
        <Route path="/term-condition.html" element={<TermCondition />} />
        <Route path="/error-404.html" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
