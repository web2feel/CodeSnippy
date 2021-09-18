import React from "react";

export default function Radio({ icon, action, id ,checkedInp}) {
  return (
    <div className="w-14 h-14 relative mr-3 ">
      <input
        type="radio"
        id={id}
        name="theme"
        className="appearance-none transform  outline-none -translate-y-1/2 -translate-x-1/2 absolute left-1/2 top-1/2 w-14 h-14 "
        checked={checkedInp}
      />
      <label
        htmlFor={id}
        className="w-14 absolute top-0 left-0 h-14 rounded-md   p-2 hover:shadow-lg border border-gray-300 cursor-pointer  outline-none transition transition-duration-300 ease-out  text-gray-400 "
      >
        <div
          className={`w-full h-full ${icon} text-2xl flex items-center justify-center `}
        ></div>
      </label>
    </div>
  );
}
