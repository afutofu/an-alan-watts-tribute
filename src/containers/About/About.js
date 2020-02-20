import React, { Component } from "react";

import classes from "./About.module.css";
import HomeSection from "../../components/HomeSection/HomeSection";
import AboutSection from "../../components/About/AboutSection/AboutSection";
import EarlyLifeSection from "../../components/About/EarlyLifeSection/EarlyLifeSection";
import MiddleYearsSection from "../../components/About/MiddleYearsSection/MiddleYearsSection";
import LaterYearsSection from "../../components/About/LaterYearsSection/LaterYearsSection";
import DeathSection from "../../components/About/DeathSection/DeathSection";

class About extends Component {
  state = {};
  render() {
    return (
      <main className={classes.About}>
        <HomeSection order="0" />
        <AboutSection order="1" />
        <EarlyLifeSection order="2" />
        <MiddleYearsSection order="3" />
        <LaterYearsSection order="4" />
        <DeathSection order="5" />
      </main>
    );
  }
}

export default About;
