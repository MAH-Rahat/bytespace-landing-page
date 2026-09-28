export default function Testimonials() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto bg-gray-50 rounded-3xl mt-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Discover What Our<br/>Community Is Saying</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              "This platform completely changed my career trajectory. The courses are well structured and the community is incredibly supportive."
            </p>
            <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div>
                <h4 className="font-bold text-sm">Jane Doe</h4>
                <p className="text-xs text-gray-500">UI/UX Designer</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}