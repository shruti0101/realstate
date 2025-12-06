// components/AmenitiesSection.tsx
"use client";

import {
  School,
  Dumbbell,
  Trees,
  Store,
  Bus,
  Hospital,
  ShieldCheck,
  Landmark,
} from "lucide-react";

const amenities = [
  { label: "School", icon: School },
  { label: "Gym", icon: Dumbbell },
  { label: "Parks", icon: Trees },
  { label: "Market", icon: Store },
  { label: "Bus Stop", icon: Bus },
  { label: "Hospital", icon: Hospital },
  { label: "Police Station", icon: ShieldCheck },
  { label: "Temple", icon: Landmark },
];

export default function AmenitiesSection() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 pb-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ed3a20]">
            Amenities
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
            Indulge in diverse world-class amenities.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            From everyday convenience to lifestyle comforts, the neighbourhood
            is thoughtfully planned to keep everything within easy reach.
          </p>
        </div>

        {/* Amenity Grid */}
        <div className="mt-4 grid gap-x-7 gap-y-5 sm:grid-cols-3 md:grid-cols-4">
          {amenities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex flex-col items-center text-center"
              >
                <div className="relative">
                  {/* glow */}
                  <div className="absolute inset-0 rounded-full bg-[#ed3a20]/25 blur-xl" />
                  {/* main circle */}
                  <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-[#BB0000] text-white shadow-lg shadow-black/20 ring-1 ring-white/10 transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl hover:ring-[#BB0000]/70">
                    <Icon className="h-10 w-10 sm:h-11 sm:w-11 stroke-[1.6]" />
                  </div>
                </div>
                <p className="mt-3 text-sm sm:text-base font-medium text-slate-900">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
