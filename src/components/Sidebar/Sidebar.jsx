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
      className={`z-10  transition-transform duration-700  ease-in-out sidebar h-vm w-80 border-gray-300  border-r p-7 overflow-y-auto absolute -left-0 ${classList}`}
    >
      {menus.map((menu) => (
        <div key={menu.id}>
          {menu.id === "editor" && menu.selected && <Editor />}
          {menu.id === "theme" && menu.selected && <Theme />}
          {menu.id === "window" && menu.selected && <Window />}
          {menu.id === "export" && menu.selected && <Export />}
        </div>
      ))}
    </div>
  );
}
