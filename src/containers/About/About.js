import React, { Component } from "react";

import Section from "../../hoc/Section/Section";

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

import homeBackground from "../../assets/images/background/earth.jpg";
import background from "../../assets/images/background/alan-watts.jpg";

class About extends Component {
  state = {
    sections: [
      {
        id: "home",
        background: homeBackground,
        backgroundCover: true,
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
        classes: aboutClasses
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

  renderSections = () => {
    const sections = this.state.sections.map((sectionObj, i, { length }) => {
      let nextSection = null;
      if (i < length - 1) {
        nextSection = this.state.sections[i + 1].id;
      }

      return (
        <Section
          key={i}
          classes={aboutClasses}
          nextSection={nextSection}
          {...{ ...sectionObj, order: i }}
        />
      );
    });
    return sections;
  };

  render() {
    return <React.Fragment>{this.renderSections()}</React.Fragment>;
  }
}

export default About;
