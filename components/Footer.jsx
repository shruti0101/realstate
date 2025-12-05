
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white">
      {/* Top row: nav + socials */}
      <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Empty left spacer to visually center nav */}
          <div className="hidden sm:block w-16" />

          {/* Center nav */}
          <nav className="flex-1 flex justify-center gap-6 sm:gap-10 text-sm sm:text-base font-semibold">
            <Link href="#home" className="hover:text-[#009966] transition">
              Home
            </Link>
            <Link href="#about" className="hover:text-[#009966] transition">
              About Us
            </Link>
            <Link href="#services" className="hover:text-[#009966] transition">
              Services
            </Link>
            <Link href="#projects" className="hover:text-[#009966] transition">
              Projects
            </Link>
            <Link href="/contact-us" className="hover:text-[#009966] transition">
              Contact Us
            </Link>
          </nav>

          {/* Social icons on the right */}
          <div className="flex items-center gap-3">
            {/* Replace # with real links */}
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877F2] text-white text-lg"
            >
              f
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white text-lg"
            >
              ◎
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A66C2] text-white text-lg"
            >
              in
            </a>
            <a
              href="#"
              aria-label="X"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white text-lg"
            >
              X
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF0000] text-white text-lg"
            >
              ▶
            </a>
          </div>
        </div>

        {/* Dotted line under nav */}
        <div className="mt-4 border-t border-dotted border-slate-400" />
      </div>

      {/* Bottom copyright bar */}
      <div className="py-4 text-center text-xs sm:text-sm text-slate-200">
        © Copyright {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
