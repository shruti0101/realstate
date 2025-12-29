import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white">
      {/* Top Section */}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Navigation + Socials */}
        <div className="flex flex-col items-center gap-6 sm:gap-4 sm:flex-row sm:justify-between">

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base font-semibold text-center">
            <Link href="/" className="hover:text-[#ED3A20] transition">Home</Link>
            <Link href="/about" className="hover:text-[#ED3A20] transition">About Us</Link>
            <Link href="/services" className="hover:text-[#ED3A20] transition">Services</Link>
            <Link href="/contact-us" className="hover:text-[#ED3A20] transition">Contact Us</Link>
          </nav>

          {/* Social Icons */}
          <div className="flex justify-center gap-3 sm:gap-4">
          <a
  href="https://www.facebook.com/profile.php?id=100064072301431"
  aria-label="Facebook"
  target="_blank"
  rel="noopener noreferrer"
  className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:scale-110 transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="h-5 w-5"
  >
    <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07C2 17.08 5.66 21.23 10.44 22v-6.99H7.9v-2.94h2.54V9.85c0-2.5 1.5-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45H15.2c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.94h-2.34V22C18.34 21.23 22 17.08 22 12.07z" />
  </svg>
</a>

        <a
  href="https://www.instagram.com/anandaggarwalproperties"
  aria-label="Instagram"
  target="_blank"
  rel="noopener noreferrer"
  className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white hover:scale-110 transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className="h-5 w-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 3h9a4.5 4.5 0 0 1 4.5 4.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
    />
    <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
  </svg>
</a>

          
           
          
          </div>

        </div>

        {/* Divider */}
        <div className="mt-6 border-t border-dotted border-slate-500 opacity-70" />

      </div>

      {/* Copyright */}
      <div className=" flex py-1 px-3 justify-between text-center text-xs sm:text-sm text-slate-300">
      <p>© 2025 Anand Aggarwal Properties — All Rights Reserved</p>  
      <p>Website Designed By Promozione Branding Pvt. Ltd. <a className="text-red-600 underline" href="https://promozionebranding.com/">Website Designing Company.</a> </p>
      </div>
    </footer> 
  );
};

export default Footer;
