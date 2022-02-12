import React from "react";
import classes from "./MainService.module.scss";
import transformMobile from "../../assets/mobile/image-transform.jpg";
import transformDesktop from "../../assets/desktop/image-transform.jpg";
import standOutMobile from "../../assets/mobile/image-stand-out.jpg";
import standOutDesktop from "../../assets/desktop/image-stand-out.jpg";

interface MainServiceProps {
  header: string;
  body: string;
  image: string;
}

const MainService: React.FC<MainServiceProps> = (props) => {
  let imgSrcMob: string;
  let imgSrcDesk: string;

  if (props.image === "transform") {
    imgSrcMob = transformMobile;
    imgSrcDesk = transformDesktop;
  }
  if (props.image === "stand-out") {
    imgSrcMob = standOutMobile;
    imgSrcDesk = standOutDesktop;
  }

  return (
    <section className={`${classes.mainService} ${classes[props.image]}`}>
      <div>
        <img
          className={`mobile ${classes.image}`}
          src={imgSrcMob!}
          alt={props.header}
        />
        <img
          className={`desktop ${classes.image}`}
          src={imgSrcDesk!}
          alt={props.header}
        />
      </div>
      <div className={classes.mainService__text}>
        <div>
          <h2>{props.header}</h2>
          <p>{props.body}</p>
          <a href="/" className={classes[props.image]}>
            LEARN MORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainService;
