import React from "react";
import NavItem from "./NavItem";
import classes from "./NavItems.module.scss";

const NavItems = () => {
  const NAV_LIST = [
    {
      text: "About",
      link: "#",
      class: "",
    },
    {
      text: "Services",
      link: "#",
      class: "",
    },
    {
      text: "Projects",
      link: "#",
      class: "",
    },
    {
      text: "Contact",
      link: "#",
      class: "button",
    },
  ];

  return (
    <ul className={classes.nav}>
      {NAV_LIST.map((navItem) => (
        <NavItem
          text={navItem.text}
          link={navItem.link}
          class={navItem.class}
        />
      ))}
    </ul>
  );
};

export default NavItems;
