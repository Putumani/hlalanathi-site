import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import {
  MapPin,
  Wifi,
  Droplets,
  Wind,
  Tv,
  Car,
  WashingMachine,
  Phone,
  ChevronRight,
  X,
  ShieldCheck,
  Battery,
  Coffee,
  Utensils,
  Star,
  ArrowLeft,
} from "lucide-react";
import Home from "./pages/Home"
import LithaPark from "./pages/Litha"
import MakhayaBB from "./pages/Makhaya"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import PropertyGallery from "./components/PropertyGallery"

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

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
