import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Events from './pages/Events'
import Register from './pages/Register'
import Gallery from './pages/Gallery'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import TermsAndConditions from './pages/TermsAndConditions'
import BannerDetailPage from './pages/BannerDetailsPage'
import Cities from './pages/Cities'
import EventDetail from './pages/EventDetails'
import FloatingWhatsAppButton from './components/FloatingWhatsappButton'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/event/:title" element={<EventDetail />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/banners/:slug" element={<BannerDetailPage />} />

      </Routes>
      <FloatingWhatsAppButton />

      <Footer />
    </div>
  )
}

export default App
