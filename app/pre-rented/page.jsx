"use client";

import React, { useState } from "react";
import ContactForm from "@/components/Form";

    const projects = [
  // BANKS
  {
    category: "Bank",
    tenant: "ICICI Bank",
    location: "Delhi",
    rental: "₹2.26 L / Month",
  },
  {
    category: "Bank",
    tenant: "ICICI Bank",
    location: "Delhi",
    rental: "₹3.00 L / Month",
  },
  {
    category: "Bank",
    tenant: "IOB Bank",
    location: "Delhi",
    rental: "₹3.47 L / Month",
  },

  // RETAIL
  {
    category: "Retail",
    tenant: "Manyavar",
    location: "Delhi",
    rental: "₹3.50 L / Month",
  },
  {
    category: "Retail",
    tenant: "Food Court",
    location: "Delhi",
    rental: "₹15.00 L / Month",
  },
  {
    category: "Retail",
    tenant: "Gaming Zone",
    location: "Gurgaon",
    rental: "₹3.60 L / Month",
  },
  {
    category: "Retail",
    tenant: "Birla Institute",
    location: "Gurgaon",
    rental: "₹5.13 L / Month",
  },

  // INDEPENDENT BUILDINGS
  {
    category: "Independent Building",
    tenant: "Apollo Hospital",
    location: "Delhi",
    rental: "₹23.00 L / Month",
  },
  {
    category: "Independent Building",
    tenant: "RG Stone Hospital",
    location: "Delhi",
    rental: "₹27.00 L / Month",
  },
  {
    category: "Independent Building",
    tenant: "Banquet Hall",
    location: "Delhi",
    rental: "₹23.00 L / Month",
  },
  {
    category: "Independent Building",
    tenant: "Fortis Hospital",
    location: "Gurgaon",
    rental: "₹14.00 L / Month",
  },
];


export default function PreRentedInventory() {
  const [isFormOpen, setIsFormOpen] = useState(false);
    const [active, setActive] = useState(projects[0]);

const [selectedLocation, setSelectedLocation] = useState("");



  return (
    <>
      {/* Header */}
      <section className="bg-white">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#ed3a20] via-red-600 to-[#b31217] py-12">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_#ffffff_0,_transparent_55%)]" />
          <div className="relative mx-auto max-w-6xl px-4 text-center text-white">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase">
              Pre-Rented Commercial
            </p>
            <h1 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Pre-Rented Commercial Properties Inventory
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-md text-white">
              Carefully curated income-generating assets leased to reputed
              tenants, offering stability, security, and predictable returns.
            </p>
          </div>
        </div>
      </section>

      {/* Inventory */}
      <section className="bg-[#f7f5f2] py-18">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
{projects.map((item, i) => (
  <div
    key={i}
    className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
  >
    {/* Soft Hover Glass Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#fff5f4] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Card Content */}
    <div className="relative z-10 flex h-full flex-col justify-between px-8 py-5">

      {/* Top */}
      <div>
        {/* Category Badge */}
        <span className="inline-flex items-center rounded-full bg-[#ed3a20]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#ed3a20]">
          {item.category}
        </span>

        <h3 className="mt-4 text-xl font-semibold text-slate-900 tracking-tight">
          {item.tenant}
        </h3>

        <p className="mt-2 text-sm text-slate-600">
          Location{" "}
          <span className="font-medium text-slate-800">
            · {item.location}
          </span>
        </p>
      </div>

      {/* Divider */}
      <div className="my-6 h-px w-full bg-slate-200/70" />

      {/* Rental Section */}
      <div>
        <p className="text-xs uppercase tracking-widest text-slate-500">
          Monthly Rental
        </p>
        <p className="mt-2 text-2xl font-semibold text-[#ed3a20]">
          {item.rental}
        </p>
      </div>

<button
  onClick={() => {
    setActive(item);
    setSelectedLocation(item.location);
    setIsFormOpen(true);
  }}
  className="mt-4 cursor-pointer inline-flex items-center gap-2 self-start rounded-full border border-[#ed3a20]/40 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#ed3a20] transition-all duration-300 hover:bg-[#ed3a20] hover:text-white hover:border-[#ed3a20]"
>
  Enquire Now
  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</button>



    </div>

    {/* Bottom Accent */}
    <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#ed3a20] to-red-700 transition-all duration-500 group-hover:w-full" />
  </div>
))}

          </div>

        </div>
      </section>

  <ContactForm
  isOpen={isFormOpen}
  onClose={() => setIsFormOpen(false)}
  defaultService={`${active.category} - ${active.tenant}`}
  defaultMessage={`Enquiry for:
Tenant: ${active.tenant}
Category: ${active.category}
Location: ${selectedLocation}

Please share more details.`}

/>

   
    </>
  );
}
