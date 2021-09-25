export const handleMenu = (key, value, menus) => {
  let tempMenus = [...menus];
  tempMenus.forEach((menu) => {
    menu.selected = false;
  });
  tempMenus[key].selected = value;
  return tempMenus;
};

export const closeMenu = (menus, setMenus, setIsOpen) => {
  let tempMenus = [...menus];
  tempMenus.forEach((menu) => {
    menu.selected = false;
  });
  setIsOpen(false);
  setMenus(tempMenus);
};
