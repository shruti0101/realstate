"use client";

import {
  Building2,
  Home,
  Landmark,
  Briefcase,
  MapPin,
  FileCheck2,
  Wallet,
  ClipboardList,
  TrendingUp,
} from "lucide-react";

const marqueeServices = [
  { label: "Residential Properties", icon: Home },
  { label: "Commercial Real Estate", icon: Briefcase },
  { label: "Pre-rented Commercial Assets", icon: Wallet },
  { label: "Plots & Land", icon: MapPin },
  { label: "Agricultural Land / Farmhouses", icon: Landmark },
  { label: "NRI Investment Services", icon: FileCheck2 },
  { label: "Home Loan Assistance", icon: Building2 },
  { label: "Legal & Documentation Support", icon: ClipboardList },
  { label: "Property Valuation & Advisory", icon: TrendingUp },
];

export default function ServicesMarquee() {
  const items = [...marqueeServices, ...marqueeServices];

  return (
    <div className="relative w-full overflow-hidden bg-[#ed3a20] py-4 shadow-lg shadow-red-900/40">
      <div className="absolute inset-x-0 top-0 h-1 bg-white/30 blur-sm"></div>

      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#ed3a20] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#ed3a20] to-transparent z-10"></div>

      <div className="marquee-track flex gap-8 whitespace-nowrap">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <span
              key={i}
              className="inline-flex items-center gap-2 bg-white text-[#ed3a20] px-5 py-2 rounded-full font-semibold text-sm sm:text-base shadow-[0_4px_12px_rgba(255,255,255,0.2)] border border-white/50 backdrop-blur-md hover:scale-110 hover:shadow-[0_6px_18px_rgba(255,255,255,0.4)] transition-all duration-300"
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </span>
          );
        })}
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 28s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
