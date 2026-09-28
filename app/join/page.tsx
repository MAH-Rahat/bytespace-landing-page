import Image from "next/image";
import Link from "next/link";

/* ---------- Abstract 3D-style shapes ---------- */
function Zigzag({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 220" className={className} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M35 40 L165 72 L40 118 L165 152 L60 186" stroke="#ffffff" strokeWidth="46" />
      <path d="M35 40 L165 72 L40 118 L165 152 L60 186" stroke="#f0f4f8" strokeWidth="20" transform="translate(-6 -8)" opacity="0.9" />
    </svg>
  );
}

function Donut({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 240" className={className} fill="none">
      <g transform="rotate(-20 120 120)">
        <ellipse cx="120" cy="120" rx="72" ry="62" stroke="#ccff00" strokeWidth="62" />
        <ellipse cx="120" cy="116" rx="72" ry="62" stroke="#dfff33" strokeWidth="50" />
      </g>
    </svg>
  );
}

function Pyramid({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 150" className={className}>
      <polygon points="70,5 5,105 70,140" fill="#ccff00" />
      <polygon points="70,5 135,105 70,140" fill="#b3e600" />
    </svg>
  );
}

export default function JoinPage() {
  const studentImages = ["/student1.png", "/student2.png", "/student3.png", "/student4.png"];

  return (
    <main 
      className="min-h-screen w-full relative flex items-center justify-center bg-[#0038e6] text-white overflow-hidden py-16 px-6 lg:px-16"
      style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
        backgroundSize: '120px 120px',
        backgroundPosition: 'center top'
      }}
    >
      {/* Main Container */}
      <div className="max-w-[1300px] w-full flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
        
        {/* Left Column: Text & Graphic Composition (Larger Scale) */}
        <div className="w-full lg:w-[48%] flex flex-col">
          
          {/* Logo using actual asset */}
          <Link href="/" className="flex items-center gap-2 mb-10">
            <Image src="/logo.png" alt="ByteSpace Logo" width={36} height={36} />
            <span className="text-xl font-bold tracking-wide text-white">ByteSpace</span>
          </Link>

          <h1 className="text-4xl lg:text-[48px] font-bold mb-4 tracking-tight leading-tight">Sign up and come in</h1>
          <p className="text-white/80 max-w-[440px] text-base leading-relaxed mb-12 font-light">
            The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.
          </p>

          {/* Scaled-up Card Composition Area */}
          <div className="relative w-full max-w-[480px] h-[480px]">
            
            {/* Shapes */}
            <Donut className="absolute top-8 left-[-15px] w-28 drop-shadow-2xl z-30" />
            <Zigzag className="absolute bottom-12 right-[-10px] w-32 drop-shadow-xl z-20" />
            <Pyramid className="absolute bottom-2 left-[-10px] w-20 drop-shadow-2xl z-40 rotate-12" />

            {/* Back Card: Build Digital Asset */}
            <div className="absolute top-16 left-8 w-[290px] bg-white rounded-3xl p-3.5 shadow-2xl z-10 text-black">
              <div className="w-full h-[135px] bg-gray-100 rounded-2xl overflow-hidden relative">
                <Image src="/Image1.2.png" alt="Build Digital Asset" fill className="object-cover" />
              </div>
              <div className="pt-3.5 pb-1 px-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-[15px] leading-tight text-gray-900 truncate">Build Digital Asset</h3>
                  <span className="text-gray-400 text-xs font-semibold flex items-center gap-0.5">4.5 <span className="text-[#ccff00]">★</span></span>
                </div>
                <p className="text-[10px] text-gray-400 mt-1 font-medium">by purepearl studio</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md">
                    <span className="text-[10px] font-semibold text-gray-600">Beginner</span>
                  </div>
                  <span className="text-lg font-black text-[#0b3ef0]">$25<span className="text-[9px] text-gray-400 font-medium">/lifetime</span></span>
                </div>
              </div>
            </div>

            {/* Front Card: Power of Big Data */}
            <div className="absolute top-28 left-[140px] w-[310px] bg-white rounded-3xl p-3.5 shadow-2xl z-20 text-black">
              <div className="w-full h-[155px] bg-gray-100 rounded-2xl overflow-hidden relative">
                <Image src="/Image1.3.png" alt="The Power of Big Data" fill className="object-cover" />
              </div>
              <div className="pt-3.5 pb-1 px-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-[16px] leading-tight text-gray-900 truncate">the Power of Big Data</h3>
                  <span className="text-gray-400 text-xs font-semibold flex items-center gap-0.5">4.5 <span className="text-[#ccff00]">★</span></span>
                </div>
                <p className="text-[10px] text-gray-400 mt-1 font-medium">by purepearl studio</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md">
                    <span className="text-[10px] font-semibold text-gray-600">Beginner</span>
                  </div>
                  <div className="flex -space-x-2 items-center">
                    {studentImages.map((src, idx) => (
                      <div key={idx} className="relative w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                        <Image src={src} alt="Student" fill className="object-cover" />
                      </div>
                    ))}
                    <div className="relative w-7 h-7 rounded-full bg-black text-white border-2 border-white flex items-center justify-center text-[9px] font-black z-10">26+</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card: Happy Students (Lime Green) */}
            <div className="absolute bottom-10 left-16 w-[235px] bg-[#ccff00] rounded-2xl p-4 shadow-2xl z-30 text-black">
              <span className="text-[14px] font-bold block mb-0.5">Happy Students</span>
              <div className="text-[11px] font-semibold text-gray-800 mb-2.5">4.5 (240) <span className="text-blue-600">★</span></div>
              <div className="flex -space-x-2 items-center">
                {studentImages.map((src, idx) => (
                  <div key={idx} className="relative w-8 h-8 rounded-full border-2 border-[#ccff00] overflow-hidden bg-white">
                    <Image src={src} alt="Student" fill className="object-cover" />
                  </div>
                ))}
                <div className="relative w-8 h-8 rounded-full bg-black text-white border-2 border-[#ccff00] flex items-center justify-center text-[10px] font-black z-10">2K+</div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Form Box (Matching Proportions) */}
        <div className="w-full lg:w-[46%] flex justify-center lg:justify-end">
          <div className="bg-white w-full max-w-[500px] rounded-[2.5rem] p-10 md:p-12 shadow-2xl text-black">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Create an Account</span>
            <h2 className="text-[38px] font-bold mt-2 mb-10 text-gray-900 tracking-tight leading-tight">Welcome to<br/>ByteSpace</h2>
            
            <form className="flex flex-col gap-5">
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-gray-700 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Jamie Davis" 
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-blue-600 text-sm placeholder:text-gray-400 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-gray-700 ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="designer@example.com" 
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-blue-600 text-sm placeholder:text-gray-400 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-gray-700 ml-1">Password</label>
                <input 
                  type="password" 
                  placeholder="********" 
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-blue-600 text-sm placeholder:text-gray-400 transition-colors"
                />
              </div>

              <div className="flex justify-end mt-4">
                <button type="button" className="bg-[#ccff00] text-black px-10 py-3.5 rounded-full font-bold text-sm hover:bg-[#b3e600] transition-colors shadow-sm">
                  Continue
                </button>
              </div>

            </form>

            <div className="mt-14 text-center">
              <p className="text-xs font-medium text-gray-500">
                Already have an account? <Link href="/login" className="text-blue-600 font-semibold hover:underline">Login</Link>
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}