import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 pt-16 pb-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-[#ccff00] rounded-tl-lg rounded-br-lg"></div>
            <span className="text-xl font-bold text-[#0b3ef0]">ByteSpace</span>
          </div>
          <p className="text-gray-500 text-sm mb-6">
            Empowering the next generation of digital creators and professionals.
          </p>
        </div>

        {/* Links Columns */}
        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-black">About Us</Link></li>
            <li><Link href="/" className="hover:text-black">Careers</Link></li>
            <li><Link href="/" className="hover:text-black">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Resources</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-black">Blog</Link></li>
            <li><Link href="/" className="hover:text-black">Help Center</Link></li>
            <li><Link href="/" className="hover:text-black">Community</Link></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h4 className="font-bold mb-6">Newsletter</h4>
          <p className="text-gray-500 text-sm mb-4">Subscribe to get the latest updates.</p>
          <div className="flex border border-gray-300 rounded-full p-1">
            <input type="email" placeholder="Email address" className="flex-1 px-4 outline-none text-sm bg-transparent" />
            <button className="bg-[#ccff00] text-black px-6 py-2 rounded-full text-sm font-bold">Send</button>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 border-t border-gray-200 pt-8">
        © {new Date().getFullYear()} ByteSpace. All rights reserved. Built for Doin Tech Limited Assessment.
      </div>
    </footer>
  );
}