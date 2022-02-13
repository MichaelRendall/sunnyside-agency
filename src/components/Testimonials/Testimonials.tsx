import React from "react";
import { TESTIMONIALS } from "../../lib/text";
import Testimonial from "./Testimonial";
import classes from "./Testimonials.module.scss";

const Testimonials = () => {
  return (
    <section className={classes.testimonials}>
      <h4>CLIENT TESTIMONIALS</h4>
      <div className={classes.container}>
        {TESTIMONIALS.map((testimonial) => (
          <Testimonial
            key={testimonial.id}
            name={testimonial.name}
            body={testimonial.body}
            role={testimonial.role}
            image={testimonial.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
