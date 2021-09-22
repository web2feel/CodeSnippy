import React, { useContext } from "react";
import { Context } from "../../context/Context";
import Editor from "../Editor/Editor";
import Export from "../Export/Export";
import Theme from "../Theme/Theme";
import Window from "../Window/Window";
export default function Sidebar({ classList }) {
  const { menus } = useContext(Context);
  return (
    <div
      className={`z-10 transition duration-700 ease-in-out sidebar h-vm w-80 border-gray-300 border-r p-7 overflow-y-auto absolute -left-0 ${classList}`}
    >
      {menus[0].id === "editor" && menus[0].selected && (
        <Editor />
      )}
      {menus[1].id === "theme" && menus[1].selected && (
        <Theme />
      )}
      {menus[2].id === "window" && menus[2].selected && (
        <Window />
      )}
      {menus[3].id === "export" && menus[3].selected && (
        <Export />
      )}
    </div>
  );
}
