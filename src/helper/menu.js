export const handleMenu = (key, value, menus) => {
  let tempMenus = [...menus];
  tempMenus.forEach((menu) => {
    menu.selected = false;
  });
  tempMenus[key].selected = value;
  return tempMenus;
};
