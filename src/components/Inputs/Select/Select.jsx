import React from "react";

export default function Select({ w, options }) {
  return (
    <select name="" id="" className={`${w} dark:bg-dark mb-5`}>
      {options.map((txt) => (
        <option value={txt}>{txt}</option>
      ))}
    </select>
  );
}
