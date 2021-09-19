import React from "react";
import Background from "../Background/Background";
import CardTheme from "../CardTheme/CardTheme";
import Select from "../Select/Select";
import Presets from "../Presets/Presets";

export default function Theme() {
  return (
    <>
      <p className="font-semibold text-gray-800 flex items-center text-lg">
        <span className="text-xl ri-paint-fill font-medium "></span>&nbsp; Theme Settings
      </p>
      <Select title="CODE THEME" />
      <Select title="LANGUAGE" />
      <CardTheme/>
      <Background/>
      <Presets/>
    </>
  );
}
