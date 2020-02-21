import React from "react";

import classes from "./Section.module.css";
import TopSectionChanger from "../../components/UI/TopSectionChanger/TopSectionChanger";
import SectionChanger from "../../components/UI/SectionChanger/SectionChanger";

const section = props => {
  return (
    <section>
      <TopSectionChanger color={props.color} />
      {props.children}
      <a href={props.link}>{props.linkContent}</a>
      <SectionChanger to={props.nextSection} color={props.color} />
    </section>
  );
};

export default section;
