"use client";

import { useState } from "react";
import {  ArrowRight } from "lucide-react";
import AmenitiesSection from "@/components/Amenities";
import ContactForm from "@/components/Form";



const services = [
  {
    id: 2,
    title: "Residential Properties",
    subtitle: "Premium Housing & Lifestyle Residences",

   desc: `Anand Aggarwal Properties offers premium residential properties across the most sought-after locations of North & West Delhi and Gurugram, catering to first-time buyers, growing families, HNIs, and NRI clients. Our carefully curated portfolio includes <strong>builder floors & apartments </strong>, <strong>luxury villas & penthouses </strong>, and homes within <strong>secure gated communities</strong> located in <strong>prime residential colonies</strong> with excellent infrastructure and connectivity.

Every property is verified for quality, legality, and long-term value, ensuring a smooth and transparent home-buying experience. Backed by decades of market expertise, we guide you at every step—from property selection to final possession—helping you secure a home that perfectly matches your lifestyle, budget, and future aspirations.`,


    image: "/services/1.avif",
    points: [
      "Builder Floors & Apartments",
      "Luxury Villas & Penthouses",
      "Gated Communities",
      "Prime Residential Colonies",
    ],
    pamphlet: {
      heading: "RESIDENTIAL",
      phone: "9810395051, 9899151090",
      columns: [
        [
          "Pushpanjali Enclave",
          "Deepali / Tarun Enclave",
          "Lotus / West Enclave",
          "Saraswati Vihar",
        ],
        [
          "Suvidha Kunj",
          "Lok Vihar / Harsh Vihar",
          "Vaishali Enclave",
          "Sharda Niketan",
        ],
        [
          "Rajdhani / M.P. Enclave",
          "Rohini (All Sectors)",
          "DLF, Gurgaon",
          "Punjabi Bagh",
        ],
      ],
    },
  },




   {
    id: 4,
    title: "Industrial Properties",
    subtitle: "Factories, Warehouses & Land",
   desc: `Anand Aggarwal Properties deals in a wide range of industrial real estate across approved industrial zones of Delhi NCR. Our offerings include <strong>industrial plots</strong>, <strong>warehouse spaces</strong>, <strong>factory buildings</strong>, and <strong>CLU land</strong> suitable for manufacturing, storage, logistics, and allied operations.

All industrial properties are thoroughly verified with clear titles and regulatory compliance, ensuring operational ease and long-term stability. Located in strategically connected industrial hubs, our properties are ideal for business owners and investors seeking scalable infrastructure, efficient logistics access, and sustainable industrial growth.`
,

    image: "/services/4.avif",
    points: [
      "Industrial Plots",
      "Warehouses",
      "Factory Buildings",
      "CLU Land",
    ],
    pamphlet: {
      heading: "INDUSTRIAL",
      phone: "9811218597, 9810916176",
      columns: [
        ["Mangolpuri Phase I & II", "Udyog Nagar", "Narela / Bawana"],
        ["Kundli / Rai / Barhi", "Bahadurgarh", "Kharkhoda"],
        ["Udyog Vihar", "Manesar", "Lawrence Road"],
      ],
    },
  },




{
  id: 1,
  title: "Commercial & Pre-Leased Real Estate",
  subtitle: "Shops, Offices, Showrooms & Assured Investments",
  desc: `
With decades of experience, Anand Aggarwal Properties delivers high-quality <strong>commercial real estate</strong> and <strong>pre-leased investment solutions</strong> across prime business hubs of Delhi and Gurugram.

We specialize in <strong>office spaces</strong>, <strong>retail showrooms</strong>, <strong>food & beverage outlets</strong>, and <strong>high-street properties</strong> located in high-footfall, high-visibility zones—ideal for business growth and long-term value.

Our portfolio also includes a curated selection of <strong>pre-leased commercial assets</strong> such as <strong>banks & ATMs</strong>, <strong>retail brands</strong>, <strong>hotels</strong>, <strong>schools</strong>, and institutional properties offering <strong>assured rental returns of 6%–12%</strong>.

Whether you are a business owner, brand, or investor, we provide verified listings, strong tenant profiles, transparent documentation, and end-to-end transaction support—ensuring secure investments, immediate rental income, and long-term capital appreciation.
`,
  image: "/services/2.webp",
  points: [
    "Office Spaces",
    "Retail Showrooms",
    "Food & Beverage Outlets",
    "High Street / Main Road Properties",
    "Banks & ATMs",
    "Retail Brands",
    "Hotels & Schools",
    "6%–12% Assured Returns",
  ],
  pamphlet: {
    heading: "COMMERCIAL & PRE-LEASED",
    phone: "9810395051, 9899151090, 9810327243",
    columns: [
      ["Netaji Subhash Place", "Pitampura", "Ashok Vihar", "Karol Bagh"],
      ["Punjabi Bagh", "Paschim Vihar", "Kamla Nagar", "Connaught Place"],
      ["DLF Gurgaon", "Cyber City", "Udyog Vihar", "MG Road"],
      ["Banks", "MNCs", "Govt. Offices"],
      ["Retail Stores", "Warehouses"],
      ["Hotels", "Schools"],
    ],
  },
}
,




  {
  id: 6,
  title: "KUNDLI / SONEPAT",
  subtitle: "Strategic Growth Corridor of North Delhi NCR",
  desc: `
Anand Aggarwal Properties offers carefully curated <strong>residential</strong> and <strong>commercial real estate</strong> opportunities across <strong>Kundli and Sonipat</strong>—one of the fastest-growing real estate corridors in North Delhi NCR.

Driven by excellent connectivity via <strong>NH-44</strong>, <strong>KMP Expressway</strong>, and proximity to <strong>Delhi</strong>, Kundli–Sonipat has emerged as a preferred destination for <strong>plotted developments</strong>, <strong>group housing projects</strong>, <strong>integrated townships</strong>, and <strong>commercial hubs</strong>.

Whether you are looking for an affordable home, a future-ready investment, or a commercial space with high growth potential, our verified listings are selected for strong infrastructure, upcoming developments, and long-term appreciation. With deep local expertise and transparent advisory, we help you secure the right property in this rapidly evolving real estate market.
`,
  image: "hero2.webp",
  points: [
    "Plotted Developments",
    "Group Housing Projects",
    "Commercial Markets",
    "High Appreciation Potential",
  ],
  pamphlet: {
    heading: "KUNDLI / SONEPAT",
    phone: "9810327243",
    columns: [
      ["VIBS Sonepat", "Imperial Greens"],
      ["Newstone", "Jindal Sonepat", ]
    ],
  },
}
,

 

  {
    id: 5,
    title: "DLF / Gurgaon Properties",
    subtitle: "Prime Locations in Gurugram",
   desc: `Anand Aggarwal Properties presents premium residential and commercial real estate options across Gurugram’s most prestigious locations as . Our Gurgaon portfolio includes <strong>DLF Phases developments</strong>,<strong> Gurgaon Dwarka Expressways</strong>,  <strong>luxury apartments</strong>, <strong>commercial hubs</strong>, and <strong>premium townships</strong> known for world-class infrastructure and strong appreciation potential.

Whether you are seeking a dream home, a commercial establishment, or a long-term investment, our Gurgaon properties are handpicked for reliability, growth, and lifestyle value. With deep market insights and personalized advisory, we help you make confident property decisions in one of India’s fastest-growing real estate markets.`
,

    image: "hero2.webp",
    points: [
      "DLF Phases",
      "Luxury Apartments",
      "Commercial Hubs",
      "Premium Townships",
    ],
    pamphlet: {
      heading: "GURGAON",
      phone: "9810327243",
      columns: [
        ["DLF Phase I, II, III, IV"," Omaxe Dwarka"],
        ["Aralias / Magnolias / Crest","Unity Amaryllis"],
        ["Sushant Lok", "South City", "M3M / Vatika / Godrej"],
       
       
      ],
    },
  },







];



