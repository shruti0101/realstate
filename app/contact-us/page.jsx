export default function ContactSection() {
  return (
    <section id="contact" className="relative">
      
      {/* 📌 Top Banner Section */}
      <div className="relative h-[260px] sm:h-[340px] lg:h-[400px] w-full">
        <img
          src="/bannerbg.jpg" // Change to your actual image
          alt="Contact Banner"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 " />

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
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 ">
          
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
              <form className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#ED3A20]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 -"
                      maxLength={10}
                      minLength={10}
                      pattern="[0-9]{10}"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#ED3A20]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#ED3A20]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700">
                    Interested In
                  </label>
                  <select
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#ED3A20]"
                  >
                    <option value="">Select property type</option>
                    <option>Flats / Apartments</option>
                    <option>Plots / Kothi</option>
                    <option>Independent Floors</option>
                    <option>Commercial Shops & Office Spaces</option>
                    <option>Pre-rented Commercial Properties</option>
                    <option>Agricultural Land / Farmhouses</option>
                    <option>Industrial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700">
                    Message / Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Share budget, location & requirements..."
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#ED3A20]"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center rounded-full bg-[#ED3A20] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 cursor-pointer"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>

            {/* Map + Office info */}
            <div className="space-y-5">
              <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-1">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.4263225717627!2d77.1114589!3d28.695709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03fae41231e3%3A0xe8f7b3a754c24c05!2sAnand%20Aggarwal%20Properties!5e1!3m2!1sen!2sin!4v1765172726967!5m2!1sen!2sin"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                   className="h-72 w-full rounded-2xl border-0"
                 
                 
                />
              </div>

          <div className="rounded-3xl w-full border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700 shadow-sm">
  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
    Office Address
  </p>

  <p className="mt-2 text-sm font-medium text-slate-800">
    Delhi (Head Office) <br />
    B-27, Pushpanjali Enclave, <br />
    Outer Ring Road, Pitampura, Delhi
  </p>

  <div className="mt-3 grid  text-xs sm:grid-cols-2 text-black">
   <p className="font-bold">
  <span className="font-bold">Mobile:</span>{" "}
  <a href="tel:+919810395051" className="hover:text-[#ED3A20] transition">
    +91 9810395051
  </a>
  ,
  <a href="tel:+919899151090" className="hover:text-[#ED3A20] transition">
    +91 9899151090
  </a>
</p>

 
  
  </div>

   <p className="mt-2">
      <span className="font-semibold">Phone:</span>{" "}
      Ajay Aggarwal (B.E.) <a className="font-bold hover:text-[#ED3A20] transition" href="tel:+919810759498">+91 9810759498</a> 
    </p>

  <p className="mt-2 font-bold">
  <span className="font-bold">Email:</span>{" "}
  <a
    href="mailto:info@anandaggarwalproperties.com"
    className="text-red-600 underline"
  >
    info@anandaggarwalproperties.com
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
