import React, { useContext } from "react";
import DropShadow from "../DropShadow/DropShadow";
import Padding from "../Padding/Padding";
import WindowControls from "../WindowControls/WindowControls";
import { Context } from "../../context/Context";
export default function Window() {
  const { state, setState } = useContext(Context);
  return (
    <>
      <p className="font-semibold text-gray-800 flex items-center text-lg">
        <span className="text-xl ri-window-fill font-medium "></span>&nbsp;
        Window Settings
      </p>
      <WindowControls />
      <Padding text="PADDING VERTICAL" options={state.window.paddingVertical} />
      <Padding
        text="PADDING HORIZONTAL"
        options={state.window.paddingHorizontal}
      />
      <DropShadow />
    </>
  );
}
