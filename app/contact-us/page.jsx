export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-slate-50 border-t border-slate-100"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
            Contact Us
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Let’s discuss your property requirements.
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Share your details and our team will get in touch to suggest the
            best options in line with your budget, location preference and
            investment goals.
          </p>
        </div>

        {/* Grid: Form + Map */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Contact Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <form className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium uppercase tracking-wide text-slate-700"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500/50 focus:bg-white focus:ring"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-medium uppercase tracking-wide text-slate-700"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 -"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500/50 focus:bg-white focus:ring"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium uppercase tracking-wide text-slate-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter mail"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500/50 focus:bg-white focus:ring"
                />
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="block text-xs font-medium uppercase tracking-wide text-slate-700"
                >
                  Interested In
                </label>
                <select
                  id="interest"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500/50 focus:bg-white focus:ring"
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
                <label
                  htmlFor="message"
                  className="block text-xs font-medium uppercase tracking-wide text-slate-700"
                >
                  Message / Requirements
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Share your budget, preferred location and any specific requirement."
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-500/50 focus:bg-white focus:ring"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition"
                >
                  Submit Enquiry
                </button>
                <p className="text-[11px] text-slate-500">
                  We usually respond within a few working hours.
                </p>
              </div>
            </form>
          </div>

          {/* Google Map */}
          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-100 p-1 sm:p-2">
              <div className="relative overflow-hidden rounded-2xl">
                {/* Replace src with your own Google Maps embed link */}
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14012.612151540745!2d77.206532!3d28.628901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd35b3e042a5%3A0x4d0d0f0c6c1a5e1b!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-72 w-full border-0"
                />
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 px-4 py-4 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Office Address
              </p>
              <p className="mt-2 text-sm">
                Anand Aggarwal Properties<br />
                {/* Replace with your actual address */}
                Connaught Place, New Delhi, India
              </p>
              <div className="mt-3 grid gap-2 text-xs text-slate-600 sm:grid-cols-2">
                <p>
                  <span className="font-semibold">Phone:</span> +91-675465674
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
    </section>
  );
}
