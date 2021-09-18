import React from "react";
import Background from "../Background/Background";
import CardTheme from "../CardTheme/CardTheme";
import Select from "../Select/Select";
import Presets from "../Presets/Presets";

export default function Theme() {
  return (
    <>
      <p className="font-medium text-gray-800">
        <span className="ri-paint-fill"></span>&nbsp; Theme Settings
      </p>
      <Select title="CODE THEME" />
      <Select title="LANGUAGE" />
      <CardTheme/>
      <Background/>
      <Presets/>
    </>
  );
}
