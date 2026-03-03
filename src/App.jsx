import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "../public/assets/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Router>
      {/* Loader */}
      {/* <div id="loader-overlay">
        <div className="loader-wrapper">
          <div className="alpha-dots">
            <div className="alpha-child alpha-dot1"></div>
            <div className="alpha-child alpha-dot2"></div>
          </div>
        </div>
      </div> */}
      {/* End Loader */}

      <Header />
      <AppRoutes />
      <Footer />

      {/* <!-- Start of footer --> */}
      <a href="#" id="back-to-top" title="Back to top">
        &uarr;
      </a>
      {/* <!-- End of footer --> */}
    </Router>
  );
}

export default App;
