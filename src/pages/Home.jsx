import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Star, ShieldCheck, Wifi, Battery, MapPin } from "lucide-react";

const Home = () => (
  <div className="animate-in fade-in duration-1000">
    <header className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900">
      <img
        src="/makhaya/room-1.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        alt="Hero"
      />
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-md border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
          <Star size={12} fill="currentColor" /> Premium Khayelitsha
          Accommodation
        </div>
        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-[0.9]">
          Modern Living. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 italic">
            Affordable Rates.
          </span>
        </h1>
        <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium opacity-90">
          From long-term bachelor flats to executive overnight B&B stays.
          Secure, clean, and centrally located.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/litha-park"
            className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
          >
            Litha Park Rentals
          </Link>
          <Link
            to="/makhaya-bb"
            className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all"
          >
            Makhaya B&B Stay
          </Link>
        </div>
      </div>
    </header>

    <section className="bg-white py-10 overflow-hidden border-b border-slate-100">
      <div className="animate-marquee flex gap-16 items-center text-slate-400 font-bold text-xs uppercase tracking-[0.3em]">
        {[1, 2].map((j) => (
          <React.Fragment key={j}>
            <span className="flex items-center gap-3">
              <ShieldCheck className="text-blue-600" size={20} /> Gated Security
            </span>
            <span className="flex items-center gap-3">
              <Wifi className="text-blue-600" size={20} /> Fiber Wi-Fi
            </span>
            <span className="flex items-center gap-3">
              <Battery className="text-blue-600" size={20} /> Backup Systems
            </span>
            <span className="flex items-center gap-3">
              <MapPin className="text-blue-600" size={20} /> Near Mall
            </span>
          </React.Fragment>
        ))}
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">
      <div className="relative group rounded-[3rem] overflow-hidden aspect-[4/5] md:aspect-square">
        <img
          src="/litha/flat-1.webp"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          alt="Litha"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-12 flex flex-col justify-end">
          <span className="text-blue-400 font-black text-xs uppercase tracking-widest mb-2">
            Residential
          </span>
          <h3 className="text-4xl font-black text-white mb-4">
            Litha Park Flats
          </h3>
          <Link
            to="/litha-park"
            className="bg-white text-slate-950 px-8 py-3 rounded-xl font-bold w-fit hover:bg-blue-600 hover:text-white transition-all"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
      <div className="relative group rounded-[3rem] overflow-hidden aspect-[4/5] md:aspect-square">
        <img
          src="/makhaya/room-1.jpg"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          alt="Makhaya"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-12 flex flex-col justify-end">
          <span className="text-orange-400 font-black text-xs uppercase tracking-widest mb-2">
            Hospitality
          </span>
          <h3 className="text-4xl font-black text-white mb-4">Makhaya B&B</h3>
          <Link
            to="/makhaya-bb"
            className="bg-white text-slate-950 px-8 py-3 rounded-xl font-bold w-fit hover:bg-orange-600 hover:text-white transition-all"
          >
            Book Overnight
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Home;