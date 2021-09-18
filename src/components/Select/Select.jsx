import React from "react";

export default function CodeColorTheme({title}) {
  return (
    <div className="mt-5 w-full">
    <span className="text-xs text-gray-600 font-medium mb-3 inline-block">{title}</span><br />
    <div className="flex items-center justify-start">
    <select name="" id="" className="w-full dark:bg-dark">
        <option value="">Monokai</option>
        <option value="">One dark pro</option>
        <option value="">Github Theme</option>
    </select>
    </div>
</div>
  );
}
