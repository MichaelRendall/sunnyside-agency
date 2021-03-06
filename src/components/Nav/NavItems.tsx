import React from "react";
import NavItem from "./NavItem";
import classes from "./NavItems.module.scss";

interface NavItemsProps {
  hideContact?: boolean;
  popup?: boolean;
}

const NavItems: React.FC<NavItemsProps> = (props) => {
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

  let navItems = NAV_LIST;
  if (props.hideContact) {
    navItems = NAV_LIST.filter((navItem) => navItem.class !== "button");
  }

  return (
    <ul className={`${classes.nav} ${props.popup ? classes.popup : ""}`}>
      {navItems.map((navItem) => (
        <NavItem
          key={navItem.text}
          text={navItem.text}
          link={navItem.link}
          class={navItem.class}
          popup={props.popup}
        />
      ))}
    </ul>
  );
};

export default NavItems;
