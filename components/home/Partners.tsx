export default function Partners() {
  const partners = ["Mymind", "Framer", "Dropcam", "Logitech", "Spotify"];
  
  return (
    <section className="w-full bg-gray-50 py-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale">
        {partners.map((partner, index) => (
          <div key={index} className="text-xl md:text-2xl font-bold font-serif text-gray-500">
            {partner}
          </div>
        ))}
      </div>
    </section>
  );
}