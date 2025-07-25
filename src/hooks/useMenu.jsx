import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setUseMenu] = useState([]);
  useEffect(() => {
    const menuData = async () => {
      const res = await fetch("/public/menu.json");
      const data = await res.json();
      setUseMenu(data);
    };
    menuData();
  }, []);
  return [menu];
};
export default useMenu;
