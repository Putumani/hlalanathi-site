import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { MapPin, Wifi, Droplets, Wind, Tv, Car, WashingMachine, Phone, MessageCircle, ChevronRight, X, ShieldCheck, Battery, Coffee, Utensils, Star, ArrowLeft } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 px-6 py-4">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <Link to="/" className="flex flex-col group">
        <span className="text-xl font-black tracking-tighter text-blue-600 uppercase group-hover:text-slate-900 transition-colors">Hlalanathi</span>
        <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">B&B & Rentals</span>
      </Link>
      <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
        <Link to="/litha-park" className="hover:text-blue-600 transition-colors">Litha Flats</Link>
        <Link to="/makhaya-bb" className="hover:text-orange-600 transition-colors">Makhaya B&B</Link>
      </div>
      <a href="https://wa.me/27639135127" className="flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-200">
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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((i) => {
          const imgSrc = `/${folder}/${prefix}-${i}.${ext}`;
          return (
            <div 
              key={i} 
              onClick={() => setSelectedImg(imgSrc)}
              className="aspect-square bg-slate-100 rounded-2xl overflow-hidden group relative cursor-pointer border border-slate-100"
            >
              <img 
                src={imgSrc} 
                alt={`${prefix}-${i}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => { 
                  e.target.onerror = null; 
                  e.target.src = "https://placehold.co/600x400/e2e8f0/64748b?text=Photo+Coming+Soon"; 
                }}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-xs font-bold uppercase tracking-widest">View Photo</span>
              </div>
            </div>
          );
        })}
      </div>

      {selectedImg && (
        <div className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setSelectedImg(null)}>
          <button className="absolute top-6 right-6 text-white hover:rotate-90 transition-transform"><X size={40} /></button>
          <img src={selectedImg} className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl border border-white/10" alt="Fullscreen" onClick={(e) => e.stopPropagation()} />
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

    <section className="bg-white py-10 overflow-hidden border-b border-slate-100">
      <div className="animate-marquee flex gap-16 items-center text-slate-400 font-bold text-xs uppercase tracking-[0.3em]">
        {[1, 2].map(j => (
          <React.Fragment key={j}>
            <span className="flex items-center gap-3"><ShieldCheck className="text-blue-600" size={20}/> Gated Security</span>
            <span className="flex items-center gap-3"><Wifi className="text-blue-600" size={20}/> Fiber Wi-Fi</span>
            <span className="flex items-center gap-3"><Battery className="text-blue-600" size={20}/> Backup Systems</span>
            <span className="flex items-center gap-3"><MapPin className="text-blue-600" size={20}/> Near Mall</span>
          </React.Fragment>
        ))}
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">
        <div className="relative group rounded-[3rem] overflow-hidden aspect-[4/5] md:aspect-square">
            <img src="/litha/flat-1.webp" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Litha"/>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-12 flex flex-col justify-end">
                <span className="text-blue-400 font-black text-xs uppercase tracking-widest mb-2">Residential</span>
                <h3 className="text-4xl font-black text-white mb-4">Litha Park Flats</h3>
                <Link to="/litha-park" className="bg-white text-slate-950 px-8 py-3 rounded-xl font-bold w-fit hover:bg-blue-600 hover:text-white transition-all">View Full Gallery</Link>
            </div>
        </div>
        <div className="relative group rounded-[3rem] overflow-hidden aspect-[4/5] md:aspect-square">
            <img src="/makhaya/room-1.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Makhaya"/>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-12 flex flex-col justify-end">
                <span className="text-orange-400 font-black text-xs uppercase tracking-widest mb-2">Hospitality</span>
                <h3 className="text-4xl font-black text-white mb-4">Makhaya B&B</h3>
                <Link to="/makhaya-bb" className="bg-white text-slate-950 px-8 py-3 rounded-xl font-bold w-fit hover:bg-orange-600 hover:text-white transition-all">Book Overnight</Link>
            </div>
        </div>
    </section>
  </div>
);

const LithaPark = () => (
  <div className="animate-in fade-in duration-1000">
    <header className="relative h-[60vh] bg-blue-900 overflow-hidden">
        <img src="/litha/flat-1.webp" className="absolute inset-0 w-full h-full object-cover opacity-30" alt="Litha Hero"/>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
            <Link to="/" className="flex items-center gap-2 text-white/80 font-bold text-xs uppercase tracking-widest mb-8 hover:text-white transition-colors">
                <ArrowLeft size={16}/> Back to home
            </Link>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter">Litha Park <br/><span className="text-blue-600">Studios.</span></h1>
        </div>
    </header>

    <div className="max-w-6xl mx-auto px-6 pb-24 -mt-10 relative z-20">
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
            <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl shadow-slate-200">
                <PropertyGallery folder="litha" prefix="flat" />
            </div>
        </div>
        <div className="space-y-6">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                <h3 className="font-black text-xl mb-6">Property Highlights</h3>
                <div className="space-y-4">
                    <div className="flex items-center gap-4 text-slate-600 font-medium bg-slate-50 p-4 rounded-2xl">
                        <Wifi className="text-blue-600" /> Free Fiber Internet
                    </div>
                    <div className="flex items-center gap-4 text-slate-600 font-medium bg-slate-50 p-4 rounded-2xl">
                        <Droplets className="text-blue-600" /> Unlimited Hot Water
                    </div>
                    <div className="flex items-center gap-4 text-slate-600 font-medium bg-slate-50 p-4 rounded-2xl">
                        <WashingMachine className="text-blue-600" /> Laundry Services
                    </div>
                </div>
            </div>
            <div className="bg-blue-600 p-8 rounded-[2rem] text-white">
                <h4 className="font-bold mb-2">Check Availability</h4>
                <p className="text-blue-100 text-sm mb-6">Units are popular. Inquire now to secure your space for 2026.</p>
                <a href="https://wa.me/27639135127" className="block text-center bg-white text-blue-600 py-4 rounded-xl font-bold shadow-lg">Inquire via WhatsApp</a>
            </div>
        </div>
      </div>
    </div>
  </div>
);

const MakhayaBB = () => (
  <div className="animate-in fade-in duration-1000">
    <header className="relative h-[60vh] bg-orange-900 overflow-hidden">
        <img src="/makhaya/room-1.jpg" className="absolute inset-0 w-full h-full object-cover opacity-30" alt="Makhaya Hero"/>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
            <Link to="/" className="flex items-center gap-2 text-white/80 font-bold text-xs uppercase tracking-widest mb-8 hover:text-white transition-colors">
                <ArrowLeft size={16}/> Back to home
            </Link>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter">Makhaya <br/><span className="text-orange-600">Executive.</span></h1>
        </div>
    </header>

    <div className="max-w-6xl mx-auto px-6 pb-24 -mt-10 relative z-20">
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="space-y-6 order-2 lg:order-1">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                <h3 className="font-black text-xl mb-6">Guest Amenities</h3>
                <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center gap-4 text-slate-600 font-medium bg-slate-50 p-4 rounded-2xl">
                        <Tv className="text-orange-600" /> DSTV Compact
                    </div>
                    <div className="flex items-center gap-4 text-slate-600 font-medium bg-slate-50 p-4 rounded-2xl">
                        <Wind className="text-orange-600" /> Full Air-conditioning
                    </div>
                    <div className="flex items-center gap-4 text-slate-600 font-medium bg-slate-50 p-4 rounded-2xl">
                        <Car className="text-orange-600" /> Garage Parking
                    </div>
                </div>
            </div>
            <div className="bg-slate-950 p-8 rounded-[2rem] text-white">
                <h4 className="font-bold mb-2">Secure Your Room</h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">Ideally located next to Khayelitsha Mall for travelers and business guests.</p>
                <a href="https://wa.me/27639135127" className="block text-center bg-orange-600 py-4 rounded-xl font-bold shadow-lg">Book on WhatsApp</a>
            </div>
        </div>
        <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl shadow-slate-200">
                <PropertyGallery folder="makhaya" prefix="room" />
            </div>
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-slate-950 text-white pt-24 pb-12 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 border-b border-slate-800 pb-20 mb-10">
      <div>
        <h4 className="text-3xl font-black mb-6">Hlalanathi.</h4>
        <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">Elevating accommodation standards in Khayelitsha through safety, style, and superior service.</p>
        <div className="flex gap-4">
            <div className="p-3 bg-white/5 rounded-full"><Phone size={20}/></div>
            <div className="p-3 bg-white/5 rounded-full"><MapPin size={20}/></div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div>
            <h5 className="text-blue-500 font-bold text-xs uppercase tracking-widest mb-6">The Properties</h5>
            <div className="flex flex-col gap-4 text-sm font-medium">
                <Link to="/litha-park" className="hover:text-blue-400 transition-colors">Litha Park</Link>
                <Link to="/makhaya-bb" className="hover:text-orange-400 transition-colors">Makhaya B&B</Link>
            </div>
        </div>
        <div>
            <h5 className="text-blue-500 font-bold text-xs uppercase tracking-widest mb-6">Support</h5>
            <div className="flex flex-col gap-4 text-sm font-medium text-slate-400">
                <p>24/7 Availability</p>
                <p>Phakamisa, 7784</p>
            </div>
        </div>
      </div>
    </div>
    <p className="text-center text-[10px] text-slate-600 font-bold uppercase tracking-[0.5em]">© 2026 Hlalanathi Group</p>
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