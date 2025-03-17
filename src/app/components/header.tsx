"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-center items-center border-b bg-white w-[90%] border-0 mx-auto rounded-2xl py-4 px-4 sm:px-10 h-[65px] tracking-wide relative z-50 shadow-lg">
      <div className="flex items-center justify-between w-full max-w-screen-lg">
        {/* Logo or Brand Name */}
        <p className="font-bold text-[25px] text-black hover:text-black transition-colors duration-300">
          Vectorize
        </p>

        {/* Hamburger Menu Icon for Mobile */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>

        {/* Navigation Options with Animation */}
        <nav
          className={`sm:flex sm:items-center sm:gap-10 absolute sm:static top-[65px] left-0 w-full sm:w-auto rounded-2xl bg-white sm:bg-transparent shadow-lg sm:shadow-none transform transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-2 pointer-events-none sm:opacity-100 sm:translate-y-0 sm:pointer-events-auto'
          }`}
        >
          <Link
            href="/"
            className="block text-[18px] font-semibold text-black hover:text-black transition-all duration-300 cursor-pointer py-2 sm:py-0 px-4 sm:px-0"
          >
            Image Vectorize
          </Link>
          <Link
            href="/about"
            className="block text-[18px] font-semibold text-black hover:text-black transition-all duration-300 cursor-pointer py-2 sm:py-0 px-4 sm:px-0"
          >
            About Us
          </Link>
          <Link
            href="/contactUs"
            className="block text-[18px] font-semibold text-black hover:text-black transition-all duration-300 cursor-pointer py-2 sm:py-0 px-4 sm:px-0"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}