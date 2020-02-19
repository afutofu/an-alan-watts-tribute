import React, { Component } from "react";

import classes from "./About.module.css";
import Intro from "../../components/About/Intro/Intro";

class About extends Component {
  state = {};
  render() {
    return (
      <main className={classes.About}>
        <Intro order="0" />
      </main>
    );
  }
}

export default About;
