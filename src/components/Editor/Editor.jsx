import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import Font from "../Font/Font";
import Select from "../Inputs/Select/Select";
import Toggle from "../Inputs/Toggle/Toggle";

export default function Editor() {
  const {state,setState} = useContext(Context)
  return (
    <>
      <p className="font-semibold text-gray-800 flex items-center text-lg">
        <span className="text-xl font-medium ri-code-box-fill "></span>&nbsp;
        Editor Settings
      </p>
      <Font />
      <div className="text-sm mt-2 text-gray-600 font-medium   border-gray-300 flex items-center justify-between">
        LINE NUMBER <Toggle />
      </div>
      <div className="mt-5 w-full">
        <span className="text-sm text-gray-600 font-medium mb-3 inline-block">
          LINE HEIGHT
        </span>

        <br />
        <Select
          options={state.editor.lineHeight}
        />
      </div>{" "}
    </>
  );
}
