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
