import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import DeveloperHome from "./pages/DeveloperHome";
import SportsHome from "./pages/SportsHome";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="portfolio-app">
        <Nav />
        <main id="main-content">
          <Routes>
            {/* Route A: Default / Canonical Software Developer Portfolio */}
            <Route path="/" element={<DeveloperHome />} />
            
            {/* Alias /developer redirecting cleanly to / */}
            <Route path="/developer" element={<Navigate to="/" replace />} />

            {/* Route B: Dedicated Sports & Leadership Portfolio */}
            <Route path="/sports" element={<SportsHome />} />

            {/* Catch-all fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
