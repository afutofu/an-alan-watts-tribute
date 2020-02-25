import React from "react";

import classes from "./Section.module.css";
import TopSectionChanger from "../../components/UI/TopSectionChanger/TopSectionChanger";
import SectionChanger from "../../components/UI/SectionChanger/SectionChanger";

const section = props => {
  const link = () => {
    if (props.link) {
      return (
        <a href={props.link} style={{ color: props.color }}>
          {props.linkText}
        </a>
      );
    }
    return null;
  };

  const sectionChanger = () => {
    if (props.nextSection) {
      return (
        <SectionChanger
          to={props.nextSection}
          color={props.color}
          topPosition={props.order}
        />
      );
    }
    return null;
  };

  return (
    <section
      className={classes.Section}
      style={{ backgroundImage: `url(${props.background})` }}
      id={props.id}
    >
      <TopSectionChanger color={props.color} topPosition={props.order} />
      <div className={props.classes.Content}>
        <h3 className={props.classes.Title} style={{ color: props.color }}>
          {props.title}
        </h3>
        <div className={props.classes.Container} style={{ color: props.color }}>
          {props.mainContent}
        </div>
        {link()}
      </div>
      {sectionChanger()}
    </section>
  );
};

export default section;
