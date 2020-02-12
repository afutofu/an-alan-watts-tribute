import React from "react";

import classes from "./SectionChanger.module.css";

const sectionChanger = props => {
  return (
    <div className={classes.SectionChanger}>
      <i className={"fa fa-chevron-down"} style={{ color: props.color }}></i>
    </div>
  );
};

export default sectionChanger;
