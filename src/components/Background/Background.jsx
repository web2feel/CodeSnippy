import React from "react";

export default function Background() {
  return (
    <div className="mt-5 w-full">
      <span className="text-sm text-gray-600 font-medium inline-block">
        BACKGROUND
      </span>
      <br />
      <div className="grid grid-cols-4 gap-4 w-full mt-3">
        <button className="hover:shadow-lg w-14 h-14  rounded-md border border-gray-300 p-2 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out ">
          <div className="w-full h-full ri-blur-off-fill text-xl flex items-center justify-center text-gray-400"></div>
        </button>
        <button className="hover:shadow-lg w-14 h-14  rounded-md border border-gray-300 p-2 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out ">
          <div className="w-full h-full ri-image-add-fill text-xl flex items-center justify-center text-gray-400"></div>
        </button>

        <button className="hover:shadow-lg w-14 h-14  rounded-md border border-gray-300 p-2 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out ">
          <div className="w-full h-full ri-palette-fill text-xl flex items-center justify-center text-gray-400"></div>
        </button>
        <button className="hover:shadow-lg w-14 h-14  rounded-md border border-gray-300 p-2 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out">
          <div className="w-full h-full bg-gradient-to-br from-indigo-600 via-red-500 to-pink-500 rounded-sm"></div>
        </button>
        <button className="hover:shadow-lg w-14 h-14  rounded-md border border-gray-300 p-2 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out">
          <div className="w-full h-full bg-gradient-to-br from-pink-600 via-indigo-500 to-green-500 rounded-sm"></div>
        </button>
        <button className="hover:shadow-lg w-14 h-14  rounded-md border border-gray-300 p-2 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out">
          <div className="w-full h-full bg-gradient-to-br from-indigo-600 via-red-500 to-pink-500 rounded-sm"></div>
        </button>
        <button className="hover:shadow-lg w-14 h-14  rounded-md border border-gray-300 p-2 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out">
          <div className="w-full h-full bg-gradient-to-br from-indigo-600 via-red-500 to-pink-500 rounded-sm"></div>
        </button>
        <button className="hover:shadow-lg w-14 h-14  rounded-md border border-gray-300 p-2 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out">
          <div className="w-full h-full bg-gradient-to-br from-indigo-600 via-red-500 to-pink-500 rounded-sm"></div>
        </button>
      </div>
    </div>
  );
}
