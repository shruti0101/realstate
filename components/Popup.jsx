"use client";

import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function ContactPopup() {
  const formRef = useRef(null);
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

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

  // Auto-popup delay
  useEffect(() => {
    const t = setTimeout(() => setIsOpen(true), 2000);
    return () => clearTimeout(t);
  }, []);

  // FIXED CLOSE LOGIC — prevents double triggers
  const closePopup = () => {
    if (isClosing) return; // IMPORTANT FIX
    setIsClosing(true);

    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 400);
  };

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
        setStatus("Message sent successfully!");
        closePopup();
        setTimeout(() => router.push("/thankyou"), 500);

        setName("");
        setEmail("");
        setPhone("");
        setService("");
        setMessage("");
      } else {
        setStatus("Something went wrong. Try again.");
      }
    } catch (error) {
      setStatus(error?.message || "Network error");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 z-9999
        ${isClosing ? "animate-fadeOut" : "animate-fadeIn"}`}
      onClick={closePopup}
    >
      <div
        style={{ backgroundImage: "url(/formbg.avif)" }}
        className={`relative bg-cover bg-center w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-red-300
          ${isClosing ? "animate-slideDown" : "animate-slideUp"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div    onClick={closePopup} className="text-center p-6 ">
          <button
         
            className="   absolute top-4 right-4 text-white text-2xl hover:text-red-400 transition"
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold text-white drop-shadow">
            Connect With Us
          </h2>
          <div className="w-20 h-[3px] bg-white mx-auto mt-2 mb-1 rounded-full opacity-80" />
          <p className="text-white/85 text-xs">A trusted advisor will call you shortly</p>
        </div>

        <div className="relative px-6 pb-6 space-y-4 text-white">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input value={name} type="text" placeholder="Your Name" required
              onChange={(e) => setName(e.target.value)} className="formField" />
            <input value={phone} type="tel" placeholder="Phone Number" maxLength={10} minLength={10}
              pattern="[0-9]{10}" required onChange={(e) => setPhone(e.target.value)} className="formField" />
            <input value={email} type="email" placeholder="Email Address" required
              onChange={(e) => setEmail(e.target.value)} className="formField" />

            <select value={service} required className="formField"
              onChange={(e) => setService(e.target.value)}>
              {services.map((srv, i) => (
                <option key={i} value={i === 0 ? "" : srv} disabled={i === 0} className="text-black">
                  {srv}
                </option>
              ))}
            </select>

            <textarea value={message} required placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
              className="formField h-24 resize-none" />

            <button type="submit" disabled={loading}
              className="w-full py-3 rounded-xl bg-[#ed3a20] hover:bg-red-600 transition text-white font-semibold shadow-lg">
              {loading ? "Sending..." : "Submit Enquiry"}
            </button>
          </form>

          {status && (
            <p className="text-center text-sm bg-white/15 p-2 rounded-lg">{status}</p>
          )}
        </div>
      </div>

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
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; } to { opacity: 0; }
        }
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideDown {
          from { transform: translateY(0); opacity: 1; }
          to { transform: translateY(50px); opacity: 0; }
        }
        .animate-fadeIn { animation: fadeIn .35s ease-out forwards; }
        .animate-fadeOut { animation: fadeOut .35s ease-out forwards; }
        .animate-slideUp { animation: slideUp .4s ease-out forwards; }
        .animate-slideDown { animation: slideDown .4s ease-out forwards; }
      `}</style>
    </div>
  );
}
