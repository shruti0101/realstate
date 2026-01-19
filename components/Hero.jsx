"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Handshake, FileSearch } from "lucide-react";
import Link from "next/link";
import ServicesMarquee from "@/components/Marquee";
import axios from "axios";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";

export default function AboutSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [place, setPlace] = useState("");
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
        platform: "Real Estate Website landing page",
        platformEmail: "anandaggarwalproperties1@gmail.com",
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

  const [current, setCurrent] = useState(0);
  const CATEGORIES = [
    {
      key: "prerented",
      label: "Pre-Rented Commercial Properties",
      image: "/pre-rented.webp",
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
      title: "Residential Properties",
      image: "/services/1.avif",

      subtitle: "plots/kothis/floors",
    },
    {
      title: "Industrial Properties",
      image: "/services/industry.webp",

      subtitle: "plots/factories",
    },
    {
      title: "Commercial & Pre-Leased",
      image: "/services/2.webp",

      subtitle: "return 5 to 10%",
    },
    {
      title: "Kundli / Sonepat ",
      image: "/services/sonepat.jpg",

      subtitle: "good for investment",
    },
    {
      title: "DLF / Gurgaon Properties",
      image: "hero2.webp",

      subtitle: "apartments/kothi/plots",
    },

    {
      title: "Farmhouses",
      image: "services/farmhouse.jpg",
      subtitle: "all over delhi NCR",
    },
  ];

  // investment projects data
  // const projects = [
  //   {
  //     image: "/amaryllis.jpg",
  //     location: "UNITY AMARYLLIS",
  //     desc: "Luxury high-rise residences offering spacious layouts, premium amenities, and excellent connectivity in a prime urban location.",
  //   },
  //   {
  //     image: "/jindal2.jpg",
  //     location: "JINDAL",
  //     desc: "Well-planned residential development known for quality construction, modern infrastructure, and comfortable living spaces.",
  //   },
  //   {
  //     image: "/vibes-imperial-green.png",
  //     location: "IMPERIAL GREENS",
  //     desc: "Green-themed residential project designed with open spaces, landscaped gardens, and a peaceful lifestyle environment.",
  //   },
  //   {
  //     image: "/newstone.webp",
  //     location: "NEWSTONE",
  //     desc: "Contemporary residential project featuring smart layouts, modern architecture, and convenient access to city essentials.",
  //   },
  //   {
  //     image: "/vibs2.jpg",
  //     location: "VIBS Sonepat",
  //     desc: "Premium residential development in Sonepat offering a balanced lifestyle with modern amenities and growing connectivity.",
  //   },
  // ];

  const cities = [
    {
      name: "Delhi",
      image: "/delhi.webp",
    },

    {
      name: "Gurugram",
      image: "/hero2.webp",
    },
    // Add more cities if you want
    // { name: "Noida", image: "..." },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" },
    }),
  };

  const slides = [
    {
      image: "/banner5.jpg",
      title: "Welcome to Anand Aggarwal Properties.",

      subtitle: `


At Anand Aggarwal Properties, we’re not just real estate consultants—we’re builders of enduring legacies. Driven by a passion for excellence and a dedication to superior quality, we turn aspirations into reality. Established in 1985 on the values of integrity, reliability, and exceptional service. Today, we proudly stand as a trusted name in the industry

We deal in Residential, Industrial, Pre-Leased & Commercial Properties in Delhi/NCR. Since 1985, we have been associated with verified developers, ensuring transparent pricing, clear communication, and ethical advisory throughout the process. 


`,
    },

    {
      image: "banner3.png",
      title: "Pre-Rented Commercial Properties",
      subtitle:
        "Verified Income-Generating Assets with Assured Monthly Rentals",
    },

    {
      image: "banner2.png",
      title: "Banks, Retail & Institutional Properties",
      subtitle:
        "Strong Tenant Profiles • Stable Cash Flow • Long-Term Security",
    },

    {
      image: "banner3.webp",
      title: "Residential Properties",
      subtitle:
        "Premium Homes in Prime Locations with Long-Term Value Appreciation",
    },

      {
      image: "/services/industry.webp",
      title: "Industrial Properties",
      subtitle:
        "Strategic Warehouses & Factories for Logistics & Manufacturing",
    },

    {
  image: "/services/sonepat.jpg",
  title: "KUNDLI / SONEPAT",
  subtitle: "Fast-growing residential & commercial hub with excellent connectivity to Delhi NCR",
},

{
  image: "/hero2.webp",
  title: "DLF / Gurgaon Properties",
  subtitle: "Premium luxury residences & commercial spaces in Gurgaon’s most prestigious sectors",
},

{
  image: "/services/farmhouse.jpg",
  title: "Farmhouses & Agricultural Land",
  subtitle: "Spacious green land ideal for luxury farmhouses, weekend homes & long-term investment",
},


  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="relative h-[60vh] md:h-[90vh] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">
              <div className=" md:mx-auto px-6 text-white">
                <h1 className="text-2xl md:text-5xl font-semibold leading-tight">
                  {slide.title}
                </h1>
                <p className="mt-4 max-w-4xl text-xl text-white">
                  {slide.subtitle}
                </p>

                <Link
                  href="/contact-us"
                  className="mt-6 inline-block bg-[#ed3a20] px-6 py-3 text-sm font-semibold rounded-md hover:bg-red-700 transition"
                >
                  Request Call Back
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* about us */}
      <section
        style={{ backgroundImage: "url(/sketch2.webp)" }}
        className="relative w-full bg-contain bg-center  bg-fixed "
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/40"></div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mx-auto w-full  px-4 sm:px-6 lg:px-20 py-10  "
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div className="max-w-xl space-y-4">
              <motion.h1
                variants={fadeUp}
                custom={2}
                className="text-4xl font-semibold leading-tight text-black  "
              >
                Welcome to {"  "}
                <span className="text-[#ED3A20]  text-[35px]">
                  Anand Aggarwal Properties
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={3}
                className="m md:text-lg **: text-black text-justify"
              >
                At Anand Aggarwal Properties, we’re not just real estate
                consultants—we’re builders of enduring legacies. Driven by a
                passion for excellence and a dedication to superior quality, we
                turn aspirations into reality. Established in 1985 on the values
                of integrity, reliability, and exceptional service. Today, we
                proudly stand as a trusted name in the industry We deal in
                <strong className="text-red-600">
                  {" "}
                  Residential, Industrial, Pre-Leased & Commercial Properties in
                  Delhi/NCR
                </strong>{" "}
                <strong>Since 1985</strong> , we have been dealing in
                residential and commercial projects exclusively from verified
                developers, ensuring transparent pricing, clear communication,
                and honest advisory at every stage. Our team provides end-to-end
                support across buying, selling, leasing, and long-term
                investments, along with thorough legal assistance—so you can
                invest with complete confidence.
              </motion.p>

              {/* CTA */}
              <motion.div
                variants={fadeUp}
                custom={4}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  href="/contact"
                  className="rounded-full bg-[#ED3A20] px-6 py-3 text-sm font-semibold text-white hover:bg-red-600"
                >
                  Get Consultation
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  href="/projects"
                  className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/10"
                >
                  View Projects
                </motion.a>
              </motion.div>
            </div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur">
                <motion.img
                  src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Modern real estate project"
                  className="h-full w-full object-contain"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1 }}
                />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "40+", label: "Years Experience" },
                  { value: "100%", label: "Satisfied Customers " },
                  { value: "4.9/5", label: "Client Rating" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-black/15 bg-black/10 px-4 py-4 text-center backdrop-blur"
                  >
                    <p className="text-xl font-semibold text-black">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-black">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* our locations */}

      <section className="bg-[#f5f7fc] py-8 ">
        <div className="mx-auto py-5 w-full  px-4 sm:px-6 lg:px-20">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-2xl mb-10 sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
              We Are A Leading{" "}
              <span className="text-black">Real Estate Agency</span> In
            </h2>
          </div>

          {/* City cards */}
          <div className="mt-5 grid grid-cols-2 gap-10 ">
            {cities.map((city) => (
              <div
                key={city.name}
                className="group relative overflow-hidden  bg-slate-900/80 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-52 sm:h-60 lg:h-75">
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
                  
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                      {city.name}
                    </h3>

                    <Link
                      href="/services"
                      className="mt-4 inline-flex items-center rounded-full bg-white/95 px-5 py-2 text-xs sm:text-sm font-semibold text-slate-900 shadow-md transition hover:bg-white"
                    >
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

      {/* Why Choose Us */}
      <section className="bg-[#fff5f3] border-y border-[#ED3A20]/15 py-16">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Why Choose Us
          </h2>

          {/* FIRST ROW — 3 CARDS */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                title: "Transparent Deals",
                desc: "Full clarity on documents, terms & payment schedules",
                icon: <FileSearch className="h-7 w-7" />,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative rounded-3xl bg-white p-7 shadow-md border hover:-translate-y-2 hover:border-[#ED3A20] hover:shadow-2xl transition"
              >
                <div className="text-[#ED3A20] mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-[#ED3A20]/10">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="mt-3 text-sm text-slate-600">{item.desc}</p>
                <div className="absolute bottom-0 left-0 right-0 mx-auto mb-3 h-[2px] w-12 bg-[#ED3A20] opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
            ))}
          </div>

          {/* SECOND ROW — 2 CARDS CENTERED */}
          <div className="mt-8 flex justify-center">
            {[
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
                className="group relative rounded-3xl bg-white p-7 shadow-md border hover:-translate-y-2 hover:border-[#ED3A20] hover:shadow-2xl transition w-full sm:w-[45%] lg:w-[30%] mx-2"
              >
                <div className="text-[#ED3A20] mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-[#ED3A20]/10">
                    {item.icon}
                  </div>
                </div>

                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="mt-3 text-sm text-slate-600">{item.desc}</p>

                <div className="absolute bottom-0 left-0 right-0 mx-auto mb-3 h-[2px] w-12 bg-[#ED3A20] opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
    <section className="bg-gradient-to-r from-[#8d2413] via-red-800 to-[#6d090c]  py-10">
      <div className="w-full  px-4 sm:px-6 lg:px-20 mx-auto ">
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
                
              
                <div className="relative h-[420px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />

                </div>

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
    </section> */}

      {/* our expertise */}

      <section id="expertise" className="bg-slate-50 border-t border-slate-100">
        <div className="mx-auto w-full  px-4 sm:px-6 lg:px-20 md:py-11  ">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-3xl font-bold uppercase  text-[#ED3A20]">
              Our Expertise
            </p>

            <p className="mt-3 text-xs text-black sm:text-sm">
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
                <div className=" bg-white text-black p-4 space-y-1">
                  <p className="font-semibold text-sm sm:text-2xl">
                    {exp.title}
                  </p>

                  <p className="capitalize font-semibold text-sm font-serif text-red-600 tracking-wide[0.2em]">
                    {exp.subtitle}
                  </p>

                  <Link
                    href="/services"
                    className="mt-2 inline-block rounded-full text-white bg-[#ED3A20] px-4 py-1.5 text-xs font-semibold hover:bg-red-700 transition"
                  >
                    View More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* residential */}


{/* 
      <section className="bg-white py-20 px-10">
        <h2 className="text-2xl md:text-5xl mb-8 font-bold">
          Residential Properties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <p className="text-black text-lg leading-relaxed mb-4 text-justify">
            <strong className="text-red-600 mt-8">
              Anand Aggarwal Properties
            </strong>{" "}
            offers premium residential properties across the North & West Delhi{" "}
            <strong>
              (Pushpanjali Enclave, Pitampura, Punjabi Bagh, Tarun enclave) and
              DLF/Gurugram,
            </strong>{" "}
            catering to first-time buyers, growing families, HNIs, and NRI
            clients. Our carefully curated portfolio includes builder floors &
            apartments, luxury villas & penthouses, and homes within secure
            gated communities located in prime residential colonies with
            excellent infrastructure and connectivity. Every property is
            verified for quality, legality, and long-term value, ensuring a
            smooth and transparent home-buying experience. Backed by decades of
            market expertise, we guide you at every step—from property selection
            to final possession—helping you secure a home that perfectly matches
            your lifestyle, budget, and future aspirations.
          </p>

          <img className="rounded-sm" src="/residential.webp" alt="" />
        </div>

        <div className="bg-red-50 p-8 rounded-xl w-full mt-5">
          
          <div className="bg-red-600 text-white px-6 py-3 rounded-full font-bold text-lg flex justify-between items-center">
            <span>
              RESIDENTIAL – North & West Delhi (Plots / Kothis / Floors)
            </span>
            <span className="text-sm">Ph.: 9810395051, 9899151090</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <ul className="space-y-3">
              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> Pushpanjali
                Enclave
              </li>
              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> Deepali /
                Tarun Enclave
              </li>
              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> Lotus /
                West Enclave
              </li>
              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> Saraswati
                Vihar
              </li>
            </ul>

            <ul className="space-y-3">
              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> Suvidha
                Kunj
              </li>
              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> Lok Vihar /
                Harsh Vihar
              </li>
              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> Vaishali
                Enclave
              </li>
              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> Sharda
                Niketan
              </li>
            </ul>

            <ul className="space-y-3">
              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> Rajdhani /
                M.P. Enclave
              </li>
              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> Rohini (All
                Sectors)
              </li>
              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> Pitampura
                (All Blocks)
              </li>
              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> Punjabi
                Bagh
              </li>
            </ul>
          </div>
        </div>

      

        <div className="bg-red-50 p-8 rounded-xl w-full mt-5">
         
          <div className="bg-red-600 text-white px-6 py-3 rounded-full font-bold text-lg flex justify-between items-center">
            <span>DLF/GURGAON (Plots / Kothis / Floors)</span>
            <span className="text-sm">Ph.: 9810395051, 9899151090</span>
          </div>

         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <ul className="space-y-3">
              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> Dwarka
                Expressway
              </li>
              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> DLF Phase I
                to IV
              </li>
            </ul>

            <ul className="space-y-3">
              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> Suncity
              </li>
              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> Golf Course
                Extension
              </li>
            </ul>

            <ul className="space-y-3">
              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> Sushant Lok
                I to III
              </li>
              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> South City
                I & II
              </li>
            </ul>
          </div>
        </div>

     

        <div className="bg-red-50 p-8 rounded-xl w-full mt-5">
      
          <div className="bg-red-600 text-white px-6 py-3 rounded-full font-bold text-lg flex justify-between items-center">
            <span>DLF / Gurgaon (Apartments)</span>
            <span className="text-sm">Ph.: 9810395051, 9899151090</span>
          </div>

     
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <ul className="space-y-3">
              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> DLF
                Aralias
              </li>
              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> DLF Camelias
              </li>
              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> DLF Privana
              </li>
            </ul>

            <ul className="space-y-3">

               <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> M3M
                Projects
              </li>
              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> Signature
                Global
              </li>
              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> Birla Group
              </li>
             
            </ul>

            <ul className="space-y-3">
                 <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> Adani Group
              </li>
              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> Krisumi
              </li>
              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> Suncity
              </li>
           
            </ul>
          </div>
        </div>

    

        <div className="bg-red-50 p-8 rounded-xl w-full mt-5">
     
          <div className="bg-red-600 text-white px-6 py-3 rounded-full font-bold text-lg flex justify-between items-center">
            <span>North West Delhi (Apartments)</span>
            <span className="text-sm">Ph.: 9810395051, 9899151090</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <ul className="space-y-3">
              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> Unity
                Amaryllis
              </li>
              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span>{" "}
                DLF Midtown (Moti Nagar)
              </li>
            </ul>

            <ul className="space-y-3">
              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> Maxwell
              </li>
              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span> Golf Island
                Dwarka
              </li>

             
            </ul>


              <ul className="space-y-3">
             <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span>{" "}
                Sawasdee/Lawrence Road
              </li>
             

              <li className="font-semibold flex items-start text-black">
                <span className="text-red-600 mr-2 text-xl">•</span>{" "}
               Rohini Sector-32
              </li>
            </ul>
          </div>
        </div>
      </section>  */}



      {/* accordian */}

      {/* <section className="bg-white mt-8" >

      <h2 className="text-2xl md:text-4xl font-bold text-center md:text-start  md:px-9 my-3 text-black">Crafting Excellence Across Verticals</h2>
      <div className="mx-auto w-full px-0 sm:px-2 ">
        <div className="overflow-hidden  bg-black/80 shadow-2xl">
        
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
           
                  <img
                    src={item.image}
                    alt={item.label}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 
                    "
                   
                  />

             
                  <div
                    className={`absolute inset-0 transition duration-500 ${
                      isActive
                        ? "bg-gradient-to-t from-black/70 via-black/40 to-black/10"
                        : "bg-black/60"
                    }`}
                  />

               
                  <div className="relative z-10 flex h-full flex-col justify-between px-6 py-6 sm:px-8 sm:py-8 text-left">
                    <div className="flex items-start justify-between">
                      <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-white uppercase">
                        {item.label}
                      </p>
                    </div>

                   
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
    </section> */}

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
              Feel Free To Connect <span className="text-white">With Us.</span>
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
                    onChange={(e) => setName(e.target.value)}
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
                    <option value="" disabled>
                      Select property type
                    </option>
                    <option>Residential Properties</option>
                    <option>Industrial Properties</option>
                    <option>Commercial & Pre-Leased </option>
                    <option>KUNDLI / SONEPAT</option>
                    <option>DLF / Gurgaon Properties</option>

                    <option>Farmhouses</option>
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
                  <option value="" disabled>
                    Select city
                  </option>
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
