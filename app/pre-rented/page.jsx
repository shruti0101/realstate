"use client";

import React, { useState } from "react";
import ContactForm from "@/components/Form";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
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




      {/* pre rnted */}

      
           <div><section className="relative bg-slate-50 py-16">
        {/* Accent Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#ed3a20]/5 to-transparent"></div>
      
        <div className="relative  mx-auto w-full  px-4 sm:px-6 lg:px-15 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <span className="inline-block mb-3 rounded-full bg-[#ed3a20]/10 px-4 py-1 text-sm font-semibold text-[#ed3a20]">
              High-Demand Investment
            </span>
      
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Pre-Rented Properties
            </h2>
      
            <p className="mt-3 text-lg font-medium text-[#ed3a20]">
              Secure Assets with Assured Rental Income
            </p>
      
            <p className="mt-5 text-black leading-relaxed">
              Pre-rented properties are ideal for investors seeking stable,
              low-risk returns with immediate rental income. These assets are
              already leased to reputed tenants, eliminating vacancy risks and
              ensuring predictable cash flow from day one.
            </p>
      
            <p className="mt-4 text-black leading-relaxed">
              At Anand Aggarwal Properties, we offer verified pre-leased commercial
              assets across Delhi & NCR, including banks, MNC offices, retail
              brands, food chains, hospitals, and institutional properties located
              in high-footfall business zones.
            </p>
      
            {/* CTA */}
            <Link href="/contact-us"
            
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-600 cursor-pointer px-8 py-3 text-white font-medium shadow-md hover:bg-red-700 transition"
            >
              Explore Pre-Rented Opportunities
            </Link>
          </div>
      
          {/* Right Highlight Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-red-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Why Invest in Pre-Rented Properties?
            </h3>
      
            <ul className="space-y-4 text-sm sm:text-base">
              <li className="flex gap-3">
                <CheckCircle className="text-[#ed3a20] w-5 h-5 mt-[2px]" />
                <p>7% – 10% assured annual rental returns</p>
              </li>
      
              <li className="flex gap-3">
                  <CheckCircle className="text-[#ed3a20] w-5 h-5 mt-[2px]" />
                <p>Immediate monthly income from Day-1</p>
              </li>
      
              <li className="flex gap-3">
                 <CheckCircle className="text-[#ed3a20] w-5 h-5 mt-[2px]" />
                <p>Zero vacancy risk with long-term tenants</p>
              </li>
      
              <li className="flex gap-3">
               <CheckCircle className="text-[#ed3a20] w-5 h-5 mt-[2px]" />
                <p>Leased to banks, MNCs & national brands</p>
              </li>
      
              <li className="flex gap-3">
                  <CheckCircle className="text-[#ed3a20] w-5 h-5 mt-[2px]" />
                <p>High liquidity & strong capital appreciation</p>
              </li>
      
              <li className="flex gap-3">
                  <CheckCircle className="text-[#ed3a20] w-5 h-5 mt-[2px]" />
                <p>Fully verified lease agreements & documents</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      </div>
      

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
