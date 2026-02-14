"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { Building2, Laptop2, Globe, Rocket, Users, Briefcase, Landmark, MapPin, Users2, Factory, Cpu } from "lucide-react";
import Link from "next/link";
import CitySection from "@/components/CitySection";
import ServicesMarquee from "@/components/Marquee";
import ContactForm from "@/components/Form";

export default function CityPage() {
    const params = useParams();

    const cityName = params?.city?.includes("-in-")
        ? params.city.split("-in-")[1].split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") : "India";

    const projects = [
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
        {
            category: "Retail",
            tenant: "Bar Achieve",
            location: "Gurgaon",
            rental: "₹1.98 L / Month",
        },
        {
            category: "Retail",
            tenant: "Sumsung",
            location: "Ghaziabad",
            rental: "5 L / Month",
        },
    ];

    const projects1 = [
        {
            category: "Healthcare",
            tenant: "Hospital",
            location: "Delhi",
            rental: "₹23.00 L / Month",
        },
        {
            category: "Healthcare",
            tenant: "Hospital",
            location: "Delhi",
            rental: "₹27.00 L / Month",
        },
        {
            category: "Healthcare",
            tenant: "Hospital",
            location: "Gurgaon",
            rental: "₹14.00 L / Month",
        },
        {
            category: "Healthcare",
            tenant: "Hospital",
            location: "Delhi",
            rental: "₹27.00 L / Month",
        },
    ];

    const projects2 = [
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
        {
            category: "Independent Buildings",
            tenant: "Tata Westsite",
            location: "Model Town",
            rental: "₹26.00 L / Month",
        },
    ];

    const expertise = [
        {
            title: "Residential Properties",
            image: "/services/1.webp",

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
            image: "/services/sonepat.webp",

            subtitle: "good for investment",
        },
        {
            title: "Gurgaon Properties",
            image: "/hero2.webp",

            subtitle: "apartments/kothi/plots",
        },

        {
            title: "Farmhouses",
            image: "/services/farmhouse.webp",
            subtitle: "all over delhi NCR",
        },
    ];

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

    const faqs = [
        {
            q: `What are Pre-Leased Properties in ${cityName}?`,
            a: `Pre-Leased Properties in ${cityName} are spaces that are already occupied under an active lease agreement at the time of purchase. These properties come with an existing tenant and structured lease documentation.`
        },
        {
            q: `What are Pre-Rented Properties in ${cityName}?`,
            a: `Pre-Rented Properties in ${cityName} refer to properties that are already generating rent through an ongoing tenant agreement. The terms “pre-leased” and “pre-rented” are commonly used interchangeably.`
        },
        {
            q: `Are Pre-Leased and Pre-Rented Properties in ${cityName} the same?`,
            a: `Yes, in most cases both terms describe properties that are already occupied and operating under a formal lease agreement. The terminology may vary, but the structure remains similar.`
        },
        {
            q: `What documents should be checked before purchasing a pre-leased property in ${cityName}?`,
            a: `Buyers should review ownership documents, the registered lease agreement, lock-in period, lease tenure, escalation clauses, security deposit details, and renewal conditions before proceeding.`
        },
        {
            q: `Are lease agreements verified before transaction in ${cityName}?`,
            a: `Yes, lease agreements are carefully reviewed to ensure clarity regarding terms, duration, and tenant obligations before the property transfer process is completed.`
        },
        {
            q: `Where are Pre-Leased Properties in ${cityName} usually located?`,
            a: `Pre-leased and pre-rented properties are typically situated in established market areas, main roads, and active streets within ${cityName} where business activity is ongoing.`
        },
        {
            q: `Is financing available for Pre-Leased Properties in ${cityName}?`,
            a: `Loan options may be available through banks and financial institutions, subject to eligibility criteria and documentation requirements.`
        },
        {
            q: `Does Anand Aggarwal Properties assist with documentation and registration in ${cityName}?`,
            a: `Yes, Anand Aggarwal Properties provides support with lease review, documentation verification, and registration coordination for Pre-Leased and Pre-Rented Properties in ${cityName}.`
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);
    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const [isFormOpen1, setIsFormOpen1] = useState(false);

    return (<>
        {/* Hero */}
        <section
            style={{
                backgroundImage: "url('/delhi.webp')",
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat",
            }}
            className="py-30 relative z-10"
        >
            <div className="absolute inset-0 bg-gray-900/60" />

            <h1 className="text-center font-serif leading-snug relative font-bold text-white text-2xl px-5 md:py-14 capitalize md:text-6xl">
                Pre-Leased Properties in {cityName}
            </h1>
        </section>

        {/* PreLeased */}
        <section className="mx-auto lg:px-15 px-5 py-8 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-3 text-black">
                        Pre-Leased Properties in {cityName}
                    </h1>

                    <p className="text-black mb-2">
                        <strong> Pre-leased properties in {cityName}</strong> are spaces that are already rented out under an active lease agreement at the time of purchase. These properties come with an existing tenant and clearly defined lease terms, making them structured and ready for transfer.
                    </p>

                    <p className="text-black mb-2">
                        In {cityName}, <strong>pre-leased properties</strong> are commonly located in established market areas and well-developed streets with consistent business activity. They are typically occupied by retail outlets, offices, banks, clinics, and service providers operating under formal agreements.
                    </p>

                    <h3 className="font-bold mb-1 text-black">
                        Key characteristics of pre-leased properties in {cityName} include:
                    </h3>

                    <ul className="space-y-1 text-black">
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                            <span>Active lease agreements at the time of transaction</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                            <span>Defined lock-in periods and lease tenure</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                            <span>Pre-agreed escalation clauses</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                            <span>Security deposit arrangements</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                            <span>Clearly documented renewal terms</span>
                        </li>
                    </ul>
                </div>

                <div className="w-full h-full">
                    <img
                        src="/services/2.webp"
                        alt="Office Workstation"
                        className="w-full h-[26rem] object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>

        <ServicesMarquee />

        {/* Retail */}
        <section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100">
            <div>
                <p className="text-2xl font-bold text-slate-900 mb-6">
                    Retail
                    <span className="ml-2 text-sm font-medium text-gray-500">
                        (Rent)
                    </span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((item, i) => (
                        <div
                            key={i}
                            className="border border-gray-200 rounded-xl bg-white text-center p-6 shadow-sm hover:shadow-md transition"
                        >
                            <h3 className="text-lg font-semibold uppercase text-slate-900">
                                {item.tenant}
                            </h3>

                            <p className="mt-1 text-sm text-gray-500">
                                {item.location}
                            </p>

                            <p className="mt-4 text-xl font-bold text-[#ed3a20]">
                                {item.rental}
                            </p>

                            <button
                                onClick={() => { setIsFormOpen1(true); }}
                                className="mt-5 w-full rounded-full bg-[#ed3a20] text-white text-sm font-semibold px-4 py-2 hover:bg-red-700 transition"
                            >
                                Request Call Back
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* preRented */}
        <section className="mx-auto lg:px-15 px-5 py-8 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-3 text-black">
                        Pre-Rented Properties in {cityName}
                    </h1>

                    <p className="text-black mb-2">
                        Pre-rented properties in <strong>{cityName}</strong> refer to spaces that are already generating rent through an existing tenant agreement. The term “pre-rented” is often used interchangeably with “pre-leased,” and both describe properties that are occupied and functioning at the time of sale
                    </p>

                    <p className="text-black mb-1">
                        Pre-rented properties in {cityName} are usually situated in active commercial pockets and well-connected areas. These properties are suitable for buyers who prefer spaces with:
                    </p>

                    <ul className="space-y-1 text-black">
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                            <span>Existing tenancy</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                            <span>Ongoing rental agreements</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                            <span>Structured documentation</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                            <span>Established usage</span>
                        </li>
                    </ul>
                </div>

                <div className="w-full h-full">
                    <img
                        src="/office/officeimg1.webp"
                        alt="Office Workstation"
                        className="w-full h-96 object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>

        {/* Cta */}
        <section className="bg-gradient-to-br from-red-800 via-red-700 to-red-600 py-10 px-4 text-white text-center">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-5">
                    Looking for Pre-Leased Properties in {cityName}?
                </h2>

                <p className="text-lg md:text-xl text-red-100 leading-relaxed mb-6">
                    Explore well-located and professionally managed{" "}
                    <span className="font-semibold">
                        Pre-Leased Properties in {cityName}
                    </span>{" "}
                    with <span className="font-semibold">Anand Aggarwal Properties</span>. We
                    help you find verified properties with clear documentation and
                    structured lease agreements for secure investments.
                </p>

                <div className="flex flex-wrap justify-center gap-5">
                    {/* Service Link */}
                    <a
                        href="/pre-rented"
                        className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-transparent hover:text-white hover:border hover:border-white transition-all duration-300"
                    >
                        Explore Verified Pre-Leased Properties Listings
                    </a>

                    {/* Popup Trigger */}
                    <button
                        onClick={() => { setIsFormOpen1(true); }}
                        className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-transparent hover:text-white hover:border hover:border-white transition-all duration-300"
                    >
                        Speak with Our Property Consultant Today
                    </button>
                </div>
            </div>
        </section>

        {/*  Healthcare */}
        <section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100">
            <div>
                <p className="text-2xl font-bold text-slate-900 mb-6">
                    Healthcare
                    <span className="ml-2 text-sm font-medium text-gray-500">
                        (Rent)
                    </span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects1.map((item, i) => (
                        <div
                            key={i}
                            className="border border-gray-200 rounded-xl bg-white text-center p-6 shadow-sm hover:shadow-md transition"
                        >
                            <h3 className="text-lg font-semibold uppercase text-slate-900">
                                {item.tenant}
                            </h3>

                            <p className="mt-1 text-sm text-gray-500">
                                {item.location}
                            </p>

                            <p className="mt-4 text-xl font-bold text-[#ed3a20]">
                                {item.rental}
                            </p>

                            <button
                                onClick={() => { setIsFormOpen1(true); }}
                                className="mt-5 w-full rounded-full bg-[#ed3a20] text-white text-sm font-semibold px-4 py-2 hover:bg-red-700 transition"
                            >
                                Request Call Back
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Independent Buildings  */}
        <section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100">
            <div>
                <p className="text-2xl font-bold text-slate-900 mb-6">
                    Independent Buildings
                    <span className="ml-2 text-sm font-medium text-gray-500">
                        (Rent)
                    </span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects2.map((item, i) => (
                        <div
                            key={i}
                            className="border border-gray-200 rounded-xl bg-white text-center p-6 shadow-sm hover:shadow-md transition"
                        >
                            <h3 className="text-lg font-semibold uppercase text-slate-900">
                                {item.tenant}
                            </h3>

                            <p className="mt-1 text-sm text-gray-500">
                                {item.location}
                            </p>

                            <p className="mt-4 text-xl font-bold text-[#ed3a20]">
                                {item.rental}
                            </p>

                            <button
                                onClick={() => { setIsFormOpen1(true); }}
                                className="mt-5 w-full rounded-full bg-[#ed3a20] text-white text-sm font-semibold px-4 py-2 hover:bg-red-700 transition"
                            >
                                Request Call Back
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* why choose */}
        <section className="mx-auto lg:px-15 px-5 py-8 bg-white">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    Why Choose Anand Aggarwal Properties for Pre-Leased Properties in {cityName}?
                </h2>

                <p className="text-lg text-black max-w-6xl mx-auto mb-5 leading-relaxed">
                    When purchasing <span className="font-semibold">Pre-Leased Properties in {cityName}</span>, selecting the right real estate partner is essential for a smooth and well-managed transaction.
                    At <span className="font-semibold">Anand Aggarwal Properties</span>, we specialize in handling pre-leased and pre-rented properties with complete professionalism, transparency, and documentation clarity.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="bg-white rounded-xl shadow-lg p-6 text-left hover:shadow-xl transition border">
                        <h3 className="text-xl font-semibold mb-4 text-red-600">
                            Detailed Lease Agreement Review
                        </h3>
                        <ul className="space-y-2 text-black">
                            <li>• Lock-in period</li>
                            <li>• Lease tenure</li>
                            <li>• Escalation clauses</li>
                            <li>• Security deposit terms</li>
                            <li>• Exit and renewal conditions</li>
                        </ul>
                        <p className="mt-4 text-sm text-black">
                            Every clause is clearly explained so you fully understand the terms before moving forward.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 text-left hover:shadow-xl transition border">
                        <h3 className="text-xl font-semibold mb-4 text-red-600">
                            100% Transparent Transactions
                        </h3>
                        <ul className="space-y-2 text-black">
                            <li>• Clear and structured pricing details</li>
                            <li>• No hidden costs</li>
                            <li>• Complete document verification</li>
                            <li>• Proper procedural guidance</li>
                        </ul>
                        <p className="mt-4 text-sm text-black">
                            Our approach ensures complete clarity and trust at every step.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 text-left hover:shadow-xl transition border">
                        <h3 className="text-xl font-semibold mb-4 text-red-600">
                            End-to-End Registration & Documentation
                        </h3>
                        <ul className="space-y-2 text-black">
                            <li>• Agreement drafting coordination</li>
                            <li>• Liaising with legal professionals</li>
                            <li>• Stamp duty & registration guidance</li>
                            <li>• Loan coordination support</li>
                        </ul>
                        <p className="mt-4 text-sm text-black">
                            We manage the entire process for a smooth and hassle-free experience.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 text-left hover:shadow-xl transition border">
                        <h3 className="text-xl font-semibold mb-4 text-red-600">
                            Post-Sale Assistance & Ongoing Support
                        </h3>
                        <ul className="space-y-2 text-black">
                            <li>• Lease-related coordination</li>
                            <li>• Documentation updates</li>
                            <li>• Property-related guidance</li>
                            <li>• {cityName} market updates</li>
                        </ul>
                        <p className="mt-4 text-sm text-black">
                            We focus on long-term relationships through reliability and consistent support.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Expertise */}
        <section className="bg-gray-100 border-t border-slate-100">
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
                                    href="https://wa.me/+919810395051"
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

        {/* why consider */}
        <section className="mx-auto lg:px-15 px-5 py-8 bg-white">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                    Who Should Consider Pre-Leased Properties in {cityName}?
                </h2>

                <p className="text-lg text-black max-w-6xl mx-auto mb-5 leading-relaxed">
                    <span className="font-semibold">Pre-Leased Properties in {cityName}</span> and{" "}
                    <span className="font-semibold">Pre-Rented Properties in {cityName}</span> are ideal for buyers
                    who prefer spaces with existing tenancy and active lease agreements. These properties are already
                    occupied and operational at the time of transaction, offering structured documentation and continuity.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="bg-gray-50 rounded-xl shadow-md p-6 text-left hover:shadow-xl transition border">
                        <h3 className="text-xl font-semibold mb-4 text-red-700">
                            Buyers Preferring Existing Tenancy
                        </h3>
                        <p className="text-black leading-relaxed text-base">
                            Individuals who want a property with an ongoing lease agreement may consider pre-leased or pre-rented
                            properties. Since a tenant is already in place, the property remains operational without requiring
                            immediate leasing arrangements.
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-xl shadow-md p-6 text-left hover:shadow-xl transition border">
                        <h3 className="text-xl font-semibold mb-4 text-red-700">
                            Those Seeking Structured Lease Documentation
                        </h3>
                        <p className="text-black leading-relaxed text-base">
                            Pre-leased and pre-rented properties come with clearly defined agreements outlining lease tenure,
                            lock-in period, escalation clauses, and renewal terms. Buyers who value documentation clarity often
                            prefer such properties.
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-xl shadow-md p-6 text-left hover:shadow-xl transition border">
                        <h3 className="text-xl font-semibold mb-4 text-red-700">
                            Buyers Looking for Operational Continuity
                        </h3>
                        <p className="text-black leading-relaxed text-base">
                            Because these properties are already occupied, they continue functioning without interruption.
                            This makes them suitable for those who prefer ready-to-transfer leased spaces.
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-xl shadow-md p-6 text-left hover:shadow-xl transition border">
                        <h3 className="text-xl font-semibold mb-4 text-red-700">
                            Individuals Expanding Property Holdings
                        </h3>
                        <p className="text-black leading-relaxed text-base">
                            Property owners who wish to add leased spaces within {cityName} may explore pre-leased and
                            pre-rented options due to the locality’s established and active environment.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* contact form */}
        <section className="relative overflow-hidden bg-white">
            <div
                className="pointer-events-none absolute inset-0 bg-cover bg-fixed bg-center"
                style={{
                    backgroundImage: "url('/contact.webp')",
                }}
            />

            <div className="pointer-events-none absolute inset-0 bg-black/50" />
            <div className="relative z-10 mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
                        Feel Free To Connect <span className="text-white">With Us.</span>
                    </h2>

                    <p className="mt-3 text-base sm:text-lg font-medium leading-relaxed text-white">
                        Reach us for your perfect residential or commercial investment
                        tailored to your needs.
                    </p>
                </div>

                <div className="mt-10 rounded-3xl border border-white/50 bg-white/85 backdrop-blur-xl">
                    <form onSubmit={handleSubmit} className="space-y-4 px-6 py-10 ">
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
                                    className={`text-center text-sm font-medium p-2 rounded-lg ${status.startsWith("✅")
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

        {/* FAQ */}
        <section className="mx-auto lg:px-15 px-5 py-8 bg-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
                Frequently Asked Questions – Pre-Leased Properties in {cityName}
            </h2>

            <p className="text-center text-gray-600 mb-5 max-w-5xl mx-auto">
                Find clear answers to common questions related to Pre-Leased and Pre-Rented
                Properties in {cityName}, including documentation, lease structure,
                registration, and investment considerations.
            </p>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                    >
                        <button
                            onClick={() => toggle(index)}
                            className="w-full flex justify-between items-center text-left p-5 focus:outline-none"
                        >
                            <span className="font-semibold text-gray-800">
                                {index + 1}. {faq.q}
                            </span>
                            <span className="text-red-600 text-xl font-bold">
                                {openIndex === index ? "−" : "+"}
                            </span>
                        </button>

                        {openIndex === index && (
                            <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                                {faq.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>

        <CitySection></CitySection>
        <ContactForm isOpen={isFormOpen1} onClose={() => setIsFormOpen1(false)} />
    </>)
}
