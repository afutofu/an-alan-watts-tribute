import React, { Component } from "react";

import classes from "./About.module.css";
import HomeSection from "../../components/HomeSection/HomeSection";
import AboutSection from "../../components/About/AboutSection/AboutSection";

class About extends Component {
  state = {};
  render() {
    return (
      <main className={classes.About}>
        <HomeSection order="0" />
        <AboutSection order="1" />
      </main>
    );
  }
}

export default About;
