import React from "react";
import classes from "./SubService.module.scss";
import grahpicDesignMobile from "../../assets/mobile/image-graphic-design.jpg";
import grahpicDesignDesktop from "../../assets/desktop/image-graphic-design.jpg";
import photographyMobile from "../../assets/mobile/image-photography.jpg";
import photographyDesktop from "../../assets/desktop/image-photography.jpg";

interface SubServiceProps {
  header: string;
  body: string;
  class: string;
}

const SubService: React.FC<SubServiceProps> = (props) => {
  let imgSrcMob: string;
  let imgSrcDesk: string;

  if (props.class === "green") {
    imgSrcMob = grahpicDesignMobile;
    imgSrcDesk = grahpicDesignDesktop;
  }
  if (props.class === "blue") {
    imgSrcMob = photographyMobile;
    imgSrcDesk = photographyDesktop;
  }

  return (
    <div className={`${classes.subService} ${classes[props.class]}`}>
      <img
        className={`mobile ${classes.image}`}
        src={imgSrcMob!}
        alt="a fruit"
      />
      <img
        className={`desktop ${classes.image}`}
        src={imgSrcDesk!}
        alt="a fruit"
      />
      <span>
        <h3>{props.header}</h3>
        <p>{props.body}</p>
      </span>
    </div>
  );
};

export default SubService;
