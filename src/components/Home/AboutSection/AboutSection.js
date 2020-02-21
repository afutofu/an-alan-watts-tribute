import React from "react";
import { Link } from "react-router-dom";

import classes from "./AboutSection.module.css";
import Section from "../../../hoc/Section/Section";
import SectionChanger from "../../UI/SectionChanger/SectionChanger";
import TopSectionChanger from "../../UI/TopSectionChanger/TopSectionChanger";

import background from "../../../assets/images/background/alan-watts.jpg";

const aboutSection = props => {
  const mainContent = (
    <p>
      A prolific author and speaker, Alan Watts was one of the first to
      interpret Eastern wisdom for a Western audience. Born outside London in
      1915, he discovered the nearby Buddhist Lodge at a young age. After moving
      to the United States in 1938, Alan became an Episcopal priest for a time,
      and then relocated to Millbrook, New York, where he wrote his pivotal book
      The Wisdom of Insecurity: A Message for an Age of Anxiety. In 1951 he
      moved to San Francisco where he began teaching Buddhist studies, and in
      1956 began his popular radio show, “Way Beyond the West.” By the early
      sixties, Alan’s radio talks aired nationally and the counterculture
      movement adopted him as a spiritual spokesperson. He wrote and traveled
      regularly until his passing in 1973.
    </p>
  );

  return (
    <Section
      id="about"
      title="about"
      order={props.order}
      color="black"
      background={`url(${background})`}
      mainContent={mainContent}
      link="/about"
      linkContent="more about alan watts"
    ></Section>
  );
};

export default aboutSection;
