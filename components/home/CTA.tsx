export default function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto bg-[#0b3ef0] rounded-3xl p-12 text-center text-white relative overflow-hidden">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Unlock Your Potential as a<br/>Creator with ByteSpace</h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto relative z-10">
          Join thousands of learners and creators who are already transforming their futures on our platform.
        </p>
        <button className="bg-[#ccff00] text-black px-8 py-3 rounded-full font-bold hover:bg-[#b3e600] transition-colors relative z-10">
          Start Now
        </button>
        {/* CSS abstract shapes for decoration */}
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
        <div className="absolute right-10 top-10 w-20 h-20 border-4 border-yellow-400 rotate-12 opacity-50"></div>
      </div>
    </section>
  );
}