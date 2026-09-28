import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white font-sans text-black">
      {/* Full-viewport blue section */}
      <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#0b3ef0]">
        {/* Grid background */}
        <div
          className="absolute inset-0 z-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            backgroundPosition: "center top",
          }}
        />

        {/* Navbar */}
        <div className="relative z-30 w-full">
          <Navbar />
        </div>

        {/* Centered 404 + text, filling the remaining space */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
          {/* Huge "404" — its lower third fades (blurs) into the blue background,
              exactly like the legs of the numbers dissolving away in the reference image. */}
          <h1
            className="select-none text-[150px] font-black leading-[0.8] tracking-tight text-[#ccff00] sm:text-[220px] md:text-[300px] lg:text-[360px]"
            style={{
              maskImage: "linear-gradient(to bottom, #000 55%, transparent 92%)",
              WebkitMaskImage: "linear-gradient(to bottom, #000 55%, transparent 92%)",
              filter: "blur(0px)",
            }}
          >
            404
          </h1>

          {/* Text overlaps the faded tail of the "4"s, matching the reference. */}
          <div className="relative z-20 -mt-[14vw] flex flex-col items-center sm:-mt-[10vw] md:-mt-[8vw] lg:-mt-[6vw]">
            <h2 className="mb-3 text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-md sm:text-4xl md:text-[46px]">
              The page you are looking
              <br />
              for doesn&apos;t exist
            </h2>

            <p className="mb-8 text-xs font-light text-white/80 drop-shadow-sm md:text-sm">
              Try to use a correct url or go back to homepage to start again
            </p>

            <Link
              href="/"
              className="rounded-full bg-[#ccff00] px-8 py-3.5 text-sm font-bold text-black shadow-xl transition-colors hover:bg-[#b3e600]"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}