export default function LearningPaths() {
  const paths = [
    {
      name: "Design",
      // Pen and ruler icon
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      )
    },
    {
      name: "Development",
      // Code/Mobile icon
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <polyline points="9 10 7 12 9 14" />
          <polyline points="15 10 17 12 15 14" />
        </svg>
      )
    },
    {
      name: "IT & Software",
      // Laptop icon
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <path d="M2 20h20" />
          <path d="M10 20v-3" />
          <path d="M14 20v-3" />
        </svg>
      )
    },
    {
      name: "Business",
      // Buildings icon
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="8" height="20" />
          <rect x="12" y="10" width="8" height="12" />
          <path d="M2 22h20" />
          <path d="M8 6h.01" />
          <path d="M8 10h.01" />
          <path d="M8 14h.01" />
          <path d="M8 18h.01" />
          <path d="M16 14h.01" />
          <path d="M16 18h.01" />
        </svg>
      )
    },
    {
      name: "Marketing",
      // Broadcast/Megaphone icon
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      )
    },
    {
      name: "Photography",
      // Camera icon
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-[40px] font-bold mb-4 text-gray-900 tracking-tight leading-tight">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-4xl mx-auto font-light leading-relaxed">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {paths.map((path, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center p-8 bg-white border border-gray-200 rounded-[2rem] hover:shadow-lg hover:border-transparent transition-all duration-300 cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-[#ccff00] flex items-center justify-center text-gray-900 mb-5">
              {path.icon}
            </div>
            <span className="text-sm font-semibold text-gray-900 text-center">
              {path.name}
            </span>
          </div>
        ))}
      </div>
      
    </section>
  );
}