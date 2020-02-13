import React from "react";

import classes from "./SectionChanger.module.css";

const sectionChanger = props => {
  return (
    <i
      className={`fa fa-chevron-down ${classes.SectionChanger}`}
      style={{ color: props.color, top: props.topPosition }}
    ></i>
  );
};

export default sectionChanger;
