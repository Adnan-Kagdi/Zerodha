import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import Menu1 from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from "axios";


const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropDownMenu, setIsProfileDropDownMenu] = useState(false);
  const [username, setUsername] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  const getCookie = (name) => {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === name) return value;
    }
    return null;
  };

  useEffect(() => {
    const userId = getCookie("userId")
    const userId1 = userId.slice(7);
    const id = userId1.slice(0, -3);
    console.log(id);
    const getUser = async () => {
      const response = await fetch(`https://zerodha-byxx.onrender.com/getUser/${id}`);
      const result = await response.json();
      setUsername(result.username)
    }
    getUser();
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  }

  const handleProfileClick = () => {
    setIsProfileDropDownMenu(!isProfileDropDownMenu);
  }

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await axios.post('https://zerodha-byxx.onrender.com/logout', {}, { withCredentials: true });
      setCurrUser(null);

      window.location.href = "https://info-18ts.onrender.com/login";
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

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
        <div className="profile" onClick={handleProfileClick}>
          <Avatar src="/broken-image.jpg" className="avatar"
            id="demo-positioned-button"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            {username.slice(0, 2).toUpperCase()}
          </Avatar>
        </div>
        <Menu1
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
          <Link
            to="https://info-18ts.onrender.com"
            style={{ textDecoration: "none", color: "rgb(0, 0, 0, 0.90)" }}>
            <MenuItem onClick={handleClose}>Home</MenuItem>
          </Link>
        </Menu1>
      </div>
    </div>
  );
};

export default Menu;
