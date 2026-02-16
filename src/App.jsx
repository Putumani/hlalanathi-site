import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home"
import LithaPark from "./pages/Litha"
import MakhayaBB from "./pages/Makhaya"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import PropertyGallery from "./components/PropertyGallery"
import ScrollToTop from "./utility/ScrollToTop"

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900 bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/litha-park" element={<LithaPark />} />
            <Route path="/makhaya-bb" element={<MakhayaBB />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
