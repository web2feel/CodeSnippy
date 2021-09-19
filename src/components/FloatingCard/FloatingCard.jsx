import React, { useState } from "react";
import MenuBtn from "../MenuBtn/MenuBtn";

export default function FloatingCard() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={` w-full fixed bottom-20 flex items-center justify-center  ${
        isOpen ? "pl-80" : null
      }`}
    >
      <div className="w-full bg-white border border-gray-300 h-22 rounded-md shadow-2xl mx-auto  max-w-sm duration-700 transition flex  items-center justify-between px-3  ">
        <MenuBtn txt="Theme" icon={"ri-paint-fill"} id="theme" />
        <MenuBtn txt="Editor" icon={"ri-code-box-fill"} id="editor" />
        <MenuBtn txt="Window" icon={"ri-window-fill"} id="window" />
        <MenuBtn txt="Export" icon={"ri-share-forward-fill"} id="export" />
      </div>
    </div>
  );
}
