import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white">
      {/* Top Section */}
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">

        {/* Navigation + Socials */}
        <div className="flex flex-col items-center gap-6 sm:gap-4 sm:flex-row sm:justify-between">

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base font-semibold text-center">
            <Link href="/" className="hover:text-[#ED3A20] transition">Home</Link>
            <Link href="/about" className="hover:text-[#ED3A20] transition">About Us</Link>
            <Link href="/services" className="hover:text-[#ED3A20] transition">Services</Link>
            <Link href="/projects" className="hover:text-[#ED3A20] transition">Projects</Link>
            <Link href="/contact-us" className="hover:text-[#ED3A20] transition">Contact Us</Link>
          </nav>

          {/* Social Icons */}
          <div className="flex justify-center gap-3 sm:gap-4">
            <a href="https://www.facebook.com/profile.php?id=100064072301431" aria-label="Facebook"
              className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white font-bold hover:scale-110 transition">
              f
            </a>
            <a href="https://www.instagram.com/anandaggarwalproperties" aria-label="Instagram"
              className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white font-bold hover:scale-110 transition">
              ◎
            </a>
          
           
          
          </div>

        </div>

        {/* Divider */}
        <div className="mt-6 border-t border-dotted border-slate-500 opacity-70" />

      </div>

      {/* Copyright */}
      <div className="py-3 text-center text-xs sm:text-sm text-slate-300">
        © {new Date().getFullYear()} Anand Aggarwal Properties — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
