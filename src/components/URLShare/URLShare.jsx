import React from "react";

export default function URLShare() {
  return (
    <div className="mt-5 w-full">
      <span className="text-sm text-gray-600 font-medium  inline-block">
        URL
      </span>
      <br />
      {/* <button className="w-full h-10 mt-2 rounded-md flex items-center justify-center outline-none hover:shadow-lg transition duration-300 ease-in text-white bg-indigo-600 focus:ring ring-indigo-300">
        <i className="ri-link pr-2"></i>Generate
      </button> */}

      <div className="mt-2">
      <input type="text" className="w-full h-10 border border-gray-300 outline-none rounded-md px-3 text-base text-gray-600 font-Blinker" readOnly value="https://codesnippy.sooryakriz.com/wq342-32hj3-324h2"/>
      </div>

    </div>
  );
}
