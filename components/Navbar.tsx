"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import logo from "@/assets/techSpring.png";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="container flex h-16 items-center justify-between px-6 md:px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <span className="text-xl font-bold text-gray-900">
            <Image src={logo} alt="Logo" width={160} height={160} />
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#services" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">SERVICES</Link>
          <Link href="#work" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">OUR WORKS</Link>
          <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">ABOUT US</Link>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="#footer">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6">CONTACT US</Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 shadow-lg space-y-4">
          <Link
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            SERVICES
          </Link>
          <Link
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            OUR WORKS
          </Link>
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            ABOUT US
          </Link>
          <Link href="#footer"> 
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg">CONTACT US</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
