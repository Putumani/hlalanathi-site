import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { MapPin, Wifi, Droplets, Wind, Tv, Car, WashingMachine, Phone, MessageCircle, ChevronRight, X, ShieldCheck, Battery, Coffee, Utensils, Star } from 'lucide-react';

// --- HELPER COMPONENTS ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 py-4">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <Link to="/" className="flex flex-col">
        <span className="text-xl font-black tracking-tighter text-blue-600 uppercase">Hlalanathi</span>
        <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">B&B & Rentals</span>
      </Link>
      <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
        <Link to="/litha-park" className="hover:text-blue-600 transition-colors">Litha Flats</Link>
        <Link to="/makhaya-bb" className="hover:text-orange-600 transition-colors">Makhaya B&B</Link>
      </div>
      <a href="https://wa.me/27639135127" className="flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-green-600 transition-all shadow-md">
        <MessageCircle size={16} /> 063 913 5127
      </a>
    </div>
  </nav>
);

const PropertyGallery = ({ folder, prefix }) => {
  const [selectedImg, setSelectedImg] = useState(null);
  const images = [1, 2, 3, 4, 5, 6];
  const ext = prefix === 'flat' ? 'webp' : 'jpg';

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {images.map((i) => {
          const imgSrc = `/${folder}/${prefix}-${i}.${ext}`;
          return (
            <div 
              key={i} 
              onClick={() => setSelectedImg(imgSrc)}
              className="aspect-square bg-slate-100 rounded-3xl overflow-hidden group border border-slate-100 relative cursor-pointer shadow-sm hover:shadow-md transition-all"
            >
              <img 
                src={imgSrc} 
                alt={`${prefix}-${i}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => { 
                  e.target.onerror = null; 
                  e.target.src = "https://placehold.co/600x400/e2e8f0/64748b?text=Photo+Coming+Soon"; 
                }}
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          );
        })}
      </div>

      {selectedImg && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedImg(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-blue-400 transition-colors"><X size={40} /></button>
          <img src={selectedImg} className="max-w-full max-h-[85vh] rounded-xl shadow-2xl border-4 border-white/10" alt="View" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
};

const Home = () => (
  <div className="animate-in fade-in duration-1000">
    <header className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900">
      <img src="/makhaya/room-1.jpg" className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Hero" />
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-md border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            <Star size={12} fill="currentColor"/> Premium Khayelitsha Accommodation
        </div>
        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-[0.9]">
          Modern Living. <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 italic">Affordable Rates.</span>
        </h1>
        <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium opacity-90">
          From long-term bachelor flats to executive overnight B&B stays. Secure, clean, and centrally located.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/litha-park" className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">Litha Park Rentals</Link>
          <Link to="/makhaya-bb" className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all">Makhaya B&B Stay</Link>
        </div>
      </div>
    </header>

    <section className="bg-white py-8 overflow-hidden border-b border-slate-100">
      <div className="animate-marquee flex gap-12 items-center text-slate-400 font-bold text-xs uppercase tracking-[0.2em]">
        {[1, 2].map(j => (
          <React.Fragment key={j}>
            <span className="flex items-center gap-3"><ShieldCheck className="text-blue-600" size={18}/> 24/7 Gated Security</span>
            <span className="flex items-center gap-3"><Wifi className="text-blue-600" size={18}/> Free Fiber Wi-Fi</span>
            <span className="flex items-center gap-3"><Battery className="text-blue-600" size={18}/> Backup Power Available</span>
            <span className="flex items-center gap-3"><Car className="text-blue-600" size={18}/> Secure Garage Parking</span>
            <span className="flex items-center gap-3"><Droplets className="text-blue-600" size={18}/> Unlimited Hot Water</span>
          </React.Fragment>
        ))}
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Our Properties</h2>
          <p className="text-slate-500 mt-2">Tailored living solutions for every need.</p>
        </div>
        <div className="h-1 flex-grow mx-8 bg-slate-100 rounded-full hidden md:block mb-4"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <div className="h-80 overflow-hidden relative">
            <img src="/litha/flat-1.webp" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Rentals" />
            <div className="absolute top-6 left-6 bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Available Now</div>
          </div>
          <div className="p-10">
            <h3 className="text-3xl font-black mb-4">Litha Park Bachelor Flats</h3>
            <p className="text-slate-500 mb-8 leading-relaxed">Secure studio apartments in Phakamisa. Perfect for young professionals. Includes unlimited Wi-Fi, Water, and Laundry access.</p>
            <Link to="/litha-park" className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold w-fit hover:bg-blue-600 transition-colors">
              View Gallery <ChevronRight size={18}/>
            </Link>
          </div>
        </div>

        <div className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <div className="h-80 overflow-hidden relative">
            <img src="/makhaya/room-1.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="B&B" />
            <div className="absolute top-6 left-6 bg-orange-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Book Overnight</div>
          </div>
          <div className="p-10">
            <h3 className="text-3xl font-black mb-4">Makhaya Executive B&B</h3>
            <p className="text-slate-500 mb-8 leading-relaxed">Cozy overnight rooms next to the Mall. Features DSTV, Air-conditioning, and private garage access. Your safety is our priority.</p>
            <Link to="/makhaya-bb" className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold w-fit hover:bg-orange-600 transition-colors">
              View Gallery <ChevronRight size={18}/>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-black text-slate-900 mb-4">Perfectly Located</h2>
        <p className="text-slate-500">Centrally situated in Khayelitsha for your convenience.</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { icon: <MapPin />, name: "Khayelitsha Mall", dist: "2 min walk" },
          { icon: <Utensils />, name: "Local Eateries", dist: "Walking distance" },
          { icon: <Coffee />, name: "Kwa Ace", dist: "5 min drive" },
          { icon: <Star />, name: "Rands Cape Town", dist: "8 min drive" },
        ].map((loc, i) => (
          <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-200/50 flex flex-col items-center text-center shadow-sm">
            <div className="mb-4 text-blue-600">{loc.icon}</div>
            <h4 className="font-bold text-slate-900 text-sm">{loc.name}</h4>
            <p className="text-xs text-slate-400 mt-1">{loc.dist}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const LithaPark = () => (
  <div className="max-w-6xl mx-auto px-6 py-16 animate-in slide-in-from-bottom-8 duration-700">
    <div className="grid lg:grid-cols-2 gap-16">
      <div>
        <Link to="/" className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-8 inline-block">← Back Home</Link>
        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-slate-900 leading-tight">Phakamisa <br/>Bachelor Flats</h1>
        <div className="space-y-4 mb-10">
          <div className="flex items-center gap-4 p-5 bg-blue-50/50 rounded-2xl border border-blue-100">
            <Wifi className="text-blue-600" size={24}/>
            <div>
                <p className="font-bold text-slate-900">High-Speed Wi-Fi</p>
                <p className="text-xs text-slate-500">Fiber connection included in rent</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-5 bg-blue-50/50 rounded-2xl border border-blue-100">
            <Droplets className="text-blue-600" size={24}/>
            <div>
                <p className="font-bold text-slate-900">Hot Water & Utilities</p>
                <p className="text-xs text-slate-500">Unlimited water usage included</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-5 bg-blue-50/50 rounded-2xl border border-blue-100">
            <WashingMachine className="text-blue-600" size={24}/>
            <div>
                <p className="font-bold text-slate-900">Laundry Facility</p>
                <p className="text-xs text-slate-500">Shared washing machine access</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-900 p-8 rounded-[2rem] text-white">
            <p className="text-blue-400 font-bold text-sm mb-2 uppercase tracking-widest">Rent Information</p>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">"Our flats offer a modern, secure lifestyle. I am 80% of the time available around the premises to assist."</p>
            <a href="https://wa.me/27639135127" className="block text-center bg-blue-600 py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform">WhatsApp Owner</a>
        </div>
      </div>
      <div>
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">Gallery Overview</h3>
        <PropertyGallery folder="litha" prefix="flat" />
      </div>
    </div>
  </div>
);

const MakhayaBB = () => (
  <div className="max-w-6xl mx-auto px-6 py-16 animate-in slide-in-from-bottom-8 duration-700">
    <div className="grid lg:grid-cols-2 gap-16">
      <div className="order-2 lg:order-1">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">Room Gallery</h3>
        <PropertyGallery folder="makhaya" prefix="room" />
      </div>
      <div className="order-1 lg:order-2">
        <Link to="/" className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-8 inline-block">← Back Home</Link>
        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-slate-900 leading-tight">Makhaya <br/>Overnight Stays</h1>
        <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="p-6 border border-slate-100 rounded-3xl bg-slate-50/50">
                <Tv className="text-orange-600 mb-3" />
                <p className="font-bold text-sm">DSTV Compact</p>
            </div>
            <div className="p-6 border border-slate-100 rounded-3xl bg-slate-50/50">
                <Wind className="text-orange-600 mb-3" />
                <p className="font-bold text-sm">Air-conditioning</p>
            </div>
            <div className="p-6 border border-slate-100 rounded-3xl bg-slate-50/50">
                <Car className="text-orange-600 mb-3" />
                <p className="font-bold text-sm">Garage Parking</p>
            </div>
            <div className="p-6 border border-slate-100 rounded-3xl bg-slate-50/50">
                <Battery className="text-orange-600 mb-3" />
                <p className="font-bold text-sm">Power Backup</p>
            </div>
        </div>
        <div className="bg-orange-600 p-8 rounded-[2rem] text-white shadow-xl shadow-orange-600/20">
            <h4 className="font-black text-xl mb-4">Book Your Stay</h4>
            <p className="text-orange-100 text-sm mb-6 leading-relaxed">Located next to the Mall. Experience premium safety and comfort. Available 24/7 for travelers.</p>
            <a href="https://wa.me/27639135127" className="block text-center bg-white text-orange-600 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors uppercase tracking-widest text-xs">Confirm Booking</a>
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-slate-950 text-white pt-20 pb-10 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 border-b border-slate-800 pb-16 mb-10">
      <div>
        <h4 className="text-xl font-black mb-4">Hlalanathi</h4>
        <p className="text-slate-400 text-sm leading-relaxed">Providing high-quality residential flats and premium overnight stays in the heart of Khayelitsha.</p>
      </div>
      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-6">Navigation</h4>
        <div className="flex flex-col gap-4 text-sm">
          <Link to="/" className="text-slate-300 hover:text-white transition-colors">Home</Link>
          <Link to="/litha-park" className="text-slate-300 hover:text-white transition-colors">Litha Park Flats</Link>
          <Link to="/makhaya-bb" className="text-slate-300 hover:text-white transition-colors">Makhaya B&B</Link>
        </div>
      </div>
      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-6">Contact</h4>
        <p className="text-slate-300 text-sm mb-2 flex items-center gap-2"><Phone size={14}/> 063 913 5127</p>
        <p className="text-slate-300 text-sm flex items-center gap-2"><MapPin size={14}/> Khayelitsha, Cape Town</p>
      </div>
    </div>
    <p className="text-center text-[10px] text-slate-600 uppercase tracking-[0.4em]">© 2026 Hlalanathi Properties. All rights reserved.</p>
  </footer>
);

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