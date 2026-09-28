"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="relative z-50 flex items-center justify-between w-full px-8 md:px-16 py-6 text-white">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="ByteSpace Logo" width={32} height={32} />
        <span className="text-xl font-bold tracking-wide">ByteSpace</span>
      </div>

      {/* Center Links with Dynamic Underline based on current route */}
      <div className="hidden md:flex gap-12 text-sm font-light">
        <Link 
          href="/" 
          className={`hover:text-[#ccff00] transition-colors pb-0.5 ${
            pathname === "/" ? "border-b border-[#ccff00]" : ""
          }`}
        >
          Home
        </Link>
        <Link 
          href="/courses" 
          className={`hover:text-[#ccff00] transition-colors pb-0.5 ${
            pathname === "/courses" ? "border-b border-[#ccff00]" : ""
          }`}
        >
          Courses
        </Link>
        <Link 
          href="/creators" 
          className={`hover:text-[#ccff00] transition-colors pb-0.5 ${
            pathname === "/creators" ? "border-b border-[#ccff00]" : ""
          }`}
        >
          Creators
        </Link>
      </div>

      {/* Right Auth & Cart */}
      <div className="flex items-center gap-8 text-sm font-medium">
        <Link href="/login" className="hover:text-[#ccff00] transition-colors font-light">Sign In</Link>
        <Link href="/join" className="hover:text-[#ccff00] transition-colors font-light">Join Us</Link>
        <button className="hover:text-[#ccff00] transition-colors">
          {/* Shopping Bag Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
        </button>
      </div>
    </nav>
  );
}