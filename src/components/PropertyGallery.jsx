const PropertyGallery = ({ folder, prefix }) => {
  const [selectedImg, setSelectedImg] = useState(null);
  const images = [1, 2, 3, 4, 5, 6];
  const ext = prefix === "flat" ? "webp" : "jpg";

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
                  e.target.src =
                    "https://placehold.co/600x400/e2e8f0/64748b?text=Photo+Coming+Soon";
                }}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-xs font-bold uppercase tracking-widest">
                  View Photo
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:rotate-90 transition-transform">
            <X size={40} />
          </button>
          <img
            src={selectedImg}
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl border border-white/10"
            alt="Fullscreen"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default PropertyGallery;