import React from "react";
import ReactDom from "react-dom";
import NavItems from "../Nav/NavItems";
import classes from "./Popup.module.scss";

interface PopupProps {
  show: boolean;
}

const Popup: React.FC<PopupProps> = (props) => {
  const content = (
    <div className={classes.popup}>
      <nav>
        <NavItems popup />
      </nav>
    </div>
  );

  return ReactDom.createPortal(content, document.getElementById("popup-hook")!);
};

export default Popup;
