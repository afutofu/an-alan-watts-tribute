import React from "react";
import { Link } from "react-scroll";

import classes from "./SectionChanger.module.css";

const sectionChanger = props => {
  console.log(props.to);
  return (
    <Link to={`${props.to}`} smooth duration={1000}>
      <i
        className={`fa fa-chevron-down ${classes.SectionChanger}`}
        style={{ color: props.color, top: `${props.topPosition}95vh` }}
      ></i>
    </Link>
  );
};

export default sectionChanger;
