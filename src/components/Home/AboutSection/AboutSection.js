import React from "react";
import { Link } from "react-router-dom";

import classes from "./AboutSection.module.css";
import Section from "../../../hoc/Section/Section";
import SectionChanger from "../../UI/SectionChanger/SectionChanger";
import TopSectionChanger from "../../UI/TopSectionChanger/TopSectionChanger";

import background from "../../../assets/images/background/alan-watts.jpg";

const aboutSection = props => {
  return <Section {...props}></Section>;
};

export default aboutSection;
