import EventsHeaderSection from "../components/EventHeaderSection";
import EventsAllBlog from "../components/EventsAllBlog";
import HeroSection from "../components/HeroSection";
import OurBrandsSection from "../components/OurBrandsSection";

const Events = () => {

    return (
        <div>
            <HeroSection/>
            {/* <EventsHeaderSection /> */}
            <EventsAllBlog />
            <OurBrandsSection />
        </div>
    );
}

export default Events;