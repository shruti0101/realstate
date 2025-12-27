"use client";
import PropertyCarousel from "@/components/Carousel";

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
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 ">
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

      {/* Services Snapshot */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            What We Help You With
          </h2>
        </div>

     <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {[
    {
      title: "Residential Properties",
      desc: "Apartments, builder floors, and plotted developments selected for livability, connectivity, and long-term value appreciation."
    },
    {
      title: "Industrial Properties",
      desc: "Warehouses, factories, and industrial plots in approved zones with excellent logistics access and clear compliances."
    },
    {
      title: "Commercial & Pre-leased",
      desc: "Office spaces, retail units, and pre-leased assets offering stable rental income and strong investment security."
    },
    {
      title: "Kundli / Sonepat",
      desc: "High-growth residential and commercial opportunities along NH-44 and KMP corridor with future-ready infrastructure."
    },
    {
      title: "DLF / Gurgaon Properties",
      desc: "Premium properties across DLF phases, Golf Course Road, and prime Gurgaon sectors known for lifestyle and returns."
    },
    {
      title: "Farmhouses",
      desc: "Exclusive farmhouse properties for luxury living, weekend retreats, and long-term land investment potential."
    }
  ].map((item) => (
    <div
      key={item.title}
      className="group rounded-3xl border border-slate-200 bg-white px-5 py-6 shadow-sm transition hover:-translate-y-1 hover:border-[#ED3A20] hover:shadow-lg"
    >
      <h3 className="text-sm sm:text-lg font-semibold text-[#ED3A20]">
        {item.title}
      </h3>

      <p className="mt-3 text-xs sm:text-sm text-black leading-relaxed">
        {item.desc}
      </p>

      <div className="mt-4 h-0.5 w-10 bg-[#ED3A20]/70 group-hover:w-16 group-hover:bg-[#ED3A20] transition-all" />
    </div>
  ))}
</div>


<div className="mt-6 ">We have the expertise and experience in offering premium property deals in some of the most sought-after and posh localities of Delhi. Buyers can count on us in including <strong>Pushpanjali Enclave, Saraswati Vihar, Deepali, Tarun Enclave, Sharda Niketan, Harsh Vihar, Lok Vihar, Kapil Vihar, Kohat Enclave, and all blocks of Pitampura. We also cater to high-demand areas such as Shalimar Bagh, Punjabi Bagh, and Paschim Vihar. </strong> 

<p className="mt-6">
For those looking beyond Delhi, we extend our services to <strong>
  Gurugram, providing excellent deals in prestigious localities like Sushant Lok Phase I to III, DLF Phase I to III, and all HUDA sectors.
  </strong> 
</p>

<p className="mt-6">
Whether you’re interested in plots or flats, our comprehensive portfolio ensures you find your ideal property. As authorized agents for renowned developers such as , <strong> UNITECH, ANSAL, VATIKA, OMAXE, PARSVNATH, MAPSKO, AARCITY, VARDHMAN, ABW, TDI, SUNCITY, IREO, M3M, Unity Group, V3S, Signature Global, TARC, Godrej, Sawasdee, Eldeco, PP Group and and RAHEJA,</strong> we offer exclusive access to some of the best residential and commercial properties in the market. At Naresh Aggarwal Properties, we prioritize understanding your requirements and delivering unmatched real estate solutions. With us, you can be assured of reliable guidance, fair dealings, and properties that match your aspirations. Let us help you find your dream property in Delhi or Gurugram.
</p>
</div>
      </section>

    



    
      {/* Stats Strip */}
      <section
        className="relative bg-center bg-cover bg-fixed py-10 sm:py-18"
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
                <p className="mt-2 text-[11px] sm:text-lg uppercase tracking-[0.16em] text-white/90">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-14 sm:py-16 text-center">
        <h3 className="text-xl px-3 sm:text-2xl font-semibold">
          Discuss a requirement or evaluate a project?
        </h3>
        <p className="mt-3 text-sm sm:text-base text-black max-w-xl mx-auto">
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
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#ED3A20]">
              Our Approach
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
             Our Property Advisory Process
            </h2>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#ED3A20] bg-white px-5 py-5">
              <h3 className="text-sm font-semibold text-slate-900">
                Requirement mapping
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-black">
                We invest time to understand budget, timelines, risk appetite,
                end-use vs. investment and location preferences.
              </p>
            </div>
            <div className="rounded-2xl border border-[#ED3A20] bg-white px-5 py-5">
              <h3 className="text-sm font-semibold text-slate-900">
                Shortlisting & analysis
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-black">
                Projects are compared on approvals, delivery track record,
                pricing, rental potential and infrastructure outlook.
              </p>
            </div>
            <div className="rounded-2xl border border-[#ED3A20] bg-white px-5 py-5">
              <h3 className="text-sm font-semibold text-slate-900">
                Negotiation & closure
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-black">
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
