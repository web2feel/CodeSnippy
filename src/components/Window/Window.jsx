import React, { useContext } from "react";
import DropShadow from "../DropShadow/DropShadow";
import WindowControls from "../WindowControls/WindowControls";
import { Context } from "../../context/Context";
import Select from "../Inputs/Select/Select";
export default function Window() {
  const { state, setState } = useContext(Context);
  return (
    <>
      <p className="font-semibold text-gray-800 flex items-center text-lg">
        <span className="text-xl ri-window-fill font-medium "></span>&nbsp;
        Window Settings
      </p>
      <WindowControls />
      <div className="mt-5 w-full">
        <span className="text-sm text-gray-600 font-medium mb-3 inline-block">
          BORDER
        </span>

        <br />
        <Select
          options={state.window.border}
        />
      </div>{" "}
      <DropShadow />
    </>
  );
}
