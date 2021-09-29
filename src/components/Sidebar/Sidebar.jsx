import React, { useContext } from "react";
import { Context } from "../../context/Context";
import Editor from "../Editor/Editor";
import Export from "../Export/Export";
import Theme from "../Theme/Theme";
import Window from "../Window/Window";
export default function Sidebar({ classList }) {
  const { menus, closeMenu, setMenus, setIsOpen } = useContext(Context);
  return (
    <div
      className={`z-10 top-16 transition-transform bg-white duration-700  ease-in-out sidebar h-vm w-80 border-gray-300  border-r p-7 overflow-y-auto fixed bottom-0 -left-0 shadow-2xl lgx:shadow-none ${classList}`}
    >
      <i
        onClick={() => closeMenu(menus, setMenus, setIsOpen)}
        className="w-7 lgx:hidden h-7 flex items-center justify-center absolute right-7 rounded-full border border-gray-300 ri-arrow-left-s-line text-gray-500"
      ></i>
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
