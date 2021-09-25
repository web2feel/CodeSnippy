import React, { useContext, useEffect } from "react";
import Background from "../Background/Background";
import CardTheme from "../CardTheme/CardTheme";
import Presets from "../Presets/Presets";
import { Context } from "../../context/Context";
import Select from "../Inputs/Select/Select";

export default function Theme() {
  const { state, setState } = useContext(Context);

  return (
    <>
      <p className="font-semibold text-gray-800 flex items-center text-lg">
        <span className="text-xl ri-paint-fill font-medium "></span>&nbsp; Theme
        Settings
      </p>
      <div className="mt-5 w-full">
        <span className="text-sm text-gray-600 font-medium mb-3 inline-block">
          CODE THEME
        </span>
        <br />
        <Select
          w="w-full"
          options={state.theme.codeTheme}
        />
      </div>

      <div className="mt-5 w-full">
        <span className="text-sm text-gray-600 font-medium mb-3 inline-block">
          LANGUAGE
        </span>
        <br />
        <Select
          w="w-full"
          options={state.theme.codeLang}
        />
      </div>

      <CardTheme />
      <Background />
      <Presets />
    </>
  );
}
