import React from "react";
import Background from "../Background/Background";
import CardTheme from "../CardTheme/CardTheme";
import CodeColorTheme from "../CodeColorTheme/CodeColorTheme";
import Font from "../Font/Font";

export default function Theme() {
  return (
    <>
      <p className="font-medium text-gray-800">
        <span className="ri-paint-fill"></span>&nbsp; Theme Settings
      </p>
      <Font />
      <CodeColorTheme/>
      <Background/>
      <CardTheme/>
    </>
  );
}
