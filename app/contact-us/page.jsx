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
              in Delhi-NCR.
            </p>
          </div>
        </div>
      </div>

      {/* 📌 Content Section */}
      <div className="bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 ">
          
          {/* Heading */}
          <div className="max-w-2xl mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
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
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 -"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
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
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700">
                    Interested In
                  </label>
                  <select
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
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
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14012.612151540745!2d77.206532!3d28.628901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd35b3e042a5%3A0x4d0d0f0c6c1a5e1b!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="h-72 w-full rounded-2xl border-0"
                  loading="lazy"
                />
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Office Address
                </p>
                <p className="mt-3 text-sm font-medium text-slate-800">
                  Anand Aggarwal Properties <br />
                  Connaught Place, New Delhi
                </p>

                <div className="mt-3 grid gap-2 text-xs sm:grid-cols-2 text-slate-600">
                  <p>
                    <span className="font-semibold">Phone:</span>{" "}
                    +91 98990 58882
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    info@anandaggarwalproperties.com
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
