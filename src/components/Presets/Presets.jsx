import React from "react";
import image from "./8a6911ea-c7b9-4aa3-ba1a-d39daa5e670e.jpeg"
export default function Presets() {
  return (
    <div className="mt-5 w-full">
      <span className="text-xs text-gray-600 font-medium  inline-block">
        PRESETS
      </span>
      <br />
      <div className="grid grid-cols-3 gap-4 w-full mt-3">
        <button className="hover:shadow-lg w-20 h-20 rounded-md border border-gray-300 p-2 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out ">
          <div className="w-full h-full ri-add-fill text-2xl flex items-center justify-center text-gray-400"></div>
        </button>
        <button className="hover:shadow-lg w-20 h-20 rounded-md border border-gray-300 p-2 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out">
          <img src={image} alt="" className="w-full h-full object-cover rounded-sm" />
        </button>
        <button className="hover:shadow-lg w-20 h-20 rounded-md border border-gray-300 p-2 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out">
          <img src={image} alt="" className="w-full h-full object-cover rounded-sm" />
        </button>
        <button className="hover:shadow-lg w-20 h-20 rounded-md border border-gray-300 p-2 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out">
          <img src={image} alt="" className="w-full h-full object-cover rounded-sm" />
        </button>
        <button className="hover:shadow-lg w-20 h-20 rounded-md border border-gray-300 p-2 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out">
          <img src={image} alt="" className="w-full h-full object-cover rounded-sm" />
        </button>
            <button className="hover:shadow-lg w-20 h-20 rounded-md border border-gray-300 p-2 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out">
          <img src={image} alt="" className="w-full h-full object-cover rounded-sm" />
        </button>
        <button className="hover:shadow-lg w-20 h-20 rounded-md border border-gray-300 p-2 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out">
          <img src={image} alt="" className="w-full h-full object-cover rounded-sm" />
        </button>     <button className="hover:shadow-lg w-20 h-20 rounded-md border border-gray-300 p-2 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out">
          <img src={image} alt="" className="w-full h-full object-cover rounded-sm" />
        </button>     <button className="hover:shadow-lg w-20 h-20 rounded-md border border-gray-300 p-2 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out">
          <img src={image} alt="" className="w-full h-full object-cover rounded-sm" />
        </button>     <button className="hover:shadow-lg w-20 h-20 rounded-md border border-gray-300 p-2 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out">
          <img src={image} alt="" className="w-full h-full object-cover rounded-sm" />
        </button>     <button className="hover:shadow-lg w-20 h-20 rounded-md border border-gray-300 p-2 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out">
          <img src={image} alt="" className="w-full h-full object-cover rounded-sm" />
        </button>     <button className="hover:shadow-lg w-20 h-20 rounded-md border border-gray-300 p-2 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out">
          <img src={image} alt="" className="w-full h-full object-cover rounded-sm" />
        </button>
        
      </div>
    </div>
  );
}
