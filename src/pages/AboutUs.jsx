import AboutAgroSection from "../components/AboutAgroSection";
import AboutGreatPlaceSection from "../components/AboutGreatPlaceSection";
import AboutHeaderSection from "../components/AboutHeaderSection";
import AboutMeSection from "../components/AboutmeSection";
import AboutOurCoreValueSection from "../components/AboutOurCoreValueSection";
// import AboutOurTeamSection from "../components/AboutOurTeamSection";
import TestimonialSection from "../components/TestimonialSection";

const AboutUs = () => {
    return (
        <>
            <AboutHeaderSection /> 
            <AboutAgroSection />
            <AboutMeSection />
            <AboutGreatPlaceSection />
            <AboutOurCoreValueSection />
            {/* <AboutOurTeamSection /> */}
            <TestimonialSection/>
        </>
    );
};

export default AboutUs;