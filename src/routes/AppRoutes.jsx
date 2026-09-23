import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import Events from "../pages/Events";
import EventDetail from "../pages/EventDetail";
import OurCultivationPlan from "../pages/OurCultivationPlan";
import BranchNetwork from "../pages/BranchNetwork";
import AwardsRecognitions from "../pages/AwardsPage";
import LandOwnership from "../pages/LandOwnership";
import LegalDocument from "../pages/LegalDocument";
import AvailableProperties from "../pages/AvailabelProperties";
import AgricuturalOperations from "../pages/AgriculturalOperations";
import CropDetail from "../pages/CropDetail";

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
        <Route path="/available-properties" element={<AvailableProperties />} />
        <Route path="/event-detail" element={<EventDetail />} />
        <Route path="/our-cultivation-plan" element={<OurCultivationPlan />} />
        <Route path="/branch-network" element={<BranchNetwork />} />
        <Route path="/awards" element={<AwardsRecognitions />} />
        <Route path="/land-ownership" element={<LandOwnership />} />
        <Route path="/legal-document" element={<LegalDocument />} />
        <Route path="/agricultural-operations" element={<AgricuturalOperations />} />
        <Route path="/crops/:slug" element={<CropDetail />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
