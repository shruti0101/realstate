'use client'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import Link from "next/link";
import ServicesMarquee from "@/components/Marquee";
import axios from "axios";
import { CheckCircle } from "lucide-react";
export default function AboutSection() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [place,setPlace] = useState("")
    const [service, setService] = useState("");
    const [message, setMessage] = useState("");
      const [loading, setLoading] = useState(false);
      const [status, setStatus] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("Sending...");
  setLoading(true);

  try {
    const formData = {
      platform: "Real Estate Website",
      platformEmail: "anand_aggarwal_properties@yahoo.com",
      name,
      phone,
      place,
      email,
      product: service,
      message,
    };

    const { data } = await axios.post(
      "https://brandbnalo.com/api/form/add",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    if (data?.success) {
      setStatus("✅ Message sent successfully!");

      setName("");
      setEmail("");
      setPhone("");
      setPlace("");
      setService("");
      setMessage("");

      setLoading(false);
    } else {
      setLoading(false);
      setStatus(
        "❌ Something went wrong on the server. Please try again later."
      );
    }
  } catch (error) {
    console.log("AXIOS ERROR:", error);

    if (error.response) {
      console.log("RESPONSE DATA:", error.response.data);
      setStatus(
        "❌ " +
          (error.response.data?.message ||
            `Server error (${error.response.status}). Please try again later.`)
      );
    } else if (error.request) {
      setStatus("❌ No response from server. Please check your internet.");
    } else {
      setStatus("❌ " + (error.message || "Something went wrong"));
    }

    setLoading(false);
  }
};







  const [active, setActive] = useState("serviced");
