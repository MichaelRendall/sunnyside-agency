import React from "react";
import classes from "./NavItem.module.scss";

interface NavItemProps {
  text: string;
  link: string;
  class: string;
}

const NavItem: React.FC<NavItemProps> = (props) => {
  return (
    <a href={props.link}>
      <li className={classes[props.class]}>{props.text}</li>
    </a>
  );
};

export default NavItem;
