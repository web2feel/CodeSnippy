import React, { createContext, useState } from "react";
import {
  background,
  codeLang,
  getPresets,
  codeTheme,
  controls,
  shadow,
  padding,
  type,
  family,
  size,
  lineHeight,
  allMenus,
} from "../data/data";
import { handleMenu } from "../helper/menu";
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
      padding,
      shadow,
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
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
