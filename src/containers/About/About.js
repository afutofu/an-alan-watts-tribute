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

import aboutClasses from "../../components/About/AboutSection/AboutSection.module.css";
import earlyLifeClasses from "../../components/About/EarlyLifeSection/EarlyLifeSection.module.css";
import middleYearsClasses from "../../components/About/MiddleYearsSection/MiddleYearsSection.module.css";
import laterYearsClasses from "../../components/About/LaterYearsSection/LaterYearsSection.module.css";
import deathClasses from "../../components/About/DeathSection/DeathSection.module.css";

import background from "../../assets/images/background/alan-watts.jpg";

class About extends Component {
  state = {
    aboutSection: {
      background,
      id: "about",
      title: "about",
      color: "black",
      mainContent: about,
      nextSection: "earlylife",
      classes: aboutClasses
    },
    earlyLifeSection: {
      background,
      id: "earlylife",
      title: "early life",
      color: "black",
      mainContent: earlyLife,
      nextSection: "middleyears",
      classes: earlyLifeClasses
    },
    middleYearsSection: {
      background,
      id: "middleyears",
      title: "middle years",
      color: "black",
      mainContent: middleYears,
      nextSection: "lateryears",
      classes: middleYearsClasses
    },
    laterYearsSection: {
      background,
      id: "lateryears",
      title: "later years",
      color: "black",
      mainContent: laterYears,
      nextSection: "death",
      classes: laterYearsClasses
    },
    deathSection: {
      background,
      id: "death",
      title: "death",
      color: "black",
      mainContent: death,
      classes: deathClasses
    }
  };

  renderSections = () => {
    const sections = Object.keys(this.state).map((sectionObj, i) => {
      console.log(aboutClasses.Content);
      return (
        <Section
          key={i}
          classes={aboutClasses}
          {...{ ...this.state[sectionObj], order: i + 1 }}
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
