import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import Menu1 from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from "axios";


const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  // useEffect(() => {

  //   const getUser = async () => {
  //     const response = await fetch(`https://zerodha-byxx.onrender.com/getCurrUser`);
  //     const result = await response.json();
  //     setUsername(result);
  //     console.log(result);
  //   }
  //   getUser();
  // }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  }

  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  //   const handleLogout = async () => {
  //     try {
  //         const response = await axios.post("https://zerodha-byxx.onrender.com/logout", {}, { withCredentials: true });

  //         // Redirect user to `info` where localStorage will be cleared
  //         window.location.href = response.data.redirectUrl;
  //     } catch (err) {
  //         console.error("Logout failed:", err);
  //     }
  // };

  let menuClass = "menu"
  let activeMenuClass = "menu selected"

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "35px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              <p onClick={() => handleMenuClick(1)}
                className={selectedMenu === 1 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} to="/orders">
              <p onClick={() => handleMenuClick(2)}
                className={selectedMenu === 2 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} to="/holdings">
              <p onClick={() => handleMenuClick(3)}
                className={selectedMenu === 3 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} to="/positions">
              <p onClick={() => handleMenuClick(4)}
                className={selectedMenu === 4 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} to="/funds">
              <p onClick={() => handleMenuClick(5)}
                className={selectedMenu === 5 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} to="/apps">
              <p onClick={() => handleMenuClick(6)}
                className={selectedMenu === 6 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <Avatar src="/broken-image.jpg" className="avatar"
            id="demo-positioned-button"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            {/* {username.slice(0, 2).toUpperCase()} */}
          </Avatar>
        </div>     
      </div>
    </div>
  );
};

export default Menu;
