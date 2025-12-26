"use client";

import { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import AmenitiesSection from "@/components/Amenities";
import ContactForm from "@/components/Form";



const services = [
  {
    id: 1,
    title: "Residential Properties",
    subtitle: "Premium Housing & Lifestyle Residences",

   desc: `Anand Aggarwal Properties offers premium residential properties across the most sought-after locations of North & West Delhi and Gurugram, catering to first-time buyers, growing families, HNIs, and NRI clients. Our carefully curated portfolio includes **builder floors & apartments**, **luxury villas & penthouses**, and homes within **secure gated communities** located in **prime residential colonies** with excellent infrastructure and connectivity.

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
    id: 2,
    title: "Commercial Real Estate",
    subtitle: "Shops, Offices & Showrooms",
   desc: `With decades of experience, Anand Aggarwal Properties delivers high-quality commercial real estate solutions across major business hubs of Delhi and Gurugram. We specialize in **office spaces**, **retail showrooms**, **food & beverage outlets**, and **main road commercial properties** located in high-footfall, high-visibility zones ideal for business growth and investment.

Our commercial listings are strategically selected to offer excellent connectivity, strong catchment areas, and long-term appreciation potential. Whether you are a business owner, brand, or investor, we provide expert guidance, verified listings, and end-to-end transaction support—ensuring your commercial property aligns seamlessly with your operational needs and financial goals.`
,
    image: "/services/2.webp",
    points: [
      "Office Spaces",
      "Retail Showrooms",
      "Food & Beverage Outlets",
      "Main Road Properties",
    ],
    pamphlet: {
      heading: "COMMERCIAL",
      phone: "9810395051, 9899151090",
      columns: [
        ["Netaji Subhash Place", "Pitampura", "Ashok Vihar", "Karol Bagh"],
        ["Punjabi Bagh", "Paschim Vihar", "Kamla Nagar", "Connaught Place"],
        ["DLF Gurgaon", "Cyber City", "Udyog Vihar", "MG Road"],
      ],
    },
  },

   {
    id: 3,
    title: "Industrial Properties",
    subtitle: "Factories, Warehouses & Land",
   desc: `Anand Aggarwal Properties deals in a wide range of industrial real estate across approved industrial zones of Delhi NCR. Our offerings include **industrial plots**, **warehouse spaces**, **factory buildings**, and **CLU land** suitable for manufacturing, storage, logistics, and allied operations.

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
    id: 4,
    title: "Pre-Leased / Investment",
    subtitle: "Assured Rental Income",
   desc: `Anand Aggarwal Properties offers a curated portfolio of high-yield pre-leased commercial assets across prime locations in Delhi NCR. Our inventory includes fully leased **banks & ATMs**, **retail brands**, **hotels & schools**, and institutional properties delivering **assured annual returns of 6%–12%**.

With tenants already in place under long-term leases, these investments offer immediate rental income, minimal risk, and strong capital appreciation. We ensure complete transparency through verified documentation, tenant profiles, and lease agreements—making pre-leased assets a secure and hassle-free investment choice for long-term wealth creation.`
,
    image: "/services/3.webp",
    points: [
      "Banks & ATMs",
      "Retail Brands",
      "Hotels & Schools",
      "6%–12% Returns",
    ],
    pamphlet: {
      heading: "PRE LEASED / COMMERCIAL",
      phone: "9810327243",
      columns: [
        ["Banks", "MNCs", "Govt. Offices"],
        ["Warehouses", "Retail Stores"],
        ["Hotels", "Schools"],
      ],
    },
  },

  {
    id: 5,
    title: "Gurgaon Properties",
    subtitle: "Prime Locations in Gurugram",
   desc: `Anand Aggarwal Properties presents premium residential and commercial real estate options across Gurugram’s most prestigious locations. Our Gurgaon portfolio includes **DLF Phases developments**, **luxury apartments**, **commercial hubs**, and **premium townships** known for world-class infrastructure and strong appreciation potential.

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
        ["DLF Phase I, II, III, IV"],
        ["Aralias / Magnolias / Crest"],
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

    <p className="mt-4 text-slate-700  leading-loose">
      {active.desc}
    </p>

    <ul className="mt-6 space-y-3">
      {active.points.map((p, i) => (
        <li key={i} className="flex gap-3 text-sm">
          <CheckCircle className="text-[#ed3a20] w-5 h-5 mt-[2px]" />
          {p}
        </li>
      ))}
    </ul>

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


      <AmenitiesSection />
    </main>
  );
}
