"use client";

import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function ContactPopup() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  // ⏱ Auto Open After 2 Seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const services = ["Select Service","Pre-rented Commercial Properties", "Flats / Apartments", "Plots / Kothi", "Independent Floors", "Commercial Shops & Office Spaces","Agricultural Land / Farmhouses", "Industrial"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    try {
      const formData = {
        platform: "Real Estate Website",
        platformEmail: "info@anandaggarwalproperties.com",
        name,
        phone,
        email,
        product: service,
        message,
      };

      const { data } = await axios.post("https://brandbnalo.com/api/form/add", formData);

      if (data?.success) {
        setStatus("✅ Message sent successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setService("");
        setMessage("");

        setTimeout(() => router.push("/thankyou"), 500);
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus(`❌ ${error?.message || "Network error"}`);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 px-4">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-red-100">

        {/* Header */}
        <div className="bg-[#ed3a20] p-6 text-center relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white text-2xl hover:opacity-80 transition"
          >
            ✕
          </button>
          <h2 className="text-2xl font-bold text-white tracking-wide">Connect With Us</h2>
          <p className="text-white/90 mt-1 text-sm">Our experts will contact you shortly</p>
        </div>

        <div className="px-6 py-8">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-black placeholder-slate-500 focus:ring-2 focus:ring-[#ed3a20]"
              required
            />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              placeholder="Phone Number"
              maxLength={10}
              minLength={10}
              pattern="[0-9]{10}"
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-black focus:ring-2 focus:ring-[#ed3a20]"
              required
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-black focus:ring-2 focus:ring-[#ed3a20]"
              required
            />

            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-black focus:ring-2 focus:ring-[#ed3a20]"
              required
            >
              {services.map((srv, idx) => (
                <option
                  key={idx}
                  value={idx === 0 ? "" : srv}
                  disabled={idx === 0}
                  className="text-black"
                >
                  {srv}
                </option>
              ))}
            </select>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can we assist you?"
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-black h-24 resize-none focus:ring-2 focus:ring-[#ed3a20]"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#ed3a20] hover:bg-red-700 text-white rounded-lg text-base font-semibold transition shadow-md disabled:opacity-70"
            >
              {loading ? "Sending..." : "Submit Enquiry"}
            </button>

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
          </form>
        </div>

      </div>
    </div>
  );
}
