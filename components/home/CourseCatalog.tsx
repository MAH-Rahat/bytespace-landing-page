import Image from "next/image";

export default function CourseCatalog() {
  const categories = ["See All", "Graphic Design", "UI/UX Design", "Programming", "Digital Marketing", "Video Editing"];
  const courses = [
    { title: "Learning How To Design", category: "UI/UX Design", price: "$29", students: "45" },
    { title: "Digital Marketing", category: "Marketing", price: "$35", students: "120" },
    { title: "Frontend Development", category: "Programming", price: "$49", students: "85" },
    { title: "Mastering Illustrator", category: "Design", price: "$25", students: "60" },
    { title: "SEO Optimization", category: "Marketing", price: "$30", students: "90" },
    { title: "Web Flow Crash Course", category: "Development", price: "$40", students: "110" },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover Your Passion,<br/>Build Your Skills</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">Learn from industry experts and enhance your skills with our comprehensive courses.</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat, i) => (
          <button key={i} className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${i === 0 ? 'bg-[#ccff00] text-black' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, i) => (
          <div key={i} className="border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-xl transition-shadow bg-white flex flex-col gap-4">
            <div className="w-full h-48 bg-gray-200 rounded-xl overflow-hidden relative">
              {/* Replace with your specific Image1.1.png etc if you want exact images */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">Course Image</div>
            </div>
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg leading-tight">{course.title}</h3>
              <span className="bg-[#ccff00] px-3 py-1 rounded-full text-xs font-bold">{course.price}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4 mt-auto">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-100"></div>
                <span>Instructor</span>
              </div>
              <span>👥 {course.students}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}