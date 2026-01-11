import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {

  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdowOpen, setIsProfileDropdowOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };
  const handleProfileClick = () => {
    setIsProfileDropdowOpen(!isProfileDropdowOpen);
  }

  return (
    <div className="menu-container">
      <img src="logo.png" alt="img" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link onClick={() => handleMenuClick(0)} style={{ textDecoration: "none" }} to={"/"}><p className={selectedMenu === 0 ? "selected menu" : "menu"}> Dashboard</p></Link>
          </li>
          <li>
            <Link onClick={() => handleMenuClick(1)} style={{ textDecoration: "none" }} to={"/orders"}> <p className={selectedMenu === 1 ? "selected menu" : "menu"}> Orders</p></Link>
          </li>
          <li>
            <Link onClick={() => handleMenuClick(2)} style={{ textDecoration: "none" }} to={"/holdings"}> <p className={selectedMenu === 2 ? "selected menu" : "menu"}>Holdings</p></Link>
          </li>
          <li>
            <Link onClick={() => handleMenuClick(3)} style={{ textDecoration: "none" }} to={"/positions"}> <p className={selectedMenu === 3 ? "selected menu" : "menu"}>Positions</p></Link>
          </li>
          <li>
            <Link onClick={() => handleMenuClick(4)} style={{ textDecoration: "none" }} to={"/funds"}><p className={selectedMenu === 4 ? "selected menu" : "menu"}>Funds</p></Link>
          </li>
          <li>
            <Link onClick={() => handleMenuClick(5)} style={{ textDecoration: "none" }} to={"/apps"}><p className={selectedMenu === 5 ? "selected menu" : "menu"}>Apps</p></Link>
          </li>
        </ul>
        <hr />

        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
