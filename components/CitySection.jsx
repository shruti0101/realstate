import Link from "next/link";
import React from "react";

const CitySection = () => {
  const cites = [
    {
      id: 1,
      label: "Pushpanjali Enclave",
      href: "/pre-leased-properties-in-pushpanjali-enclave",
    },
    {
      id: 2,
      label: "Deepali / Tarun Enclave",
      href: "/pre-leased-properties-in-deepali-tarun-enclave",
    },
    {
      id: 3,
      label: "Lotus / West Enclave",
      href: "/pre-leased-properties-in-lotus-west-enclave",
    },
    {
      id: 4,
      label: "Saraswati Vihar",
      href: "/pre-leased-properties-in-saraswati-vihar",
    },
    {
      id: 5,
      label: "Suvidha Kunj",
      href: "/pre-leased-properties-in-suvidha-kunj",
    },
    {
      id: 6,
      label: "Lok Vihar / Harsh Vihar",
      href: "/pre-leased-properties-in-lok-vihar-harsh-vihar",
    },
    {
      id: 7,
      label: "Vaishali Enclave",
      href: "/pre-leased-properties-in-vaishali-enclave",
    },
    {
      id: 8,
      label: "Sharda Niketan",
      href: "/pre-leased-properties-in-sharda-niketan",
    },
    {
      id: 9,
      label: "Rajdhani / M.P. Enclave",
      href: "/pre-leased-properties-in-rajdhani-m.p-enclave",
    },
    {
      id: 10,
      label: "Rohini (All Sectors)",
      href: "/pre-leased-properties-in-rohini",
    },
    {
      id: 11,
      label: "Pitampura (All Blocks)",
      href: "/pre-leased-properties-in-pitampura",
    },
    {
      id: 12,
      label: "PunjabiBagh",
      href: "/pre-leased-properties-in-punjabi-bagh",
    },
    {
      id: 13,
      label: "Connaught Place (CP)",
      href: "/pre-leased-properties-in-connaught-place",
    },
    {
      id: 14,
      label: "Nehru Place",
      href: "/pre-leased-properties-in-nehru-place",
    },
    {
      id: 15,
      label: "Rajouri Garden",
      href: "/pre-leased-properties-in-rajouri-garden",
    },
    { id: 16, label: "Saket", href: "/pre-leased-properties-in-saket" },
    {
      id: 17,
      label: "Dwarka (Central Areas)",
      href: "/pre-leased-properties-in-dwarka",
    },
    {
      id: 18,
      label: "Lajpat Nagar",
      href: "/pre-leased-properties-in-lajpat-nagar",
    },
    {
      id: 19,
      label: "Karol Bagh",
      href: "/pre-leased-properties-in-karol-bagh",
    },
    {
      id: 21,
      label: "Okhla Phase I",
      href: "/pre-leased-properties-in-okhla-phase-1",
    },
    {
      id: 22,
      label: "Okhla Phase II",
      href: "/pre-leased-properties-in-okhla-phase-2",
    },
    {
      id: 23,
      label: "Okhla Phase III",
      href: "/pre-leased-properties-in-okhla-phase-3",
    },
    {
      id: 24,
      label: "Chanakyapuri",
      href: "/pre-leased-properties-in-chanakyapuri",
    },
    {
      id: 25,
      label: "Vasant Kunj",
      href: "/pre-leased-properties-in-vasant-kunj",
    },
    {
      id: 26,
      label: "Shivalik Road",
      href: "/pre-leased-properties-in-shivalik-road",
    },
    { id: 27, label: "Janakpuri", href: "/pre-leased-properties-in-janakpuri" },
    {
      id: 30,
      label: "Nizamuddin",
      href: "/pre-leased-properties-in-nizamuddin",
    },
    { id: 31, label: "Anand Lok", href: "/pre-leased-properties-in-anand-lok" },
    { id: 32, label: "Hauz Khas", href: "/pre-leased-properties-in-hauz-khas" },
    {
      id: 33,
      label: "Cyber City",
      href: "/pre-leased-properties-in-cyber-city",
    },
    {
      id: 34,
      label: "DLF Phase I",
      href: "/pre-leased-properties-in-dlf-phase-1",
    },
    {
      id: 35,
      label: "DLF Phase II",
      href: "/pre-leased-properties-in-dlf-phase-2",
    },
    {
      id: 36,
      label: "DLF Phase III",
      href: "/pre-leased-properties-in-dlf-phase-3",
    },
    {
      id: 37,
      label: "Golf Course Road",
      href: "/pre-leased-properties-in-golf-course-road",
    },
    {
      id: 38,
      label: "Udyog Vihar",
      href: "/pre-leased-properties-in-udyog-vihar",
    },
    {
      id: 39,
      label: "Sohna Road",
      href: "/pre-leased-properties-in-sohna-road",
    },
    { id: 40, label: "MG Road", href: "/pre-leased-properties-in-mg-road" },
    {
      id: 41,
      label: "NH-8 Corridor",
      href: "/pre-leased-properties-in-nh-8-corridor",
    },
    {
      id: 42,
      label: "Golf Course Extension Road",
      href: "/pre-leased-properties-in-golf-course-extension-road",
    },
    {
      id: 43,
      label: "Medanta / IMT Manesar Corridor",
      href: "/pre-leased-properties-in-medanta-imt-manesar-corridor",
    },
    {
      id: 44,
      label: "MG Road Commercial Belt",
      href: "/pre-leased-properties-in-mg-road-commercial-belt",
    },
    {
      id: 45,
      label: "Rajiv Chowk Gurugram",
      href: "/pre-leased-properties-in-rajiv-chowk-gurugram",
    },
    {
      id: 46,
      label: "IFFCO Chowk Area",
      href: "/pre-leased-properties-in-iffco-chowk-area",
    },
    {
      id: 47,
      label: "DLF Cyber Hub",
      href: "/pre-leased-properties-in-dlf-cyber-hub",
    },
    {
      id: 48,
      label: "MG Road Corporate Park",
      href: "/pre-leased-properties-in-mg-road-corporate-park",
    },
    {
      id: 49,
      label: "Sohna Industrial Belt",
      href: "/pre-leased-properties-in-sohna-industrial-belt",
    },
    {
      id: 50,
      label: "Hero Honda Chowk Vicinity",
      href: "/pre-leased-properties-in-hero-honda-chowk-vicinity",
    },
    {
      id: 51,
      label: "Ambience Island / Ambience Mall Area",
      href: "/pre-leased-properties-in-ambience-island-ambience-mall-area",
    },
    {
      id: 52,
      label: "Pre-Leased Properties in Golf Course Road",
      href: "/pre-leased-properties-in-signature-towers-golf-course-road-landmark",
    },
  ];

  return (
    <>
      <section className="py-5 bg-red-100 px-4 md:px-20">
        <h2 className="my-2 text-xl md:text-4xl font-bold text-red-600">
          PRE-LEASED PROPERTIES
        </h2>
        <div className="flex gap-2 px-2 flex-wrap overflow-hidden ">
          {cites.map(({ href, label }, idx) => (
            <Link
              href={href}
              key={idx}
              className="hover:underline hover:scale-105 hover:duration-300 text-black"
            >
              {label}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default CitySection;
