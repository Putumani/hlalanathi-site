import React from "react";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <Link to="/" className="flex flex-col group">
        <span className="text-xl font-black tracking-tighter text-blue-600 uppercase group-hover:text-slate-900 transition-colors">
          Hlalanathi
        </span>
        <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">
          B&B & Rentals
        </span>
      </Link>
      <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
        <Link
          to="/litha-park"
          className="hover:text-blue-600 transition-colors"
        >
          Litha Flats
        </Link>
        <Link
          to="/makhaya-bb"
          className="hover:text-orange-600 transition-colors"
        >
          Makhaya B&B
        </Link>
      </div>
      <a
        href="https://wa.me/27639135127"
        className="flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-200"
      >
        <MessageCircle size={16} /> 063 913 5127
      </a>
    </div>
  </nav>
);

export default Navbar;