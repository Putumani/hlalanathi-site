import { Link } from "react-router-dom";
import { ArrowLeft, Tv, Wind, Car } from "lucide-react";
import PropertyGallery from "../components/PropertyGallery";

const MakhayaBB = () => (
  <div className="animate-in fade-in duration-1000">
    <header className="relative h-[60vh] bg-orange-900 overflow-hidden">
      <img
        src="/makhaya/room-1.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        alt="Makhaya Hero"
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
          Makhaya <br />
          <span className="text-orange-600">Executive.</span>
        </h1>
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
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Ideally located next to Khayelitsha Mall for travelers and
              business guests.
            </p>
            <a
              href="https://wa.me/27639135127"
              className="block text-center bg-orange-600 py-4 rounded-xl font-bold shadow-lg"
            >
              Book on WhatsApp
            </a>
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

export default MakhayaBB;
