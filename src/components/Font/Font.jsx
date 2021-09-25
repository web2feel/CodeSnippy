import React, { useContext } from "react";
import { Context } from "../../context/Context";
import Select from "../Inputs/Select/Select";

export default function Font() {
  const { state, setState } = useContext(Context);
  return (
    <div className="mt-5 w-full">
      <span className="text-sm text-gray-600 font-medium mb-3 inline-block">
        TEXT
      </span>
      <br />
      <Select options={state.editor.font.family} />
      <div className="flex items-center justify-between w-full">
        <Select classList="mr-2" options={state.editor.font.type} />
        <Select classList="ml-2" options={state.editor.font.size} />
      </div>
    </div>
  );
}
