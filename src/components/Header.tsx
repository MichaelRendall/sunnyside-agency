import React from "react";
import classes from "./Header.module.scss";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__nav}>
        <img src={logo} alt="Sunnyside Logo" />
        <img src={hamburger} alt="Hamburger Icon" />
      </div>
      <h1>We are Creatives</h1>
    </header>
  );
};

export default Header;
