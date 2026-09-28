import Image from "next/image";

export default function CourseCatalog() {
  // All categories exactly as shown in the design
  const categories = [
    "Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", 
    "UI/UX Design", "Creative Marketing", "Digital Illustration", "Film & Video", "Crafts", 
    "Freelance & Entrepreneurship", "Graphic Design", "Photography", "Productivity", 
    "Web Development", "Data Science", "Cooking", "+ More"
  ];
  
  // Data matching the specific cards in your Figma file
  const courses = [
    { title: "Learn Figma from Basic", image: "/Image1.1.png" },
    { title: "Build Digital Asset", image: "/Image1.2.png" },
    { title: "the Power of Big Data", image: "/Image1.3.png" },
    { title: "Balancing Productivity an...", image: "/Image1.4.png" },
    { title: "Mastering Money Manage...", image: "/Image1.5.png" },
    { title: "From Idea to Startup Succ...", image: "/Image1.6.png" },
  ];

  // We map the specific student files you have in your folder
  const studentImages = ["/student1.png", "/student2.png", "/student3.png", "/student4.png"];

  return (
    <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
      
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-[40px] font-bold mb-4 text-gray-900 tracking-tight leading-tight">
          Discover Your Passion,<br/>Build Your Skills
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto font-light leading-relaxed">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
        </p>
      </div>

      {/* Filter Tabs / Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-14 max-w-5xl mx-auto">
        {categories.map((cat, i) => (
          <button 
            key={i} 
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
              cat === "Featured" 
                ? 'bg-[#ccff00] text-black shadow-sm' 
                : cat === "+ More"
                  ? 'bg-transparent text-blue-600 font-bold hover:bg-gray-50'
                  : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {courses.map((course, i) => (
          <div key={i} className="bg-white rounded-[1.5rem] p-3 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
            
            {/* Course Image - Removed the overlapping HTML tags */}
            <div className="w-full h-[200px] bg-gray-100 rounded-xl overflow-hidden relative">
              <Image 
                src={course.image} 
                alt={course.title} 
                fill 
                className="object-cover" 
              />
            </div>
            
            <div className="px-1 pt-4 pb-2 flex flex-col flex-1">
              
              {/* Title & Rating */}
              <div className="flex justify-between items-start gap-4">
                <h3 className="font-bold text-[17px] leading-tight text-gray-900 truncate">{course.title}</h3>
                <span className="text-gray-400 text-xs font-semibold whitespace-nowrap flex items-center gap-0.5">
                  4.5 <span className="text-gray-300 text-sm">★</span>
                </span>
              </div>
              
              {/* Author */}
              <p className="text-[11px] text-gray-400 mt-1.5 font-medium">by purepearl studio</p>
              
              {/* Level & Avatars */}
              <div className="flex items-center justify-between mt-5">
                
                {/* Level Tag */}
                <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1.5 rounded-md">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                  <span className="text-[10px] font-semibold text-gray-600">Beginner</span>
                </div>
                
                {/* Student Avatars Stack */}
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

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-2xl font-black text-[#0b3ef0]">$25</span>
                <span className="text-[10px] text-gray-400 font-medium">/lifetime</span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}