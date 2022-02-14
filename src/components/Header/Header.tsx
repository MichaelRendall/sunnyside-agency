import React, { useState } from "react";
import classes from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import { ReactComponent as Hamburger } from "../../assets/icon-hamburger.svg";
import arrowDown from "../../assets/icon-arrow-down.svg";
import NavItems from "../Nav/NavItems";
import Popup from "../UI/Popup";
import Backdrop from "../UI/Backdrop";

const Header = () => {
  const [drawerShowing, setDrawerShowing] = useState(true);

  return (
    <>
      {drawerShowing && <Backdrop clicked={() => setDrawerShowing(false)} />}
      <Popup show={drawerShowing} />

      <header className={classes.header}>
        <div className={classes.header__nav}>
          <img src={logo} alt="Sunnyside Logo" />
          <Hamburger
            className="mobile"
            onClick={() => setDrawerShowing(!drawerShowing)}
          />
          <nav className="desktop">
            <NavItems />
          </nav>
        </div>
        <h1>We are Creatives</h1>
        <img src={arrowDown} alt="Downward pointing arrow" />
      </header>
    </>
  );
};

export default Header;
