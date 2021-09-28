import React from "react";
import Select from "../Inputs/Select/Select";

export default function Padding({ text, options }) {
  return (
    <div className="mt-5 w-full">
      <span className="text-sm text-gray-600 font-medium mb-3 inline-block">
        {text}
      </span>

      <br />
      <Select options={options} />
    </div>
  );
}
