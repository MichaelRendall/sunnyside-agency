import React from "react";
import { SUB_SERVICES } from "../../lib/text";
import classes from "./SubServices.module.scss";
import SubService from "./SubService";

const SubServices = () => {
  return (
    <section className={classes.subServices}>
      {SUB_SERVICES.map((service) => (
        <SubService
          key={service.id}
          header={service.header}
          body={service.body}
          class={service.class}
        />
      ))}
    </section>
  );
};

export default SubServices;
