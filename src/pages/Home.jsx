import { useEffect, useState } from "react";
import CounterSection from "../components/CounterSection";
import OurBrandsSection from "../components/OurBrandsSection";
import OurMainSection from "../components/OurMainSection";
import OverseaSection from "../components/OurOverseaSection";
import OurPrincipalSection from "../components/OurPrincipalSection";
import WeAgroSection from "../components/WeAgroSection";
import WelcomePopup from "../components/WelcomePopup";
import WhyChooseSection from "../components/WhyChooseSection";
import HomeHeroSection from "../components/HomeHeroSection";
import OurTrustedPartnerSection from "../components/OurTrustedPartnerSection";

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
      <HomeHeroSection />
      <WeAgroSection />
      <OurPrincipalSection />
      {/* <CounterSection /> */}
      <OurMainSection />
      <OverseaSection />
      <WhyChooseSection />
      <OurTrustedPartnerSection />
      <OurBrandsSection />
      {showPopup && <WelcomePopup onClose={() => setShowPopup(false)} />}
    </>
  );
};

export default Home;
