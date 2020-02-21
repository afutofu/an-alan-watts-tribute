import React from "react";

import classes from "./Section.module.css";
import TopSectionChanger from "../../components/UI/TopSectionChanger/TopSectionChanger";
import SectionChanger from "../../components/UI/SectionChanger/SectionChanger";

const section = props => {
  const link = () => {
    if (props.link) {
      return (
        <a href={props.link} style={{ color: props.color }}>
          {props.linkContent}
        </a>
      );
    }
    return null;
  };

  return (
    <section
      className={classes.Section}
      style={{ backgroundImage: props.background }}
      id={props.id}
    >
      <TopSectionChanger color={props.color} topPosition={props.order} />
      <div className={classes.Content}>
        <h3 className={classes.Title} style={{ color: props.color }}>
          {props.title}
        </h3>
        <div className={classes.Container} style={{ color: props.color }}>
          {props.mainContent}
        </div>
        {link()}
      </div>
      <SectionChanger
        to={props.nextSection}
        color={props.color}
        topPosition={props.order}
      />
    </section>
  );
};

export default section;
