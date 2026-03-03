import { useEffect, useState } from "react";
import CounterSection from "../components/CounterSection";
import HeroSection from "../components/HeroSection";
import OurBrandsSection from "../components/OurBrandsSection";
import OurMainSection from "../components/OurMainSection";
import OverseaSection from "../components/OurOverseaSection";
import OurPrincipalSection from "../components/OurPrincipalSection";
import WeAgroSection from "../components/WeAgroSection";
import WelcomePopup from "../components/WelcomePopup";
import WhyChooseSection from "../components/WhyChooseSection";

const Home = () => {
     const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
    
    return (
        <>
            <HeroSection />
            <WeAgroSection />
            <OurPrincipalSection />
            <CounterSection />
            <OurMainSection />
            <OverseaSection />
            <WhyChooseSection />
            <OurBrandsSection />
              {showPopup && <WelcomePopup onClose={() => setShowPopup(false)} />}
            
        </>
    );
};

export default Home;
