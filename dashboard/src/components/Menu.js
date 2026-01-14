import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Menu = ({username}) => {

  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdowOpen, setIsProfileDropdowOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = async () => {   //// updated for session 
    setIsProfileDropdowOpen(!isProfileDropdowOpen);

    try {
      const res = await axios.post(`${process.env.REACT_APP_SERVER}/logout`,
        {}, { withCredentials: true });

      if (res.data.success) {
        toast.success(res.data.message, { position: "bottom-right" });
        setTimeout(() => {
          window.location.replace(`${process.env.REACT_APP_FRONTEND}/login`);
        }, 1000);
        
      }
    }
    catch (err) {
      console.log(err);
      toast.error("somthing wrong ", { position: "bottom-left" })
    }
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
          <div className="avatar">dg</div>
          <p className="username">{username}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
