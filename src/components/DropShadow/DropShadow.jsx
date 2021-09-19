import React from "react";

export default function DropShadow() {
  return (
    <div className="mt-5 w-full">
      <span className="text-sm text-gray-600 font-medium inline-block">
        BOX SHADOW
      </span>
      <br />
      <div className="grid grid-cols-4 gap-4 w-full mt-3">
        <button className="hover:shadow-lg w-14 h-14  rounded-md border border-gray-300 p-3 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out">
          <div className="w-full h-full bg-gray-100 shadow-sm rounded-sm"></div>
        </button>
        <button className="hover:shadow-lg w-14 h-14  rounded-md border border-gray-300 p-3 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out">
          <div className="w-full h-full bg-gray-100 shadow-md rounded-sm"></div>
        </button>
        <button className="hover:shadow-lg w-14 h-14  rounded-md border border-gray-300 p-3 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out">
          <div className="w-full h-full bg-gray-100 shadow-lg rounded-sm"></div>
        </button>
        <button className="hover:shadow-lg w-14 h-14  rounded-md border border-gray-300 p-3 cursor-pointer focus:border-indigo-400 outline-none transition transition-duration-300 ease-out">
          <div className="w-full h-full bg-gray-100 shadow-xl rounded-sm"></div>
        </button>
  
      </div>
    </div>
  );
}
