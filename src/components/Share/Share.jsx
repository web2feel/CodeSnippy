import React from "react";

export default function Share({ txt, url }) {
  return (
    <div className="mt-5 w-full">
      <span className="text-sm text-gray-600 font-medium  inline-block">
        {txt}
      </span>
      <br />
      <div className="grid grid-cols-4 gap-3 w-full mt-3">
        <button className="hover:shadow-lg w-12 h-12  rounded-md text-gray-400  focus:border-opacity-0 focus:bg-indigo-600 focus:text-white border border-gray-300 p-2 cursor-pointer  outline-none transition transition-duration-300 ease-out ">
          <div className="w-full h-full ri-file-copy-fill text-xl flex items-center justify-center "></div>
        </button>
        {!url && (
          <button className="hover:shadow-lg w-12 h-12  rounded-md text-gray-400 focus:border-opacity-0 focus:bg-indigo-600 focus:text-white border border-gray-300 p-2 cursor-pointer  outline-none transition transition-duration-300 ease-out ">
            <div className="w-full h-full ri-download-2-fill text-xl flex items-center justify-center "></div>
          </button>
        )}
        <button className="hover:shadow-lg w-12 h-12  rounded-md text-gray-400 focus:border-opacity-0 focus:bg-indigo-600 focus:text-white  border border-gray-300 p-2 cursor-pointer  outline-none transition transition-duration-300 ease-out ">
          <div className="w-full h-full ri-whatsapp-fill text-xl flex items-center justify-center "></div>
        </button>
        <button className="hover:shadow-lg w-12 h-12  rounded-md text-gray-400 focus:border-opacity-0 focus:bg-indigo-600 focus:text-white  border border-gray-300 p-2 cursor-pointer  outline-none transition transition-duration-300 ease-out ">
          <div className="w-full h-full ri-telegram-fill text-xl flex items-center justify-center "></div>
        </button>
      </div>
    </div>
  );
}
