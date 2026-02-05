import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <header className="py-20 text-center px-6 bg-white border-b border-slate-100">
        <h1 className="text-5xl font-black mb-4 tracking-tight">Hlalanathi Properties</h1>
        <p className="text-slate-500 max-w-xl mx-auto italic">Premium residential rentals and cozy overnight stays in Khayelitsha.</p>
      </header>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 p-8">
        {/* Teaser 1 */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
          <h2 className="text-2xl font-bold mb-2 text-blue-600">Litha Park Flats</h2>
          <p className="text-slate-600 mb-6">Modern bachelor pads with unlimited Wi-Fi and hot water. Perfect for long-term living.</p>
          <Link to="/litha-park" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-bold">View Gallery & Details</Link>
        </div>

        {/* Teaser 2 */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
          <h2 className="text-2xl font-bold mb-2 text-orange-600">Makhaya B&B</h2>
          <p className="text-slate-600 mb-6">Centrally located overnight stays near the Mall. Private rooms with DSTV and Aircon.</p>
          <Link to="/makhaya-bb" className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg font-bold">View Gallery & Details</Link>
        </div>
      </div>
    </div>
  );
}
