import React from "react";
import classes from "./Gallery.module.scss";

import milkbottlesMob from "../../assets/mobile/image-gallery-milkbottles.jpg";
import milkbottlesDesk from "../../assets/desktop/image-gallery-milkbottles.jpg";

import orangeMob from "../../assets/mobile/image-gallery-orange.jpg";
import orangeDesk from "../../assets/desktop/image-gallery-orange.jpg";

import coneMob from "../../assets/mobile/image-gallery-cone.jpg";
import coneDesk from "../../assets/desktop/image-gallery-cone.jpg";

import sugarCubesMob from "../../assets/mobile/image-gallery-sugar-cubes.jpg";
import sugarCubesDesk from "../../assets/desktop/image-gallery-sugar-cubes.jpg";

const Gallery = () => {
  return (
    <section className={classes.gallery}>
      <img src={milkbottlesMob} alt="Milkbottles" className="mobile" />
      <img src={milkbottlesDesk} alt="Milkbottles" className="desktop" />

      <img src={orangeMob} alt="Orange" className="mobile" />
      <img src={orangeDesk} alt="Orange" className="desktop" />

      <img src={coneMob} alt="Ice Cream Cone" className="mobile" />
      <img src={coneDesk} alt="Ice Cream Cone" className="desktop" />

      <img src={sugarCubesMob} alt="Sugar Cubes" className="mobile" />
      <img src={sugarCubesDesk} alt="Sugar Cubes" className="desktop" />
    </section>
  );
};

export default Gallery;
