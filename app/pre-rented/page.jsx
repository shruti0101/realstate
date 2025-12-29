"use client";

import React, { useState } from "react";
import ContactForm from "@/components/Form";

export default function PreRentedInventory() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");

  const projects = [


    // RETAIL
    { category: "Retail", tenant: "Manyavar", location: "Delhi", rental: "₹3.50 L / Month" },
    { category: "Retail", tenant: "Food Court", location: "Delhi", rental: "₹15.00 L / Month" },
    { category: "Retail", tenant: "Gaming Zone", location: "Gurgaon", rental: "₹3.60 L / Month" },
  { category: "Retail", tenant: "Birla Institute", location: "Gurgaon", rental: "₹5.13 L / Month" },



    // BANKS
    { category: "Banks", tenant: "ICICI Bank", location: "Delhi", rental: "₹2.26 L / Month" },
    { category: "Banks", tenant: "ICICI Bank", location: "Delhi", rental: "₹3.00 L / Month" },
    { category: "Banks", tenant: "IOB Bank", location: "Delhi", rental: "₹3.47 L / Month" },


    // OFFICES
  
    // HEALTHCARE
    { category: "Healthcare", tenant: "Apollo Hospital", location: "Delhi", rental: "₹23.00 L / Month" },
    { category: "Healthcare", tenant: "RG Stone Hospital", location: "Delhi", rental: "₹27.00 L / Month" },
    { category: "Healthcare", tenant: "Fortis Hospital", location: "Gurgaon", rental: "₹14.00 L / Month" },

    // INDEPENDENT BUILDINGS
    { category: "Independent Buildings", tenant: "Banquet Hall", location: "Delhi", rental: "₹23.00 L / Month" },
  ];

  // 🔥 Group by category
  const groupedProjects = projects.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <>
      {/* HEADER */}
      <section className="bg-white">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#ed3a20] via-red-600 to-[#b31217] py-12">
          <div className="mx-auto max-w-6xl px-4 text-center text-white">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase">
              Pre-Rented Commercial
            </p>
            <h1 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Pre-Rented Commercial Properties Inventory
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-md">
              Income-generating assets leased to reputed tenants with stable returns.
            </p>
          </div>
        </div>
      </section>

      {/* INVENTORY */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-16">

          {Object.entries(groupedProjects).map(([category, items]) => (
            <div key={category}>

              {/* CATEGORY HEADING */}
              <p className="text-2xl font-bold text-slate-900 mb-6">
                {category}
                <span className="ml-2 text-sm font-medium text-gray-500">
                  (Monthly Rental)
                </span>
              </p>

              {/* CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className="border border-gray-200 rounded-xl bg-white text-center p-6 shadow-sm hover:shadow-md transition"
                  >
                    <h3 className="text-lg font-semibold uppercase text-slate-900">
                      {item.tenant}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {item.location}
                    </p>

                    <p className="mt-4 text-xl font-bold text-[#ed3a20]">
                      {item.rental}
                    </p>

                    <button
                      onClick={() => {
                        setActive(item);
                        setSelectedLocation(item.location);
                        setIsFormOpen(true);
                      }}
                      className="mt-5 w-full rounded-full bg-[#ed3a20] text-white text-sm font-semibold px-4 py-2 hover:bg-red-700 transition"
                    >
                      Request Call Back
                    </button>
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* CONTACT FORM */}
      {active && (
        <ContactForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          defaultService={`${active.category} – ${active.tenant}`}
          defaultMessage={`Enquiry for:
Tenant: ${active.tenant}
Category: ${active.category}
Location: ${selectedLocation}

Please share more details.`}
        />
      )}
    </>
  );
}
