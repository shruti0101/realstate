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

];

export default function OfficesSection() {
  return (
    <section id="offices" className="bg-white py-10">
      <div className="mx-auto max-w-3xl ">
        {/* Heading */}
        <div className="text-center mb-5 ">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
            <span className="text-slate-900">Our </span>
            <span className="text-[#ED3A20]">Office</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-[3px] w-24 bg-[#ED3A20]" />
          </div>
        </div>

        {/* Cards */}
        <div className=" max-w-3xl ">
          {offices.map((office) => (
            <article
              key={office.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-100  transition hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Top Bar */}
              <div className="relative h-18 bg-[#ED3A20]/20">
                {/* Icon badge */}
                <div className="absolute left-1/2 top-full flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                  <div className="rounded-full bg-white p-1 shadow-lg shadow-black/10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#ED3A20] bg-white text-[#ED3A20]">
                      <MapPin className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex  flex-col  pt-10 text-center sm:pb-7">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  <span className="rounded-full bg-[#ED3A20] px-4 py-1.5 shadow-sm">
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
                  <a href="https://maps.app.goo.gl/95EdeJHMFyi5dY3cA?g_st=ipc"

                    type="button"
                    className="rounded-full border border-[#ED3A20] bg-white px-4 py-1.5 font-semibold text-[#ED3A20] shadow-sm transition group-hover:bg-[#ED3A20] group-hover:text-white"
                  >
                    View on Map
                  </a>
                  <a href="tel:+919810759498"
                  
                    className="hidden sm:inline-flex rounded-full border border-slate-300 bg-slate-50 px-4 py-1.5 font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
                  >
                    Call Office
                  </a>
                </div>

                {/* Hover Bar */}
                <div className="mt-5 h-1 w-16 self-center rounded-full bg-[#ED3A20] opacity-70 group-hover:w-20 group-hover:opacity-100 transition-all" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
