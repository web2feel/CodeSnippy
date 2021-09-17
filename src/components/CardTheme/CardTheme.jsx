import React from "react";

export default function CardTheme() {
  return (
    <div className="mt-5 w-full">
      <span className="text-xs text-gray-600 font-medium mb-3 inline-block">
        CARD THEME
      </span>

      <br />
      <div className="flex w-full justify-start">
        <button className="w-14 h-14 mr-3 rounded-md shadow-xl  p-2 hover:shadow-lg  cursor-pointer  outline-none transition transition-duration-300 ease-out bg-indigo-600 text-white ">
          <div className="w-full h-full ri-sun-fill text-2xl flex items-center justify-center "></div>
        </button>
        <button className="w-14 h-14 mr-3 rounded-md border border-gray-300 p-2 hover:shadow-lg  text-gray-400cursor-pointer  outline-none transition transition-duration-300 ease-out ">
          <div className="w-full h-full ri-moon-fill text-2xl flex items-center justify-center "></div>
        </button>
      </div>
    </div>
  );
}
