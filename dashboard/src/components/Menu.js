import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../api/api"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRef } from "react";
import GeneralContext from "../context/GeneralContext";

const Menu = ({ userInfo }) => {

  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdowOpen, setIsProfileDropdowOpen] = useState(false);
  const boxRef = useRef(null);
  const profileIconRef = useRef();
  const location = useLocation();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };


  if (isProfileDropdowOpen) {
    boxRef.current.classList.add("profile-active");
    document.addEventListener("mousedown", (e) => {
      closeBanner(e.target);
    })
  } else if (boxRef.current) boxRef.current.classList.remove("profile-active");

  const closeBanner = (e) => {
    if (boxRef.current && !boxRef.current.contains(e)) {
      if (isProfileDropdowOpen && !profileIconRef.current.contains(e)) {
        setIsProfileDropdowOpen(false);
        boxRef.current.classList.remove("profile-active");
      }
    }
  };

  const handleLogout = async () => {
    try {
      const res = await logout();

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

  useEffect(() => {
    if (isProfileDropdowOpen) {
      setIsProfileDropdowOpen(false);
    }
  }, [location.pathname])


  return (
    <div className="menu-container">
      <img src="logo.png" alt="img" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link className="d-none d-md-flex" onClick={() => handleMenuClick(0)} style={{ textDecoration: "none" }} to={"/"}><p className={selectedMenu === 0 ? "selected menu" : "menu"}> Dashboard</p></Link>
          </li>
          <li>
            <Link className="d-none d-md-flex" onClick={() => handleMenuClick(1)} style={{ textDecoration: "none" }} to={"/orders"}> <p className={selectedMenu === 1 ? "selected menu" : "menu"}> Orders</p></Link>
          </li>
          <li>
            <Link className="d-none d-md-flex" onClick={() => handleMenuClick(2)} style={{ textDecoration: "none" }} to={"/holdings"}> <p className={selectedMenu === 2 ? "selected menu" : "menu"}>Holdings</p></Link>
          </li>
          <li>
            <Link className="d-none d-md-flex" onClick={() => handleMenuClick(3)} style={{ textDecoration: "none" }} to={"/positions"}> <p className={selectedMenu === 3 ? "selected menu" : "menu"}>Positions</p></Link>
          </li>
          <li>
            <Link className="d-none d-md-flex" onClick={() => handleMenuClick(4)} style={{ textDecoration: "none" }} to={"/funds"}><p className={selectedMenu === 4 ? "selected menu" : "menu"}>Funds</p></Link>
          </li>
          <li>
            <Link className="d-none d-md-flex" onClick={() => handleMenuClick(5)} style={{ textDecoration: "none" }} to={"/apps"}><p className={selectedMenu === 5 ? "selected menu" : "menu"}>Apps</p></Link>
          </li>
        </ul>
        <hr />

        <div className="profile" ref={profileIconRef} onClick={() => setIsProfileDropdowOpen(!isProfileDropdowOpen)}>
          <div className="avatar">a</div>
          <p className="username">{userInfo.user}</p>
        </div>


        <div className="profile-banner" ref={boxRef}>
          <div className="profile-head"><AccountCircleIcon className="profileLogo" /> <p>{userInfo.user}</p><small>{userInfo.email}</small></div>

          <div className="profile-content d-md-none"> <Link onClick={() => handleMenuClick(0)} to={"/"}><p className={selectedMenu === 0 ? "selected menu" : "menu"}> Dashboard</p></Link></div>
          <div className="profile-content d-md-none"> <Link onClick={() => handleMenuClick(1)} to={"/orders"}> <p className={selectedMenu === 1 ? "selected menu" : "menu"}> Orders</p></Link></div>
          <div className="profile-content d-md-none"> <Link onClick={() => handleMenuClick(2)} to={"/holdings"}> <p className={selectedMenu === 2 ? "selected menu" : "menu"}>Holdings</p></Link></div>
          <div className="profile-content d-md-none"> <Link onClick={() => handleMenuClick(3)} to={"/positions"}> <p className={selectedMenu === 3 ? "selected menu" : "menu"}>Positions</p></Link></div>
          <div className="profile-content d-md-none"> <Link onClick={() => handleMenuClick(4)} to={"/funds"}><p className={selectedMenu === 4 ? "selected menu" : "menu"}>Funds</p></Link></div>
          <div className="profile-content d-md-none"> <Link onClick={() => handleMenuClick(5)} to={"/apps"}><p className={selectedMenu === 5 ? "selected menu" : "menu"}>Apps</p></Link></div>
          <div className="profile-content d-md-none"> <Link onClick={() => handleMenuClick(6)} to={"/watchlist-mobile"}><p className={selectedMenu === 6 ? "selected menu" : "menu"}>WatchList</p></Link></div>
          <hr className="d-md-none" />
          <div onClick={handleLogout} className="profile-content"><a>Log out</a></div>
        </div>

      </div>
    </div>
  );
};

export default Menu;
