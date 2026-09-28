import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function CoursesPage() {
  const categories = [
    "Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", 
    "UI/UX Design", "Creative Marketing", "Cooking"
  ];

  // Base courses to repeat for the extended search view
  const baseCourses = [
    { title: "Learn Figma from Basic", image: "/Image1.1.png" },
    { title: "Build Digital Asset", image: "/Image1.2.png" },
    { title: "the Power of Big Data", image: "/Image1.3.png" },
    { title: "Balancing Productivity an...", image: "/Image1.4.png" },
    { title: "Mastering Money Manage...", image: "/Image1.5.png" },
    { title: "From Idea to Startup Succ...", image: "/Image1.6.png" },
  ];

  // 4 rows of 3 to match the full catalog look in your design
  const courses = [...baseCourses, ...baseCourses, ...baseCourses, ...baseCourses];
  const studentImages = ["/student1.png", "/student2.png", "/student3.png", "/student4.png"];

  return (
    <main className="min-h-screen bg-white font-sans text-black overflow-x-hidden">
      
      {/* Top Blue Header Section */}
      <section className="bg-[#0b3ef0] w-full relative overflow-hidden pb-20 pt-2">
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

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Find Your Next Course
          </h1>

          {/* Search Bar with Dropdown */}
          <div className="flex flex-col sm:flex-row items-center bg-white rounded-full p-2 shadow-2xl max-w-2xl mx-auto gap-2">
            <div className="flex items-center flex-1 px-4 py-2 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input 
                type="text" 
                placeholder="Search..." 
                className="ml-3 w-full bg-transparent text-sm text-black outline-none placeholder:text-gray-400"
              />
            </div>
            
            <div className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors px-5 py-3 rounded-full cursor-pointer shrink-0">
              <span className="text-sm font-semibold text-gray-800">Courses</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Toolbar */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-6 mb-8">
          
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"/></svg>
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
              Level
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
              Category
            </button>
          </div>

          <div className="text-xs font-semibold text-gray-500">
            Most Relevant
          </div>
        </div>

        {/* Category Tags Row */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {categories.map((cat, i) => (
            <button 
              key={i} 
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                cat === "Featured" 
                  ? 'bg-[#ccff00] text-black shadow-sm' 
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid - Connected to Course Detail Page */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {courses.map((course, i) => (
            <Link key={i} href="/courses/1" className="group">
              <div className="bg-white rounded-[1.5rem] p-3 shadow-sm group-hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                <div className="w-full h-[200px] bg-gray-100 rounded-xl overflow-hidden relative">
                  <Image src={course.image} alt={course.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                
                <div className="px-1 pt-4 pb-2 flex flex-col flex-1">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-bold text-[17px] leading-tight text-gray-900 group-hover:text-blue-600 transition-colors truncate">{course.title}</h3>
                    <span className="text-gray-400 text-xs font-semibold whitespace-nowrap flex items-center gap-0.5">
                      4.5 <span className="text-gray-300 text-sm">★</span>
                    </span>
                  </div>
                  
                  <p className="text-[11px] text-gray-400 mt-1.5 font-medium">by purepearl studio</p>
                  
                  <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1.5 rounded-md">
                      <span className="text-[10px] font-semibold text-gray-600">Beginner</span>
                    </div>
                    
                    <div className="flex -space-x-1.5 items-center">
                      {studentImages.map((src, idx) => (
                        <div key={idx} className="relative w-6 h-6 rounded-full border-[1.5px] border-white overflow-hidden bg-gray-200 z-0">
                          <Image src={src} alt="Student" fill className="object-cover" />
                        </div>
                      ))}
                      <div className="relative w-6 h-6 rounded-full bg-[#ccff00] border-[1.5px] border-white flex items-center justify-center text-[8px] font-black text-black z-10">
                        26+
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-2xl font-black text-[#0b3ef0]">$25</span>
                    <span className="text-[10px] text-gray-400 font-medium">/lifetime</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-3 mb-24 text-sm font-medium text-gray-600">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/></svg>
          </button>
          <span className="w-8 h-8 rounded-full bg-[#ccff00] text-black flex items-center justify-center font-bold">1</span>
          <span className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center cursor-pointer transition-colors">2</span>
          <span className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center cursor-pointer transition-colors">3</span>
          <span className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center cursor-pointer transition-colors">4</span>
          <span className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center cursor-pointer transition-colors">5</span>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>
          </button>
        </div>

      </section>

      <Footer />
    </main>
  );
}