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
      {/* Back to top */}
      <a href="#" id="back-to-top" title="Back to top">
        &uarr;
      </a>
    </Router>
  );
}

export default App;
