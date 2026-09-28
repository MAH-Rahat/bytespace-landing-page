export default function Partners() {
  const logos = [
    // 1. Waves Logo
    <svg key="1" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-gray-500">
      <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm0 18c-1.87 0-3.6-.62-5-1.67 1.83-1.07 3.5-1.33 5-1.33 1.63 0 3.32.32 5.25 1.56A7.95 7.95 0 0 1 12 20zm6.57-2.92c-2.15-1.39-4.2-1.74-6.07-1.74-1.74 0-3.32.3-5.02 1.34A7.97 7.97 0 0 1 4.12 12c0-1.75.56-3.37 1.5-4.68 1.83 1.05 3.5 1.3 5 1.3 1.63 0 3.33-.31 5.26-1.55a7.96 7.96 0 0 1 2.55 7.85z"/>
    </svg>,
    
    // 2. Sunburst Logo
    <svg key="2" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-gray-500">
      <path d="M12 2.5l2 5.5 5.5-1.5-3.5 4.5 4.5 3.5-5.5-1.5-2 5.5-2-5.5-5.5 1.5 3.5-4.5-4.5-3.5 5.5 1.5z"/>
    </svg>,
    
    // 3. Lightning Bolt Logo
    <svg key="3" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-gray-500">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 15v-4H8l6-7v4h3l-6 7z"/>
    </svg>,
    
    // 4. Clover/Dots Logo
    <svg key="4" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-gray-500">
      <circle cx="8.5" cy="8.5" r="4.5"/><circle cx="15.5" cy="8.5" r="4.5"/><circle cx="8.5" cy="15.5" r="4.5"/><circle cx="15.5" cy="15.5" r="4.5"/>
    </svg>,
    
    // 5. Concentric Circles Logo
    <svg key="5" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-500">
      <circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>
    </svg>
  ];

  return (
    <section className="w-full bg-[#f8f9fa] py-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center lg:justify-between items-center gap-10 md:gap-6">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
            {logo}
            <span className="font-extrabold text-[22px] tracking-tight text-gray-500">Logoipsum</span>
          </div>
        ))}
      </div>
    </section>
  );
}