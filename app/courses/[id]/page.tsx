"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function CourseDetailPage() {
  const [activeTab, setActiveTab] = useState<"about" | "lessons" | "reviews">("about");

  const sneakPeeks = [
    "/Course_details2.png",
    "/Course_details3.png",
    "/Course_details4.png",
    "/Course_details5.png",
  ];

  const lessons = [
    { title: "01 Introduction to Digital Assets", time: "12 mins" },
    { title: "02 Design Principles for Impacts", time: "21 mins" },
    { title: "03 Advanced Techniques in Digital Creation", time: "16 mins" },
  ];

  const modules = [
    { title: "Module 1: Introduction to Digital Assets", desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools'. Dive into the essentials of digital asset creation." },
    { title: "Module 2: Design Principles for Impact", desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials'. Elevate your visual communication skills." },
    { title: "Module 4: User-Centric Design Strategies", desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials'. Craft digital assets with a focus on user-centric design." },
    { title: "Module 5: Interactive Media and Engagement", desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements'. Master the art of creating immersive digital experiences." },
    { title: "Module 6: Project Showcase and Critique", desc: "Perfect your presentation skills with Effective Presentation Techniques and embrace collaboration with 'Peer Critique and Collaboration'. Showcase your work with confidence." },
    { title: "Module 7: Optimizing Digital Assets for Various Platforms", desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media'. Ensure widespread accessibility and engagement across diverse digital landscapes." },
  ];

  const keyPoints = [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ];

  const reviews = [
    { name: "PurePearl Studio", role: "UI/UX Designer", avatar: "/review1.png", text: "This course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and directly applicable to my work. Highly recommended!", time: "1 year ago" },
    { name: "Albert Flores", role: "UI/UX Designer", avatar: "/review2.png", text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!", time: "1 year ago" },
    { name: "Cody Fisher", role: "UI/UX Designer", avatar: "/review3.png", text: "The project showcase and critique module created a real classroom environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and dynamic dimension to the learning process.", time: "1 year ago" },
    { name: "Brooklyn Simmons", role: "UI/UX Designer", avatar: "/review4.png", text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to a working digital landscape, and the engaging content kept me motivated throughout.", time: "1 year ago" },
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-black overflow-x-hidden">
      
      {/* Top Blue Header Section extending down over the video banner */}
      <section className="bg-[#0b3ef0] w-full relative overflow-hidden pb-[400px] pt-2">
        <div 
          className="absolute inset-0 z-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
            backgroundSize: '80px 80px',
            backgroundPosition: 'center top'
          }}
        ></div>
        
        <Navbar />

        <div className="relative z-10 max-w-7xl mx-auto px-6 mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight">
              Build Digital Asset: A Comprehensive Guide
            </h1>
            <p className="text-white/80 text-sm md:text-base font-light mb-6">
              Unlock the Power of Digital Creation with Expert Guidance
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <span className="bg-white/10 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full font-medium">
                by purepearl studio
              </span>
              <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full font-medium">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                Intermediate
              </div>
              <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full font-medium">
                <span className="text-[#ccff00]">★</span> 4.5 <span className="text-white/60">(72 reviews)</span>
              </div>
              <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full font-medium">
                👤 199 Students
              </div>
            </div>
          </div>

          <button className="bg-[#ccff00] text-black px-6 py-2.5 rounded-full font-bold text-xs hover:bg-[#b3e600] transition-colors shadow-sm shrink-0 flex items-center gap-2">
            Share ↗
          </button>
        </div>
      </section>

      {/* Main Content Layout with Negative Margin for Video Banner Overlap */}
      <section className="max-w-7xl mx-auto px-6 -mt-[356px] pb-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Left 2 Columns */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            
            {/* Main Video Banner overlapping blue and white sections */}
            <div className="w-full h-[360px] md:h-[420px] bg-gray-100 rounded-[2rem] overflow-hidden relative shadow-2xl border-4 border-white">
              <Image src="/Course_details1.png" alt="Course Preview" fill className="object-cover" />
            </div>

            {/* Interactive Navigation Tabs */}
            <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
              <button 
                onClick={() => setActiveTab("about")} 
                className={`px-6 py-2 rounded-full text-xs font-semibold transition-colors ${activeTab === "about" ? "bg-[#ccff00] text-black font-bold shadow-sm" : "bg-gray-50 text-gray-500 hover:bg-gray-100"}`}
              >
                About
              </button>
              <button 
                onClick={() => setActiveTab("lessons")} 
                className={`px-6 py-2 rounded-full text-xs font-semibold transition-colors ${activeTab === "lessons" ? "bg-[#ccff00] text-black font-bold shadow-sm" : "bg-gray-50 text-gray-500 hover:bg-gray-100"}`}
              >
                Lesson
              </button>
              <button 
                onClick={() => setActiveTab("reviews")} 
                className={`px-6 py-2 rounded-full text-xs font-semibold transition-colors ${activeTab === "reviews" ? "bg-[#ccff00] text-black font-bold shadow-sm" : "bg-gray-50 text-gray-500 hover:bg-gray-100"}`}
              >
                Reviews
              </button>
            </div>

            {/* Conditional Tab Content */}
            {activeTab === "lessons" ? (
              <div className="flex flex-col gap-8">
                {/* Explore Modules Header */}
                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-bold text-gray-900">Explore the Modules</h2>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">
                    Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
                  </p>
                </div>

                {/* Lesson List with Lime Green Icons */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-lg font-bold text-gray-900">Lesson List</h3>
                  
                  {modules.map((mod, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#ccff00] flex items-center justify-center shrink-0 shadow-sm text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="font-bold text-sm text-gray-900">{mod.title}</h4>
                        <p className="text-xs text-gray-500 font-light leading-relaxed">{mod.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Lesson Content Section */}
                <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">Lesson Content</h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">
                    Engage with each lesson through captivating video content, detailed manual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
                  </p>
                </div>

                {/* Lesson Progress Tracking */}
                <div className="flex flex-col gap-4 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900">Lesson Progress Tracking</h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">
                    Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
                  </p>

                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mt-2 max-w-lg">
                    <span className="text-xs font-semibold text-gray-500">Learning Progress</span>
                    <div className="mt-1 text-4xl font-black text-gray-900">55%</div>
                    <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
                      <div className="h-full w-[55%] rounded-full bg-[#ccff00]" />
                    </div>
                  </div>
                </div>

              </div>
            ) : activeTab === "reviews" ? (
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-bold text-gray-900">What Learners Are Saying</h2>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">
                    Discover what our learners have to say about their experience with "Build Digital Asset: A Comprehensive Guide." Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
                  </p>
                </div>

                {/* Ratings Summary Card */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-8 max-w-xl">
                  <div className="bg-[#ccff00] rounded-2xl p-6 text-center flex flex-col items-center justify-center min-w-[130px]">
                    <span className="text-3xl font-black text-black">4.7</span>
                    <span className="text-[10px] font-bold text-gray-800 uppercase mt-1">Ratings</span>
                  </div>

                  <div className="flex flex-col gap-2 w-full text-xs font-semibold text-gray-600">
                    <div className="flex items-center gap-3">
                      <span>★★★★★</span>
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden"><div className="w-[85%] h-full bg-[#ccff00]"></div></div>
                      <span className="text-gray-400">120</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>★★★★☆</span>
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden"><div className="w-[45%] h-full bg-[#ccff00]"></div></div>
                      <span className="text-gray-400">35</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>★★★☆☆</span>
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden"><div className="w-[20%] h-full bg-[#ccff00]"></div></div>
                      <span className="text-gray-400">12</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>★★☆☆☆</span>
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden"><div className="w-[10%] h-full bg-[#ccff00]"></div></div>
                      <span className="text-gray-400">5</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>★☆☆☆☆</span>
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden"><div className="w-[5%] h-full bg-[#ccff00]"></div></div>
                      <span className="text-gray-400">2</span>
                    </div>
                  </div>
                </div>

                {/* Individual Reviews Filter and List */}
                <div className="flex flex-col gap-6 pt-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-900">Individual Reviews:</h3>
                    <div className="flex items-center gap-2">
                      <span className="bg-[#ccff00] px-3 py-1 rounded-full text-xs font-bold text-black flex items-center gap-1">All <span className="text-[10px]">▼</span></span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-gray-600">5 ★</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-gray-600">4 ★</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-gray-600">3 ★</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    {reviews.map((rev, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                              <Image src={rev.avatar} alt={rev.name} fill className="object-cover" />
                            </div>
                            <div>
                              <h4 className="font-bold text-sm text-gray-900">{rev.name}</h4>
                              <p className="text-[11px] text-gray-400 font-medium">{rev.role}</p>
                            </div>
                          </div>
                          <span className="text-xs text-gray-400 font-light">{rev.time}</span>
                        </div>
                        <div className="text-amber-400 text-xs">★★★★★</div>
                        <p className="text-xs text-gray-600 font-light leading-relaxed">{rev.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ) : (
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4 text-gray-600 text-sm md:text-base leading-relaxed font-light">
                  <h2 className="text-xl font-bold text-gray-900">Description</h2>
                  <p>
                    Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Asset: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower your journey in the dynamic landscape of digital asset creation.
                  </p>
                  <p>
                    In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging those elements to communicate effectively in the digital realm.
                  </p>
                  <p>
                    As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <h2 className="text-xl font-bold text-gray-900">Sneak Peak</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {sneakPeeks.map((src, idx) => (
                      <div key={idx} className="h-28 bg-gray-100 rounded-2xl overflow-hidden relative shadow-sm border border-gray-100">
                        <Image src={src} alt="Sneak Peek" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h2 className="text-xl font-bold text-gray-900">Key Points</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-gray-50/60 p-3.5 rounded-xl border border-gray-100">
                        <div className="w-5 h-5 rounded-full bg-[#ccff00] flex items-center justify-center text-black text-xs font-black shrink-0">✓</div>
                        <span className="text-xs font-medium text-gray-800">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Sticky Pricing & Syllabus Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[2rem] p-6 shadow-xl border border-gray-100 sticky top-10">
              
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-base text-gray-900">112 Lessons <span className="text-xs text-gray-400 font-normal">(24 hours)</span></h3>
              </div>

              {/* Lesson List */}
              <div className="flex flex-col gap-4 mb-8">
                {lessons.map((lesson, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs pb-3 border-b border-gray-50">
                    <span className="font-medium text-gray-800">{lesson.title}</span>
                    <span className="text-gray-400 shrink-0 ml-2">{lesson.time}</span>
                  </div>
                ))}
                <span className="text-xs text-blue-600 font-semibold cursor-pointer hover:underline">99 more videos</span>
              </div>

              {/* Price & CTA */}
              <div className="mb-6">
                <div className="text-3xl font-black text-[#0b3ef0] mb-4">
                  $25 <span className="text-xs text-gray-400 font-normal">/lifetime</span>
                </div>
                <button className="w-full bg-[#ccff00] text-black py-3.5 rounded-full font-bold text-sm hover:bg-[#b3e600] transition-colors shadow-sm">
                  Enroll Now
                </button>
              </div>

              {/* Course Includes */}
              <div className="border-t border-gray-100 pt-6 mb-6">
                <h4 className="font-bold text-xs text-gray-900 mb-4 uppercase tracking-wider">This course include</h4>
                <ul className="flex flex-col gap-3 text-xs text-gray-600">
                  <li className="flex items-center gap-2">📦 Learning Resources</li>
                  <li className="flex items-center gap-2">🎥 Quality Lesson Videos</li>
                  <li className="flex items-center gap-2">📜 Certificate of Completion</li>
                  <li className="flex items-center gap-2">💬 Private Consultation</li>
                </ul>
              </div>

              {/* Instructor Card */}
              <div className="border-t border-gray-100 pt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                    <Image src="/PurePearl.png" alt="PurePearl Studio" fill className="object-cover" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-gray-900">PurePearl Studio</h5>
                    <p className="text-[10px] text-gray-400 font-medium">Professional Creator</p>
                  </div>
                </div>
                <button className="text-xs text-blue-600 font-semibold hover:underline">
                  See Full Profile
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}