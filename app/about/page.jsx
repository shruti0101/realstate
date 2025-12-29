"use client";
import PropertyCarousel from "@/components/Carousel";
import  { motion } from "framer-motion";
import { ShieldCheck, CheckCircle, TrendingUp, Handshake } from "lucide-react";





export default function AboutPage() {




  
  return (
    <main className="bg-white text-slate-900">
      {/* Top Banner */}
      <section className="relative h-[240px] sm:h-[300px] lg:h-[360px] w-full overflow-hidden">
        <img
          src="/bannerbg.webp"
          alt="About Anand Aggarwal Properties"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-white">
              Anand Aggarwal Properties
            </h1>
            <p className="mt-3 text-sm sm:text-base text-white/85">
              Independent real estate advisory focused on secure, transparent
              and data-backed property decisions in Delhi–NCR.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="border-b border-slate-100">
        <div className="mx-auto  py-12 w-full  px-4 sm:px-6 lg:px-22 ">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#ED3A20]">
                Company Overview
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
                Real estate decisions backed by experience and due diligence.
              </h2>
              <p className="mt-4 text-sm sm:text-[18px] leading-relaxed text-black">
                At Anand Aggarwal Properties, we’re not just real estate
                consultants—we’re builders of enduring legacies. Driven by a
                passion for excellence and a dedication to superior quality, we
                turn aspirations into reality Established in 1985 on the values
                of integrity, reliability, and exceptional service. Today, we
                proudly stand as a trusted name in the industry.
              </p>
              <p className="mt-3 text-sm sm:text-[18px] leading-relaxed text-black">
                We work across residential and commercial segments—apartments,
                independent floors, plots, pre-leased assets and select
                commercial projects—helping clients evaluate risk, returns,
                legal clarity and long-term suitability before committing
                capital.
              </p>

          
            </div>

            {/* Right: Property Carousel */}
            <div className="relative">
              <PropertyCarousel />
            </div>
          </div>
        </div>
      </section>

{/* ================= SERVICES & COVERAGE SECTION ================= */}
<section className="mx-auto relative w-full  py-10 px-4 sm:px-6 lg:px-20 py-6 ">
  <div className="absolute inset-0 bg-linear-to-r from-[#ed3a20]/5 to-transparent"></div>
  {/* ---------- Heading ---------- */}
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl mb-5 sm:text-4xl font-semibold tracking-tight text-black">
      What We Help You With
    </h2>

  </div>

  {/* ---------- Services Grid ---------- */}
  <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {[
      {
        title: "Residential Properties",
        desc: "Apartments, builder floors, and plotted developments chosen for superior livability, connectivity, and long-term appreciation."
      },
      {
        title: "Industrial Properties",
        desc: "Warehouses, factories, and industrial plots in approved zones with clear compliances and excellent logistics access."
      },
      {
        title: "Commercial & Pre-leased",
        desc: "Office spaces, retail units, and pre-leased assets offering stable rental yields and investment security."
      },
      {
        title: "Kundli / Sonepat",
        desc: "High-growth residential and commercial options along NH-44 and the KMP corridor with future-ready infrastructure."
      },
      {
        title: "DLF / Gurgaon Properties",
        desc: "Premium developments across DLF phases, Golf Course Road, and prime Gurgaon sectors."
      },
      {
        title: "Farmhouses",
        desc: "Exclusive farmhouse properties ideal for luxury living, weekend retreats, and long-term land investments."
      }
    ].map((item) => (
      <div
        key={item.title}
        className="group rounded-3xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-[#ED3A20] hover:shadow-lg"
      >
        <h3 className="text-xl font-semibold text-[#ED3A20]">
          {item.title}
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-black">
          {item.desc}
        </p>

        <div className="mt-6 h-[2px] w-10 bg-[#ED3A20]/60 transition-all group-hover:w-16 group-hover:bg-[#ED3A20]" />
      </div>
    ))}
  </div>

  {/* ---------- Coverage Section ---------- */}
  <div className="mt-10 grid gap-14 lg:grid-cols-2 items-start">

    {/* Left Content */}
    <div>
      <h3 className="text-3xl font-bold text-black">
        Strong Presence in Prime Locations
      </h3>

      <p className="mt-4 text-lg leading-8 text-black">
        We bring deep expertise in offering premium property deals across some of
        the most prestigious residential and commercial localities of Delhi.
        Buyers trust us for opportunities in
        <span className="font-semibold text-black">
          {" "}Pushpanjali Enclave, Saraswati Vihar, Deepali, Tarun Enclave,
          Sharda Niketan, Harsh Vihar, Lok Vihar, Kapil Vihar, Kohat Enclave,
          and all blocks of Pitampura
        </span>.
      </p>

      <p className="mt-5 text-lg leading-8 text-black">
        We also actively serve high-demand neighborhoods such as
        <span className="font-semibold text-black">
          {" "}Shalimar Bagh, Punjabi Bagh, and Paschim Vihar
        </span>,
        ensuring access to the city’s most established and value-driven markets.
      </p>
    </div>

    {/* Right Content */}
    <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
      <h4 className="text-xl font-semibold text-gray-900">
        Beyond Delhi — Gurugram Focus
      </h4>

      <p className="mt-5 text-base leading-8 text-gray-700">
        For clients exploring opportunities beyond Delhi, we offer specialized
        advisory in
        <span className="font-semibold text-gray-900"> Gurugram</span>,
        covering elite residential and commercial hubs such as
        <span className="font-semibold text-gray-900">
          {" "}Sushant Lok Phase I to III, DLF Phase I to III,
          and all HUDA sectors
        </span>.
      </p>

      <p className="mt-5 text-base leading-8 text-gray-700">
        These micro-markets are known for strong infrastructure, corporate
        presence, lifestyle appeal, and long-term appreciation potential.
      </p>
    </div>

  </div>

  {/* ---------- Developers / Authority ---------- */}
  <div 
 
  

  
  
  className="mt-6  bg-red-900 px-8 py-12 text-center">
    <h3 className="text-2xl md:text-3xl font-semibold text-white">
      Authorized Channel Partners
    </h3>

    <p className="mt-6 mb-3 max-w-5xl mx-auto text-xl leading-8 text-white">
      Whether you are investing in plots, flats, or commercial assets, our
      portfolio ensures the right opportunity for every requirement. We are
      authorized agents for leading developers including
      <span className="font-bold text-black bg-white  ">
        <br></br>
        {" "}Unitech, Ansal, Vatika, Omaxe, Parsvnath, Mapsko, AAR City,
        Vardhman, ABW, TDI, Suncity, IREO, M3M, Unity Group, V3S,
        Signature Global, TARC, Godrej, Sawasdee, Eldeco,
        PP Group, and Raheja
      </span>.
    </p>

      <p className="text-xl leading-8 text-white">
      At <span className="">Naresh Aggarwal Properties</span>,
      we believe in understanding your goals before recommending solutions.
      With transparent dealings, reliable guidance, and decades of market
      insight, we help you secure properties that align perfectly with your
      aspirations in Delhi and Gurugram.
    </p>
  </div>



</section>


     
      {/* Stats Strip */}
      <section
        className="relative bg-center bg-cover bg-fixed py-10 sm:py-22"
        style={{ backgroundImage: "url(/countimg.jpg)" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3 text-center text-white">
            {[
              { label: "Years of active presence", value: "40+" },
              { label: "Satisfied clients", value: "100%" },
              { label: "Repeat & referral clients", value: "70%+" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-5xl font-bold">{stat.value}</p>
                <p className="mt-2 text-[11px] sm:text-lg uppercase tracking-[0.16em] text-white">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}

      
      <section className="py-14  sm:py-16 text-center">

        
        <h3 className="text-xl px-3 sm:text-3xl font-semibold">
          Discuss a requirement or evaluate a project?
        </h3>
        <p className="mt-3 text-sm sm:text-lg text-black max-w-xl mx-auto">
          Share a few details with us and our team will connect with a
          structured, no-obligation discussion on suitable options.
        </p>
        <a
          href="tel:+919810759498"
          className="mt-6 inline-flex items-center rounded-full bg-[#ED3A20] px-9 py-3 text-sm sm:text-base font-semibold text-white shadow-md hover:bg-[#c73019] transition"
        >
          Schedule a Call
        </a>
      </section>

    




        {/* Our Approach */}
      <section
        style={{ backgroundImage: "url(/sketch1.webp)" }}
        className="bg-center bg-fixed bg-contain"
      >
        <div className="mx-auto  py-12 w-full  px-4 sm:px-6 lg:px-20 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.3em] text-[#ED3A20]">
              Our Approach
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
             Our Property Advisory Process
            </h2>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#ED3A20] bg-white px-5 py-5">
              <h3 className="text-xl font-semibold text-slate-900">
                Requirement mapping
              </h3>
              <p className="mt-2 text-xs sm:text-lg text-black">
                We invest time to understand budget, timelines, risk appetite,
                end-use vs. investment and location preferences.
              </p>
            </div>
            <div className="rounded-2xl border border-[#ED3A20] bg-white px-5 py-5">
              <h3 className="text-xl font-semibold text-slate-900">
                Shortlisting & analysis
              </h3>
              <p className="mt-2 text-xs sm:text-lg text-black">
                Projects are compared on approvals, delivery track record,
                pricing, rental potential and infrastructure outlook.
              </p>
            </div>
            <div className="rounded-2xl border border-[#ED3A20] bg-white px-5 py-5">
              <h3 className="text-xl font-semibold text-slate-900">
                Negotiation & closure
              </h3>
              <p className="mt-2 text-xs sm:text-lg text-black">
                We support with negotiations, documentation, coordination with
                developers and post-booking formalities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
