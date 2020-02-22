import React, { Component } from "react";

import classes from "./About.module.css";
import Section from "../../hoc/Section/Section";
import HomeSection from "../../components/HomeSection/HomeSection";
import AboutSection from "../../components/About/AboutSection/AboutSection";
import EarlyLifeSection from "../../components/About/EarlyLifeSection/EarlyLifeSection";
import MiddleYearsSection from "../../components/About/MiddleYearsSection/MiddleYearsSection";
import LaterYearsSection from "../../components/About/LaterYearsSection/LaterYearsSection";
import DeathSection from "../../components/About/DeathSection/DeathSection";

import aboutClasses from "../../components/About/AboutSection/AboutSection.module.css";

import background from "../../assets/images/background/alan-watts.jpg";

const aboutSection = (
  <p>
    A prolific author and speaker, Alan Watts was one of the first to interpret
    Eastern wisdom for a Western audience. Born outside London in 1915, he
    discovered the nearby Buddhist Lodge at a young age. After moving to the
    United States in 1938, Alan became an Episcopal priest for a time, and then
    relocated to Millbrook, New York, where he wrote his pivotal book The Wisdom
    of Insecurity: A Message for an Age of Anxiety. In 1951 he moved to San
    Francisco where he began teaching Buddhist studies, and in 1956 began his
    popular radio show, “Way Beyond the West.” By the early sixties, Alan’s
    radio talks aired nationally and the counterculture movement adopted him as
    a spiritual spokesperson. He wrote and traveled regularly until his passing
    in 1973.
  </p>
);

const earlyLife = (
  <p>
    Watts was born to middle-class parents in the village of Chislehurst, Kent,
    on 6 January 1915, living at 3 (now 5) Holbrook Lane, which was previously
    lived in by author John Hemming-Clark in the early 1900s. Watts' father,
    Laurence Wilson Watts, was a representative for the London office of the
    Michelin tyre company. His mother, Emily Mary Watts, was a housewife whose
    father had been a missionary. With modest financial means, they chose to
    live in pastoral surroundings and Watts, an only child, grew up playing at
    Brookside, learning the names of wildflowers and butterflies. Probably
    because of the influence of his mother's religious family the Buchans, an
    interest in "ultimate things" seeped in. It mixed with Watts's own interests
    in storybook fables and romantic tales of the mysterious Far East. Watts
    also later wrote of a mystical dream he experienced while ill with a fever
    as a child.During this time he was influenced by Far Eastern landscape
    paintings and embroideries that had been given to his mother by missionaries
    returning from China. The few Chinese paintings Watts was able to see in
    England riveted him, and he wrote "I was aesthetically fascinated with a
    certain clarity, transparency, and spaciousness in Chinese and Japanese art.
    It seemed to float..." These works of art emphasised the participatory
    relationship of people in nature, a theme that stood fast throughout his
    life and one that he often wrote about. (See, for instance, the last chapter
    in The Way of Zen.)
  </p>
);

class About extends Component {
  state = {
    aboutSection: {
      background,
      id: "about",
      title: "about",
      color: "black",
      mainContent: aboutSection,
      nextSection: "earlylife",
      classes: aboutClasses
    },
    earlyLifeSection: {
      background,
      id: "earlylife",
      title: "early life",
      color: "black",
      mainContent: earlyLife,
      nextSection: "middleyears"
    }
  };

  renderSections = () => {
    const sections = Object.keys(this.state).map((sectionObj, i) => {
      return (
        <Section key={i} {...{ ...this.state[sectionObj], order: i + 1 }} />
      );
    });

    return sections;
  };

  render() {
    console.log(aboutClasses);
    return (
      <React.Fragment>
        <HomeSection order="0" />
        {this.renderSections()}
        <MiddleYearsSection order="3" />
        <LaterYearsSection order="4" />
        <DeathSection order="5" />
      </React.Fragment>
    );
  }
}

export default About;
