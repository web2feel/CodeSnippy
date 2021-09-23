import React, { useEffect } from "react";
import Font from "../Font/Font";
import Toggle from "../Inputs/Toggle/Toggle";
import Padding from "../Padding/Padding";

export default function Editor() {
  return (
    <>
      <p className="font-semibold text-gray-800 flex items-center text-lg">
        <span className="text-xl font-medium ri-code-box-fill "></span>&nbsp;
        Editor Settings
      </p>
      <Font />
      <div className="text-sm mt-2 text-gray-600 font-medium  border-gray-300 flex items-center justify-between">
        LINE NUMBER <Toggle />
      </div>
      <Padding text="LINE HEIGHT" />
    </>
  );
}
