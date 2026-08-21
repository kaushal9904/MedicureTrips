import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
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
import OurDoctors from './pages/OurDoctors'
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
import MedicalVisa from './pages/MedicalVisa'
import CostCalculator from './pages/CostCalculator'
import OrthopedicLanding from './pages/OrthopedicLanding'
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
        <Route path="/home-v2" element={<HomeV2 />} />
        <Route path="/home-v3" element={<HomeV3 />} />
        <Route path="/home-v4" element={<HomeV4 />} />
        <Route path="/home-v5" element={<HomeV5 />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/our-doctors" element={<OurDoctors />} />
        <Route path="/doctor-details" element={<DoctorDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-sidebar" element={<BlogSidebar />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/shop" element={<><Header isShop /><Shop /></>} />
        <Route path="/shop-details" element={<><Header isShop /><ShopDetails /></>} />
        <Route path="/cart" element={<><Header isShop /><Cart /></>} />
        <Route path="/checkout" element={<><Header isShop /><Checkout /></>} />
        <Route path="/event" element={<Event />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/medical-visa" element={<MedicalVisa />} />
        <Route path="/cost-calculator" element={<CostCalculator />} />
        <Route path="/orthopedic-surgery" element={<OrthopedicLanding />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/career" element={<Career />} />
        <Route path="/patient-resource" element={<PatientResource />} />
        <Route path="/location" element={<Location />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password" element={<Password />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/term-condition" element={<TermCondition />} />
        <Route path="/error-404" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