export default function ServicesPage() {
  const [active, setActive] = useState(services[0]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  

const [selectedLocation, setSelectedLocation] = useState("");

  return (
    <main className="bg-white">

      {/* Banner */}
      <section className="relative h-[300px] sm:h-[380px] bg-black">
        <img src="/bannerbg.webp" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl sm:text-5xl font-bold">Our Services</h1>
          <p className="mt-3 max-w-2xl">
            Expert guidance for secure & profitable property investments
          </p>
        </div>
      </section>

   <section className="max-w-7xl mx-auto px-4 py-14 grid lg:grid-cols-3 gap-12">
  
  {/* Sidebar */}
  <aside className="bg-slate-50 rounded-2xl p-6 md:sticky top-28 h-fit shadow-sm">
    <h3 className="text-lg font-bold text-[#ed3a20] mb-5 text-center uppercase tracking-wide">
      Our Expertise
    </h3>

    <ul className="space-y-2">
      {services.map((s) => (
        <li
          key={s.id}
          onClick={() => setActive(s)}
          className={`cursor-pointer rounded-lg px-4 py-3 transition text-sm ${
            active.id === s.id
              ? "bg-[#ed3a20] text-white font-semibold"
              : "bg-white hover:bg-[#ed3a20]/10"
          }`}
        >
          {s.title}
        </li>
      ))}
    </ul>
  </aside>

  {/* Details */}
  <div className="lg:col-span-2">
    <div className="rounded-3xl overflow-hidden shadow-md">
      <img src={active.image} className="w-full h-72 object-cover" />
    </div>

    <h2 className="mt-7 text-3xl font-bold text-slate-900">
      {active.title}
    </h2>

    <p className="text-[#ed3a20] font-medium mt-1">
      {active.subtitle}
    </p>

 <p
  className="mt-4 text-black leading-loose"
  dangerouslySetInnerHTML={{ __html: active.desc }}
/>


  

    <button
      onClick={() => setIsFormOpen(true)}
      className="mt-8 inline-flex items-center gap-2 bg-[#ed3a20] px-7 py-3 text-white rounded-full text-sm hover:bg-red-700 transition"
    >
      Discuss Your Requirements <ArrowRight size={16} />
    </button>
  </div>
</section>


   {active.pamphlet && (
  <section className="max-w-7xl mx-auto px-4 py-15 border-t">
    
    {/* Header */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-3 bg-[#ed3a20] text-white rounded-full px-6 py-3 shadow-sm">
      <h3 className="text-lg font-bold tracking-wide">
        {active.pamphlet.heading}
      </h3>
      <p className="text-sm font-semibold">
        Ph.: {active.pamphlet.phone}
      </p>
    </div>

    {/* Columns */}
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-slate-800">
      {active.pamphlet.columns.map((col, colIndex) => (
        <ul key={colIndex} className="space-y-3">
          {col.map((item, idx) => (
            <li
              key={idx}
              onClick={() => {
                setSelectedLocation(item);
                setIsFormOpen(true);
              }}
              className="cursor-pointer flex items-start gap-2 hover:text-[#ed3a20] transition"
            >
              <span className="text-[#ed3a20]">•</span>
              {item}
            </li>
          ))}
        </ul>
      ))}
    </div>
  </section>
)}

<ContactForm
  isOpen={isFormOpen}
  onClose={() => setIsFormOpen(false)}
  defaultService={active.title}
  defaultMessage={`Service: ${active.title}
Location: ${selectedLocation}

Please share details.`}
/>


  {!["Commercial Real Estate", "Pre-Leased / Investment"].includes(active.title) && (
  <AmenitiesSection />
)}

    </main>
  );
}
