import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import MenuBtn from "../MenuBtn/MenuBtn";
export default function FloatingCard() {
  const { menus, handleMenu, isOpen } = useContext(Context);
  return (
    <div
      className={` w-full fixed bottom-20 flex items-center justify-center transform duration-700 ${
        isOpen ? "pl-80" : null
      }`}
    >
      <div className="w-full bg-white border border-gray-300 h-22 rounded-md shadow-2xl mx-auto  max-w-sm duration-700 transition flex  items-center justify-between px-3  ">
        {menus.map(({ txt, icon, id, selected }, index) => (
          <MenuBtn
            txt={txt}
            icon={icon}
            id={id}
            selected={selected}
            handleMenu={handleMenu}
            index={index}
            key={id}
          />
        ))}
      </div>
    </div>
  );
}
