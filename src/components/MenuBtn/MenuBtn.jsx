import React, { useContext, useEffect } from "react";
import { Context } from "../../context/Context";

export default function MenuBtn({
  index,
  txt,
  icon,
  id,
  selected,
  handleMenu,
}) {
  const { menus, setMenus, setIsOpen } = useContext(Context);

  return (
    <div className="relative h-14 w-14 lgx:h-16 lgx:w-16">
      <input
        type="checkbox"
        name="menu"
        id={id}
        className="appearance-none transform  outline-none -translate-y-1/2 -translate-x-1/2 absolute left-1/2 top-1/2 w-full h-full "
        checked={selected}
        onChange={(e) => {
          let tempMenus = handleMenu(index, e.target.checked, menus);
          let isMenuSelected = false;
          tempMenus.forEach((menu) => {
            if (menu.selected) {
              isMenuSelected = true;
            }
          });
          setIsOpen(isMenuSelected);
          setMenus(tempMenus);
        }}
      />
      <label
        htmlFor={id}
        className="flex flex-col justify-center absolute top-0 left-0  items-center 400 text-gray-500  border-gray-300 w-full h-full border    rounded-md hover:shadow-xl outline-none transition duration-300 cursor-pointer p-2"
      >
        <i className={`${icon} text-base lgx:text-lg`}></i>
        <span className="text-xs lgx:text-sm">{txt}</span>
      </label>
    </div>
  );
}
