import React from "react";

export default function CodeColorTheme() {
  return (
    <div className="mt-5 w-full">
    <span className="text-xs text-gray-600 font-medium mb-3 inline-block">COLOR THEME</span><br />
    <div className="flex items-center justify-start">
    <select name="" id="" className="w-full dark:bg-dark">
        <option value="">Fira Code</option>
        <option value="">Roboto Mono</option>
        <option value="">Fira Sans</option>
    </select>
    </div>
</div>
  );
}
