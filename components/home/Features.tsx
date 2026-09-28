import Image from "next/image";

/* ---------- Reusable pieces ---------- */

function Zigzag({ className = "" }: { className?: string }) {
  const d = "M35 40 L165 72 L40 118 L165 152 L60 186";
  return (
    <svg viewBox="0 0 200 220" className={className} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} stroke="#b5f000" strokeWidth="46" />
      <path d={d} stroke="#e4ff4a" strokeWidth="20" transform="translate(-6 -8)" opacity="0.75" />
    </svg>
  );
}

/* Fixed-size design canvas. `zoom` shrinks the whole thing on smaller screens
   (and shrinks its layout size too), so every card/person keeps its exact position. */
function Stage({ w, h, children }: { w: number; h: number; children: React.ReactNode }) {
  return (
    <div
      className="mx-auto [zoom:0.5] sm:[zoom:0.85] md:[zoom:0.48] lg:[zoom:0.68] xl:[zoom:0.8]"
      style={{ width: w, height: h }}
    >
      <div className="relative" style={{ width: w, height: h }}>
        {children}
      </div>
    </div>
  );
}

function Avatars({ size = "h-9 w-9" }: { size?: string }) {
  return (
    <div className="flex items-center">
      {["/Ellipse1.png", "/Ellipse2.png", "/Ellipse3.png"].map((src, i) => (
        <div key={i} className={`relative -ml-2 overflow-hidden rounded-full border-2 border-white bg-gray-200 first:ml-0 ${size}`}>
          <Image src={src} alt="Student" fill className="object-cover" />
        </div>
      ))}
      <div className={`-ml-2 flex items-center justify-center rounded-full border-2 border-white bg-[#ccff00] text-[11px] font-bold text-black ${size}`}>
        2K+
      </div>
    </div>
  );
}

/* ---------- Features ---------- */

