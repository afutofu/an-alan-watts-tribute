import React from "react";

import classes from "./TopSectionChanger.module.css";

const topSectionChanger = props => {
  return (
    <i
      className={`fa fa-chevron-up ${classes.TopSectionChanger}`}
      style={{ color: props.color, top: props.topPosition }}
    ></i>
  );
};

export default topSectionChanger;
