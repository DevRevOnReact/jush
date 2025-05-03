"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CalButton from "./CalButton";




const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <nav className="fixed w-full bg-[#F3F3F3] backdrop-blur-sm z-50 border-b border-gray-100 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Image
              src="/images/logo-light.svg"
              alt="Logo Light"
              width={150}
              height={50}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-semibold">
            <a href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#work" className="text-gray-600 hover:text-gray-900">
              Work
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
            <Link
              href="/form"
              className="bg-gray-900  text-white px-6 py-4 rounded-full hover:bg-gray-800 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a
              href="#about"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#work"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              Work
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              Contact
            </a>
            <Link
              href="https://cal.com/artifex"
              target="_blank"
              className="w-full mt-2 bg-gray-900 text-white px-6 py-4 rounded-full hover:bg-gray-800 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
