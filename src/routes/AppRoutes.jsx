import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import Events from "../pages/Events";
import EventDetail from "../pages/EventDetail";
import OurPlantations from "../pages/OurPlantations";
import OurCultivationPlan from "../pages/OurCultivationPlan";
import BranchNetwork from "../pages/BranchNetwork";
import AwardsRecognitions from "../pages/AwardsPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/our-plantations" element={<OurPlantations />} />
        <Route path="/event-detail" element={<EventDetail />} />
        <Route path="/our-cultivation-plan" element={<OurCultivationPlan />} />
        <Route path="/branch-network" element={<BranchNetwork />} />
        <Route path="/awards" element={<AwardsRecognitions />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
