import React from "react";

import classes from "./HomeSection.module.css";
import SectionChanger from "../../UI/SectionChanger/SectionChanger";

const homeSection = props => {
  return (
    <section id="home" className={classes.HomeSection}>
      <SectionChanger color="white" topPosition={`${props.order}95vh`} />
    </section>
  );
};

export default homeSection;