const CATEGORIES = [
  {
    key: "prerented",
    label: "Pre-Rented Commercial Properties",
    image:
      "/pre-rented.webp",
    description:
      "Premium pre-leased commercial spaces offering stable monthly rental income and long-term tenant security.",
  },
 
  {
    key: "industrial",
    label: "Industrial",
    image:
      "https://images.pexels.com/photos/4172731/pexels-photo-4172731.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description:
      "Strategic industrial and warehouse spaces designed for logistics, manufacturing, and large-scale operations.",
  },
  {
    key: "residential",
    label: "Residential",
    image:
      "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description:
      "Luxury homes, builder floors, apartments, and villa-style residences in premium neighborhoods.",
  },

   {
    key: "leasing",
    label: "Leasing",
    image:
      "https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description:
      "End-to-end leasing solutions for retail, offices, warehouses, and commercial occupiers across Delhi-NCR.",
  },
  {
    key: "serviced",
    label: "Serviced Apartments",
    image:
      "https://images.pexels.com/photos/262405/pexels-photo-262405.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description:
      "Fully furnished, hotel-style serviced apartments ideal for corporates, NRIs, and long-stay guests.",
  },
  {
    key: "commercial",
    label: "Commercial",
    image:
      "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description:
      "High-value retail, office, and showroom spaces in top business and high-footfall commercial districts.",
  },
];



 const expertise = [
   {
      title: "Pre-Rented Commercial Properties",
      image:
        "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Flats / Apartments",
      image:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Plots / Kothi",
      image:
        "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Independent Floors",
      image:
        "https://images.pexels.com/photos/7031704/pexels-photo-7031704.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "Commercial Shops & Office Spaces",
      image:
        "https://images.pexels.com/photos/264797/pexels-photo-264797.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
   
    {
      title: "Agricultural Land / Farmhouses",
      image:
        "https://images.pexels.com/photos/2406398/pexels-photo-2406398.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
   
  ];

// investment projects data
const projects = [
  {
    image: "/amaryllis.jpg",
    location: "UNITY AMARYLLIS",
    desc: "Luxury high-rise residences offering spacious layouts, premium amenities, and excellent connectivity in a prime urban location.",
  },
  {
    image: "/jindal2.jpg",
    location: "JINDAL",
    desc: "Well-planned residential development known for quality construction, modern infrastructure, and comfortable living spaces.",
  },
  {
    image: "/vibes-imperial-green.png",
    location: "IMPERIAL GREENS",
    desc: "Green-themed residential project designed with open spaces, landscaped gardens, and a peaceful lifestyle environment.",
  },
  {
    image: "/newstone.webp",
    location: "NEWSTONE",
    desc: "Contemporary residential project featuring smart layouts, modern architecture, and convenient access to city essentials.",
  },
  {
    image: "/vibs2.jpg",
    location: "VIBS Sonepat",
    desc: "Premium residential development in Sonepat offering a balanced lifestyle with modern amenities and growing connectivity.",
  },
];



  const cities = [
    {
      name: "Delhi",
      image:
        "/delhi.webp",
    },
    
    // Add more cities if you want
    // { name: "Noida", image: "..." },
  ];

  return (


    <>
   <section
  style={{ backgroundImage: "url(/sketch2.webp)" }}
  id="about"
  className="relative bg-center bg-contain bg-fixed bg-no-repeat border-t border-slate-100"
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-white/50 z-1"></div>

  {/* Content wrapper */}
  <div className="relative z-2 mx-auto max-w-6xl px-4 py-8 md:py-13 sm:px-6 lg:px-8">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

      {/* Left: Text */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ED3A20]">
          About Us
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
          A trusted real estate partner for modern buyers & investors.
        </h2>
<p className="mt-3 text-sm leading-relaxed text-black sm:text-base">
  We are a professional real estate advisory firm specializing in
  residential, commercial, and investment properties across prime
  locations in Delhi and NCR. With strong market expertise and a
  client-first approach, we help buyers and investors make confident,
  well-informed property decisions.
  From initial requirement understanding and property shortlisting to
  site visits, price negotiations, legal documentation, and final
  possession, we manage the complete real estate journey with clarity,
  efficiency, and transparency at every stage.
</p>



<p className="mt-3 text-sm leading-relaxed text-black sm:text-base">
  Our team works closely with reputed developers, landowners, and
  institutional sellers to ensure that every property we present meets
  strict standards of location, legality, and long-term value.
</p>

{/* Points */}
<div className="mt-6 space-y-2 text-sm text-black">
  <div className="flex gap-2">
    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ED3A20]" />
    <p>Curated residential and commercial projects from verified developers.</p>
  </div>

  <div className="flex gap-2">
    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ED3A20]" />
    <p>Clear communication, transparent pricing, and honest advisory.</p>
  </div>

  <div className="flex gap-2">
    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ED3A20]" />
    <p>End-to-end support across buying, selling, leasing, and investments.</p>
  </div>



  <div className="flex gap-2">
    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ED3A20]" />
    <p>Assistance with legal checks, documentation, and smooth closures.</p>
  </div>
