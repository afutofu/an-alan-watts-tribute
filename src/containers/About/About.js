import React, { Component } from "react";

import { renderSections } from "../../shared/utility";

import {
  about,
  earlyLife,
  middleYears,
  laterYears,
  death
} from "./AboutContent";

import homeClasses from "./Styles/HomeSection.module.css";
import aboutClasses from "./Styles/AboutSection.module.css";
import earlyLifeClasses from "./Styles/EarlyLifeSection.module.css";
import middleYearsClasses from "./Styles/MiddleYearsSection.module.css";
import laterYearsClasses from "./Styles/LaterYearsSection.module.css";
import deathClasses from "./Styles/DeathSection.module.css";

import homeBackground from "../../assets/images/background/about/alan-watts-face.jpg";
import background from "../../assets/images/background/alan-watts.jpg";

class About extends Component {
  state = {
    sections: [
      {
        id: "home",
        title: "about",
        background: homeBackground,
        noTopSectionChanger: true,
        color: "white",
        classes: homeClasses
      },
      {
        id: "about",
        title: "about",
        background,
        color: "black",
        mainContent: about,
        classes: aboutClasses,
        customStyle: true
      },
      {
        id: "earlylife",
        title: "early life",
        background,
        color: "black",
        mainContent: earlyLife,
        classes: earlyLifeClasses
      },
      {
        id: "middleyears",
        title: "middle years",
        background,
        color: "black",
        mainContent: middleYears,
        classes: middleYearsClasses
      },
      {
        id: "lateryears",
        title: "later years",
        background,
        color: "black",
        mainContent: laterYears,
        classes: laterYearsClasses
      },
      {
        id: "death",
        title: "death",
        background,
        color: "black",
        mainContent: death,
        classes: deathClasses
      }
    ]
  };

  render() {
    return (
      <React.Fragment>{renderSections(this.state.sections)}</React.Fragment>
    );
  }
}

export default About;
