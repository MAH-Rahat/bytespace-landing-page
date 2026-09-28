import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Left Section - Newsletter */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="ByteSpace Logo" width={32} height={32} />
              <span className="text-2xl font-black tracking-tight text-gray-900">ByteSpace</span>
            </div>
            
            <p className="text-gray-600 text-sm max-w-sm leading-relaxed">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 w-full px-6 py-3.5 border border-gray-300 rounded-full outline-none focus:border-gray-400 text-sm placeholder:text-gray-400"
              />
              <button className="bg-[#ccff00] text-black px-10 py-3.5 rounded-full font-semibold text-sm hover:bg-[#b3e600] transition-colors w-full sm:w-auto">
                Search
              </button>
            </div>
            
            <p className="text-[11px] text-gray-500 max-w-sm leading-relaxed">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:pl-10 pt-2">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-5 text-sm text-gray-600">
              <Link href="/" className="hover:text-black transition-colors">Featured Courses</Link>
              <Link href="/" className="hover:text-black transition-colors">Featured Categories</Link>
              <Link href="/" className="hover:text-black transition-colors">Business</Link>
              <Link href="/" className="hover:text-black transition-colors">IT</Link>
              <Link href="/" className="hover:text-black transition-colors">Design</Link>
            </div>
            
            {/* Column 2 */}
            <div className="flex flex-col gap-5 text-sm text-gray-600">
              <Link href="/" className="hover:text-black transition-colors">Development</Link>
              <Link href="/" className="hover:text-black transition-colors">Marketing</Link>
              <Link href="/" className="hover:text-black transition-colors">Photography</Link>
              <Link href="/" className="hover:text-black transition-colors">Finance</Link>
              <Link href="/" className="hover:text-black transition-colors">Sport</Link>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-5 text-sm text-gray-600">
              <Link href="/" className="hover:text-black transition-colors">Become a Creator</Link>
              <Link href="/" className="hover:text-black transition-colors">Affiliate Program</Link>
              <Link href="/" className="hover:text-black transition-colors">Contact</Link>
              <Link href="/" className="hover:text-black transition-colors">Help</Link>
              <Link href="/" className="hover:text-black transition-colors">About</Link>
            </div>

          </div>
        </div>
        
        {/* Bottom Section - Copyright & Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200 text-xs text-gray-600 gap-4">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          
          <div className="flex items-center gap-8">
            <Link href="/" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-black transition-colors">Terms of Service</Link>
            <Link href="/" className="hover:text-black transition-colors">Cookies Settings</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}