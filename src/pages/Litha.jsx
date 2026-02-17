import { Link } from "react-router-dom";
import { ArrowLeft, Wifi, Droplets, WashingMachine } from "lucide-react";
import PropertyGallery from "../components/PropertyGallery";

const LithaPark = () => (
  <div className="animate-in fade-in duration-1000">
    <header className="relative h-[60vh] bg-blue-900 overflow-hidden">
      <img
        src="/litha/flat-1.webp"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        alt="Litha Hero"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
        <Link
          to="/"
          className="flex items-center gap-2 text-white/80 font-bold text-xs uppercase tracking-widest mb-8 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} /> Back to home
        </Link>
        <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter">
          Litha Park <br />
          <span className="text-blue-600">Studios.</span>
        </h1>
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
            <p className="text-blue-100 text-sm mb-6">
              Units are popular. Inquire now to secure your space for 2026.
            </p>
            <a
              href="https://wa.me/27639135127"
              className="block text-center bg-white text-blue-600 py-4 rounded-xl font-bold shadow-lg"
            >
              Inquire via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LithaPark;
