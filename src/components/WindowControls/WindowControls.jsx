import React from "react";
import control_1 from "./Icons/control_1.svg";
import control_2 from "./Icons/control_2.svg";
import control_3 from "./Icons/control_3.svg";

export default function WindowControls() {
  return (
    <div className="mt-5 w-full">
      <span className="text-sm text-gray-600 font-medium  inline-block">
        CONTROLS
      </span>
      <br />
      <div className="grid grid-cols-3 gap-5 w-full mt-3">
        <button className="hover:shadow-lg w-16 h-16 rounded-md border  border-gray-300 p-2 cursor-pointer bg-white relative  focus:border-indigo-400 outline-none transition transition-duration-300 ease-out">
          <img
            src={control_1}
            alt=""
            className="w-12 absolute bottom-0 right-0 h-10 object-cover rounded-sm"
          />
        </button>

        <button className="hover:shadow-lg w-16 h-16 rounded-md border  border-gray-300 p-2 cursor-pointer bg-white relative  focus:border-indigo-400 outline-none transition transition-duration-300 ease-out">
          <img
            src={control_2}
            alt=""
            className="w-12 absolute bottom-0 right-0 h-10 object-cover rounded-sm"
          />
        </button>
        <button className="hover:shadow-lg w-16 h-16 rounded-md border  border-gray-300 p-2 cursor-pointer bg-white relative  focus:border-indigo-400 outline-none transition transition-duration-300 ease-out">
          <img
            src={control_3}
            alt=""
            className="w-12 absolute bottom-0 right-0 h-10 object-cover rounded-sm"
          />
        </button>
      </div>
    </div>
  );
}
