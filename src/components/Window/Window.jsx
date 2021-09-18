import React from "react";
import DropShadow from "../DropShadow/DropShadow";
import Padding from "../Padding/Padding";
import WindowControls from "../WindowControls/WindowControls";

export default function Window() {
  return (
    <>
      <p className="font-medium text-gray-800 flex items-center">
        <span className="text-xl ri-window-fill "></span>&nbsp; Window Settings
      </p>
      <WindowControls />
      <Padding text="PADDING VERTICAL"/>
      <Padding text="PADDING HORIZONTAL"/>
<DropShadow/>
    </>
  );
}
