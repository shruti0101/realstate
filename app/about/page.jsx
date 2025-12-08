'use client'
import PropertyCarousel from "@/components/Carousel";

import {
  ShieldCheck,
  CheckCircle,
  TrendingUp,
  Handshake,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* Top Banner */}
      <section className="relative h-[240px] sm:h-[300px] lg:h-[360px] w-full overflow-hidden">
        <img
          src="/bannerbg.jpg"
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
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#ED3A20]">
                Company Overview
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
                Real estate decisions backed by experience and due diligence.
              </h2>
              <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-black">
              At Anand Aggarwal Properties, we’re not just real estate consultants—we’re builders of enduring legacies. Driven by a passion for excellence and a dedication to superior quality, we turn aspirations into reality, one project at a time.

Established in 1985 on the values of integrity, reliability, and exceptional service, our story began with a mission to transform the construction landscape by combining time-honored craftsmanship with contemporary innovation. Today, we proudly stand as a trusted name in the industry.
              </p>
              <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-black">
                We work across residential and commercial segments—apartments,
                independent floors, plots, pre-leased assets and select
                commercial projects—helping clients evaluate risk, returns,
                legal clarity and long-term suitability before committing
                capital.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="text-sm font-semibold text-[#ED3A20]">
                    Advisory-first approach
                  </p>
                  <p className="mt-1 text-xs text-black">
                    Recommendations based on fit and facts, not just inventory.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="text-sm font-semibold text-[#ED3A20]">
                    Long-term relationships
                  </p>
                  <p className="mt-1 text-xs text-black">
                    A large part of our business comes through repeat clients
                    and referrals.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Property Carousel */}
            <div className="relative">
              <PropertyCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section style={{backgroundImage:"url(/sketch1.jpg)"}} className="bg-center bg-fixed bg-contain">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#ED3A20]">
              Our Approach
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
              Clear process. Structured evaluation. No guesswork.
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

      {/* Services Snapshot */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            What We Help You With
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Residential/Floor apartments",
            "Independent floors & builder floors",
            "Plots & kothis in prime sectors",
            "Pre-rented commercial properties",
          ].map((title) => (
            <div
              key={title}
              className="group rounded-3xl border border-slate-200 bg-white px-5 py-6 shadow-sm transition hover:-translate-y-1 hover:border-[#ED3A20] hover:shadow-lg"
            >
              <h3 className="text-sm sm:text-base font-semibold text-[#ED3A20]">
                {title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-black">
                Curated options with clarity on pricing, documentation and
                long-term potential.
              </p>
              <div className="mt-4 h-0.5 w-10 bg-[#ED3A20]/70 group-hover:w-16 group-hover:bg-[#ED3A20] transition-all" />
            </div>
          ))}
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-slate-900 py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-8 sm:grid-cols-3 text-center text-slate-50">
          {[
            { label: "Years of active presence", value: "40+" },
            { label: "Transactions facilitated", value: "300+" },
            { label: "Repeat & referral clients", value: "70%+" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl sm:text-4xl font-semibold">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] sm:text-xs uppercase tracking-[0.16em] text-slate-300">
                {stat.label}
              </p>
            </div>
          ))}
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

      {/* Why Choose Us */}
      <section className="bg-[#fff5f3] border-y border-[#ED3A20]/15 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#ED3A20]">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Trusted. Transparent. Transaction Ready.
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Verified Inventory",
                desc: "Only legally clear & approved properties",
                icon: <ShieldCheck className="h-7 w-7" />,
              },
              {
                title: "Clear Pricing",
                desc: "No hidden charges or mark-ups",
                icon: <CheckCircle className="h-7 w-7" />,
              },
              {
                title: "Profitable Deals",
                desc: "Strong rental and resale potential",
                icon: <TrendingUp className="h-7 w-7" />,
              },
              {
                title: "End-to-End Support",
                desc: "Documentation, loans & handover",
                icon: <Handshake className="h-7 w-7" />,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative rounded-3xl bg-white p-7 shadow-md border border-transparent hover:-translate-y-2 hover:border-[#ED3A20] hover:shadow-2xl transition"
              >
                <div className="text-[#ED3A20] mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-[#ED3A20]/10">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="mt-3 text-sm text-slate-600">{item.desc}</p>

                <div className="absolute bottom-0 left-0 right-0 mx-auto mb-3 h-[2px] w-12 bg-[#ED3A20] opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
