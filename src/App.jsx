import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { MapPin, Wifi, Droplets, Wind, Tv, Car, WashingMachine, Phone, MessageCircle, ChevronRight } from 'lucide-react';

// --- HELPER: Auto-scroll to top on page navigation ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 py-4">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <Link to="/" className="flex flex-col">
        <span className="text-xl font-black tracking-tighter text-blue-600">HLALANATHI</span>
        <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">B&B & Rentals</span>
      </Link>
      <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
        <Link to="/litha-park" className="hover:text-blue-600 transition-colors">Litha Flats</Link>
        <Link to="/makhaya-bb" className="hover:text-orange-600 transition-colors">Makhaya B&B</Link>
      </div>
      <a href="https://wa.me/27123456789" className="flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-green-600 transition-all shadow-md">
        <MessageCircle size={16} /> WHATSAPP
      </a>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-slate-950 text-white pt-16 pb-8 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 border-b border-slate-800 pb-12 mb-8">
      <div>
        <h4 className="text-lg font-bold mb-4">Hlalanathi Properties</h4>
        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
          Providing high-quality residential flats in Litha Park and premium overnight stays in Makhaya, Khayelitsha.
        </p>
      </div>
      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-6">Quick Links</h4>
        <div className="flex flex-col gap-3 text-sm font-medium text-slate-300">
          <Link to="/" className="hover:text-white transition-colors">Home Page</Link>
          <Link to="/litha-park" className="hover:text-white transition-colors">Litha Park Rentals</Link>
          <Link to="/makhaya-bb" className="hover:text-white transition-colors">Makhaya B&B</Link>
        </div>
      </div>
      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-6">Support</h4>
        <p className="text-slate-400 text-sm mb-4 flex items-center gap-2"><Phone size={14}/> 24/7 Cellphone Reachable</p>
        <p className="text-slate-400 text-sm italic">"I am 80% of the time available around the premises."</p>
      </div>
    </div>
    <p className="text-center text-[10px] text-slate-600 uppercase tracking-[0.3em]">© 2026 Hlalanathi B&B and Flat Rentals</p>
  </footer>
);

const PropertyGallery = ({ propertyName }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <div key={i} className="aspect-square bg-slate-100 rounded-3xl overflow-hidden group border border-slate-100 relative">
        <div className="absolute inset-0 flex items-center justify-center text-slate-300 text-xs italic">
          {propertyName} Photo {i}
        </div>
        <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    ))}
  </div>
);

const Home = () => (
  <div className="animate-in fade-in duration-1000">
    <header className="py-24 px-6 text-center bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-slate-900 leading-[1.1]">
          Modern Living. <br/>
          <span className="text-blue-600 italic">Khayelitsha Style.</span>
        </h1>
        <p className="text-lg text-slate-500 font-medium max-w-xl mx-auto mb-10">
          Choose between premium long-term bachelor flats in Litha Park or cozy overnight stays in Makhaya.
        </p>
      </div>
    </header>

    <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 pb-24">
      <div className="group bg-white p-10 rounded-[3rem] border border-slate-200 hover:shadow-2xl transition-all duration-500 flex flex-col items-start">
        <span className="bg-blue-50 text-blue-600 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">Litha Park</span>
        <h2 className="text-3xl font-black mb-4">Residential Bachelor Flats</h2>
        <p className="text-slate-500 mb-8 leading-relaxed">Secure, well-maintained bachelor units in Phakamisa. Includes unlimited Wi-Fi, hot water, and secure parking.</p>
        <Link to="/litha-park" className="mt-auto flex items-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-2xl font-bold hover:bg-blue-600 transition-colors">
          View Flats <ChevronRight size={18} />
        </Link>
      </div>

      <div className="group bg-white p-10 rounded-[3rem] border border-slate-200 hover:shadow-2xl transition-all duration-500 flex flex-col items-start">
        <span className="bg-orange-50 text-orange-600 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">Makhaya</span>
        <h2 className="text-3xl font-black mb-4">Overnight B&B Stay</h2>
        <p className="text-slate-500 mb-8 leading-relaxed">Situated next to the Mall. Features double beds, aircon, and DSTV. Perfect for couples and travelers.</p>
        <Link to="/makhaya-bb" className="mt-auto flex items-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-2xl font-bold hover:bg-orange-600 transition-colors">
          View Rooms <ChevronRight size={18} />
        </Link>
      </div>
    </section>
  </div>
);

