"use client";

import { useState } from "react";
import {  ArrowRight } from "lucide-react";
import AmenitiesSection from "@/components/Amenities";
import ContactForm from "@/components/Form";
import PreRentedInventory from "@/app/pre-rented/page.jsx";


const services = [
 {
  id: 2,
  title: "Residential Properties",
  subtitle: "Premium Housing & Lifestyle Residences",

  desc: `Anand Aggarwal Properties offers premium residential properties across the  North & West Delhi <strong> (Pushpanjali Enclave, Pitampura, Punjabi Bagh, Tarun enclave) </strong> and DLF/Gurugram, catering to first-time buyers, growing families, HNIs, and NRI clients. Our carefully curated portfolio includes <strong>builder floors & apartments</strong>, <strong>luxury villas & penthouses</strong>, and homes within <strong>secure gated communities</strong> located in <strong>prime residential colonies</strong> with excellent infrastructure and connectivity.

Every property is verified for quality, legality, and long-term value, ensuring a smooth and transparent home-buying experience. Backed by decades of market expertise, we guide you at every step—from property selection to final possession—helping you secure a home that perfectly matches your lifestyle, budget, and future aspirations.`,

  image: "/services/1.avif",

  points: [
    "Builder Floors & Apartments",
    "Luxury Villas & Penthouses",
    "Gated Communities",
    "Prime Residential Colonies",
  ],

 
  pamphlets: [

    // 📌 Pamphlet 1 – North & West Delhi
    {
      heading: "RESIDENTIAL – North & West Delhi (Plots / Kothis / Floors)",
      phone: "9810395051 , 9899151090",
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
          "Pitampura (All Blocks)",
          "Punjabi Bagh",
     
        ],
      ],
    },

    // 📌 Pamphlet 2 – Gurugram Residential
    {
      heading: "DLF/GURGAON (Plots / Kothis / Floors)",
        phone: "9810395051 , 9899151090",
      columns: [
        [
          "DLF Phase I to IV",
        "Sushant Lok I to III",
    
      
    
        ],
        [
           "South City I & II",
        "Suncity",
        ],

        [
           "Dwarka Expressway",
        "Golf Course Extension",
        ],
      ],
    },

   
    {
      heading: "DLF / Gurgaon  (Apartments)",
         phone: "9810395051 , 9899151090",
      columns: [
        [
          "DLF Aralias ",
          "DLF Camelias",
          "DLF Privana "
     
        ],
        [
         
      
             "M3M Projects",
             "Signature Global",
             "Birla Group"
   
        ],
        [
         
            "Adani Group",
              "Krisumi",
            "Suncity",
          


        ],


      
        
      ],
    },



      {
      heading: "North West Delhi  (Apartments)",
         phone: "9810395051 , 9899151090",
      columns: [
     
     
        [
          
          "Unity Amaryllis  ",
           "DLF Mid Town (Moti Nagar) ",
           


        ],

           [
          
        
            "Maxwell ",
            "Golf Island Dwarka",



        ],

            [
          
        
            "Sawasdee (Lawrence Road) ",
          "Rohini Sector - 32"



        ],


      
        
      ],
    },


  ],
}
,




   {
    id: 4,
    title: "Industrial Properties",
    subtitle: "Factories, Warehouses & Land",
   desc: `Anand Aggarwal Properties deals in a wide range of industrial real estate across approved industrial  zones of <strong>Mangolpuri, Udyog Nagar, Kundli </strong> & other areas in <strong> Delhi NCR. </strong> Our offerings include <strong>industrial plots</strong>, <strong>warehouse spaces</strong>, <strong>factory buildings</strong>, and <strong>CLU land</strong> suitable for manufacturing, storage, logistics, and allied operations.

All industrial properties are thoroughly verified with clear titles and regulatory compliance, ensuring operational ease and long-term stability. Located in strategically connected industrial hubs, our properties are ideal for business owners and investors seeking scalable infrastructure, efficient logistics access, and sustainable industrial growth.`
,

    image: "/services/industry.webp",
    points: [
      "Industrial Plots",
      "Warehouses",
      "Factory Buildings",
      "CLU Land",
    ],
    pamphlet: {
      heading: "INDUSTRIAL (Plots / Factories)",
      phone: "9811218597 , 9899151090",
      columns: [
        ["Mangolpuri Phase I & II", "Udyog Nagar", "Narela / Bawana"],
        ["Kundli / Rai / Barhi", "Bahadurgarh", "Kharkhoda"],
        ["Udyog Vihar", "Manesar", "Lawrence Road"],
      ],
    },
  },




