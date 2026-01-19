"use client";

import { useEffect, useState } from "react";

const propertyImages = [
  {
    image: "/services/cab1.jpg",
    alt: "Modern living room interior",
  },
  {
    image: "/services/cab2.jpg",
    alt: "Luxury apartment exterior",
  },
  {
    image: "/services/cab3.jpg",
    alt: "Modern living room interior",
  },

 
];

export default function PropertyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % propertyImages.length);
    }, 5000); // 5s

    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => setActiveIndex(index);

  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % propertyImages.length);

  const prevSlide = () =>
    setActiveIndex((prev) => (prev - 1 + propertyImages.length) % propertyImages.length);

  const current = propertyImages[activeIndex];

  return (
    <div className="relative  overflow-hidden border border-slate-100 shadow-md bg-slate-900/5">
      {/* Image */}
      <div className="relative h-64  lg:h-110">
        <img
          src={current.image}
          alt={current.alt}
          className="h-full w-full object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-3 flex items-center justify-between px-4">
        {/* Left/right buttons */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={prevSlide}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-900 text-sm shadow hover:bg-white"
          >
            ←
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-900 text-sm shadow hover:bg-white"
          >
            →
          </button>
        </div>

        {/* Dots */}
        <div className="flex gap-1.5">
          {propertyImages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === activeIndex
                  ? "w-5 bg-white"
                  : "w-2 bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
