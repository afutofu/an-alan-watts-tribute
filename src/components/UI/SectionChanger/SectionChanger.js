import React from "react";

import classes from "./SectionChanger.module.css";

const sectionChanger = props => {
  return (
    <a href={`#${props.to}`}>
      <i
        className={`fa fa-chevron-down ${classes.SectionChanger}`}
        style={{ color: props.color, top: props.topPosition }}
      ></i>
    </a>
  );
};

export default sectionChanger;
