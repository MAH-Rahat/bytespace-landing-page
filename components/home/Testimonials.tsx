import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Enthusiastic Learner",
      quote: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
      avatar: "/Ellipse1.png"
    },
    {
      name: "James L.",
      role: "Lifelong Learner",
      quote: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
      avatar: "/Ellipse 2.png" 
    },
    {
      name: "Alex B.",
      role: "Inspired Creator",
      quote: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
      avatar: "/Ellipse3.png"
    }
  ];

  return (
    <section className="relative py-24 px-6 w-full overflow-hidden">
      
      {/* Background Gradients - Adjusted opacity and removed negative z-index so they show up */}
      <div className="absolute top-[5%] left-[-5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#0b3ef0] rounded-full blur-[140px] opacity-10 pointer-events-none z-0"></div>
      <div className="absolute top-0 right-[-10%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-[#ccff00] rounded-full blur-[150px] opacity-30 pointer-events-none z-0"></div>

      {/* Main Content Wrapper - Set to z-10 so it sits on top of the gradients */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight flex-1 text-gray-900">
            Discover What Our<br />Community Is Saying
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-1 pt-2">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start">
              
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full overflow-hidden relative mb-4 bg-gray-100 border-2 border-white shadow-sm">
                <Image src={item.avatar} alt={item.name} fill className="object-cover" />
              </div>
              
              {/* Name and Role */}
              <h4 className="font-bold text-lg text-gray-900">{item.name}</h4>
              <p className="text-sm text-blue-600 mb-6">{item.role}</p>
              
              {/* Quote */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}