import React from "react";

import classes from "./HomeSection.module.css";
import SectionChanger from "../UI/SectionChanger/SectionChanger";

const homeSection = props => {
  return (
    <React.Fragment>
      <section id="home" className={classes.HomeSection}></section>
      {/* <SectionChanger to="about" color="white" topPosition={props.order} /> */}
    </React.Fragment>
  );
};

export default homeSection;
