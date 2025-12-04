"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold">
            RE
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold text-gray-900">
              RealEstate Pro
            </span>
            <span className="text-xs text-gray-500">
              Premium Properties
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#projects" className="text-sm font-medium text-gray-700 hover:text-emerald-600">
            Projects
          </a>
          <a href="#buy" className="text-sm font-medium text-gray-700 hover:text-emerald-600">
            services
          </a>
          <a href="#rent" className="text-sm font-medium text-gray-700 hover:text-emerald-600">
            Rent
          </a>
          <a href="#about" className="text-sm font-medium text-gray-700 hover:text-emerald-600">
            About
          </a>
          <Link href="/contact-us" className="text-sm font-medium text-gray-700 hover:text-emerald-600">
            Contact
          </Link>
          <a
            href="#visit"
            className="inline-flex items-center rounded-full border border-emerald-600 bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition"
          >
            Schedule a Visit
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
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
            <a
              href="#projects"
              className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Projects
            </a>
            <a
              href="#buy"
              className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Buy
            </a>
            <a
              href="#rent"
              className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Rent
            </a>
            <a
              href="#about"
              className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              About
            </a>
            <a
              href="#contact"
              className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Contact
            </a>
            <a
              href="#visit"
              className="mt-2 block rounded-full bg-emerald-600 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