</div>


        
      </div>

      {/* Right content */}
      <div className="space-y-6">

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 relative">
          <div className="relative aspect-[4/3] w-full">
            <img
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Modern real estate project"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/5 to-transparent" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 grid-cols-3">
          <div className="rounded-2xl border border-[#ED3A20] bg-red-50 px-4 py-3">
            <p className="text-lg font-semibold text-black">40+ yrs</p>
            <p className="mt-1 text-xs text-slate-500">Experience</p>
          </div>

          <div className="rounded-2xl border border-[#ED3A20] bg-red-50 px-4 py-3">
            <p className="text-lg font-semibold text-black">15k+</p>
            <p className="mt-1 text-xs text-slate-500">Property Rented </p>
          </div>

          <div className="rounded-2xl border border-[#ED3A20] bg-red-50 px-4 py-3">
            <p className="text-lg font-semibold text-black">4.9/5</p>
            <p className="mt-1 text-xs text-slate-500">Client Rating</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>




    {/* our locations */}


     <section  className="bg-[#f5f7fc] py-8 ">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
            We Are A Leading{" "}
            <span className="text-black">
              Real Estate Agency
            </span>{" "}
            In
          </h2>

    
        </div>

        {/* City cards */}
        <div className="mt-5 grid ">
          {cities.map((city) => (
            <div
              key={city.name}
              className="group relative overflow-hidden rounded-3xl bg-slate-900/80 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-52 sm:h-60 lg:h-85">
                <img
                  src={city.image}
                  alt={city.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-slate-950/40 to-slate-900/10" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <div className="text-center">
                  <p className="text-sm font-medium tracking-[0.2em] uppercase text-slate-200 mb-1">
                    Explore Properties In
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                    {city.name}
                  </h3>

                  <Link href="/pre-rented" className="mt-4 inline-flex items-center rounded-full bg-white/95 px-5 py-2 text-xs sm:text-sm font-semibold text-slate-900 shadow-md transition hover:bg-white">
                    View Listings
                    <span className="ml-2 text-[13px]">↗</span>
                  </Link>
                </div>
              </div>

              {/* Border glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-[#f24930]/60 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>






    <section className="bg-gradient-to-r from-[#8d2413] via-red-800 to-[#6d090c]  py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-8 text-center">
       Investment Projects
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 4000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="  overflow-hidden  group">
                
                {/* Image */}
                <div className="relative h-[420px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />

                </div>

                {/* Info */}
                <div className="p-5">
                  <p className="text-sm text-white">
                    {project.location}
                  </p>

         

                  <p className="text-xs  text-white">
                    {project.desc}
                  </p>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>






{/* our expertise */}

    <section id="expertise" className="bg-slate-50 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 md:py-11 sm:px-6 lg:px-8 ">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ED3A20]">
            Our Expertise
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
            Residential & Pre-Rented Commercial Specialists
          </h2>
          <p className="mt-3 text-sm text-black sm:text-base">
            We help you invest in the right property category based on your
            needs, budget & long-term goals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid gap-6 grid-cols-2 lg:grid-cols-3">
          {expertise.map((exp, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-50 group-hover:opacity-60 transition" />
              </div>

              {/* Title + Button */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold text-sm sm:text-base">
                  {exp.title}
                </p>

                <Link
                  href="/services"
                  className="mt-2 inline-block rounded-full bg-[#ED3A20] px-4 py-1.5 text-xs font-semibold hover:bg-red-700 transition"
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>








 {/* prerented */}


     <div><section className="relative bg-slate-50 py-16">
  {/* Accent Background */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#ed3a20]/5 to-transparent"></div>

  <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
    
    {/* Left Content */}
    <div>
      <span className="inline-block mb-3 rounded-full bg-[#ed3a20]/10 px-4 py-1 text-sm font-semibold text-[#ed3a20]">
        High-Demand Investment
      </span>

      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
        Pre-Rented Properties
      </h2>

      <p className="mt-3 text-lg font-medium text-[#ed3a20]">
        Secure Assets with Assured Rental Income
      </p>

      <p className="mt-5 text-slate-700 leading-relaxed">
        Pre-rented properties are ideal for investors seeking stable,
        low-risk returns with immediate rental income. These assets are
        already leased to reputed tenants, eliminating vacancy risks and
        ensuring predictable cash flow from day one.
      </p>

      <p className="mt-4 text-lack leading-relaxed">
        At Anand Aggarwal Properties, we offer verified pre-leased commercial
        assets across Delhi & NCR, including banks, MNC offices, retail
        brands, food chains, hospitals, and institutional properties located
        in high-footfall business zones.
      </p>

      {/* CTA */}
      <button
      
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-600 cursor-pointer px-8 py-3 text-white font-medium shadow-md hover:bg-red-700 transition"
      >
        Explore Pre-Rented Opportunities
      </button>
    </div>

    {/* Right Highlight Card */}
    <div className="bg-white rounded-3xl shadow-xl p-8 border border-red-100">
      <h3 className="text-xl font-bold text-slate-900 mb-6">
        Why Invest in Pre-Rented Properties?
      </h3>

      <ul className="space-y-4 text-sm sm:text-base">
        <li className="flex gap-3">
          <CheckCircle className="text-[#ed3a20] w-5 h-5 mt-[2px]" />
          <p>7% – 10% assured annual rental returns</p>
        </li>

        <li className="flex gap-3">
            <CheckCircle className="text-[#ed3a20] w-5 h-5 mt-[2px]" />
          <p>Immediate monthly income from Day-1</p>
        </li>

        <li className="flex gap-3">
           <CheckCircle className="text-[#ed3a20] w-5 h-5 mt-[2px]" />
          <p>Zero vacancy risk with long-term tenants</p>
        </li>

        <li className="flex gap-3">
         <CheckCircle className="text-[#ed3a20] w-5 h-5 mt-[2px]" />
          <p>Leased to banks, MNCs & national brands</p>
        </li>

        <li className="flex gap-3">
            <CheckCircle className="text-[#ed3a20] w-5 h-5 mt-[2px]" />
          <p>High liquidity & strong capital appreciation</p>
        </li>

        <li className="flex gap-3">
            <CheckCircle className="text-[#ed3a20] w-5 h-5 mt-[2px]" />
          <p>Fully verified lease agreements & documents</p>
        </li>
      </ul>
    </div>
  </div>
</section>
</div>




    {/* accordian */}

    <section className="bg-white mt-8" >

      <h2 className="text-2xl md:text-4xl font-bold text-center md:text-start  md:px-9 my-3 text-black">Crafting Excellence Across Verticals</h2>
      <div className="mx-auto w-full px-0 sm:px-2 ">
        <div className="overflow-hidden  bg-black/80 shadow-2xl">
          {/* Accordion strip */}
          <div className="flex h-[570px] flex-col lg:h-[480px] lg:flex-row">
            {CATEGORIES.map((item) => {
              const isActive = active === item.key;

              return (
                <button
                  key={item.key}
                  type="button"
                  onMouseEnter={() => setActive(item.key)}
                  onFocus={() => setActive(item.key)}
                  className={`relative flex-1 cursor-pointer overflow-hidden border-b border-slate-800/70 last:border-b-0 transition-[flex] duration-500 ease-out 
                  lg:border-b-0 lg:border-r lg:last:border-r-0
                  ${isActive ? "lg:flex-3 flex-2" : "lg:flex-1 flex-[0.9]"}`}
                >
                  {/* Background image */}
                  <img
                    src={item.image}
                    alt={item.label}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 
                    "
                   
                  />

                  {/* Overlay gradient */}
                  <div
                    className={`absolute inset-0 transition duration-500 ${
                      isActive
                        ? "bg-gradient-to-t from-black/70 via-black/40 to-black/10"
                        : "bg-black/60"
                    }`}
                  />

                  {/* Top label */}
                  <div className="relative z-10 flex h-full flex-col justify-between px-6 py-6 sm:px-8 sm:py-8 text-left">
                    <div className="flex items-start justify-between">
                      <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-white uppercase">
                        {item.label}
                      </p>
                    </div>

                    {/* Active content */}
                    <div
                      className={`transition-all duration-500 ease-out ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4 pointer-events-none"
                      }`}
                    >
                      <p className="max-w-xs text-left text-sm sm:text-lg font-medium text-white">
                        {item.description}
                      </p>
                      <div className="mt-4">
                        <Link href="/services" className="inline-flex items-center rounded-full bg-[#ED3A20] px-6 py-2 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-black/40 hover:bg-[#ED3A20] transition">
                          READ MORE
                        </Link>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>

 <ServicesMarquee></ServicesMarquee>













{/* contact form */}

<section id="connect" className="relative  overflow-hidden bg-white">
  {/* Background image */}
  <div
    className="pointer-events-none absolute inset-0 bg-cover bg-fixed bg-center"
    style={{
      backgroundImage: "url('/contact.webp')",
    }}
  />

  {/* Soft overlay */}
  <div className="pointer-events-none absolute inset-0 bg-black/50" />

  {/* Content */}
  <div className="relative z-10 mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
        Feel Free To Connect{" "}
        <span className="text-white">With Us.</span>
      </h2>

      <p className="mt-3 text-base sm:text-lg font-medium leading-relaxed text-white">
        Reach us for your perfect residential or commercial investment
        tailored to your needs.
      </p>
    </div>

    {/* Form card */}
    <div className="mt-10 rounded-3xl border border-white/50 bg-white/85 backdrop-blur-xl">
      <form onSubmit={handleSubmit} className="space-y-4 px-6 py-10 ">
        
        {/* Row 1 */}
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Your Name
            </label>
            <input
            value={name}
            onChange={(e)=> setName(e.target.value) }
              type="text"
              placeholder="Enter your full name"
              className="w-full border-b border-slate-400 pb-2 bg-transparent text-base text-slate-900 placeholder:text-slate-500 outline-none focus:border-[#ED3A20]"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Your Phone
            </label>
            <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
              type="tel"
              maxLength={10}
              minLength={10}
              pattern="[0-9] {10}"
              placeholder="+91 -"
              className="w-full border-b border-slate-400 pb-2 bg-transparent text-base text-slate-900 placeholder:text-slate-500 outline-none focus:border-[#ED3A20]"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Your Email
            </label>
            <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Your Email"
              className="w-full border-b border-slate-400 pb-2 bg-transparent text-base text-slate-900 placeholder:text-slate-500 outline-none focus:border-[#ED3A20]"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Property you are looking for?
            </label>
            <select
            value={service}
            onChange={(e) => setService(e.target.value)}
         
              className="w-full border-b border-slate-400 pb-2 bg-transparent text-base text-slate-900 outline-none focus:border-[#ED3A20]"
            >
              <option value="" disabled>Select property type</option>
              <option>Flats / Apartments</option>
              <option>Plots / Kothi</option>
              <option>Independent Floors</option>
              <option>Commercial Shops & Office Spaces</option>
              <option>Pre-rented Commercial Properties</option>
              <option>Agricultural Land / Farmhouses</option>
              <option>Industrial</option>
            </select>
          </div>
        </div>

        {/* Row 3 */}
        <div>
          <label className="block text-sm font-semibold text-slate-800 mb-2">
            Select city you are looking into
          </label>
          <select
          value={place}
          onChange={(e) => setPlace(e.target.value)}
   
            className="w-full border-b border-slate-400  bg-transparent text-base text-slate-900 outline-none focus:border-[#ED3A20]"
          >
            <option value="" disabled>Select city</option>
            <option>Delhi</option>
            <option>Gurugram</option>
            <option>Noida</option>
            <option>Greater Noida</option>
            <option>Other NCR</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-slate-800 mb-2">
            Your Message
          </label>
          <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Tell us what you're looking for..."
            className="w-full border-b border-slate-400 pb-2 bg-transparent text-base text-slate-900 placeholder:text-slate-500 outline-none focus:border-[#ED3A20] resize-none"
          />
        </div>

      {/* CTA */}
      {/* CTA */}
<div className="flex flex-col items-center">
   {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-[#ed3a20] hover:bg-red-700 text-white text-base font-semibold rounded-lg transition duration-300 shadow-md"
        >
          {loading ? "Sending..." : "Submit Enquiry"}
        </button>
  <p className="mt-2 text-xs sm:text-sm text-slate-700 text-center">
    We usually respond within a few hours.
  </p>
        {status && (
          <p
            className={`text-center text-sm font-medium p-2 rounded-lg ${
              status.startsWith("✅")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {status}
          </p>
        )}


</div>

      </form>
    </div>

  </div>
</section>








    </>
   
  );
}
