import React from "react";
import DropShadow from "../DropShadow/DropShadow";
import Padding from "../Padding/Padding";
import WindowControls from "../WindowControls/WindowControls";

export default function Window({ classList }) {
  return (
    <div className={classList}>
      <p className="font-semibold text-gray-800 flex items-center text-lg">
        <span className="text-xl ri-window-fill font-medium "></span>&nbsp; Window Settings
      </p>
      <WindowControls />
      <Padding text="PADDING VERTICAL"/>
      <Padding text="PADDING HORIZONTAL"/>
<DropShadow/>
</div>
  );
}
