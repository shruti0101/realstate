"use client";

import React, { useState } from "react";
import ContactForm from "@/components/Form";

const projects = [

  // fortis hsopital
  {
 
    image: "/pre/fortis.webp",
    title: "FORTIS HOSPITAL",
    location: "Sec-38, Gurugram, Near Medanta",

    builtUpArea: "500 yards, Built-Up 15000 sq.ft.BM+ Stilt+3 Storey",
    rentPerMonth: "₹14 Lakh",
    leasePeriod: "9 Years",
    escalation: "5% after every year",
    advance: "6 Months",
    security: "6 Months",
    lockIn: "5 Years",
    expectedPrice: "₹30 Cr",
    circleRate: "₹15 Cr",
  },
// icici bank
  {
  
    image: "/pre/icici.webp",
    title: "ICICI BANK",
    location: "Sector-8, Rohini",

    builtUpArea: "1430 sq.ft. Super & 715 sq.ft. Carpet, GF",
    rentPerMonth: "₹ 2.26/- lakh",
    security: "3 Months",
      advance: "6 Months",
       lockIn: "5 Years",
    leasePeriod: "9 Years (Since 18 yrs.) renew Aug 2025",
    escalation: "15 % after 3 years Rate Rs. 6.50/- Cr. Last",

   
    circleRate: "Rs. 1.30/- Cr.",
  },

  // manyavar showroom

  {
    
    image: "/pre/manyavar.jpeg",
    title: "MANYAVAR SHOWROOM",
    location: "Vaishali, Pitampura",

    plotSize: "152 Sq. Yards",
    builtUpArea: "300 yards, Entire FF",
    rentPerMonth: "3.50/- Lac (increase in July 2026 @ 4.02/-lac)",
    leasePeriod: "9 Years",
    escalation: "15% after every 3 yr",
    advance: "6 Months",
    security: "3 Months",
    lockIn: "5 Years",
  
    circleRate: "Rs. 10/- Cr.",
  },

// food court

    {
   
    image: "/pre/food.jpg",
    title: "FOOD COURT (14 BRANDS) HALDIRAM, KFC, PIZZA HUT, BURGER KING etc.",
    location: "V3S Mall, Laxmi Nagar",

    plotSize: "152 Sq. Yards",
    builtUpArea: "12000 sq. ft. carpet ",
    rentPerMonth: "15/- Lac (rent increase in 2026 i.e. Rs. 16.80/- lac",
    leasePeriod: "18 Years (Since 2 yrs.)",
    escalation: "12 % after every 3 Years",
    advance: "Rs. 5/- Cr.",
    security: "4 Months",
    lockIn: "3 Years",
  
    circleRate: "Rs. 30/- Cr.",
  },

// icici sec 24


  {
  
    image: "/pre/icici2.jpg",
    title: "ICICI BANK",
    location: "A-1/34, Sec 15, Rohini",

    builtUpArea: "90 mtrs., 3 side corner GF+FF- Bank ",
    rentPerMonth: "₹ 3.04/- lakhs",
    security: "3 Months",
      advance: "6 Months",
       lockIn: "6 Months",
    leasePeriod: "9 yrs. (Fresh)",
    escalation: "12% after every 3 years",

   
    circleRate: "Rs. 8.40/- Cr.",
  },

  // birla

    {
  
    image: "/pre/birla.jpg",
    title: "BIRLA INST. OF TECHNOLOGY",
    location: "BPTP Park Centra NH-8, GGN",

    builtUpArea: "5400 sq.ft., GF ",
    rentPerMonth: "Rs. 5.13/- Lakh",
    security: "5 Months",
      advance: "6 Months",
       lockIn: "6 Months",
    leasePeriod: "9 Years (Fresh)",
    escalation: "15% after every 3 years",

   
    circleRate: "Rs. 11.50/- Cr.",
  },
  
];

export default function PreRentedInventory() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <section className="bg-white">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#ed3a20] via-red-600 to-[#b31217] py-10 sm:py-12">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_#ffffff_0,_transparent_55%)]" />
          <div className="relative mx-auto max-w-6xl px-4 text-center text-white">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase">
              Pre-Rented Commercial
            </p>
            <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Pre-Rented Commercial Properties Inventory
            </h1>
            <p className="mt-2 text-sm text-white/80">
              Curated income-generating assets with stable tenants and assured
              monthly rentals.
            </p>
          </div>
        </div>
      </section>

      {/* Inventory */}
      <section className="bg-[#f7f5f2] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((item, i) => (
              <div
                key={i}
                className="rounded-3xl overflow-hidden bg-white shadow-xl border border-slate-200"
              >
                {/* Image */}
                <div className="relative h-[260px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                
                </div>

                {/* Content */}
                <div className="p-6 h-[230px] overflow-y-auto" >
                  <h3 className="text-lg font-bold text-slate-900">
                    Pre-Rented Property 
                  </h3>
                  <p className="mt-1 text-sm text-red-600 font-semibold">
                    {item.title}, 
                  </p>

                  <div className="mt-5 space-y-2 text-sm">
                    {item.plotSize && (
                      <p>
                        <span className="font-semibold">Plot Size:</span>{" "}
                        {item.plotSize}
                      </p>
                    )}

                    <p>
                       <span className="font-semibold">Location:</span>{" "}
                      {item.location}</p>
                    <p>
                      <span className="font-semibold">Built-up Area:</span>{" "}
                      {item.builtUpArea}
                    </p>
                    <p>
                      <span className="font-semibold">Rent / Month:</span>{" "}
                      {item.rentPerMonth}
                    </p>
                    <p>
                      <span className="font-semibold">Lease:</span>{" "}
                      {item.leasePeriod}
                    </p>
                    <p>
                      <span className="font-semibold">Escalation:</span>{" "}
                      {item.escalation}
                    </p>
                    <p>
                      <span className="font-semibold">Advance:</span>{" "}
                      {item.advance}
                    </p>
                    <p>
                      <span className="font-semibold">Security:</span>{" "}
                      {item.security}
                    </p>
                    <p>
                      <span className="font-semibold">Lock-in:</span>{" "}
                      {item.lockIn}
                    </p>

                    <p className="pt-2 font-semibold text-[#ED3A20]">
                      Expected Price: {item.expectedPrice}
                    </p>
                    <p className="text-black">
                      Circle Rate: {item.circleRate}
                    </p>
                  </div>
                </div>

                {/* Action Bar */}
                <div className="flex items-center justify-between border-t bg-slate-100 px-5 py-4">
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="text-sm font-semibold text-[#ED3A20] hover:underline"
                  >
                    I’m Interested
                  </button>

                  <div className="flex items-center gap-3 text-sm font-medium">
                    <a href="tel:+918800044444">📞 Call</a>
                    <a
                      href="https://wa.me/918800044444"
                      target="_blank"
                      className="text-green-600"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Form */}
      <ContactForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </>
  );
}
