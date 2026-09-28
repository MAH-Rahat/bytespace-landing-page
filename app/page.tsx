import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/home/Hero";
import Partners from "@/components/home/Partners";
import CourseCatalog from "@/components/home/CourseCatalog";
import LearningPaths from "@/components/home/LearningPaths";
import Features from "@/components/home/Features";
import CTA from "@/components/home/CTA";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-black overflow-x-hidden">
      
      {/* Top Blue Hero Section */}
      <section className="bg-[#0b3ef0] w-full relative overflow-hidden h-screen min-h-[750px] max-h-[1000px] flex flex-col">
        {/* Exact Figma Grid Background */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
            backgroundSize: '80px 80px',
            backgroundPosition: 'center top'
          }}
        ></div>
        
        <Navbar />
        <Hero />
      </section>

      {/* Main Page Content */}
      <Partners />
      <CourseCatalog />
      <LearningPaths />  {/* <-- Moved exactly below the Course Catalog */}
      <Features />
      <CTA />
      <Testimonials />
      <Footer />
    </main>
  );
}