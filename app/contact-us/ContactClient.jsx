"use client";
import React, { useState } from "react";
import axios from "axios";





export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

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

  return (
    <section id="contact" className="relative">
      {/* 📌 Top Banner Section */}
      <div className="relative h-[260px] sm:h-[340px] lg:h-[400px] w-full">
        <img
          src="/bannerbg.webp"
          alt="Contact Banner"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* Banner Heading */}
        <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
              Let’s Connect
            </h1>
            <p className="mt-3 text-sm sm:text-base text-white/90 max-w-lg mx-auto">
              We help you find the best residential and commercial investments
              in Delhi.
            </p>
          </div>
        </div>
      </div>

      {/* 📌 Content Section */}
      <div className="bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="max-w-2xl mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ED3A20]">
              Contact Us
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Let’s discuss your property requirements.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Share your details and our team will reach out with the right
              options based on your budget, location & investment goals.
            </p>
          </div>

          {/* Grid: Form + Map */}
          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-start">
            {/* Form */}
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
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#ED3A20]"
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
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#ED3A20]"
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
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#ED3A20]"
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
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#ED3A20]"
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
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#ED3A20]"
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
                      className={`text-xs sm:text-sm font-medium ${
                        status.startsWith("✅")
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

            {/* Map + Office info */}
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
          </div>
        </div>
      </div>
    </section>
  );
}
