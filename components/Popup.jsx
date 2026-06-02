"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { auth } from "@/utils/firebase";

export default function ContactForm({
  isOpen,
  onClose,
  defaultMessage = "",
  defaultService = "",
}) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // FORM STATES
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [price, setPrice] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  // OTP STATES
  // const [otp, setOtp] = useState("");
  // const [showOtpBox, setShowOtpBox] = useState(false);
  // const [confirmationResult, setConfirmationResult] = useState(null);
  // const [isPhoneVerified, setIsPhoneVerified] = useState(false);

  /* 🔴 IMPORTANT: Sync defaults when popup opens */
  useEffect(() => {
    if (isOpen) {
      setMessage(defaultMessage || "");
      setService(defaultService || "");
      setStatus("");
    }
  }, [isOpen, defaultMessage, defaultService]);

  // FIREBASE RECAPTCHA
  // useEffect(() => {
  //   if (!isOpen) return;

  //   if (
  //     typeof window !== "undefined" &&
  //     !window.recaptchaVerifier
  //   ) {
  //     window.recaptchaVerifier = new RecaptchaVerifier(
  //       auth,
  //       "recaptcha-container",
  //       {
  //         size: "normal",
  //       }
  //     );

  //     window.recaptchaVerifier.render();
  //   }

  //   return () => {
  //     if (window.recaptchaVerifier) {
  //       window.recaptchaVerifier.clear();
  //       window.recaptchaVerifier = null;
  //     }
  //   };
  // }, [isOpen]);

  if (!isOpen) return null;

  const services = [
    "Select Service",
    "Residential Properties",
    "Industrial Properties",
    "Commercial & Pre-Leased Real Estate",
    "KUNDLI / SONEPAT",
    "DLF / Gurgaon Properties",
    "Farmhouses",
  ];

  // SEND OTP
  // const sendOTP = async () => {
  //   try {
  //     setLoading(true);

  //     const appVerifier = window.recaptchaVerifier;

  //     const result = await signInWithPhoneNumber(
  //       auth,
  //       "+91" + phone.trim(),
  //       appVerifier
  //     );

  //     setConfirmationResult(result);

  //     setShowOtpBox(true);

  //     toast.success("OTP Sent Successfully");
  //   } catch (error) {
  //     console.log(error);

  //     toast.error(error.message || "Failed to send OTP");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // VERIFY OTP
  // const verifyOTP = async () => {
  //   try {
  //     setLoading(true);

  //     await confirmationResult.confirm(otp);

  //     setIsPhoneVerified(true);

  //     toast.success("Phone Verified Successfully");

  //     await submitForm();
  //   } catch (error) {
  //     console.log(error);

  //     toast.error("Invalid OTP");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // SUBMIT FORM
  const submitForm = async () => {
    try {
      setLoading(true);

      const payload = {
        platform: "Real Estate Website",
        platformEmail: "anand_aggarwal_properties@yahoo.com",
        name,
        phone,
        email,
        place: "N/A",
        priceRange: price,
        product: service,
        message,
      };

      console.log("PAYLOAD:", payload);

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        payload
      );

      if (data?.success) {
        setStatus("✅ Message sent successfully!");

        toast.success("Form Submitted Successfully");

        // RESET FORM
        setName("");
        setEmail("");
        setPhone("");
        setPrice("");
        setService("");
        setMessage("");
        setOtp("");

        setShowOtpBox(false);
        setIsPhoneVerified(false);

        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log(error);

      setStatus("❌ Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phone || phone.length < 10) {
      return toast.error("Enter Valid Phone Number");
    }

    // IF VERIFIED ALREADY
    // if (isPhoneVerified) {
    //   await submitForm();
    //   return;
    // }

    // SEND OTP FIRST
    // await sendOTP();
     await submitForm();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-lg bg-stone-50 rounded-3xl shadow-2xl border border-red-100">
        
        {/* Header */}
        <div className="bg-[#bb2f2a] p-4 text-center relative rounded-t-3xl">
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
            disabled={loading}
            className="w-full px-4 py-3 border rounded-lg text-black"
          />

          {/* PHONE */}
          <div className="flex items-center border rounded-lg overflow-hidden">
            <span className="px-3 text-black bg-gray-100 h-full flex items-center">
              +91
            </span>

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              maxLength={10}
              pattern="[0-9]{10}"
              required
              disabled={loading}
              className="w-full px-4 py-3 text-black outline-none"
            />
          </div>

          {/* RECAPTCHA */}
          {/* <div id="recaptcha-container"></div> */}

          {/* OTP BOX */}
          {/* {showOtpBox && !isPhoneVerified && (
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg text-black"
              />

              <button
                type="button"
                onClick={verifyOTP}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </div>
          )} */}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            type="email"
            required
            disabled={loading}
            className="w-full px-4 py-3 border rounded-lg text-black"
          />

          <select
            value={price}
            required
            disabled={loading}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg text-black"
          >
            <option value="" disabled>
              Select Price Range
            </option>

            <option value="1-5cr">1 Cr – 5 Cr</option>
            <option value="5-10cr">5 Cr – 10 Cr</option>
            <option value="10cr+">10 Cr & Above</option>
          </select>

          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
            disabled={loading}
            className="w-full px-4 py-3 border rounded-lg text-black"
          >
            {services.map((srv, i) => (
              <option
                key={i}
                value={i === 0 ? "" : srv}
                disabled={i === 0}
              >
                {srv}
              </option>
            ))}
          </select>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            required
            disabled={loading}
            className="w-full px-4 py-3 border rounded-lg resize-none text-black"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#bb2f2a] text-white py-3 rounded-lg font-semibold"
          >
            {loading ? "Loading..." : "Submit Enquiry"}
          </button>

          {status && (
            <p
              className={`text-center text-sm font-medium mt-2 ${
                status.startsWith("✅")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}