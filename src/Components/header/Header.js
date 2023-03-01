import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="navbar">
      <div className="logo"> <label>BlogX</label></div>
       <div className="header">
            <Link className="anchor" to="/">HOME</Link>
            <Link className="anchor" to="/about">ABOUT</Link>
            <Link className="anchor" to="/contact">CONTACT</Link>
            <Link className="anchor" to="/login">LOGOUT</Link>
      </div>
    </div>
  );
};

export default Header;
