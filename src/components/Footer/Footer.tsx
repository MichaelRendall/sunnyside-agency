import React from "react";
import classes from "./Footer.module.scss";
import NavItems from "../Nav/NavItems";
import logo from "../../assets/logo-green.svg";
import { ReactComponent as Facebook } from "../../assets/icon-facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icon-instagram.svg";
import { ReactComponent as Twitter } from "../../assets/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../../assets/icon-pinterest.svg";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <img src={logo} alt="Sunnyside Logo" />
      <nav>
        <NavItems hideContact />
      </nav>
      <div>
        <a href="/">{<Facebook />}</a>
        <a href="/">{<Instagram />}</a>
        <a href="/">{<Twitter />}</a>
        <a href="/">{<Pinterest />}</a>
      </div>
    </footer>
  );
};

export default Footer;
