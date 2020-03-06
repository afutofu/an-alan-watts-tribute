import React from "react";
import { Link } from "react-scroll";

import classes from "./TopSectionChanger.module.css";

const topSectionChanger = props => {
  const icon = () => {
    if (props.customStyle) {
      return (
        <i
          className={`fa fa-chevron-up ${classes.TopSectionChanger} ${props.customStyle}`}
          style={{ top: `${props.topPosition}05vh` }}
        ></i>
      );
    } else {
      return (
        <i
          className={`fa fa-chevron-up ${classes.TopSectionChanger}`}
          style={{ color: props.color, top: `${props.topPosition}05vh` }}
        ></i>
      );
    }
  };

  return (
    <Link to="home" smooth duration={1000}>
      {icon()}
    </Link>
  );
};

export default topSectionChanger;
