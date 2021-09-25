import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import MenuBtn from "../MenuBtn/MenuBtn";
export default function FloatingCard() {
  const { menus, handleMenu, isOpen } = useContext(Context);
  return (
    <div
      className={` w-full fixed bottom-12 lg:bottom-20 flex items-center justify-center transform duration-700 px-6 lg:px-0 ${
        isOpen ? "lg:pl-80" : null
      }`}
    >
      <div className="w-full border bg-white  border-gray-300 h-20 lg:h-22 rounded-md shadow-2xl mx-auto  max-w-sm duration-700 transition flex  items-center justify-between px-3  ">
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
