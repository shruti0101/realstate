"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Find Your Dream Property",
    subtitle:
      "Premium apartments and villas in top locations with modern amenities.",
    badge: "New Launch",
    image:
      "/hero2.webp",
  },
  {
    id: 2,
    title: "Luxury Living Redefined",
    subtitle:
      "Spacious, elegant homes designed for comfort, style, and convenience.",
    badge: "Luxury",
    image:
      "hero1.webp",
  },
  {
    id: 3,
    title: "Invest in Prime Real Estate",
    subtitle:
      "High ROI properties in fast-growing neighborhoods and city centers.",
    badge: "Hot Deal",
    image:
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds

    return () => clearInterval(interval);
  }, []);

  const goTo = (index) => {
    setActiveIndex(index);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const activeSlide = slides[activeIndex];

  return (
    <section className="relative h-full md:h-[90vh] overflow-hidden bg-slate-600">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={activeSlide.image}
          alt={activeSlide.title}
          className="h-full md:h-[90vh] w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-950/60 to-slate-950/40" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:gap-10  lg:px-8">
        {/* Left content */}
        <div className="max-w-xl space-y-4 text-white">
          <span className="inline-flex items-center rounded-full bg-[#ED3A20]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#ED3A20] ring-1 ring-[#ED3A20]/30">
            {activeSlide.badge}
          </span>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-5xl">
            {activeSlide.title}
          </h1>
          <p className="text-sm text-slate-200 sm:text-base">
            {activeSlide.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-full bg-[#ED3A20] px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-[#ED3A20]/30 hover:bg-[#ED3A20] transition"
            >
              Explore Projects
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center rounded-full border border-slate-500/60 bg-slate-900/50 px-4 py-2 text-xs sm:text-sm font-medium text-slate-100 hover:border-[#ED3A20] hover:[#ED3A20] transition"
            >
              Talk to an Expert
            </Link>
          </div>

          {/* Small stats – hidden on very small screens */}
          <div className="mt-4 hidden gap-4 text-sm text-slate-200 sm:grid sm:grid-cols-3">
            <div>
              <div className="text-lg font-semibold">200+</div>
              <div className="text-xs text-slate-300">Properties Listed</div>
            </div>
            <div>
              <div className="text-lg font-semibold">40+</div>
              <div className="text-xs text-slate-300">Years Experience</div>
            </div>
            <div>
              <div className="text-lg font-semibold">98%</div>
              <div className="text-xs text-slate-300">Happy Clients</div>
            </div>
          </div>
        </div>

        {/* Right side: mini preview + controls (desktop / tablet only) */}
        <div className="relative ml-auto hidden w-full max-w-md rounded-3xl bg-slate-900/80 p-4 shadow-xl backdrop-blur md:block">
          <div className="overflow-hidden rounded-2xl border border-slate-700/60">
            <img
              src={activeSlide.image}
              alt={activeSlide.title}
              className="h-56 w-full object-cover sm:h-64"
            />
          </div>

          {/* Controls */}
          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 bg-slate-900/80 text-slate-100 hover:border-[#ED3A20] hover:text-[#ED3A20] transition"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 bg-slate-900/80 text-slate-100 hover:border-[#ED3A20] hover:text-[#ED3A20] transition"
              >
                →
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-1">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goTo(index)}
                  className={`h-2.5 rounded-full transition ${
                    index === activeIndex
                      ? "w-6 bg-[#ED3A20]"
                      : "w-2 bg-slate-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Property teaser */}
          <div className="mt-4 rounded-2xl border border-slate-700/70 bg-slate-900/80 px-4 py-3 text-xs text-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">Featured Property</p>
                <p className="text-[11px] text-slate-400">
                  3 BHK • Gated Community • City Center
                </p>
              </div>
              <p className="text-right text-sm font-semibold text-[#ED3A20]">
                ₹ 1.2 Cr onwards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
