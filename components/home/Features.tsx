import Image from "next/image";

export default function Features() {
  return (
    <section className="relative py-24 px-6 w-full overflow-hidden">
      
      {/* Soft Background Gradients to match the design */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-[#ccff00]/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-5%] w-[600px] h-[600px] bg-[#ccff00]/20 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-[#0b3ef0]/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-32">
        
        {/* Feature 1: Your Path to Professional Growth */}
        <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
          
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.15] text-gray-900">
              Your Path to Professional<br />Growth Starts Here!
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-md leading-relaxed">
              Get an extensive library of courses to enhance your capabilities and accomplish your goals. Whether you are looking to improve your skills, learn a new tool, we have a diverse range of offers tailored to whatever you need.
            </p>
            <div className="flex gap-10 pt-4">
              <div>
                <h4 className="text-2xl font-black text-[#0b3ef0] mb-1">12K</h4>
                <p className="text-xs font-semibold text-gray-400">Students</p>
              </div>
              <div>
                <h4 className="text-2xl font-black text-[#0b3ef0] mb-1">70+</h4>
                <p className="text-xs font-semibold text-gray-400">Courses</p>
              </div>
              <div>
                <h4 className="text-2xl font-black text-[#0b3ef0] mb-1">16</h4>
                <p className="text-xs font-semibold text-gray-400">Centers</p>
              </div>
            </div>
          </div>

          {/* Visual Composition */}
          <div className="flex-1 relative w-full h-[450px] md:h-[550px] flex items-center justify-center">
            
            {/* Main Student Image (Boy) */}
            <div className="relative w-[320px] h-[450px] md:w-[400px] md:h-[550px] z-20">
              {/* Ensure Image1.png is the boy from the Figma file */}
              <Image src="/Image1.png" alt="Student" fill className="object-contain object-bottom drop-shadow-2xl" />
            </div>

            {/* Floating Top Left: Course Video Card */}
            <div className="absolute top-[10%] left-[0%] md:left-[5%] bg-white p-2.5 rounded-2xl shadow-xl z-30 w-[160px] flex flex-col gap-2">
               <div className="w-full h-20 bg-gray-200 rounded-xl overflow-hidden relative">
                 {/* Placeholder for video thumbnail - replace with actual image if you have it */}
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop')] bg-cover bg-center"></div>
               </div>
               <div>
                 <p className="text-[11px] font-bold text-black leading-tight">Learn digital Marketing...</p>
                 <p className="text-[9px] font-medium text-gray-400 mt-1">42 Lessons</p>
               </div>
               <div className="flex -space-x-1.5 mt-1">
                  <div className="w-5 h-5 rounded-full bg-blue-100 border border-white"></div>
                  <div className="w-5 h-5 rounded-full bg-pink-100 border border-white"></div>
                  <div className="w-5 h-5 rounded-full bg-green-100 border border-white"></div>
               </div>
            </div>

            {/* Floating Right: 55% Card */}
            <div className="absolute bottom-[25%] right-[0%] md:right-[5%] bg-white p-5 rounded-2xl shadow-xl z-30 w-[170px]">
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Learning Progress</span>
              <span className="text-3xl font-black text-black">55%</span>
              <div className="w-full h-1.5 bg-gray-100 rounded-full mt-3">
                <div className="w-[55%] h-full bg-[#ccff00]"></div>
              </div>
            </div>

            {/* Floating Yellow Zigzag Shape (CSS) */}
            <div className="absolute top-[15%] right-[-5%] flex flex-col gap-2.5 -rotate-12 scale-110 z-10">
              <div className="w-16 h-6 bg-[#ccff00] rounded-full ml-4 shadow-sm"></div>
              <div className="w-16 h-6 bg-[#ccff00] rounded-full shadow-sm"></div>
              <div className="w-16 h-6 bg-[#ccff00] rounded-full ml-4 shadow-sm"></div>
            </div>

          </div>
        </div>

        {/* Feature 2: Create & Manage Courses Easily */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 relative z-10">
          
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.15] text-gray-900">
              Create & Manage<br />Courses Easily.
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-md leading-relaxed">
              ByteSpace is a platform that helps educators to create, manage, and sell their courses online.
            </p>
            <ul className="space-y-4 pt-2 text-sm font-bold text-gray-800">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0b3ef0] text-white flex items-center justify-center text-[10px] font-black shadow-md">✓</div>
                Build Your Courses
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0b3ef0] text-white flex items-center justify-center text-[10px] font-black shadow-md">✓</div>
                Manage Your Revenue
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0b3ef0] text-white flex items-center justify-center text-[10px] font-black shadow-md">✓</div>
                Analytics And Discovery
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0b3ef0] text-white flex items-center justify-center text-[10px] font-black shadow-md">✓</div>
                Global Community
              </li>
            </ul>
          </div>

          {/* Visual Composition */}
          <div className="flex-1 relative w-full h-[450px] md:h-[550px] flex items-center justify-center">
            
            {/* Main Image (Girl with headset) */}
            <div className="relative w-[320px] h-[450px] md:w-[400px] md:h-[550px] z-20">
              {/* Ensure Image2.png is the girl with the headset from the Figma file */}
              <Image src="/Image2.png" alt="Instructor" fill className="object-contain object-bottom drop-shadow-2xl" />
            </div>

            {/* Floating Top Left: Blue Revenue Cards */}
            <div className="absolute top-[20%] left-[-5%] md:left-[5%] z-30 flex flex-col gap-3">
              <div className="bg-[#0b3ef0] text-white p-4 rounded-xl shadow-xl w-[160px]">
                <p className="text-[10px] text-white/80 font-medium mb-0.5">Total Revenue</p>
                <p className="text-xl font-bold">$120.00</p>
                <div className="w-full h-1 bg-white/20 rounded-full mt-3">
                  <div className="w-[30%] h-full bg-[#ccff00] rounded-full"></div>
                </div>
              </div>
              <div className="bg-[#0b3ef0] text-white p-4 rounded-xl shadow-xl w-[160px]">
                <p className="text-[10px] text-white/80 font-medium mb-0.5">Total Balance</p>
                <p className="text-xl font-bold">$1,200.00</p>
                <div className="w-6 h-6 bg-[#ccff00] rounded-full mt-3 flex items-center justify-center">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Floating Bottom Right: Happy Students Card */}
            <div className="absolute bottom-[10%] right-[0%] md:right-[15%] bg-white p-3.5 rounded-2xl shadow-xl z-30 w-[180px]">
              <div className="flex flex-col items-start mb-2">
                <span className="text-xs font-bold text-black">Happy Students</span>
                <span className="text-[10px] text-gray-500 font-medium">4.5 (240) <span className="text-yellow-400">★</span></span>
              </div>
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-gray-200 border-2 border-white overflow-hidden relative"><Image src="/Ellipse1.png" alt="Student" fill className="object-cover"/></div>
                <div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-white overflow-hidden relative"><Image src="/Ellipse 2.png" alt="Student" fill className="object-cover"/></div>
                <div className="w-7 h-7 rounded-full bg-gray-400 border-2 border-white overflow-hidden relative"><Image src="/Ellipse3.png" alt="Student" fill className="object-cover"/></div>
                <div className="w-7 h-7 rounded-full bg-[#ccff00] border-2 border-white flex items-center justify-center text-[8px] font-bold z-10 text-black">2K+</div>
              </div>
            </div>

            {/* Floating Yellow Zigzag Shape (CSS) */}
            <div className="absolute top-[45%] right-[-5%] flex flex-col gap-2.5 -rotate-45 scale-110 z-10">
              <div className="w-16 h-6 bg-[#ccff00] rounded-full ml-4 shadow-sm"></div>
              <div className="w-16 h-6 bg-[#ccff00] rounded-full shadow-sm"></div>
              <div className="w-16 h-6 bg-[#ccff00] rounded-full ml-4 shadow-sm"></div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}