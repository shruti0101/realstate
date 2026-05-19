"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

import { auth } from "@/utils/firebase";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // FORM STATES
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  // OTP STATES
  const [otp, setOtp] = useState("");
  const [showOtpBox, setShowOtpBox] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);

  // UNIQUE IDS
  const recaptchaId = "recaptcha-container-contact-section";

  // FIREBASE RECAPTCHA
  useEffect(() => {
    if (typeof window === "undefined") return;

    const initializeRecaptcha = async () => {
      try {
        // CLEAR OLD ONE
        if (window.contactSectionRecaptcha) {
          window.contactSectionRecaptcha.clear();
          window.contactSectionRecaptcha = null;
        }

        // CREATE NEW
        window.contactSectionRecaptcha = new RecaptchaVerifier(
          auth,
          recaptchaId,
          {
            size: "invisible",

            callback: () => {
              console.log("reCAPTCHA verified");
            },
          }
        );

        await window.contactSectionRecaptcha.render();

        console.log("reCAPTCHA initialized");
      } catch (error) {
        console.log("RECAPTCHA ERROR:", error);
      }
    };

    initializeRecaptcha();

    return () => {
      if (window.contactSectionRecaptcha) {
        window.contactSectionRecaptcha.clear();
        window.contactSectionRecaptcha = null;
      }
    };
  }, []);

  // SEND OTP
  const sendOTP = async () => {
    try {
      setLoading(true);

      if (!window.contactSectionRecaptcha) {
        toast.error("reCAPTCHA not initialized");
        return;
      }

      const appVerifier = window.contactSectionRecaptcha;

      const result = await signInWithPhoneNumber(
        auth,
        `+91${phone}`,
        appVerifier
      );

      setConfirmationResult(result);

      setShowOtpBox(true);

      toast.success("OTP Sent Successfully");
    } catch (error) {
      console.log("SEND OTP ERROR:", error);

      toast.error(error.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // VERIFY OTP
  const verifyOTP = async () => {
    try {
      setLoading(true);

      await confirmationResult.confirm(otp);

      setIsPhoneVerified(true);

      toast.success("Phone Verified Successfully");

      await submitForm();
    } catch (error) {
      console.log(error);

      toast.error("Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

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
        product: service,
        message,
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        payload
      );

      if (data?.success) {
        setStatus("✅ Message sent successfully!");

        toast.success("Form Submitted Successfully");

        // RESET FORM
        setName("");
        setPhone("");
        setEmail("");
        setService("");
        setMessage("");
        setOtp("");

        setShowOtpBox(false);
        setIsPhoneVerified(false);

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

    if (!phone || phone.length !== 10) {
      return toast.error("Enter Valid Phone Number");
    }

    // IF VERIFIED
    if (isPhoneVerified) {
      await submitForm();
      return;
    }

    // SEND OTP
    await sendOTP();
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">

        <form className="space-y-5" onSubmit={handleSubmit}>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name"
            required
            disabled={loading}
            className="w-full text-black border p-3 rounded-xl"
          />

          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            placeholder="9876543210"
            maxLength={10}
            required
            disabled={loading}
            className="w-full text-black border p-3 rounded-xl"
          />

          {/* UNIQUE RECAPTCHA CONTAINER */}
          <div id={recaptchaId}></div>

          {/* OTP BOX */}
          {showOtpBox && !isPhoneVerified && (
            <div className="space-y-3">

              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full text-black border p-3 rounded-xl"
              />

              <button
                type="button"
                onClick={verifyOTP}
                className="w-full bg-green-600 text-white py-3 rounded-xl"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </div>
          )}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            required
            disabled={loading}
            className="w-full text-black border p-3 rounded-xl"
          />

          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
            disabled={loading}
            className="w-full text-black border p-3 rounded-xl"
          >
            <option value="">Select property type</option>

            <option>Residential Properties</option>
            <option>Industrial Properties</option>
            <option>Commercial & Pre-Leased Real Estate</option>
            <option>KUNDLI / SONEPAT</option>
            <option>DLF / Gurgaon Properties</option>
            <option>Farmhouses</option>
          </select>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Share requirements..."
            required
            disabled={loading}
            className="w-full text-black border p-3 rounded-xl"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#ED3A20] text-white px-6 py-3 rounded-xl"
          >
            {loading
              ? "Loading..."
              : !showOtpBox
              ? "Send OTP"
              : !isPhoneVerified
              ? "Verify OTP First"
              : "Submit Enquiry"}
          </button>

          {status && (
            <p
              className={`text-sm font-medium ${
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