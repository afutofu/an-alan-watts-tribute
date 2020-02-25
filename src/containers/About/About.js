import React, { Component } from "react";

import Section from "../../hoc/Section/Section";
import HomeSection from "../../components/HomeSection/HomeSection";

import {
  about,
  earlyLife,
  middleYears,
  laterYears,
  death
} from "./AboutContent";

import aboutClasses from "./Styles/AboutSection.module.css";
import earlyLifeClasses from "./Styles/EarlyLifeSection.module.css";
import middleYearsClasses from "./Styles/MiddleYearsSection.module.css";
import laterYearsClasses from "./Styles/LaterYearsSection.module.css";
import deathClasses from "./Styles/DeathSection.module.css";

import background from "../../assets/images/background/alan-watts.jpg";

class About extends Component {
  state = [
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
  ];

  renderSections = () => {
    const sections = this.state.map((sectionObj, i, { length }) => {
      let nextSection = null;
      console.log(i, length);
      if (i < length - 1) {
        nextSection = this.state[i + 1].id;
      }

      return (
        <Section
          key={i}
          classes={aboutClasses}
          nextSection={nextSection}
          {...{ ...sectionObj, order: i + 1 }}
        />
      );
    });
    return sections;
  };

  render() {
    return (
      <React.Fragment>
        <HomeSection order="0" />
        {this.renderSections()}
      </React.Fragment>
    );
  }
}

export default About;
