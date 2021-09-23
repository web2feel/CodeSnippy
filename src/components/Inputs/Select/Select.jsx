import React from "react";

export default function Select({ w, options }) {
  return (
    <select name="" id="" className={`${w}  mb-5 flex items-center text-base`}>
      {options.map((txt) => (
        <option value={txt}>{txt}</option>
      ))}
    </select>
  );
}