export default function Features() {
  return (
    <section className="relative isolate w-full overflow-hidden px-6 py-24">
      {/* Soft background glows */}
      <div className="pointer-events-none absolute left-[-10%] top-[8%] -z-10 h-[500px] w-[500px] rounded-full bg-[#ccff00]/40 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[8%] left-[-5%] -z-10 h-[600px] w-[600px] rounded-full bg-[#ccff00]/40 blur-[150px]" />
      <div className="pointer-events-none absolute right-[-10%] top-[30%] -z-10 h-[500px] w-[500px] rounded-full bg-[#0b3ef0]/15 blur-[150px]" />

      <div className="mx-auto flex max-w-6xl flex-col gap-24 md:gap-32">
        {/* ================= Feature 1 (boy) ================= */}
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold leading-[1.15] text-gray-900 md:text-5xl">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-gray-500 md:text-base">
              Get an extensive library of courses to enhance your capabilities and accomplish your goals. Whether you
              are looking to improve your skills or learn a new tool, we have a diverse range of offers tailored to
              whatever you need.
            </p>
            <div className="flex gap-10 pt-4">
              {[
                ["12K", "Students"],
                ["70+", "Courses"],
                ["16", "Centers"],
              ].map(([num, label]) => (
                <div key={label}>
                  <h4 className="mb-1 text-2xl font-extrabold text-[#0b3ef0]">{num}</h4>
                  <p className="text-xs font-semibold text-gray-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex-1">
            <Stage w={640} h={610}>
              {/* soft glows behind this visual */}
              <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#ccff00]/25 blur-[90px]" />
              <div className="absolute -right-20 -top-16 h-72 w-72 rounded-full bg-[#0b3ef0]/10 blur-[90px]" />

              {/* BACK: course card (z-10) — the boy covers its right side */}
              <div className="absolute left-[40px] top-[40px] z-10 h-[385px] w-[358px] rounded-[28px] border border-gray-200 bg-white p-4 shadow-sm">
                <div className="relative h-[195px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#2b2f3a] via-[#5b6274] to-[#c9cedb]">
                  {/* replace with a real photo: <Image src="/course.jpg" fill className="object-cover" alt="" /> */}
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <span className="rounded-full bg-white/70 px-3 py-1.5 text-[13px] text-gray-700 backdrop-blur">17 Lessons</span>
                    <span className="rounded-full bg-white/70 px-3 py-1.5 text-[13px] text-gray-700 backdrop-blur">2 hours 16 mins</span>
                  </div>
                </div>
                <h3 className="mt-5 text-[24px] font-semibold leading-tight text-black">Learn Figma from Basics</h3>
                <p className="mt-1 text-sm text-gray-500">
                  by <span className="text-[#0b3ef0]">purepearl studio</span>
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">
                    <span className="flex items-end gap-[2px]">
                      <i className="block h-1.5 w-[3px] bg-gray-700" />
                      <i className="block h-2.5 w-[3px] bg-gray-700" />
                      <i className="block h-3.5 w-[3px] bg-gray-300" />
                    </span>
                    Beginner
                  </span>
                  <span className="h-9 w-9 rounded-full bg-pink-200" />
                </div>
                <p className="mt-4 text-xl font-semibold text-[#0b3ef0]">
                  $25<span className="text-sm font-normal text-gray-500">/lifetime</span>
                </p>
              </div>

              {/* MIDDLE: boy (z-20) */}
              <div className="absolute left-[90px] top-[85px] z-20 h-[525px] w-[540px]">
                <Image
                  src="/Image1.png"
                  alt="Student"
                  fill
                  className="object-contain object-bottom drop-shadow-[0_25px_30px_rgba(0,0,0,0.15)]"
                />
              </div>

              {/* FRONT: progress card (z-30) */}
              <div className="absolute left-[385px] top-[255px] z-30 h-[135px] w-[232px] rounded-2xl bg-white p-4 shadow-xl">
                <span className="block text-sm text-gray-600">Learning Progress</span>
                <span className="mt-1 block text-[46px] font-medium leading-none text-gray-900">55%</span>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full w-[55%] rounded-full bg-[#ccff00]" />
                </div>
              </div>

              {/* FRONT: zigzag (z-40) */}
              <Zigzag className="absolute left-[492px] top-[118px] z-40 w-[130px] drop-shadow-lg" />
            </Stage>
          </div>
        </div>

        {/* ================= Feature 2 (girl) ================= */}
        <div className="flex flex-col items-center gap-12 md:flex-row-reverse">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold leading-[1.15] text-gray-900 md:text-5xl">
              Create &amp; Manage
              <br />
              Courses Easily.
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-gray-500 md:text-base">
              ByteSpace is a platform that helps educators to create, manage, and sell their courses online.
            </p>
            <ul className="space-y-4 pt-2 text-sm font-semibold text-gray-800">
              {["Build Your Courses", "Manage Your Revenue", "Analytics And Discovery", "Global Community"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0b3ef0] text-[10px] font-black text-white shadow-md">
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full flex-1">
            <Stage w={640} h={670}>
              {/* soft glows behind this visual */}
              <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#0b3ef0]/10 blur-[90px]" />
              <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[#ccff00]/40 blur-[100px]" />

              {/* BACK: blue cards (z-10) — the girl covers their right side */}
              <div className="absolute left-[48px] top-[64px] z-10 h-[119px] w-[270px] rounded-2xl bg-[#0b3ef0] p-4 text-white">
                <p className="text-[17px]">Total Revenue</p>
                <p className="text-[10px] text-white/80">July 1-28</p>
                <p className="mt-2 text-[28px] font-semibold leading-none">$120.29</p>
                <div className="mt-3 h-[7px] w-full overflow-hidden rounded-full bg-white">
                  <div className="h-full w-[65%] rounded-full bg-[#ccff00]" />
                </div>
              </div>
              <div className="absolute left-[48px] top-[214px] z-10 h-[134px] w-[135px] rounded-2xl bg-[#0b3ef0] p-4 text-white">
                <p className="text-[16px] leading-tight">Year to Date</p>
                <p className="text-[10px] text-white/80">2023</p>
                <p className="mt-2 text-[22px] font-semibold leading-none">$1,200.38</p>
                <span className="mt-3 inline-block rounded-full bg-[#ccff00] px-3 py-1 text-[11px] font-medium text-black">
                  +12$
                </span>
              </div>

              {/* BACK: zigzag (z-10) */}
              <Zigzag className="absolute left-[380px] top-[150px] z-10 w-[165px] drop-shadow-lg" />

              {/* MIDDLE: girl (z-20) */}
              <div className="absolute left-[85px] top-[40px] z-20 h-[580px] w-[420px]">
                <Image
                  src="/Image2.png"
                  alt="Instructor"
                  fill
                  className="object-contain object-bottom drop-shadow-[0_25px_30px_rgba(0,0,0,0.15)]"
                />
              </div>

              {/* FRONT: Happy Students (z-30) */}
              <div className="absolute left-[332px] top-[433px] z-30 h-[122px] w-[258px] rounded-2xl bg-white p-4 shadow-xl">
                <span className="block text-[17px] text-gray-900">Happy Students</span>
                <span className="mb-2 block text-xs text-gray-500">
                  <b className="text-gray-800">4.5</b> (240) <span className="text-[#ccff00]">★</span>
                </span>
                <Avatars />
              </div>
            </Stage>
          </div>
        </div>
      </div>
    </section>
  );
}