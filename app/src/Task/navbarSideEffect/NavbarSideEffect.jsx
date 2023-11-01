import React, { useState } from 'react';

const Navbar = () => {
  const [menuItems, setMenuItems] = useState([
    { label: 'Home', subMenu: null },
    {
      label: 'Services',
      subMenu: [
        { label: 'Service 1', subMenu: null },
        { label: 'Service 2', subMenu: null },
        { label: 'Service 3', subMenu: null },
      ],
    },
    {
      label: 'Products',
      subMenu: [
        { label: 'Product 1', subMenu: null },
        { label: 'Product 2', subMenu: null },
        {
          label: 'Product 3',
          subMenu: [
            { label: 'SubProduct 1', subMenu: null },
            { label: 'SubProduct 2', subMenu: null },
          ],
        },
      ],
    },
  ]);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  const renderSubMenu = (subMenu) => {
    if (!subMenu) return null;
    return (
      <ul className="sub-menu">
        {subMenu.map((subMenuItem, index) => (
          <li key={index} className="sub-menu-item">
            {subMenuItem.label}
            {renderSubMenu(subMenuItem.subMenu)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className="navbar">
      <ul className="menu">
        {menuItems.map((menuItem, index) => (
          <li
            key={index}
            className="menu-item"
            onMouseEnter={() => handleMouseEnter(menuItem)}
            onMouseLeave={handleMouseLeave}
          >
            {menuItem.label}
            {hoveredItem === menuItem && renderSubMenu(menuItem.subMenu)}
          </li>
        ))}
      </ul> 
    </nav>
  );
};
export default Navbar;