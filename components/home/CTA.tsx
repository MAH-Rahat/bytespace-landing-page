export default function CTA() {
  return (
    <section className="py-24 px-4 md:px-6 w-full flex justify-center">
      <div className="relative w-full max-w-[1400px] bg-[#0b3ef0] rounded-[2rem] py-20 px-6 md:px-12 text-center text-white overflow-hidden shadow-2xl">
        
        {/* Exact Figma Grid Background */}
        <div 
          className="absolute inset-0 z-0 opacity-20" 
          style={{ 
            backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
            backgroundSize: '80px 80px',
            backgroundPosition: 'center top'
          }}
        ></div>

        {/* Text & Content Layer */}
        <div className="relative z-20 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-wide drop-shadow-sm">
            Unlock Your Potential as a<br/>Creator with ByteSpace
          </h2>
          <p className="text-white/90 mb-10 max-w-4xl mx-auto text-sm md:text-base leading-relaxed font-light">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>
          <button className="bg-[#ccff00] text-black px-10 py-3.5 rounded-full font-bold text-sm hover:bg-[#b3e600] transition-colors shadow-lg">
            Join as Creator
          </button>
        </div>

        {/* Pure CSS Abstract Shapes Layer */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          
          {/* Top Left Yellow Zigzag */}
          <div className="absolute top-[-5%] left-[-2%] flex flex-col gap-3 -rotate-45 scale-125 md:scale-150 opacity-90">
              <div className="w-24 h-10 bg-[#ccff00] rounded-full ml-8 shadow-md"></div>
              <div className="w-24 h-10 bg-[#ccff00] rounded-full shadow-md"></div>
              <div className="w-24 h-10 bg-[#ccff00] rounded-full ml-8 shadow-md"></div>
          </div>

          {/* Top Left White Zigzag */}
          <div className="absolute top-[15%] left-[12%] flex flex-col gap-2 -rotate-12 scale-75 md:scale-90">
              <div className="w-16 h-6 bg-white rounded-full ml-4 shadow-lg"></div>
              <div className="w-16 h-6 bg-white rounded-full shadow-lg"></div>
              <div className="w-16 h-6 bg-white rounded-full ml-4 shadow-lg"></div>
          </div>

          {/* Top Right Yellow Pyramid (Triangle) */}
          <div className="absolute top-[8%] right-[18%] w-0 h-0 border-l-[40px] border-r-[40px] border-b-[75px] border-l-transparent border-r-transparent border-b-[#ccff00] rotate-[30deg] drop-shadow-2xl"></div>

          {/* Top Right White Cylinder */}
          <div className="absolute top-[-15%] right-[-5%] w-[150px] h-[220px] md:w-[200px] md:h-[280px] bg-white rounded-[70px] rotate-[20deg] shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.1)]"></div>

          {/* Bottom Left White Pyramid (Triangle) */}
          <div className="absolute bottom-[10%] left-[2%] w-0 h-0 border-l-[45px] border-r-[45px] border-b-[85px] border-l-transparent border-r-transparent border-b-white -rotate-[25deg] drop-shadow-2xl"></div>

          {/* Bottom Left Yellow Donut */}
          <div className="absolute bottom-[-10%] left-[10%] w-[140px] h-[140px] md:w-[200px] md:h-[200px] border-[35px] md:border-[50px] border-[#ccff00] rounded-full shadow-2xl"></div>

          {/* Bottom Right Yellow Zigzag */}
          <div className="absolute bottom-[-10%] right-[5%] flex flex-col gap-3 -rotate-45 scale-110 md:scale-125">
              <div className="w-24 h-10 bg-[#ccff00] rounded-full ml-8 shadow-md"></div>
              <div className="w-24 h-10 bg-[#ccff00] rounded-full shadow-md"></div>
              <div className="w-24 h-10 bg-[#ccff00] rounded-full ml-8 shadow-md"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}