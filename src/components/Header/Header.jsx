import React, { useEffect, useState } from "react";

export default function Header() {
  return (
    <div className="w-full h-16 border-gray-300  border-b flex items-center justify-between fixed top-0 bg-white z-10 px-5 md:px-28">
      <span className="logo font-bold text-lg text-logo text-gray-800">
        CodeSnippy.
      </span>

      <button
        onClick={() =>
          window.open(
            "https://www.buymeacoffee.com/sooryakriz",
            "_blank" 
          )
        }
        className="w-36 h-12 outline-none"
      >
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
        />
      </button>
    </div>
  );
}
