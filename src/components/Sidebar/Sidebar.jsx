import React from "react";
import Editor from "../Editor/Editor";
import Export from "../Export/Export";
import Theme from "../Theme/Theme";
import Window from "../Window/Window";

export default function Sidebar({ classList }) {
  return (
    <div
      className={`z-10 transition duration-700 ease-in-out sidebar h-vm w-80 border-gray-300 border-r p-7 overflow-y-auto absolute -left-0 ${classList}`}
    >
      {/* <Editor /> */}
      {/* <Theme /> */}
      <Window />
      {/* <Export/> */}
    </div>
  );
}
