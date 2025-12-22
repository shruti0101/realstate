"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ContactForm({
  isOpen,
  onClose,
  defaultMessage = "",
  defaultService = "",
}) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  /* 🔴 IMPORTANT: Sync defaults when popup opens */
  useEffect(() => {
    if (isOpen) {
      setMessage(defaultMessage || "");
      setService(defaultService || "");
      setStatus("");
    }
  }, [isOpen, defaultMessage, defaultService]);

  if (!isOpen) return null;

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
      const payload = {
        platform: "Real Estate Website",
        platformEmail: "anand_aggarwal_properties@yahoo.com",
        name,
        phone,
        email,
        place: "N/A",
        product: service,
        message,
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        payload
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
      setStatus("❌ Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-lg bg-stone-50 rounded-3xl shadow-2xl border border-red-100">

        {/* Header */}
        <div className="bg-[#ed3a20] p-4 text-center relative rounded-t-3xl">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-white text-xl"
          >
            ✕
          </button>
          <h2 className="text-2xl font-bold text-white">
            Connect With Us
          </h2>
          <p className="text-white/90 text-sm">
            Our experts will contact you shortly
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 border rounded-lg"
          />

          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            maxLength={10}
            pattern="[0-9]{10}"
            required
            className="w-full px-4 py-3 border rounded-lg"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            type="email"
            required
            className="w-full px-4 py-3 border rounded-lg"
          />

          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
            className="w-full px-4 py-3 border rounded-lg"
          >
            {services.map((srv, i) => (
              <option key={i} value={i === 0 ? "" : srv} disabled={i === 0}>
                {srv}
              </option>
            ))}
          </select>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            required
            className="w-full px-4 py-3 border rounded-lg resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#ed3a20] text-white py-3 rounded-lg font-semibold"
          >
            {loading ? "Sending..." : "Submit Enquiry"}
          </button>

          {status && (
            <p className="text-center text-sm font-medium mt-2">
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
