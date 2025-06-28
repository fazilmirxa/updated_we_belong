
import HeroSection from '../components/HeroSection'
import BookNowSection from "../components/BookNowSection"
import AboutUsSection from '../components/AboutSection'
import HomeImageSection from '../components/HomeImageSection';
import MissionSection from '../components/MissionSection';

import './Home.css'; // ✅ local import
import BannerSection from '../components/BannerSection';


const Home = () => (
    <div className="smooth-gradient-bg">
    
            <HeroSection />
            <BookNowSection/>
            <BannerSection/>
            <AboutUsSection />
            <MissionSection/>
            
            <HomeImageSection />
            
    </div>
);
export default Home;
