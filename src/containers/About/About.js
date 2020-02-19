import React, { Component } from "react";

import classes from "./About.module.css";
import HomeSection from "../../components/HomeSection/HomeSection";
import Intro from "../../components/About/Intro/Intro";

class About extends Component {
  state = {};
  render() {
    return (
      <main className={classes.About}>
        <HomeSection order="0" />
        <Intro order="1" />
      </main>
    );
  }
}

export default About;
