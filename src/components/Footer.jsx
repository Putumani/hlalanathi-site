import { Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-slate-950 text-white pt-24 pb-12 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 border-b border-slate-800 pb-20 mb-10">
      <div>
        <h4 className="text-3xl font-black mb-6">Hlalanathi.</h4>
        <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
          Elevating accommodation standards in Khayelitsha through safety,
          style, and superior service.
        </p>
        <div className="flex gap-4">
          <div className="p-3 bg-white/5 rounded-full">
            <Phone size={20} />
          </div>
          <div className="p-3 bg-white/5 rounded-full">
            <MapPin size={20} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h5 className="text-blue-500 font-bold text-xs uppercase tracking-widest mb-6">
            The Properties
          </h5>
          <div className="flex flex-col gap-4 text-sm font-medium">
            <Link
              to="/litha-park"
              className="hover:text-blue-400 transition-colors"
            >
              Litha Park
            </Link>
            <Link
              to="/makhaya-bb"
              className="hover:text-orange-400 transition-colors"
            >
              Makhaya B&B
            </Link>
          </div>
        </div>
        <div>
          <h5 className="text-blue-500 font-bold text-xs uppercase tracking-widest mb-6">
            Support
          </h5>
          <div className="flex flex-col gap-4 text-sm font-medium text-slate-400">
            <p>24/7 Availability</p>
            <p>Phakamisa, 7784</p>
          </div>
        </div>
      </div>
    </div>
    <p className="text-center text-[10px] text-slate-600 font-bold uppercase tracking-[0.5em]">
      © 2026 Hlalanathi Group
    </p>
  </footer>
);

export default Footer;