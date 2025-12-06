// components/PreRentedInventory.tsx
"use client";
import { useState } from "react";
import React from "react";
import ContactForm from "@/components/Form"; // 👈 import the form
const inventory = [
  {
    title: "Banks",
    subtitle: "Monthly Rental",
    items: [
      { name: "HDFC BANK", rent: "₹1,32,000", tag: "High-street Branch" },
      { name: "WESTSIDE", rent: "₹2,08,000", tag: "Anchor Tenant" },
      { name: "ICICI BANK", rent: "₹3,25,000", tag: "Corner Location" },
      { name: "AIRTEL", rent: "₹2,16,000", tag: "Retail + Service" },
      { name: "GOVT. BANK", rent: "₹4,80,000", tag: "Govt. Undertaking" },
      { name: "RELIANCE", rent: "₹2,81,000", tag: "Flagship Store" },
      { name: "PNB BANK", rent: "₹5,85,000", tag: "Prime Junction" },
      { name: "HALDIRAMS", rent: "₹12,10,000", tag: "F&B – High Footfall" },
    ],
  },
  {
    title: "Retail Outlets",
    subtitle: "Fashion • F&B • Hypermarkets",
    items: [
      { name: "TRENDS", rent: "₹3,40,000", tag: "Mall Anchor" },
      { name: "RELIANCE JIO MART", rent: "₹4,95,000", tag: "Hypermarket" },
      { name: "PIZZA HUT", rent: "₹1,15,000", tag: "Corner F&B" },
      { name: "KFC", rent: "₹1,75,000", tag: "Drive-through Option" },
    ],
  },
  {
    title: "Office Spaces",
    subtitle: "IT / MNC / Corporate",
    items: [
      { name: "MNC BACK OFFICE", rent: "₹6,25,000", tag: "Grade-A Building" },
      { name: "CO-WORKING HUB", rent: "₹2,90,000", tag: "Fully Furnished" },
      { name: "CONSULTING FIRM", rent: "₹1,80,000", tag: "Premium Business District" },
       { name: "Commercial Plaza", rent: "₹9,60,000", tag: "Retail + Offices Mix" },
    ],
  },

{
  title: "Entire Pre-Leased Buildings",
  subtitle: "Multi-Tenant Income – High ROI",
  items: [
    { name: "Corporate Tower", rent: "₹14,25,000", tag: "Fully Leased to MNCs" },
   
    { name: "IT Business Park Block", rent: "₹18,50,000", tag: "Tech SEZ Zone" },
    { name: "Medical & Diagnostics Tower", rent: "₹7,90,000", tag: "Healthcare Hub" },
    { name: "Government-Leased Building", rent: "₹12,80,000", tag: "Long-Term Lease Security" }
  ],
},

];

export default function PreRentedInventory() {

  const [isFormOpen, setIsFormOpen] = useState(false); // 👈 modal state


  return (

    <>
    
    <section className="bg-white">
      {/* Top title bar */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#ed3a20] via-red-600 to-[#b31217] py-10 sm:py-12">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_#ffffff_0,_transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
            Pre-rented Commercial
          </p>
          <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
            Pre-rented Commercial Properties Inventory
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-white/80">
            Curated income-generating assets with stable tenants and assured monthly rentals.
          </p>
        </div>
      </div>

      {/* Inventory sections */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        {inventory.map((block) => (
          <div key={block.title} className="mb-10 sm:mb-12 lg:mb-14">
            {/* Section heading */}
            <div className="flex flex-wrap items-baseline justify-between gap-3 mb-5">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                {block.title}{" "}
                {block.subtitle && (
                  <span className="text-xs sm:text-sm font-normal text-slate-500">
                    ({block.subtitle})
                  </span>
                )}
              </h2>
              <span className="text-xs sm:text-sm text-[#ed3a20] font-medium">
                Handpicked, tenant-ready assets with clear documentation
              </span>
            </div>

            {/* Cards grid */}
            <div className="overflow-hidden rounded-3xl border border-slate-100 bg-slate-50/60">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                {block.items.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex flex-col items-center justify-between gap-3 px-5 py-6 sm:px-6 sm:py-7 bg-white transition hover:bg-[#fff5f3]"
                  >
                    <div className="text-center space-y-1.5">
                      <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">
                        Tenant
                      </p>
                      <p className="text-sm sm:text-base font-semibold text-slate-900">
                        {item.name}
                      </p>
                      {item.tag && (
                        <p className="text-[11px] text-slate-500">{item.tag}</p>
                      )}
                    </div>

                    <div className="text-center">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                        Monthly Rental
                      </p>
                      <p className="text-lg sm:text-xl font-bold text-[#ed3a20] mt-1">
                        {item.rent}
                        <span className="text-xs font-medium text-slate-500"> /-</span>
                      </p>
                    </div>

                    <button onClick={()=> setIsFormOpen(true)}
                      type="button"
                     
                      className=" cursor-pointer mt-1 inline-flex items-center justify-center rounded-full bg-[#0c2847] px-4 py-2 text-[11px] sm:text-xs font-semibold text-white shadow-sm shadow-slate-300 transition group-hover:bg-[#ed3a20] group-hover:shadow-md"
                    >
                      Request Call Back
                    </button>

                    {/* bottom accent */}
                    <span className="pointer-events-none absolute inset-x-10 bottom-0 h-[3px] rounded-t-full bg-gradient-to-r from-transparent via-[#ed3a20]/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

       {/* Contact Form Modal – appears after our expertise tabs */}
          <ContactForm
            isOpen={isFormOpen}
            onClose={() => setIsFormOpen(false)}
          />
    </>
  );
}
