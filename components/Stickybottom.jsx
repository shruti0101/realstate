import React from "react";

const Stickybottom = () => {
  return (
    <button
      type="button"
      className="
        fixed left-4 bottom-4 z-[9999]
        inline-flex items-center
        rounded-full bg-[#3AA424]
        px-6 py-3
        text-sm sm:text-base font-semibold
        text-white
        shadow-xl shadow-black/40
        hover:bg-[#009966] transition
      "
    >
      Latest Pre-rented Properties
    </button>
  );
};

export default Stickybottom;
