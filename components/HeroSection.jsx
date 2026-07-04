"use client"
import Image from "next/image";
import Link from "next/link";
import React, { memo, useState } from "react";




function HeroSection({slides}) {

      const [current, setCurrent] = useState(0);
    

     
  return (
   <section className="relative h-[70vh] sm:h-[75vh] md:h-[90vh] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <Link
            href="/services"
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover object-center"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">
              <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 text-white">
                <div className="max-w-xl sm:max-w-2xl md:max-w-3xl">
                  <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold leading-snug md:leading-tight">
                    {slide.title}
                  </h1>

                  <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-white/90">
                    {slide.subtitle}
                  </p>

                  <Link
                    href="/contact-us"
                    className="inline-block mt-6 sm:mt-8 rounded-md bg-[#ed3a20] px-5 sm:px-6 md:px-8 py-3 text-sm sm:text-base font-semibold hover:bg-red-700 transition"
                  >
                    Request Call Back
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
  );
}

export default memo(HeroSection);