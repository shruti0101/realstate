export default function AboutSection() {


 const expertise = [
    {
      title: "Flats / Apartments",
      image:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Plots / Kothi",
      image:
        "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Independent Floors",
      image:
        "https://images.pexels.com/photos/1645221/pexels-photo-1645221.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Commercial Shops & Office Spaces",
      image:
        "https://images.pexels.com/photos/264797/pexels-photo-264797.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Pre-Rented Commercial Properties",
      image:
        "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Agricultural Land / Farmhouses",
      image:
        "https://images.pexels.com/photos/2406398/pexels-photo-2406398.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
   
  ];

  return (


    <>
     <section
      id="about"
      className="bg-white border-t border-slate-100"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-17">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
              About Us
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              A trusted real estate partner for modern buyers & investors.
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              We are a professional real estate advisory firm focused on
              residential and commercial properties in prime locations. Our
              team combines strong market knowledge with transparent processes
              to help you make confident property decisions.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              From shortlisting to site visits, negotiations and documentation,
              we manage the complete journey so you can focus on what matters
              most — choosing the right property.
            </p>

            {/* Points */}
            <div className="mt-6 space-y-2 text-sm text-slate-700">
              <div className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <p>Curated projects from verified, reputed developers.</p>
              </div>
              <div className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <p>Clear communication, transparent pricing and no hidden fees.</p>
              </div>
              <div className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <p>Support across buying, selling, leasing and investment.</p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition"
              >
                Schedule a Consultation
              </a>
              <p className="text-xs text-slate-500">
                Speak with our team to get project options based on your budget.
              </p>
            </div>
          </div>

          {/* Right: Visual / Stats */}
          <div className="space-y-6">
            {/* Image block (replace src with your project/office image) */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
              <div className="relative aspect-[4/3] w-full">
                <img
                  src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Modern real estate project"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/5 to-transparent" />
              </div>
            </div>

            {/* Simple stats row */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-lg font-semibold text-slate-900">10+ yrs</p>
                <p className="mt-1 text-xs text-slate-500">
                  Experience in real estate advisory
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-lg font-semibold text-slate-900">300+</p>
                <p className="mt-1 text-xs text-slate-500">
                  Successful transactions closed
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-lg font-semibold text-slate-900">4.9/5</p>
                <p className="mt-1 text-xs text-slate-500">
                  Average client satisfaction rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



{/* our expertise */}

    <section id="expertise" className="bg-slate-50 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 ">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
            Our Expertise
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Residential & Pre-Rented Commercial Specialists
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            We help you invest in the right property category based on your
            needs, budget & long-term goals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((exp, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-50 group-hover:opacity-60 transition" />
              </div>

              {/* Title + Button */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold text-sm sm:text-base">
                  {exp.title}
                </p>

                <a
                  href="#contact"
                  className="mt-2 inline-block rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-semibold hover:bg-emerald-700 transition"
                >
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    </>
   
  );
}
