import React from "react";

import classes from "./SectionChanger.module.css";

const sectionChanger = props => {
  console.log(props.color);
  return (
    <i
      className={`fa fa-chevron-down ${classes.SectionChanger}`}
      style={{ color: props.color, top: props.topPosition }}
    ></i>
  );
};

export default sectionChanger;