const LithaPark = () => (
  <div className="max-w-6xl mx-auto px-6 py-16 animate-in slide-in-from-bottom-8 duration-700">
    <div className="grid lg:grid-cols-2 gap-16">
      <div>
        <Link to="/" className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-8 inline-block">← Back to Overview</Link>
        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Phakamisa Bachelor Flats</h1>
        <p className="text-slate-500 text-lg mb-8 leading-relaxed">
          Our Phakamisa units in Litha Park offer a blend of privacy and community. Available immediately for long-term lease.
        </p>
        
        <div className="space-y-4 mb-10">
          <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
            <div className="bg-white p-2 rounded-lg text-blue-600"><Wifi size={20}/></div>
            <span className="font-bold text-slate-700">Unlimited Wi-Fi for all tenants</span>
          </div>
          <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
            <div className="bg-white p-2 rounded-lg text-blue-600"><Droplets size={20}/></div>
            <span className="font-bold text-slate-700">Unlimited Hot Water included</span>
          </div>
          <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
            <div className="bg-white p-2 rounded-lg text-blue-600"><WashingMachine size={20}/></div>
            <span className="font-bold text-slate-700">Shared Access Washing Machine</span>
          </div>
          <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
            <div className="bg-white p-2 rounded-lg text-blue-600"><Car size={20}/></div>
            <span className="font-bold text-slate-700">Secure Gated Parking</span>
          </div>
        </div>

        <div className="bg-blue-600 text-white p-8 rounded-[2rem] shadow-xl shadow-blue-100">
          <h3 className="font-bold text-xl mb-2 text-white">Rental Status</h3>
          <p className="text-blue-100 text-sm mb-4 italic">Available from 29/01/2026. Non-furnished bachelor units.</p>
          <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors uppercase text-xs tracking-widest">
            Check Availability
          </button>
        </div>
      </div>
      
      <div>
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
          <ChevronRight size={14} /> Property Gallery
        </h3>
        <PropertyGallery propertyName="Flat" />
      </div>
    </div>
  </div>
);

const MakhayaBB = () => (
  <div className="max-w-6xl mx-auto px-6 py-16 animate-in slide-in-from-bottom-8 duration-700">
    <div className="grid lg:grid-cols-2 gap-16">
      <div className="order-2 lg:order-1">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
          <ChevronRight size={14} /> Guest Suite Gallery
        </h3>
        <PropertyGallery propertyName="B&B Room" />
      </div>

      <div className="order-1 lg:order-2">
        <Link to="/" className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-8 inline-block">← Back to Overview</Link>
        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-slate-900 leading-tight">Makhaya <br/>Overnight Suites</h1>
        <p className="text-slate-500 text-lg mb-8 leading-relaxed italic">
          "Situated in Khayelitsha next to the mall. Ideal for couples seeking a secure, clean overnight stay."
        </p>

        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="p-5 border border-slate-100 rounded-3xl flex flex-col gap-3">
            <Tv className="text-orange-500" />
            <span className="text-sm font-bold">DSTV Compact</span>
          </div>
          <div className="p-5 border border-slate-100 rounded-3xl flex flex-col gap-3">
            <Wind className="text-orange-500" />
            <span className="text-sm font-bold">Air-conditioning</span>
          </div>
          <div className="p-5 border border-slate-100 rounded-3xl flex flex-col gap-3">
            <MapPin className="text-orange-500" />
            <span className="text-sm font-bold text-slate-500">3min to Kwa Ace</span>
          </div>
          <div className="p-5 border border-slate-100 rounded-3xl flex flex-col gap-3">
            <Car className="text-orange-500" />
            <span className="text-sm font-bold">Garage Parking</span>
          </div>
        </div>

        <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white">
          <h4 className="font-bold mb-4 flex items-center gap-2 text-orange-400">
            <ChevronRight size={16}/> Guest Access
          </h4>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            You come through locked gates past the kitchen to the rooms or via the garage access for complete safety and privacy.
          </p>
          <a href="https://wa.me/your-number" className="block text-center bg-orange-600 py-3.5 rounded-2xl font-bold hover:scale-[1.02] transition-transform">
            BOOK NOW
          </a>
        </div>
      </div>
    </div>
  </div>
);


export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
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