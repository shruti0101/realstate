"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { auth } from "@/utils/firebase";

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
  // const [otp, setOtp] = useState("");
  // const [showOtpBox, setShowOtpBox] = useState(false);
  // const [confirmationResult, setConfirmationResult] = useState(null);
  // const [isPhoneVerified, setIsPhoneVerified] = useState(false);

  
// FIREBASE RECAPTCHA
// useEffect(() => {
//   if (typeof window === "undefined") return;

//   const initializeRecaptcha = async () => {
//     try {
//       // clear old verifier
//       if (window.contactRecaptchaVerifier) {
//         window.contactRecaptchaVerifier.clear();
//         window.contactRecaptchaVerifier = null;
//       }

//       // create new verifier
//       window.contactRecaptchaVerifier = new RecaptchaVerifier(
//         auth,
//         "contact-recaptcha-container",
//         {
//           size: "invisible",

//           callback: () => {
//             console.log("reCAPTCHA solved");
//           },
//         }
//       );

//       await window.contactRecaptchaVerifier.render();

//       console.log("reCAPTCHA initialized");
//     } catch (error) {
//       console.log("RECAPTCHA ERROR:", error);
//     }
//   };

//   initializeRecaptcha();

//   return () => {
//     if (window.contactRecaptchaVerifier) {
//       window.contactRecaptchaVerifier.clear();
//       window.contactRecaptchaVerifier = null;
//     }
//   };
// }, []);

  // SEND OTP
  // const sendOTP = async () => {
  //   try {
  //     setLoading(true);

  //   const appVerifier = window.contactRecaptchaVerifier;

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
        // setOtp("");

        // setShowOtpBox(false);
        // setIsPhoneVerified(false);
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

    // IF VERIFIED
    // if (isPhoneVerified) {
    //   await submitForm();
    //   return;
    // }

    // SEND OTP
    // await sendOTP();
    await submitForm();
  };

  return (
    <div className="bg-white">
      <h2 className="text-center text-[#B92F2A] font-bold text-2xl px-2  md:text-4xl my-3 md:my-5">Plan A Site Visit For
Commercial Real Estate Delhi

</h2>
      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
        
        <div className="flex flex-col-reverse lg:grid gap-8 lg:grid-cols-2 lg:items-start bg-white">



          {/* LEFT SIDE */}
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

              <div className="mt-3 grid text-md text-black">
                <p className="font-bold">
                  <span className="font-bold">Mobile:</span>{" "}
                  <a
                    href="tel:+919810327243"
                    className="hover:text-[#ED3A20] transition"
                  >
                    +91 9810327243
                  </a>
                  {" , "}
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

          {/* FORM */}
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
                    disabled={loading}
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
                    placeholder="9876543210"
                    maxLength={10}
                    minLength={10}
                    pattern="[0-9]{10}"
                    required
                    disabled={loading}
                    className="mt-2 w-full text-black rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#ED3A20]"
                  />
                </div>
              </div>

              {/* RECAPTCHA */}
         {/* <div id="contact-recaptcha-container"></div> */}

              {/* OTP BOX */}
              {/* {showOtpBox && !isPhoneVerified && (
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full text-black rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none"
                  />

                  <button
                    type="button"
                    onClick={verifyOTP}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
                  >
                    {loading ? "Verifying..." : "Verify OTP"}
                  </button>
                </div>
              )} */}

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
                  disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
                  className="mt-2 w-full text-black rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#ED3A20]"
                />
              </div>

              <div className="space-y-2">

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 inline-flex items-center rounded-full bg-[#bb2f2a] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 disabled:opacity-70 cursor-pointer"
                >
                   {loading ? "Loading..." : "Submit Enquiry"}
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
        </div>
      </div>
    </div>
  );
}