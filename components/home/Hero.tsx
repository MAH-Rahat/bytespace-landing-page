import Image from "next/image";

/* ---------- Abstract 3D-style shapes (inline SVG, no image files needed) ---------- */

function Zigzag({ variant = "lime", className = "" }: { variant?: "lime" | "white"; className?: string }) {
  const base = variant === "lime" ? "#b5f000" : "#dfe5f2";
  const light = variant === "lime" ? "#e4ff4a" : "#ffffff";
  const d = "M35 40 L165 72 L40 118 L165 152 L60 186";
  return (
    <svg viewBox="0 0 200 220" className={className} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} stroke={base} strokeWidth="46" />
      <path d={d} stroke={light} strokeWidth="20" transform="translate(-6 -8)" opacity="0.75" />
    </svg>
  );
}

function Donut({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 240" className={className} fill="none">
      <g transform="rotate(-20 120 120)">
        <ellipse cx="120" cy="120" rx="72" ry="62" stroke="#e3e8f4" strokeWidth="62" />
        <ellipse cx="120" cy="116" rx="72" ry="62" stroke="#ffffff" strokeWidth="50" />
        <ellipse cx="120" cy="120" rx="41" ry="31" stroke="rgba(0,30,140,0.25)" strokeWidth="8" />
      </g>
    </svg>
  );
}

function Cylinder({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 280" className={className}>
      <defs>
        <linearGradient id="cyl" x1="0" x2="1">
          <stop offset="0" stopColor="#d6ff2e" />
          <stop offset="1" stopColor="#a8e600" />
        </linearGradient>
      </defs>
      <g transform="rotate(-28 110 140)">
        <path d="M35 70 L55 230 Q110 262 165 230 L185 70 Z" fill="url(#cyl)" />
        <ellipse cx="110" cy="70" rx="75" ry="30" fill="#d9ff3c" />
      </g>
    </svg>
  );
}

function Pyramid({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 150" className={className}>
      <polygon points="70,5 5,105 70,140" fill="#ffffff" />
      <polygon points="70,5 135,105 70,140" fill="#dde3ef" />
    </svg>
  );
}

/* ---------- Hero ---------- */

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[900px] w-full flex-col overflow-hidden bg-[#0038e6] text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
        backgroundSize: "120px 120px",
      }}
    >
      {/* ===== Shapes layer (behind everything, positioned in % so it scales) ===== */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
        <Zigzag variant="lime" className="absolute left-[-1%] top-[27%] w-[14%] drop-shadow-xl" />
        <Zigzag variant="white" className="absolute left-[14%] top-[50%] w-[8%] drop-shadow-xl" />
        <Donut className="absolute bottom-[-3%] left-[4%] w-[17%] drop-shadow-2xl" />
        <Cylinder className="absolute right-[-1%] top-[24%] w-[12%] drop-shadow-xl" />
        <Pyramid className="absolute left-[78%] top-[49%] w-[9%] drop-shadow-xl" />
        <Zigzag variant="white" className="absolute bottom-[-2%] right-[2%] w-[13%] drop-shadow-xl" />
      </div>

      {/* ===== Text + search ===== */}
      <div className="relative z-30 mx-auto flex w-full max-w-5xl flex-col items-center px-6 pt-16 text-center md:pt-14">
        <h1 className="text-5xl font-semibold leading-[1.15] tracking-tight md:text-6xl lg:text-[76px]">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        <p className="mt-8 max-w-3xl text-sm font-light text-white/90 md:text-base">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <div className="mt-12 flex w-full max-w-[600px] items-center gap-3">
          <div className="flex h-[52px] flex-1 items-center rounded-full bg-white px-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5 shrink-0 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="ml-3 w-full bg-transparent text-sm text-black outline-none placeholder:text-gray-400"
            />
          </div>
          <button className="h-[46px] rounded-full bg-[#ccff00] px-6 text-sm font-medium text-black transition-colors hover:bg-[#b8e600]">
            Search
          </button>
        </div>
      </div>

      {/* ===== Bottom stage: green circle + student + floating cards ===== */}
      <div className="relative z-20 mt-auto flex w-full justify-center pt-16">
        {/* Scales down on small screens while keeping proportions */}
        <div className="relative h-[373px] w-[1100px] shrink-0 origin-bottom scale-[0.55] sm:scale-75 lg:scale-100">
          {/* Green circle (top edge sits at the top of this stage, bottom is clipped by the section) */}
          <div className="absolute left-1/2 top-0 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-[#ccff00]" />

          {/* Student */}
          <div className="absolute bottom-[-10px] left-1/2 h-[460px] w-[560px] -translate-x-1/2">
            <Image
              src="/Image1.png"
              alt="Student with laptop"
              fill
              priority
              sizes="560px"
              className="origin-bottom scale-[1.12] object-contain object-bottom"
            />
          </div>

          {/* Card: UI/UX Design */}
          <div className="absolute left-[calc(50%-315px)] top-[55px] flex flex-col gap-1 rounded-xl bg-white px-4 py-3 text-black shadow-xl">
            <span className="text-[15px] font-medium">UI/UX Design</span>
            <span className="text-[11px] text-gray-500">200 Courses &nbsp;•&nbsp; 1000+ Students</span>
          </div>

          {/* Card: Learning Progress */}
          <div className="absolute left-[calc(50%+123px)] top-[66px] w-[232px] rounded-xl bg-white px-4 py-4 text-black shadow-xl">
            <span className="text-xs font-medium">Learning Progress</span>
            <div className="mt-1 text-[46px] font-medium leading-none">55%</div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-100">
              <div className="h-full w-[55%] rounded-full bg-[#ccff00]" />
            </div>
          </div>

          {/* Card: Happy Students */}
          <div className="absolute left-[calc(50%-390px)] top-[252px] w-[257px] rounded-xl bg-white px-4 py-3 text-black shadow-xl">
            <span className="text-[15px] font-medium">Happy Students</span>
            <div className="text-[11px] text-gray-500">
              4.5 (240) <span className="text-[#ccff00]">★</span>
            </div>
            <div className="mt-2 flex items-center">
              {["/Ellipse1.png", "/Ellipse2.png", "/Ellipse3.png"].map((src, i) => (
                <div key={i} className="relative -ml-2 h-9 w-9 overflow-hidden rounded-full border-2 border-white bg-gray-200 first:ml-0">
                  <Image src={src} alt="Student" fill className="object-cover" />
                </div>
              ))}
              <div className="-ml-2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#ccff00] text-[10px] font-bold">
                2K+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}