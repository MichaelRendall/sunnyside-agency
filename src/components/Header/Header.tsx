import React from "react";
import classes from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import hamburger from "../../assets/icon-hamburger.svg";
import arrowDown from "../../assets/icon-arrow-down.svg";
import NavItems from "../Nav/NavItems";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__nav}>
        <img src={logo} alt="Sunnyside Logo" />
        <img className="mobile" src={hamburger} alt="Hamburger Icon" />
        <nav className="desktop">
          <NavItems />
        </nav>
      </div>
      <h1>We are Creatives</h1>
      <img src={arrowDown} alt="Downward pointing arrow" />
    </header>
  );
};

export default Header;
