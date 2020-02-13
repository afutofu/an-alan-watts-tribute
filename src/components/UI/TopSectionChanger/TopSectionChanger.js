import React from "react";

import classes from "./TopSectionChanger.module.css";

const topSectionChanger = props => {
  return (
    <i
      class={`fas fa-chevron-up`}
      style={{ color: props.color, top: props.topPosition }}
    ></i>
  );
};

export default topSectionChanger;
