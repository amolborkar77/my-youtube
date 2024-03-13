import React, { useState } from "react";

const Card = ({ menu = [] }) => {
  const [menuItems, setMenuItems] = useState([menu]);

  const handleArrowClick = (menu) => {
    const updatedMenu = {...menu, isOpen: true}
    setMenuItems((prevState) => [...prevState, [...updatedMenu.subMenu]]);
    console.log(updatedMenu);
  };

  const MenuCard = (menus) => {
    return menus.map((menuItem, menuId) => {
      console.log(menuItem)
      return <div key={menuId} className="w-[236px] bg-slate-300 m-5 p-4 rounded-lg">
        <h3>Info:</h3>
  
        {menuItem.map((menu, index) => (
          <div key={index}>
            <p className="p-2">Menu Name: {menu.menu_name}</p>
  
            {menu.subMenu && (
              <p className="flex flex-row p-2 border-b-2">
                Sub Menu:
                <button className="ml-20" onClick={() => handleArrowClick(menu)}>
                  ➡️
                </button>
              </p>
            )}
          </div>
        ))}
      </div>
  });
  }

  return  MenuCard(menuItems) 

  
};

export default Card;
