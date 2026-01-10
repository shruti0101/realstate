"use client";

import { useState } from "react";
import Link from "next/link";
import ContactForm from "@/components/Form"; // 👈 import the form
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false); // 👈 modal state

    const handleMobileClick = () => {
    setIsOpen(false); // Close mobile menu after clicking any item
  };
  return (
<>

    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur  border-b border-red-700">
      <nav className="mx-auto flex max-w-7xl items-center justify-between h-20 px-4 md:px-6 lg:px-10">
        {/* Logo */}
        <Link href="/">
          <img className="w-10 md:w-25" src="/logo.png" />
           </Link >



        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex ">
          <Link href="/" className="text-base hover:bg-[#ED3A20] p-2 rounded-md transform transition-all font-medium text-black hover:text-white">
            Home
          </Link>
          <Link href="/about" className="text-base hover:bg-[#ED3A20] p-2 rounded-md transform transition-all font-medium text-black hover:text-white">
            About Us
          </Link>
          <Link href="/services" className="text-base hover:bg-[#ED3A20] p-2 rounded-md transform transition-all font-medium text-black hover:text-white">
            Services
          </Link>
        
          <Link href="/contact-us" className="text-base hover:bg-[#ED3A20] p-2 rounded-md transform transition-all font-medium text-black hover:text-white">
            Contact Us
          </Link>
          <button
          onClick={()=> setIsFormOpen(true)}
            type="button"
            

            
            className="cursor-pointer inline-flex items-center rounded-full border border-[#ED3A20] bg-[#ED3A20] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 transition"
          >
            Schedule a Visit
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-100 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
   {isOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="space-y-1 px-4 py-3">
              <Link href="/" className="block px-3 py-2" onClick={handleMobileClick}>Home</Link>
              <Link href="/about" className="block px-3 py-2" onClick={handleMobileClick}>About</Link>
              <Link href="/services" className="block px-3 py-2" onClick={handleMobileClick}>Services</Link>
              <Link href="/contact-us" className="block px-3 py-2" onClick={handleMobileClick}>Contact</Link>

              <button
                onClick={() => {
                  handleMobileClick();
                  setIsFormOpen(true);
                }}
                className="mt-2 w-full bg-[#ED3A20] text-white px-3 py-2 rounded-full text-sm font-semibold hover:bg-red-600"
              >
                Schedule a Visit
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Contact Form Popup */}
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}