import React from "react";
import classes from "./Testimonial.module.scss";
import emily from "../../assets/image-emily.jpg";
import jennie from "../../assets/image-jennie.jpg";
import thomas from "../../assets/image-thomas.jpg";

interface TestimonialProps {
  body: string;
  name: string;
  role: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = (props) => {
  let imgSrc: string;
  if (props.image === "emily") {
    imgSrc = emily;
  } else if (props.image === "thomas") {
    imgSrc = thomas;
  } else if (props.image === "jennie") {
    imgSrc = jennie;
  }

  return (
    <div className={classes.testimonial}>
      <span>
        <img src={imgSrc!} alt="The Client" />
      </span>
      <p>{props.body}</p>
      <strong>{props.name}</strong>
      <small>{props.role}</small>
    </div>
  );
};

export default Testimonial;
