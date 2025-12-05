"use client";
import { MapPin } from "lucide-react";
import Link from "next/link";

const offices = [
  {
    title: "Delhi (Head Office)",
    address: [
      "B-27, Pushpanjali Enclave,",
      "Outer Ring Road, Pitampura, Delhi",
    ],
    mobile: ["+91 9810395051", "+91 9899151090"],
    phone: "Ajay Aggarwal (B.E.)  +91 9810759498",
    email: "info@anandaggarwalproperties.com",
  },
  {
    title: "Gurugram",
    address: ["C-841 B, Sushant Lok,", "Phase-1, Gurugram"],
    mobile: ["+91 9810156600", "+91 9899058882"],
    phone: "0124-4114859 to 60",
    email: "nareshaggarwal.gurgaon@gmail.com",
  },
  {
    title: "R-Zone Office",
    address: ["255, Chhawla Main Road,", "Najafgarh, Delhi"],
    mobile: ["+91 9810111905"],
    phone: null,
    email: null,
  },
];

export default function OfficesSection() {
  return (
    <section id="offices" className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
            <span className="text-slate-900">Our </span>
            <span className="text-[#009966]">Offices</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-[3px] w-24 bg-[#009966]" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {offices.map((office) => (
            <article
              key={office.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Top Bar */}
              <div className="relative h-28 bg-[#009966]/20">
                {/* Icon badge */}
                <div className="absolute left-1/2 top-full flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                  <div className="rounded-full bg-white p-1 shadow-lg shadow-black/10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#009966] bg-white text-[#009966]">
                      <MapPin className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col px-6 pb-6 pt-10 text-center sm:px-7 sm:pb-7">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  <span className="rounded-full bg-[#009966] px-4 py-1.5 shadow-sm">
                    {office.title}
                  </span>
                </h3>

                <div className="mt-4 space-y-1 text-sm sm:text-base text-slate-800">
                  {office.address.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>

                <div className="mt-4 space-y-1 text-xs sm:text-sm text-slate-700">
                  {office.mobile && (
                    <p>
                      <span className="font-semibold">Mobile: </span>
                      {office.mobile.join(" / ")}
                    </p>
                  )}
                  {office.phone && (
                    <p>
                      <span className="font-semibold">Phone: </span>
                      {office.phone}
                    </p>
                  )}
                  {office.email && (
                    <p className="break-words">
                      <span className="font-semibold">Email: </span>
                      {office.email}
                    </p>
                  )}
                </div>

                {/* CTA Buttons */}
                <div className="mt-6 flex items-center justify-center gap-3 text-xs sm:text-sm">
                  <Link href="/contact-us"

                    type="button"
                    className="rounded-full border border-[#009966] bg-white px-4 py-1.5 font-semibold text-[#009966] shadow-sm transition group-hover:bg-[#009966] group-hover:text-white"
                  >
                    View on Map
                  </Link>
                  <button
                    type="button"
                    className="hidden sm:inline-flex rounded-full border border-slate-300 bg-slate-50 px-4 py-1.5 font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
                  >
                    Call Office
                  </button>
                </div>

                {/* Hover Bar */}
                <div className="mt-5 h-1 w-16 self-center rounded-full bg-[#009966] opacity-70 group-hover:w-20 group-hover:opacity-100 transition-all" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
