"use client";

import { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import AmenitiesSection from "@/components/Amenities";
import ContactForm from "@/components/Form"; // 👈 import the form

const services = [
  {
    id: 3,
    title: "Pre-Rented Properties",
    subtitle: "Best and Affordable Pre-Rented Properties",
    desc: `Anand Aggarwal Properties offers a curated selection of pre-leased commercial assets located in major business hubs across Delhi NCR — including North, South, East, West & Central Delhi, Gurugram, Manesar, Noida, Vasundhara, Vaishali, Indirapuram and Greater Noida.

Our inventory includes fully leased Banks, ATMs, Government institutions, MNC offices, popular food chains, multiplexes, retail outlets, hospitals, schools, guest houses and entire commercial buildings — delivering an attractive 5–10% assured annual rental return.

Pre-rented commercial properties are a preferred choice for investors seeking stable, low-risk and immediate income. With tenants already occupied on long-term leases, there is no leasing uncertainty and investors can enjoy consistent rental cash flows from the first day of ownership.

These assets also provide high demand, liquidity, and long-term capital appreciation, being located in well-established commercial destinations with strong footfall and minimal vacancy risks.

At Anand Aggarwal Properties, we maintain complete transparency and a professional consultation process — offering verified property details, tenant history and clear lease agreements, ensuring your investment aligns with your financial objectives.

Explore our trusted pre-leased commercial opportunities in Delhi & Gurugram and make a secure, smart and hassle-free investment — for wealth that grows steadily with time.
`,
    image: "/services/3.jpeg",
    points: [
      "Pre-Leased to Reliable National/MNC Brands",
      "7% – 10% Assured Annual Rental Yield",
      "Immediate Monthly Income from Day-1",
      "Zero Vacancy Risk for Investors",
      "Verified & Transparent Lease Agreements",
      "Perfect for NRIs & First-time Investors",
      "Stable Long-term Tenant Contracts",
    ],
  },
  {
    id: 1,
    title: "Residential Properties",
    subtitle: "Premium Housing & Lifestyle Residences",
    desc: `Anand Aggarwal Properties offers the most exclusive residential choices across the prime neighborhoods of North and West Delhi, including Pushpanjali Enclave, Saraswati Vihar, Deepali, Tarun Enclave, Sharda Niketan, Harsh Vihar, and Lok Vihar. For buyers seeking homes in Gurugram, we present exceptional residences across leading localities such as Sushant Lok Phases I–III, DLF Phases I–III, South City 1 & 2, Dwarka Expressway, Golf Course Extension, and all major HUDA sectors.
Our portfolio features an extensive selection of plots, bungalows, builder floors, apartments, villas, and penthouses—many situated within secure, well-planned gated communities.

We proudly serve a wide spectrum of clients, from first-time homebuyers and growing families to HNIs and international residents, providing living spaces tailored to their lifestyle, preferences, and budget. Whether your goal is a luxury residence or a value-driven home, each property is carefully handpicked to offer comfort, functionality, and long-term value.
With decades of expertise and a strong foundation of trust, transparency, and market understanding, Anand Aggarwal Properties ensures a smooth and reliable home-buying journey. Our deep knowledge of these high-demand locations allows us to guide you effortlessly toward the ideal property that aligns with your aspirations.

Choose Anand Aggarwal Properties to find a home that offers more than just an address—experience a lifestyle in the heart of Delhi and Gurugram. Let us help you transform your dream of owning the perfect home into a reality.`,
    image: "/services/1.avif",
    points: [
      "High-rise Apartments & Sky Residences",
      "Independent Floors & Builder Floors",
      "Ultra-luxury Penthouses & Duplexes",
      "Gated Communities with Clubhouses",
      "Loan & Legal Assistance with RERA Compliance",
      "Best Price Negotiation with Builders",
    ],
  },
  {
    id: 2,
    title: "Commercial Real Estate",
    subtitle: "Business-driven Spaces for Brands & Corporates",
    desc: `Anand Aggarwal Properties brings decades of expertise in delivering high-quality commercial real estate solutions across Delhi and Gurugram. Since 1985, our commitment to transparency, professionalism, and long-term value has enabled us to serve business owners, investors, corporates, and retail brands seeking strategic, growth-driven commercial spaces.

Our portfolio includes an extensive range of commercial properties located in some of the most prominent business districts of Delhi—Rohini, Pitampura, Netaji Subhash Place (NSP), Ashok Vihar, Shalimar Bagh, Punjabi Bagh, Paschim Vihar, Karol Bagh, Kamla Nagar, and Connaught Place. In Gurugram, we offer premium commercial options in key business hubs such as Cyber City, MG Road, Golf Course Road, Golf Course Extension, Udyog Vihar, Sohna Road, and the rapidly growing Dwarka Expressway belt.

Whether you're looking for office spaces, retail showrooms, pre-leased investments, food & beverage outlets, co-working setups, or high-footfall commercial units, our curated listings ensure you find a property that aligns perfectly with your business strategy and financial goals. These prime commercial spaces offer excellent connectivity, strong catchment areas, modern infrastructure, and high appreciation potential.

Let us help you secure a commercial property that strengthens your brand presence and maximizes your investment returns. With Anand Aggarwal Properties, you gain access to expert market insights, verified listings, and a smooth, dependable transaction experience—making us a trusted partner for all your commercial real estate needs.`,
    image: "/services/2.jpg",
    points: [
      "Grade-A Corporate Offices",
      "Retail Showrooms in Prime Markets",
      "Hypermarket Anchors & Food Courts",
      "Lease Structuring & Commercial Due Diligence",
      "High Footfall Business Districts",
      "Rental Income Guidance & Market Projections",
    ],
  },
  {
    id: 4,
    title: "Plots & Real Estate Land",
    subtitle: "Real Estate That Grows with the City",
    desc: `Anand Aggarwal Properties is recognized as a trusted leader in the real estate sector, offering some of the finest plot options across prime locations in Delhi and Gurugram. With decades of industry experience, we have built a strong reputation for delivering reliable, high-quality property solutions—helping clients find the ideal plots for residential, commercial, and long-term investment needs.

As authorized channel partners for renowned developers including DLF, UNITECH, ANSAL, VATIKA, OMAXE, PARSVNATH, MAPSKO, AARCITY, VARDHMAN, ABW, TDI, SUNCITY, IREO, M3M, Unity Group, V3S, Signature Global, TARC, Godrej, Sawasdee, Eldeco, PP Group, and RAHEJA, we offer exclusive access to premium and highly demanded land parcels.
Our strong association with these reputed builders ensures that clients benefit from fair pricing, transparent processes, and legally sound properties.

Whether it’s the well-established neighborhoods of Delhi—such as Pushpanjali Enclave, Saraswati Vihar, Tarun Enclave, Deepali, Sharda Niketan, and Rohini—or the rapidly growing sectors of Gurugram including Sushant Lok, DLF Phases I–III, South City 1 & 2, Dwarka Expressway, Golf Course Extension, and key HUDA sectors, we curate plots in locations that promise exceptional connectivity and high future appreciation.

Whether your goal is to build a dream residence or make a secure investment with strong growth potential, Anand Aggarwal Properties is committed to guiding you through every step with expertise, clarity, and complete confidence.`,
    image: "/services/4.avif",
    points: [
      "Residential Plots in Prime Localities",
      "Kothi Plots & Corner Land Parcels",
      "Industrial & Warehousing Land",
      "Legal & Title Verified Properties",
      "Ideal for Long-Term Appreciation",
      "Future-ready Development Zones",
    ],
  },
  {
    id: 5,
    title: "Agricultural Land/ Farmhouses",
    subtitle: "Premium Agricultural & Farmhouse Land",
    desc: `Looking to invest in agricultural land or farmhouse plots? At Anand Aggarwal Properties, we offer exclusive opportunities in premium R-Zone locations along with thoughtfully selected farmhouse properties across Delhi and Gurugram.
Anand Aggarwal Properties deals in Agricultural Land in R-Zone and offer farmhouses in P1, P2 Zone, L Zone, Chattarpur, Dera Mandi, Vasant Kunj, Asola farms, Gurugram, Manesar, Kundli, Sonipat, Bahadurgarh and Kharkhoda.

R-Zone agricultural lands fall under zones earmarked for potential future residential or mixed-use development as per urban planning regulations. These plots are ideal for investors seeking long-term appreciation—allowing you to use the land for agriculture today while benefiting from significant value growth as city boundaries expand.

We also specialize in premium farmhouse land in some of the most popular and serene destinations, including P1/P2 Zone, L Zone, Chattarpur, Dera Mandi, Vasant Kunj, Asola Farms, and prime locations across Gurugram, Manesar, Kundli, Sonipat, Bahadurgarh, and Kharkhoda.`,
    image: "/services/5.avif",
    points: [
      "High Appreciation Potential in Expanding Corridors",
      "Flexible Agricultural + Future Development Use",
      "Tax-efficient Long-term Investment Option",
      "Strategic Locations Near Urban Growth Zones",
    ],
  },
];

export default function ServicesPage() {
  const [active, setActive] = useState(services[0]);
  const [isFormOpen, setIsFormOpen] = useState(false); // 👈 modal state

  return (
    <main className="bg-white">
      {/* Banner */}
      <section className="relative h-[300px] sm:h-[380px] bg-black">
        <img
          src="/bannerbg.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl sm:text-5xl font-bold">Our Services</h1>
          <p className="mt-3 text-sm sm:text-lg max-w-2xl">
            Expert guidance for secure, profitable & hassle-free property investments in Delhi-NCR.
          </p>
        </div>
      </section>

      {/* Main Services + Tabs */}
      <section className="max-w-7xl mx-auto px-4 py-7 md:py-16 grid lg:grid-cols-3 gap-10">
        {/* Left Sidebar */}
        <aside className="rounded-2xl p-6">
          <h3 className="text-xl font-bold text-red-600 mb-6 text-center">
            Our Expertise
          </h3>
          <ul className="space-y-3">
            {services.map((s) => (
              <li
                key={s.id}
                onClick={() => setActive(s)}
                className={`cursor-pointer rounded-xl px-4 py-3 text-sm sm:text-base transition ${
                  active.id === s.id
                    ? "bg-[#ed3a20] text-white font-semibold"
                    : "bg-slate-50 hover:bg-[#ed3a20]/10"
                }`}
              >
                {s.title}
              </li>
            ))}
          </ul>
        </aside>

        {/* Right Details Panel */}
        <div className="lg:col-span-2">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img src={active.image} className="w-full md:h-80 object-cover" />
          </div>

          <h2 className="mt-8 text-3xl font-bold text-slate-900">
            {active.title}
          </h2>
          <p className="mt-1 text-[#ed3a20] font-medium">
            {active.subtitle}
          </p>
          <p className="mt-4 text-black leading-relaxed text-[16px] whitespace-pre-line">
            {active.desc}
          </p>

          {/* Feature list */}
          <ul className="mt-6 space-y-3">
            {active.points.map((p, i) => (
              <li
                key={i}
                className="flex gap-3 items-start text-black text-sm sm:text-base"
              >
                <CheckCircle className="text-[#ed3a20] h-5 w-5 mt-[2px]" />
                {p}
              </li>
            ))}
          </ul>

          {/* CTA opens modal form */}
          <button
            type="button"
            onClick={() => setIsFormOpen(true)}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ed3a20] px-7 py-3 text-white font-medium text-sm shadow-md hover:bg-red-700 transition"
          >
            Discuss Your Requirements <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Contact Form Modal – appears after our expertise tabs */}
      <ContactForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />

      {/* Amenities after services & form */}
      <AmenitiesSection />
    </main>
  );
}
