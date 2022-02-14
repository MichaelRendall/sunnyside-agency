import React, { useRef } from "react";
import ReactDom from "react-dom";
import { CSSTransition } from "react-transition-group";
import NavItems from "../Nav/NavItems";
import classes from "./Popup.module.scss";

interface PopupProps {
  show: boolean;
}

const Popup: React.FC<PopupProps> = (props) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const content = (
    <CSSTransition
      in={props.show}
      timeout={150}
      mountOnEnter
      unmountOnExit
      nodeRef={nodeRef}
      classNames={{
        enter: classes.enter,
        enterActive: classes.enterActive,
        exitActive: classes.exitActive,
        exit: classes.exit,
      }}
    >
      <div ref={nodeRef} className={classes.popup}>
        <div className={classes.popup__container}>
          <nav>
            <NavItems popup />
          </nav>
        </div>
      </div>
    </CSSTransition>
  );

  return ReactDom.createPortal(content, document.getElementById("popup-hook")!);
};

export default Popup;
