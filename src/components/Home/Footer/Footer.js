import React from "react";

import classes from "./Footer.module.css";

const footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.Content}>
        <p>afutofu</p>
      </div>
      <div className={classes.Links}>
        <a href="https://github.com/afutofu" target="_blank">
          <i className="fa fa-github icon-large" />
        </a>
      </div>
    </div>
  );
};

export default footer;
