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
   <section className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-4">

    {/* <h2 className="text-2xl font-bold mb-8">
      Banks <span className="text-sm font-medium">(Monthly Rental)</span>
    </h2> */}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {projects.map((item, i) => (
        <div
          key={i}
          className="border border-gray-300 rounded-md bg-white text-center p-6"
        >
          {/* Tenant */}
          <h3 className="text-lg font-semibold text-blue-800 uppercase">
            {item.tenant}
          </h3>

          {/* Rent */}
          <p className="mt-3 text-xl font-bold text-red-600">
            {item.rental}
          </p>

          {/* Button */}
          <button
            onClick={() => {
              setActive(item);
              setSelectedLocation(item.location);
              setIsFormOpen(true);
            }}
            className="mt-5 inline-block bg-blue-900 text-white text-sm font-semibold px-6 py-2 rounded-md hover:bg-blue-800 transition"
          >
            Request Call Back
          </button>
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
