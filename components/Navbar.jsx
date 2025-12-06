"use client";

import { useState } from "react";
import Link from "next/link";
import ContactForm from "@/components/Form"; // 👈 import the form
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false); // 👈 modal state
  return (
<>

    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 md:px-6 lg:px-10">
        {/* Logo */}
        <Link href="/">
          <img className="w-20" src="/logo.png" />
           </Link >



        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-base font-medium text-black hover:text-[#ED3A20]">
            Home
          </Link>
          <Link href="/about" className="text-base font-medium text-black hover:text-[#ED3A20]">
            About Us
          </Link>
          <Link href="/services" className="text-base font-medium text-black hover:text-[#ED3A20]">
            Services
          </Link>
          <Link href="" className="text-base font-medium text-black hover:text-[#ED3A20]">
            Projects
          </Link>
          <Link href="/contact-us" className="text-base font-medium text-black hover:text-[#ED3A20]">
            Contact Us
          </Link>
          <button
          onClick={()=> setIsFormOpen(true)}
            type="button"
            

            
            className="cursor-pointer inline-flex items-center rounded-full border border-[#ED3A20] bg-[#ED3A20] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#ED3A20] transition"
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
            <Link
              href="/projects"
              className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Projects
            </Link>
            <Link
              href="#/services"
              className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Services
            </Link>
            <a
              href="#rent"
              className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              About 
            </a>
            <Link
              href="/about"
              className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Contact
            </Link>
        
            <a
              href="#visit"
              className="mt-2 block rounded-full bg-[#ED3A20] px-3 py-2 text-center text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      )}
    </header>



         {/* Contact Form Modal – appears after our expertise tabs */}
          <ContactForm
            isOpen={isFormOpen}
            onClose={() => setIsFormOpen(false)}
          />
</>


  );
}
