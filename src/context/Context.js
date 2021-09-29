import React, { createContext, useState } from "react";
import {
  background,
  codeLang,
  getPresets,
  codeTheme,
  controls,
  shadow,
  type,
  family,
  size,
  lineHeight,
  allMenus,
  URLPermission,
  border
} from "../data/data";
import { handleMenu, closeMenu } from "../helper/menu";
export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  let [state, setState] = useState({
    fileName: "untitled",
    code: ``,
    theme: {
      background,
      codeTheme,
      codeLang,
      cardTheme: "light",
      presets: getPresets,
    },
    window: {
      controls,
      shadow,
      border
    },
    editor: {
      font: {
        family,
        size,
        type,
      },
      lineHeight,
      lineNumber: true,
    },
    export: {
      URLPermission,
    },
  });
  const [menus, setMenus] = useState(allMenus);
  const [isOpen, setIsOpen] = useState(false);
  const value = {
    state,
    setState,
    menus,
    setMenus,
    handleMenu,
    isOpen,
    setIsOpen,
    closeMenu,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
