'use client'

import { useState } from "react";


export default function AboutSection() {
  const [active, setActive] = useState("serviced");
const CATEGORIES = [
  {
    key: "leasing",
    label: "LEASING",
    image:
      "https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description:
      "Quality residences with modern amenities and prime connectivity.",
  },
  {
    key: "industrial",
    label: "INDUSTRIAL",
    image:
      "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description:
      "High-footfall retail spaces in established and emerging markets.",
  },
  {
    key: "residential",
    label: "Residential",
    image:
      "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description:
      "Grade-A office spaces tailored for modern businesses.",
  },
  {
    key: "serviced",
    label: "SERVICED APARTMENTS",
    image:
      "https://images.pexels.com/photos/262405/pexels-photo-262405.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description:
      "Comfortable living spaces for modern lifestyles on the go.",
  },
  {
    key: "commercial",
    label: "COMMERCIAL",
    image:
      "https://images.pexels.com/photos/4172731/pexels-photo-4172731.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description:
      "Structured leasing solutions for investors and occupiers.",
  },
];
 const expertise = [
    {
      title: "Flats / Apartments",
      image:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Plots / Kothi",
      image:
        "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Independent Floors",
      image:
        "https://images.pexels.com/photos/7031704/pexels-photo-7031704.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "Commercial Shops & Office Spaces",
      image:
        "https://images.pexels.com/photos/264797/pexels-photo-264797.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Pre-Rented Commercial Properties",
      image:
        "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Agricultural Land / Farmhouses",
      image:
        "https://images.pexels.com/photos/2406398/pexels-photo-2406398.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
   
  ];




  const cities = [
    {
      name: "Delhi",
      image:
        "/delhi.jpg",
    },
    {
      name: "Gurugram",
      image:
        "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    // Add more cities if you want
    // { name: "Noida", image: "..." },
  ];

  return (


    <>
   <section
  style={{ backgroundImage: "url(/sketch2.jpg)" }}
  id="about"
  className="relative bg-center bg-cover bg-fixed border-t border-slate-100"
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-white/60 z-[1]"></div>

  {/* Content wrapper */}
  <div className="relative z-[2] mx-auto max-w-6xl px-4 py-8 md:py-13 sm:px-6 lg:px-8">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

      {/* Left: Text */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
          About Us
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
          A trusted real estate partner for modern buyers & investors.
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-black sm:text-base">
          We are a professional real estate advisory firm focused on
          residential and commercial properties in prime locations.
        </p>

        <p className="mt-3 text-sm leading-relaxed text-black sm:text-base">
          From shortlisting to site visits, negotiations and documentation,
          we manage the complete journey.
        </p>

        {/* Points */}
        <div className="mt-6 space-y-2 text-sm text-black">
          <div className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <p>Curated projects from verified developers.</p>
          </div>
          <div className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <p>Clear communication & transparent pricing.</p>
          </div>
          <div className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <p>Support across buying, selling & investment.</p>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition"
          >
            Schedule a Consultation
          </a>
          <p className="text-xs black">
            Speak with our team to get project options.
          </p>
        </div>
      </div>

      {/* Right content */}
      <div className="space-y-6">

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 relative">
          <div className="relative aspect-[4/3] w-full">
            <img
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Modern real estate project"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/5 to-transparent" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-lg font-semibold text-black">10+ yrs</p>
            <p className="mt-1 text-xs text-slate-500">Experience</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-lg font-semibold text-black">300+</p>
            <p className="mt-1 text-xs text-slate-500">Transactions</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-lg font-semibold text-black">4.9/5</p>
            <p className="mt-1 text-xs text-slate-500">Client Rating</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>




    {/* our locations */}


     <section  className="bg-[#f5f7fc] py-8 mb-5 ">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
            We Are A Leading{" "}
            <span className="text-black">
              Real Estate Agency
            </span>{" "}
            In
          </h2>

    
        </div>

        {/* City cards */}
        <div className="mt-5 grid  gap-6 grid-cols-2">
          {cities.map((city) => (
            <div
              key={city.name}
              className="group relative overflow-hidden rounded-3xl bg-slate-900/80 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-52 sm:h-60 lg:h-64">
                <img
                  src={city.image}
                  alt={city.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-slate-950/40 to-slate-900/10" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <div className="text-center">
                  <p className="text-sm font-medium tracking-[0.2em] uppercase text-slate-200 mb-1">
                    Explore Properties In
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                    {city.name}
                  </h3>

                  <button className="mt-4 inline-flex items-center rounded-full bg-white/95 px-5 py-2 text-xs sm:text-sm font-semibold text-slate-900 shadow-md transition hover:bg-white">
                    View Listings
                    <span className="ml-2 text-[13px]">↗</span>
                  </button>
                </div>
              </div>

              {/* Border glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-[#f24930]/60 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>



{/* our expertise */}

    <section id="expertise" className="bg-slate-50 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 md:py-11 sm:px-6 lg:px-8 ">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
            Our Expertise
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
            Residential & Pre-Rented Commercial Specialists
          </h2>
          <p className="mt-3 text-sm text-black sm:text-base">
            We help you invest in the right property category based on your
            needs, budget & long-term goals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid gap-6 grid-cols-2 lg:grid-cols-3">
          {expertise.map((exp, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-50 group-hover:opacity-60 transition" />
              </div>

              {/* Title + Button */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold text-sm sm:text-base">
                  {exp.title}
                </p>

                <a
                  href="#contact"
                  className="mt-2 inline-block rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-semibold hover:bg-emerald-700 transition"
                >
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    {/* accordian */}

    <section className="bg-white py-9" >

      <h2 className="text-2xl md:text-4xl font-bold text-center md:text-start  md:px-9 my-3 text-black">Crafting Excellence Across Verticals</h2>
      <div className="mx-auto w-full px-0 sm:px-2 py-10">
        <div className="overflow-hidden  bg-black/80 shadow-2xl">
          {/* Accordion strip */}
          <div className="flex h-[420px] flex-col lg:h-[480px] lg:flex-row">
            {CATEGORIES.map((item) => {
              const isActive = active === item.key;

              return (
                <button
                  key={item.key}
                  type="button"
                  onMouseEnter={() => setActive(item.key)}
                  onFocus={() => setActive(item.key)}
                  className={`relative flex-1 cursor-pointer overflow-hidden border-b border-slate-800/70 last:border-b-0 transition-[flex] duration-500 ease-out 
                  lg:border-b-0 lg:border-r lg:last:border-r-0
                  ${isActive ? "lg:flex-[3] flex-[2]" : "lg:flex-[1] flex-[0.9]"}`}
                >
                  {/* Background image */}
                  <img
                    src={item.image}
                    alt={item.label}
                    className={`absolute inset-0 h-full w-full object-cover transition duration-500 ${
                      isActive ? "grayscale-0" : "grayscale"
                    }`}
                  />

                  {/* Overlay gradient */}
                  <div
                    className={`absolute inset-0 transition duration-500 ${
                      isActive
                        ? "bg-gradient-to-t from-black/70 via-black/40 to-black/10"
                        : "bg-black/60"
                    }`}
                  />

                  {/* Top label */}
                  <div className="relative z-10 flex h-full flex-col justify-between px-6 py-6 sm:px-8 sm:py-8 text-left">
                    <div className="flex items-start justify-between">
                      <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-white uppercase">
                        {item.label}
                      </p>
                    </div>

                    {/* Active content */}
                    <div
                      className={`transition-all duration-500 ease-out ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4 pointer-events-none"
                      }`}
                    >
                      <p className="max-w-xs text-left text-base sm:text-lg font-medium text-white">
                        {item.description}
                      </p>
                      <div className="mt-4">
                        <span className="inline-flex items-center rounded-full bg-[#48c12f] px-6 py-2 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-black/40 hover:bg-[#3aa424] transition">
                          READ MORE
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>


{/* contact form */}

<section id="connect" className="relative overflow-hidden bg-white">
  {/* Background image */}
  <div
    className="pointer-events-none absolute inset-0 bg-cover bg-fixed bg-center"
    style={{
      backgroundImage: "url('/contact.webp')",
    }}
  />

  {/* Soft overlay */}
  <div className="pointer-events-none absolute inset-0 bg-black/30" />

  {/* Content */}
  <div className="relative z-10 mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
        Feel Free To Connect{" "}
        <span className="text-white">With Us.</span>
      </h2>

      <p className="mt-3 text-base sm:text-lg font-medium leading-relaxed text-white">
        Reach us for your perfect residential or commercial investment
        tailored to your needs.
      </p>
    </div>

    {/* Form card */}
    <div className="mt-10 rounded-3xl border border-white/50 bg-white/85 backdrop-blur-2xl shadow-2xl">
      <form className="space-y-8 px-6 py-10 sm:px-10 sm:py-8">
        
        {/* Row 1 */}
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border-b border-slate-400 pb-2 bg-transparent text-base text-slate-900 placeholder:text-slate-500 outline-none focus:border-[#009966]"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Your Phone
            </label>
            <input
              type="tel"
              placeholder="+91 -"
              className="w-full border-b border-slate-400 pb-2 bg-transparent text-base text-slate-900 placeholder:text-slate-500 outline-none focus:border-[#009966]"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Your Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border-b border-slate-400 pb-2 bg-transparent text-base text-slate-900 placeholder:text-slate-500 outline-none focus:border-[#009966]"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Property you are looking for?
            </label>
            <select
              defaultValue=""
              className="w-full border-b border-slate-400 pb-2 bg-transparent text-base text-slate-900 outline-none focus:border-[#009966]"
            >
              <option value="" disabled>Select property type</option>
              <option>Flats / Apartments</option>
              <option>Plots / Kothi</option>
              <option>Independent Floors</option>
              <option>Commercial Shops & Office Spaces</option>
              <option>Pre-rented Commercial Properties</option>
              <option>Agricultural Land / Farmhouses</option>
              <option>Industrial</option>
            </select>
          </div>
        </div>

        {/* Row 3 */}
        <div>
          <label className="block text-sm font-semibold text-slate-800 mb-2">
            Select city you are looking into
          </label>
          <select
            defaultValue=""
            className="w-full border-b border-slate-400  bg-transparent text-base text-slate-900 outline-none focus:border-[#009966]"
          >
            <option value="" disabled>Select city</option>
            <option>Delhi</option>
            <option>Gurugram</option>
            <option>Noida</option>
            <option>Greater Noida</option>
            <option>Other NCR</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-slate-800 mb-2">
            Your Message
          </label>
          <textarea
            rows={4}
            placeholder="Tell us what you're looking for..."
            className="w-full border-b border-slate-400 pb-2 bg-transparent text-base text-slate-900 placeholder:text-slate-500 outline-none focus:border-[#009966] resize-none"
          />
        </div>

        {/* CTA */}
        <div className="">
          <button
            type="submit"
            className="inline-flex items-center rounded-full bg-[#009966] px-10 py-3.5 text-base sm:text-lg font-semibold text-white shadow-md transition hover:bg-[#009966] cursor-pointer"

          >
            Submit Enquiry
          </button>

          <p className="mt-2 text-xs sm:text-sm text-slate-700">
            We usually respond within a few hours.
          </p>
        </div>
      </form>
    </div>

  </div>
</section>





    </>
   
  );
}
