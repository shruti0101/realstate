"use client";
import PropertyCarousel from '@/components/Carousel';
import ContactForm from '@/components/Form';
import ServicesMarquee from '@/components/Marquee';
import { Building } from 'lucide-react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function Inquiry() {
    const [current, setCurrent] = useState(0);
    const [isFormOpen1, setIsFormOpen1] = useState(false);
    const slides = [
        //         {
        //             image: "/banner5.jpg",
        //             title: "Welcome to Anand Aggarwal Properties.",

        //             subtitle: `


        // At Anand Aggarwal Properties, we’re not just real estate consultants—we’re builders of enduring legacies. Driven by a passion for excellence and a dedication to superior quality, we turn aspirations into reality. Established in 1985 on the values of integrity, reliability, and exceptional service. Today, we proudly stand as a trusted name in the industry

        // We deal in Residential, Industrial, Pre-Leased & Commercial Properties in Delhi/NCR. Since 1985, we have been associated with verified developers, ensuring transparent pricing, clear communication, and ethical advisory throughout the process. 


        // `,
        //         },

        // {
        //     image: "/banner3.png",
        //     title: "Pre-Rented Commercial Properties",
        //     subtitle:
        //         "Verified Income-Generating Assets with Assured Monthly Rentals",
        // },

        {
            image: "banner2.png",
            title: "Banks, Retail & Institutional Properties",
            subtitle:
                "Premium Tenants • Guaranteed Rental Income • Secure, Hassle-Free Investment Strong Tenant Profiles • Stable Cash Flow • Long-Term Security",
        },

        {
            image: "/banner3.webp",
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
            title: "KUNDLI",
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
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

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
            title: "Commercial Properties",
            image: "/services/2.webp",

            subtitle: "return 5 to 10%",
        },
        {
            title: "Kundli ",
            image: "/services/sonepat.jpg",

            subtitle: "good for investment",
        },
        {
            title: "Gurgaon Properties",
            image: "/hero2.webp",

            subtitle: "apartments/kothi/plots",
        },

        {
            title: "Farmhouses",
            image: "/services/farmhouse.jpg",
            subtitle: "all over delhi NCR",
        },
    ];

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
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
                platformEmail: "anandaggarwalproperties1@gmail.com",
                name,
                phone,
                place: "N/A",
                email,
                product: service,
                message,
            };

            const { data } = await axios.post(
                "https://brandbnalo.com/api/form/add",
                formData
            );

            if (data?.success) {
                setStatus("✅ Message sent successfully!");
                setName("");
                setEmail("");
                setPhone("");
                setService("");
                setMessage("");
            } else {
                setStatus("❌ Something went wrong. Please try again.");
            }
        } catch (error) {
            console.log(error);
            setStatus("❌ " + (error?.message || "Something went wrong"));
        } finally {
            setLoading(false);
        }
    };

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [active, setActive] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState("");
    const projects = [
        // RETAIL
        // {
        //   category: "Retail",
        //   tenant: "Manyavar",
        //   location: "Delhi",
        //   rental: "₹3.50 L / Month",
        // },
        {
            category: "Retail",
            tenant: "Food Court",
            location: "Delhi",
            rental: "₹15.00 L / Month",
        },
        {
            category: "Retail",
            tenant: "Gaming Zone",
            location: "Gurgaon",
            rental: "₹3.60 L / Month",
        },
        {
            category: "Retail",
            tenant: "Birla Institute",
            location: "Gurgaon",
            rental: "₹5.13 L / Month",
        },

        {
            category: "Retail",
            tenant: "Dominos",
            location: "Delhi",
            rental: "₹2.85 L / Month",
        },

        {
            category: "Retail",
            tenant: "Manyavar",
            location: "Delhi",
            rental: "₹3.50 L / Month",
        },

        {
            category: "Retail",
            tenant: "Gym",
            location: "Delhi",
            rental: "₹7 L / Month",
        },

        {
            category: "Retail",
            tenant: "Cinema",
            location: "Gurgaon",
            rental: "₹12 L / Month",
        },

        // BANKS
        {
            category: "Banks",
            tenant: "ICICI Bank",
            location: "Delhi",
            rental: "₹2.26 L / Month",
        },
        {
            category: "Banks",
            tenant: "ICICI Bank",
            location: "Delhi",
            rental: "₹3.00 L / Month",
        },
        {
            category: "Banks",
            tenant: "IOB Bank",
            location: "Delhi",
            rental: "₹3.47 L / Month",
        },
        {
            category: "Banks",
            tenant: "BANDHAN Bank",
            location: "Delhi",
            rental: "₹2.75 L / Month",
        },

        {
            category: "Banks",
            tenant: "HDFC Bank",
            location: "Delhi",
            rental: "₹3.97 L / Month",
        },
        {
            category: "Banks",
            tenant: "UNION Bank",
            location: "Delhi",
            rental: "₹3.10 L / Month",
        },

        // OFFICES

        // HEALTHCARE
        {
            category: "Healthcare",
            tenant: "Apollo Hospital",
            location: "Delhi",
            rental: "₹23.00 L / Month",
        },
        {
            category: "Healthcare",
            tenant: "RG Stone Hospital",
            location: "Delhi",
            rental: "₹27.00 L / Month",
        },
        {
            category: "Healthcare",
            tenant: "Fortis Hospital",
            location: "Gurgaon",
            rental: "₹14.00 L / Month",
        },

        {
            category: "Healthcare",
            tenant: " Hospital",
            location: "Delhi",
            rental: "₹27.00 L / Month",
        },

        // INDEPENDENT BUILDINGS
        {
            category: "Independent Buildings",
            tenant: "Banquet Hall",
            location: "Delhi",
            rental: "₹23.00 L / Month",
        },

        {
            category: "Independent Buildings",
            tenant: "Multi-tenant ",
            location: "Delhi",
            rental: "₹28.25 L / Month",
        },


        {
            category: "Independent Buildings",
            tenant: "Multi-tenant ",
            location: "Delhi",
            rental: "₹16.00 L / Month",
        },
    ];

    const groupedProjects = projects.reduce((acc, item) => {
        acc[item.category] = acc[item.category] || [];
        acc[item.category].push(item);
        return acc;
    }, {});

    return (<>
        <div className='bg-white -mt-40 z-50 w-full sticky top-0'>
            <nav className="mx-auto flex max-w-7xl items-center justify-between h-23 px-4 md:px-6 ">
                {/* Logo */}
                <Link href="/">
                    <img className="w-35 md:w-48" src="/logo.png" />
                </Link >

                {/* Desktop Menu */}
                <div className="hidden items-center gap-6 md:flex ">
                    <Link href="#" className="text-base md:text-2xl hover:bg-[#ED3A20] p-2 rounded-md transform transition-all font-medium text-black hover:text-white">
                        Home
                    </Link>
                    <Link href="#about" className="text-base md:text-2xl hover:bg-[#ED3A20] p-2 rounded-md transform transition-all font-medium text-black hover:text-white">
                        About Us
                    </Link>
                    <Link href="#services" className="text-base md:text-2xl hover:bg-[#ED3A20] p-2 rounded-md transform transition-all font-medium text-black hover:text-white">
                        Services
                    </Link>

                    <Link href="#contact-us" className="text-base md:text-2xl hover:bg-[#ED3A20] p-2 rounded-md transform transition-all font-medium text-black hover:text-white">
                        Contact Us
                    </Link>
                </div>
                <button
                    onClick={() => setIsFormOpen1(true)}
                    type="button"



                    className="cursor-pointer inline-flex items-center rounded-full border border-[#ED3A20] bg-[#ED3A20] px-4 py-3 text-sm md:text-lg font-semibold text-white shadow-sm hover:bg-red-600 transition"
                >
                    Schedule a Visit
                </button>
            </nav>
        </div>

        <div className='w-full h-full mt-16'>
            <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] w-full overflow-hidden" id='/'>
                {slides.map((slide, index) => (
                    <div key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"}`}>
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            priority={index === 0}
                            className="object-cover object-center"
                        />

                        <div className="absolute inset-0 bg-black/50" />

                        {/* Content */}
                        <div className="relative z-10 flex h-full items-center">
                            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 text-white">
                                <div className="max-w-xl sm:max-w-2xl md:max-w-3xl lg:text-left text-center">
                                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold leading-snug">
                                        {slide.title}
                                    </h1>

                                    <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-white/90">
                                        {slide.subtitle}
                                    </p>

                                    <Link
                                        href="tel:+919810759498"
                                        className="inline-block mt-6 sm:mt-8 rounded-md bg-[#ed3a20] px-6 md:px-8 py-3 text-sm sm:text-base font-semibold hover:bg-red-700 transition"
                                    >
                                        Request Call Back
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Left Arrow */}
                <button onClick={prevSlide}
                    className="absolute left-4 md:block hidden top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white hover:bg-black/60 transition"
                >
                    <ArrowLeft size={20} />
                </button>

                {/* Right Arrow */}
                <button onClick={nextSlide}
                    className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full md:block hidden bg-black/40 p-3 text-white hover:bg-black/60 transition"
                >
                    <ArrowRight size={20} />
                </button>
            </section>

            <div id='services'>
                <ServicesMarquee></ServicesMarquee>
            </div>

            {/* prerented properties */}
            <section className="relative bg-slate-50 lg:py-8 py-4" >
                <div className="absolute inset-0 bg-gradient-to-r from-[#ed3a20]/5 to-transparent"></div>
                <div className="relative mx-auto w-full  px-4 sm:px-6 lg:px-15 grid lg:grid-cols-2 lg:gap-12 gap-5 items-center">
                    <div className=''>
                        <span className="inline-block mb-3 rounded-full bg-[#ed3a20]/10 px-4 py-1 text-sm font-semibold text-[#ed3a20]">
                            High-Demand Investment
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                            Pre-Rented Properties
                        </h2>
                        <p className="text-lg font-medium text-[#ed3a20]">
                            Secure Assets with Assured Rental Income
                        </p>
                        <p className="mt-5 text-black leading-relaxed">
                            Unlock high-demand investment opportunities with <strong>Anand Aggarwal Properties!</strong> We offer verified pre-Leased commercial assets and Pre-Rented Properties properties across Delhi & NCR, including banks, MNC offices, retail brands, food chains, hospitals, and institutional spaces in prime business locations. Our portfolio of commercial properties and residential real estate provides investors with stable, low-risk returns and immediate rental income. <span className='lg:block hidden'> These commercial real estate and residential properties are already leased to reputed tenants, eliminating vacancy risks and ensuring predictable cash flow from day one – making it a smart, secure, and hassle-free investment for both seasoned and first-time investors.</span>
                        </p>
                        <Link href="https://wa.me/+919810759498" target="_blank"
                            className="mt-5 inline-flex items-center gap-2 rounded-full bg-red-600 cursor-pointer px-8 py-3 text-white font-medium shadow-md hover:bg-red-700 transition"
                        >
                            Contact Us <ArrowRight />
                        </Link>
                    </div>

                    <div className="rounded-3xl shadow-xl border border-red-100 lg:block hidden">
                        <img
                            src={"/newstone.webp"}
                            className="h-96 w-full object-cover transition group-hover:scale-105"
                        />
                    </div>
                </div>
            </section>

            {/* prperty */}
            <section className="bg-white py-5">
                <div className="max-w-7xl mx-auto px-4 space-y-5">
                    {Object.entries(groupedProjects).map(([category, items]) => (
                        <div key={category}>
                            {/* CATEGORY HEADING */}
                            <p className="text-2xl font-bold text-slate-900 mb-6">
                                {category}
                                <span className="ml-2 text-sm font-medium text-gray-500">
                                    (Monthly Rental)
                                </span>
                            </p>

                            {/* CARDS */}
                            <div className="grid -cols-1 grid-cols-2 lg:grid-cols-4 lg:gap-6 gap-2">
                                {items.map((item, i) => (
                                    <div
                                        key={i}
                                        className="border border-gray-200 rounded-xl bg-white text-center p-6 shadow-sm hover:shadow-md transition"
                                    >
                                        <h3 className="lg:text-lg text-base font-semibold uppercase text-slate-900">
                                            {item.tenant}
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-500">
                                            {item.location}
                                        </p>

                                        <p className="mt-4 lg:text-xl text-lg font-bold text-[#ed3a20] text-nowrap">
                                            {item.rental}
                                        </p>

                                        <button
                                            onClick={() => {
                                                setActive(item);
                                                setSelectedLocation(item.location);
                                                setIsFormOpen(true);
                                            }}
                                            className="mt-5 w-full rounded-full bg-[#ed3a20] text-white text-sm font-semibold px-4 py-2 hover:bg-red-700 transition"
                                        >
                                            Request Call
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CONTACT FORM */}
            {active && (
                <ContactForm
                    isOpen={isFormOpen}
                    onClose={() => setIsFormOpen(false)}
                    defaultService={`${active.category} – ${active.tenant}`}
                    defaultMessage={`Enquiry for:
                Tenant: ${active.tenant}
                Category: ${active.category}
                Location: ${selectedLocation}
                Please share more details.`}
                />
            )}

            <div className="relative mx-auto w-full py-8 bg-gray-100 px-4 sm:px-6 lg:px-16 grid lg:grid-cols-2 gap-5 lg:gap-12 items-center">
                <div>
                    <h2 className="text-xl lg:text-3xl font-bold text-slate-900 leading-tight">
                        Discover Strategic Growth Opportunities in Kundli with Anand Aggarwal Properties
                    </h2>

                    <p className="mt-4 text-lg text-slate-700 leading-relaxed">
                        Explore residential real estate and commercial properties in Kundli with Anand Aggarwal Properties, including pre-leased commercial assets, pre-leased properties, and pre-rented properties. Strategically located with excellent connectivity via NH-44 and KMP Expressway, Kundli offers high-growth opportunities in plotted developments, group housing, townships, and commercial hubs. <span className='lg:block hidden'> Our verified listings ensure strong infrastructure, long-term appreciation, and, for pre-rented properties, assured rental income—making it a smart, secure, and hassle-free investment.</span>
                    </p>

                    <a href="https://wa.me/+919810759498"
                        target="_blank"
                        className="mt-6 inline-flex items-center gap-2 bg-[#ed3a20] px-8 py-3 text-white rounded-full text-sm font-semibold hover:bg-red-700 transition"
                    >
                        Discuss Your Project <ArrowRight size={16} />
                    </a>
                </div>

                <div className="rounded-3xl overflow-hidden shadow-xl border border-red-100 bg-white">
                    <img
                        src={"/services/sonepat.jpg"}
                        alt={"Loading"}
                        className="h-52 w-full object-cover"
                    />

                    <div className="px-4 py-2">
                        <h3 className="text-lg font-semibold text-slate-900">
                            Selected Projects
                        </h3>
                        <p className="text-base text-slate-900">
                            Kundli – Ideal for Investment
                        </p>

                        <div className="mt-2 grid md:grid-cols-2 gap-4">
                            <a className="flex items-center space-x-2 cursor-pointer" href="tel:+919810759498">
                                <span className="flex-shrink-0 w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-bold"><Building size={30} /></span>
                                <span className="text-xl font-semibold text-slate-700">VIBS – Imperial Greens</span>
                            </a>

                            <a className="flex items-center space-x-2 cursor-pointer" href="tel:+919810759498">
                                <span className="flex-shrink-0 w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-bold"><Building size={30} /></span>
                                <span className="text-xl font-semibold text-slate-700">Newstone</span>
                            </a>

                            <a className="flex items-center space-x-2 cursor-pointer" href="tel:+919810759498">
                                <span className="flex-shrink-0 w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-bold"><Building size={30} /></span>
                                <span className="text-xl font-semibold text-slate-700">Parker</span>
                            </a>

                            <a className="flex items-center space-x-2 cursor-pointer" href="tel:+919810759498">
                                <span className="flex-shrink-0 w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-bold"><Building size={30} /></span>
                                <span className="text-xl font-semibold text-slate-700">Royal Green Realty</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* expertise */}
            <section id="expertise" className="bg-slate-50 border-t border-slate-100">
                <div className="mx-auto w-full  md:px-4 px-2 sm:px-6 lg:px-20 md:py-8 py-4">
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
                    <div className="mt-5 grid lg:gap-6 gap-2 grid-cols-2 lg:grid-cols-3">
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
                                    <p className="font-semibold text-xs sm:text-2xl">
                                        {exp.title}
                                    </p>

                                    <p className="capitalize font-semibold md:text-sm text-xs font-serif text-red-600 tracking-wide[0.2em]">
                                        {exp.subtitle}
                                    </p>

                                    <Link
                                        href="https://wa.me/+919810759498"
                                        className="mt-2 inline-block rounded-full text-white bg-[#ED3A20] px-4 py-1.5 text-xs font-semibold hover:bg-red-700 transition"
                                    >
                                        Know More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*  */}
            <section className="relative bg-center bg-cover bg-fixed py-5 bg-red-600" id='about'>
                <div className="relative mx-auto max-w-6xl">
                    <div className="grid md:gap-10 gap-5 md:grid-cols-4 grid-cols-2 text-center text-white">
                        {[
                            { label: "Years of experience", value: "40+" },
                            { label: "Satisfied clients", value: "100%" },
                            { label: "Clients ratting", value: "4.9/5" },
                            { label: "Legal properties", value: "100%" },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <p className="text-2xl md:text-4xl font-bold">{stat.value}</p>
                                <p className="mt-2 text-xs md:text-lg uppercase tracking-[0.16em] text-white">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* about us */}
            <section className="border-b border-slate-100 bg-white" >
                <div className="mx-auto lg:py-10 py-5 w-full px-4 sm:px-6 lg:px-22">
                    <div className="grid gap-5 lg:grid-cols-2 lg:gap-16 items-start">
                        <div>
                            <p className="text-[14px] font-semibold uppercase tracking-[0.3em] text-[#ED3A20]">
                                About Anand Aggarwal Properties
                            </p>
                            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-black">
                                Making real estate decisions simple, safe, and profitable.
                            </h2>
                            <p className="mt-4 text-sm sm:text-[20px] leading-relaxed text-black">
                                Established in 1985, Anand Aggarwal Properties is a trusted real estate advisory firm serving buyers and investors across Delhi/NCR. Built on the values of integrity, reliability, and transparent service, we help clients choose properties with confidence.
                            </p>
                            <p className="mt-3 text-sm sm:text-[20px] leading-relaxed text-black lg:block hidden">
                                We specialize in residential, commercial, industrial, and pre-leased properties including apartments, independent floors, plots, and investment-focused commercial spaces. Every opportunity is evaluated on location growth, return potential, legal clarity, and long-term suitability — so you don’t just buy property, you make a smart decision.
                            </p>
                        </div>

                        <div className="relative">
                            <PropertyCarousel />
                        </div>
                    </div>
                </div>
            </section>

            {/* cta */}
            <section className="md:py-5 py-2 bg-gray-100" id='contact-us'>
                <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center sm:justify-between gap-4">
                    <div className="text-center sm:text-left">
                        <h3 className="text-xl sm:text-3xl font-semibold text-black">
                            Discuss your project needs
                        </h3>
                        <p className="mt-3 text-sm sm:text-lg text-black max-w-xl">
                            Talk with our team and explore your options.
                        </p>
                    </div>

                    <a
                        href="tel:+919810759498"
                        className="inline-flex items-center rounded-full bg-[#ED3A20] px-9 py-3 text-sm sm:text-base font-semibold text-white shadow-md hover:bg-[#c73019] transition whitespace-nowrap"
                    >
                        Schedule a Call
                    </a>
                </div>
            </section>

            {/* contact us */}
            <div className='bg-white'>
                <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
                    <div className="grid gap-8 lg:grid-cols-2 lg:items-start bg-white">
                        <div className="space-y-5">
                            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-1">
                                <iframe
                                    title="Office Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.4263225717627!2d77.1114589!3d28.695709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03fae41231e3%3A0xe8f7b3a754c24c05!2sAnand%20Aggarwal%20Properties!5e1!3m2!1sen!2sin!4v1765172726967!5m2!1sen!2sin"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="h-72 w-full rounded-2xl border-0"
                                />
                            </div>

                            <div className="rounded-3xl w-full border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700 shadow-sm">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                                    Office Address
                                </p>

                                <p className="mt-2 text-lg font-medium text-black">
                                    B-27, Pushpanjali Enclave,

                                    Outer Ring Road, Pitampura, Delhi
                                </p>

                                <div className="mt-3 grid text-md  text-black">
                                    <p className="font-bold">
                                        <span className="font-bold">Mobile:</span>{" "}
                                        <a
                                            href="tel:+919810395051"
                                            className="hover:text-[#ED3A20] transition"
                                        >
                                            +91 9810395051
                                        </a>
                                        {" "},{" "}
                                        <a
                                            href="tel:+919891683399"
                                            className="hover:text-[#ED3A20] transition"
                                        >
                                            +91 9891683399
                                        </a>
                                    </p>
                                </div>



                                <p className="mt-2 font-bold">
                                    <span className="font-bold">Email:</span>{" "}
                                    <a
                                        href="mailto:anand_aggarwal_properties@yahoo.com"
                                        className="text-red-600 underline"
                                    >
                                        anandaggarwalproperties1@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                            <form className="space-y-5" onSubmit={handleSubmit}>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700">
                                            Full Name
                                        </label>
                                        <input
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            type="text"
                                            placeholder="Enter your name"
                                            required
                                            className="mt-2 w-full text-black rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#ED3A20]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700">
                                            Phone Number
                                        </label>
                                        <input
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            type="tel"
                                            placeholder="+91 -"
                                            maxLength={10}
                                            minLength={10}
                                            pattern="[0-9]{10}"
                                            required
                                            className="mt-2 w-full text-black rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#ED3A20]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700">
                                        Email
                                    </label>
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        placeholder="Enter email"
                                        required
                                        className="mt-2 w-full text-black rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#ED3A20]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700">
                                        Interested In
                                    </label>
                                    <select
                                        value={service}
                                        onChange={(e) => setService(e.target.value)}
                                        required
                                        className="mt-2 w-full text-black rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#ED3A20]"
                                    >
                                        <option value="">Select property type</option>
                                        <option>Residential Properties</option>
                                        <option>Industrial Properties</option>
                                        <option>Commercial & Pre-Leased Real Estate</option>
                                        <option>KUNDLI / SONEPAT</option>
                                        <option>DLF / Gurgaon Properties</option>
                                        <option>Farmhouses</option>

                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700">
                                        Message / Requirements
                                    </label>
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        rows={4}
                                        placeholder="Share budget, location & requirements..."
                                        required
                                        className="mt-2 w-full text-black rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#ED3A20]"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="mt-2 inline-flex items-center rounded-full bg-[#ED3A20] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 disabled:opacity-70 cursor-pointer"
                                    >
                                        {loading ? "Sending..." : "Submit Enquiry"}
                                    </button>

                                    {status && (
                                        <p
                                            className={`text-xs sm:text-sm font-medium ${status.startsWith("✅")
                                                ? "text-green-600"
                                                : "text-red-600"
                                                }`}
                                        >
                                            {status}
                                        </p>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <ContactForm isOpen={isFormOpen1} onClose={() => setIsFormOpen1(false)} />
    </>)
}
