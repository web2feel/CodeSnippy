import React from "react";

export default function MenuBtn({ txt, action, icon, checkedInp ,id}) {
  return (
    <div className="relative h-16 w-16">
      <input
        type="radio"
        name="menu"
        id={id}
        className="appearance-none transform  outline-none -translate-y-1/2 -translate-x-1/2 absolute left-1/2 top-1/2 w-14 h-14 "
      />
      <label htmlFor={id} className="flex flex-col justify-center absolute top-0 left-0  items-center text-gray-500 w-full h-full border border-gray-300 rounded-md hover:shadow-xl outline-none transition duration-300 cursor-pointer p-2">
        <i className={`${icon} text-lg`}></i>
        <span className="text-sm">{txt}</span>
      </label>
    </div>
  );
}
