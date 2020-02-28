import React from "react";

import classes from "./TopSectionChanger.module.css";

const topSectionChanger = props => {
  if (props.customStyle) {
    console.log(props.customStyle);
    return (
      <a href="#home">
        <i
          className={`fa fa-chevron-up ${classes.TopSectionChanger} ${props.customStyle}`}
          style={{ top: `${props.topPosition}05vh` }}
        ></i>
      </a>
    );
  } else {
    return (
      <a href="#home">
        <i
          className={`fa fa-chevron-up ${classes.TopSectionChanger}`}
          style={{ color: props.color, top: `${props.topPosition}05vh` }}
        ></i>
      </a>
    );
  }
};

export default topSectionChanger;