{
  id: 1,
  title: "Commercial & Pre-Leased ",
  subtitle: "Shops, Offices, Showrooms & Assured Investments",
  desc: `
With decades of experience, Anand Aggarwal Properties delivers high-quality <strong>commercial real estate</strong> and <strong>pre-leased investment solutions</strong> across prime business hubs of Delhi and Gurugram.

We specialize in Pre-Leased properties rented to <strong>  </strong>, <strong>banks, offices </strong>, <strong>retail showrooms</strong>, <strong>food & beverage outlets</strong>, and <strong>high-street properties</strong> located in high-footfall, high-visibility zones—ideal for business growth and long-term value.

Our portfolio also includes a curated selection of <strong>pre-leased commercial assets</strong> such as <strong>banks & ATMs</strong>, <strong>retail brands</strong>, <strong>hotels</strong>, <strong>schools</strong>, and institutional properties offering <strong>assured rental returns of 5%–10%</strong>.

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

  
  pamphlets:   [

    {


      heading: " PRE-LEASED PROPERTIES Returns (5 to 10%)",
      phone: "  9810327243 , 9811257394",
      subtitle:"All over Delhi / Gurgaon Noida (Returns 5 to 10%)",
      columns: [
        ["Banks", "Hospitals"],
        ["Retail outlet", "Showrooms", ],
        ["Food Court", "Office Space", ],
      ],
    },

    
],



}
,




  {
  id: 6,
  title: "KUNDLI / SONEPAT",
  subtitle: "Strategic Growth Corridor of KUNDLI / SONEPAT",
  desc: `
Anand Aggarwal Properties offers carefully curated <strong>residential</strong> and <strong>commercial real estate</strong> opportunities across <strong>Kundli and Sonipat</strong>—one of the fastest-growing real estate corridors in North Delhi NCR.

Driven by excellent connectivity via <strong>NH-44</strong>, <strong>KMP Expressway</strong>, and proximity to <strong>Delhi</strong>, Kundli–Sonipat has emerged as a preferred destination for <strong>plotted developments</strong>, <strong>group housing projects</strong>, <strong>integrated townships</strong>, and <strong>commercial hubs</strong>.

Whether you are looking for an affordable home, a future-ready investment, or a commercial space with high growth potential, our verified listings are selected for strong infrastructure, upcoming developments, and long-term appreciation. With deep local expertise and transparent advisory, we help you secure the right property in this rapidly evolving real estate market.
`,
  image: "/services/sonepat.jpg",
  points: [
    "Plotted Developments",
    "Group Housing Projects",
    "Commercial Markets",
    "High Appreciation Potential",
  ],

  pamphlets: [


  // {


  //     heading: "KUNDLI / SONEPAT(Good for Investment)",
  //     phone: "9891683399,9810327243",
  //     columns: [
  //       ["VIBS Imperial Greens ","Mapsko", "Godrej"],
  //       ["Newstone", "Jindal City", "TDI","Eldco"],
  //         ["Oneprastha", "SOHO", "Parker","M3M"],
          
  //     ],
  //   },
 


    {


      heading: "KUNDLI (Good for Investment)",
      phone: "9891683399 , 9810327243",
      columns: [
        ["VIBS - Imperial Greens", "TDI", ],
        ["Newstone", "Parker", ],
          ["Royal Green Reality", "Anandam"],
          
      ],
    },
 

      {


      heading: "SONEPAT (Good for Investment)",
      phone: "9891683399 , 9810327243",
      columns: [
        ["Mapsko", "Krishna Artec"],
        ["SOHO", "Oneprastha", ],
          ["Eldeco", "Jindal City"],
          
      ],
    },
  ]

}
,

 

  {
    id: 5,
    title: "DLF / Gurgaon Properties",
    subtitle: "Prime Locations in Gurugram",
   desc: `Anand Aggarwal Properties presents premium residential and commercial real estate options in <strong> DLF Phase I to IV, Sushant Lok, South City, etc across Gurugram’s most premium locations like Golf Course Road, Extension Road & Dwarka Expressway </strong> and strong appreciation potential.

Whether you are seeking a dream home, a commercial establishment, or a long-term investment, our Gurgaon properties are handpicked for reliability, growth, and lifestyle value. With deep market insights and personalized advisory, we help you make confident property decisions in one of India’s fastest-growing real estate markets.`
,

    image: "hero2.webp",
    points: [
      "DLF Phases",
      "Luxury Apartments",
      "Commercial Hubs",
      "Premium Townships",
    ],
    // pamphlet: {
    //   heading: "DLF / GURGAON (Apartment / Plots / Kothi)",
    //   phone: "9810328243",
    //   columns: [
    //     ["DLF Phase I, II, III, IV"," Dwarka Expressway   "],
    //     ["Golf Course Road","Suncity","Golf Course Extension "],
    //     ["Sushant Lok", "South City", "M3M / Vatika / Godrej"],
       
       
    //   ],
    // },
  },



{
  id: 7,
  title: "Farmhouses & Agricultural Land",
  subtitle: "R-Zone Land & Premium Farmhouse Investments",
  desc: `Anand Aggarwal Properties offers carefully curated <strong>farmhouse properties</strong> and <strong>R-Zone agricultural land</strong> across prime locations of Delhi NCR and Gurugram, catering to investors, HNIs, and buyers seeking long-term appreciation or lifestyle-oriented ownership.

Our farmhouse portfolio includes properties located in <strong>approved P1–P2 Zones</strong>, <strong>L-K Zones</strong>, and designated farmhouse belts, offering the flexibility of agricultural use today with strong potential for future development as urban boundaries expand.

We deal in premium farmhouse locations such as <strong>Westend Greens, Brijwasan,  Chattarpur</strong>, <strong>Dera Mandi</strong>, <strong>Vasant Kunj</strong>, <strong>Asola Farms</strong>, <strong>Gurugram</strong>, <strong>Manesar</strong>, <strong>Kundli</strong>, <strong>Sonipat</strong>, <strong>Bahadurgarh</strong>, and <strong>Kharkhoda</strong>, known for their connectivity, green surroundings, and investment value.

With verified land titles, transparent documentation, and expert advisory, we help clients identify the right farmhouse or agricultural land asset aligned with their investment goals, lifestyle preferences, and long-term growth expectations.`,
  image: "services/farmhouse.jpg",
  points: [
    "R-Zone Agricultural Land",
    "Premium Farmhouse Locations",
    "P1–P2 & L-K Zone Land",
    "High Appreciation Potential",
    "Land Banking Opportunities",
  ],
  pamphlet: {
    heading: "FARMHOUSES & AGRICULTURAL LAND (R-Zone / P1–P2)",
    phone: "9891683399 , 9810327243",
    columns: [
      [
        "Chattarpur",
        "Dera Mandi",
        "Vasant Kunj",
        "Asola Farms",
      ],
      [
        "Gurugram",
        "Manesar",
        "Bahadurgarh",
        "Kharkhoda",
      ],
      [
        "Kundli",
        "Sonipat",
        "R Zone P1–P2",
        "L-K Zone",
      ],
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
          className={`cursor-pointer rounded-lg px-4 py-3 transition text-lg ${
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
      <img src={active.image} className="w-full h-92 object-cover" />
    </div>

    <h2 className="mt-7 text-3xl font-bold text-slate-900">
      {active.title}
    </h2>

    <p className="text-[#ed3a20] font-medium mt-1">
      {active.subtitle}
    </p>

 <p
  className="mt-4 text-xl text-black text-justify leading-loose"
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


{(active.pamphlets || active.pamphlet) && (
  <section className="max-w-7xl  mx-auto px-4 py-16 border-t space-y-10">

    {(active.pamphlets ?? [active.pamphlet]).map(
      (pamphlet, pamphletIndex) => (
        <div key={pamphletIndex} className="space-y-10 bg-red-200/30 p-10">

          {/* Header */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 bg-[#ed3a20] text-white rounded-full px-6 py-3 shadow-sm">
            <h3 className="text-lg font-bold tracking-wide text-center md:text-left">
              {pamphlet.heading}
            </h3>
            <p className="text-sm font-semibold">
              Ph.: {pamphlet.phone}
            </p>

       
          </div>
     <p className="font-bold text-xl">{pamphlet.subtitle}</p>
          {/* Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-lg font-bold text-black">
            {pamphlet.columns.map((col, colIndex) => (
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

        </div>
      )
    )}

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


{!["Industrial Properties", "KUNDLI / SONEPAT", "Farmhouses & Agricultural Land", "Commercial & Pre-Leased"].includes(active.title.trim()) && (
  <AmenitiesSection />
)}




{active.id === 1 && <PreRentedInventory />}



    </main>
  );
}
