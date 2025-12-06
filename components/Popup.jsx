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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    "Select Service",
    "Pre-rented Commercial Properties",
    "Flats / Apartments",
    "Plots / Kothi",
    "Independent Floors",
    "Commercial Shops & Office Spaces",
    "Agricultural Land / Farmhouses",
    "Industrial",
  ];

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

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData
      );

      if (data?.success) {
        setStatus("✅ Message sent successfully!");
        setTimeout(() => router.push("/thankyou"), 600);
        setName("");
        setEmail("");
        setPhone("");
        setService("");
        setMessage("");
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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 z-[9999] animate-fadeIn">
      
      <div
        style={{ backgroundImage: "url(/formbg.avif)" }}
        className="relative bg-cover bg-center w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-red-300 animate-slideUp"
      >
        {/* Overlay on bg for better readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Header */}
        <div className="relative p-6 text-center ">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white/90 text-2xl hover:text-white transition"
          >
            ✕
          </button>
          <h2 className="text-2xl font-bold text-white tracking-wide drop-shadow">
            Connect With Us
          </h2>
          <div className="w-20 h-[3px] bg-white mx-auto mt-2 mb-1 rounded-full opacity-80" />
          <p className="text-white/85 text-xs font-medium">
            A trusted advisor will call you shortly
          </p>
        </div>

        {/* Form Content */}
        <div className="relative px-6 pb-4 space-y-4 text-white">

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your Name"
              className="formField"
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
              className="formField"
              required
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email Address"
              className="formField"
              required
            />

            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="formField"
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
              placeholder="Message"
              className="formField h-24 resize-none"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-[#ed3a20] hover:bg-red-600 transition text-white font-semibold shadow-lg disabled:opacity-70"
            >
              {loading ? "Sending..." : "Submit Enquiry"}
            </button>
          </form>

          {status && (
            <p
              className={`text-center text-sm font-medium rounded-lg py-2 ${
                status.startsWith("✅")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {status}
            </p>
          )}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .formField {
          width: 100%;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.45);
          color: #fff;
          padding: 12px 14px;
          border-radius: 10px;
          font-size: 0.92rem;
          outline: none;
          transition: all 0.2s ease;
        }
        .formField::placeholder {
          color: rgba(255, 255, 255, 0.75);
        }
        .formField:focus {
          border-color: #ed3a20;
          background: rgba(255, 255, 255, 0.18);
          box-shadow: 0 0 0 2px rgba(237, 58, 32, 0.35);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.45s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
