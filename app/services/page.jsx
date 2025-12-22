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

    desc: `Anand Aggarwal Properties offers the most exclusive residential choices across the prime neighborhoods of North and West Delhi, including Pushpanjali Enclave, Saraswati Vihar, Deepali, Tarun Enclave, Sharda Niketan, Harsh Vihar, and Lok Vihar. For buyers seeking homes in Gurugram, we present exceptional residences across leading localities such as Sushant Lok Phases I–III, DLF Phases I–III, South City 1 & 2, Dwarka Expressway, Golf Course Extension, and all major HUDA sectors. Our portfolio features an extensive selection of plots, bungalows, builder floors, apartments, villas, and penthouses—many situated within secure, well-planned gated communities. We proudly serve a wide spectrum of clients, from first-time homebuyers and growing families to HNIs and international residents, providing living spaces tailored to their lifestyle, preferences, and budget. 
    
    Whether your goal is a luxury residence or a value-driven home, each property is carefully handpicked to offer comfort, functionality, and long-term value. With decades of expertise and a strong foundation of trust, transparency, and market understanding, Anand Aggarwal Properties ensures a smooth and reliable home-buying journey. Our deep knowledge of these high-demand locations allows us to guide you effortlessly toward the ideal property that aligns with your aspirations. Choose Anand Aggarwal Properties to find a home that offers more than just an address—experience a lifestyle in the heart of Delhi and Gurugram. Let us help you transform your dream of owning the perfect home into a reality.`,

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
    desc: `Anand Aggarwal Properties brings decades of expertise in delivering high-quality commercial real estate solutions across Delhi and Gurugram. Since 1985, our commitment to transparency, professionalism, and long-term value has enabled us to serve business owners, investors, corporates, and retail brands seeking strategic, growth-driven commercial spaces. Our portfolio includes an extensive range of commercial properties located in some of the most prominent business districts of Delhi—Rohini, Pitampura, Netaji Subhash Place (NSP), Ashok Vihar, Shalimar Bagh, Punjabi Bagh, Paschim Vihar, Karol Bagh, Kamla Nagar, and Connaught Place. In Gurugram, we offer premium commercial options in key business hubs such as Cyber City, MG Road, Golf Course Road, Golf Course Extension, Udyog Vihar, Sohna Road, and the rapidly growing Dwarka Expressway belt. Whether you're looking for office spaces, retail showrooms, pre-leased investments, food & beverage outlets, co-working setups, or high-footfall commercial units, our curated listings ensure you find a property that aligns perfectly with your business strategy and financial goals. These prime commercial spaces offer excellent connectivity, strong catchment areas, modern infrastructure, and high appreciation potential. Let us help you secure a commercial property that strengthens your brand presence and maximizes your investment returns. With Anand Aggarwal Properties, you gain access to expert market insights, verified listings, and a smooth, dependable transaction experience—making us a trusted partner for all your commercial real estate needs.`,
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
   desc: `Anand Aggarwal Properties deals in a wide range of industrial properties across approved industrial zones of Delhi and NCR. Our portfolio includes industrial plots, factory buildings, warehouses, and CLU land suitable for manufacturing, storage, logistics, and allied commercial activities.

We offer industrial properties in well-established and strategically located industrial areas such as Mangolpuri, Udyog Nagar, Narela, Bawana, Kundli, Rai, Barhi, Bahadurgarh, Kharkhoda, Udyog Vihar, Manesar, and Lawrence Road—ensuring excellent connectivity, transportation access, and operational convenience.

All properties are thoroughly verified with clear titles and regulatory compliance, making them ideal for business owners, investors, and enterprises seeking long-term stability and growth in industrial infrastructure.`,

    image: "/services/3.webp",
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
    desc: `Anand Aggarwal Properties offers a curated selection of pre-leased commercial assets located in major business hubs across Delhi NCR — including North, South, East, West & Central Delhi, Gurugram, Manesar, Noida, Vasundhara, Vaishali, Indirapuram and Greater Noida. Our inventory includes fully leased Banks, ATMs, Government institutions, MNC offices, popular food chains, multiplexes, retail outlets, hospitals, schools, guest houses and entire commercial buildings — delivering an attractive 5–10% assured annual rental return. Pre-rented commercial properties are a preferred choice for investors seeking stable, low-risk and immediate income. With tenants already occupied on long-term leases, there is no leasing uncertainty and investors can enjoy consistent rental cash flows from the first day of ownership. These assets also provide high demand, liquidity, and long-term capital appreciation, being located in well-established commercial destinations with strong footfall and minimal vacancy risks. At Anand Aggarwal Properties, we maintain complete transparency and a professional consultation process — offering verified property details, tenant history and clear lease agreements, ensuring your investment aligns with your financial objectives. Explore our trusted pre-leased commercial opportunities in Delhi & Gurugram and make a secure, smart and hassle-free investment — for wealth that grows steadily with time.`,
    image: "/services/4.avif",
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
   desc: `Anand Aggarwal Properties offers a curated selection of residential and commercial properties across the most premium and high-demand locations of Gurugram. Our Gurgaon portfolio includes luxury apartments, builder floors, villas, plotted developments, office spaces, and commercial properties in well-planned townships and business districts.

We deal in prime areas such as DLF Phases I–IV, Aralias, Magnolias, Crest, Sushant Lok, South City, and leading developments by M3M, Vatika, and Godrej—known for superior infrastructure, excellent connectivity, and strong appreciation potential.

Whether you are looking for a dream home, a commercial space, or a secure investment opportunity, our Gurgaon properties are carefully selected to offer long-term value, reliability, and growth.`,

    image: "/services/5.webp",
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
