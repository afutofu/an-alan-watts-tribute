import React from "react";

import classes from "./QuoteSection.module.css";

const aboutSection = () => {
  return (
    <div className={classes.QuoteSection}>
      <div className={classes.Container}>
        <h3 className={classes.Title}>QUOTES</h3>
        <p>
          "Zen does not confuse spirituality with thinking about God while one
          is peeling potatoes. Zen spirituality is just to peel the potatoes."
        </p>
        <button>CHECK OUT HIS BOOKS</button>
        <button>
          <i className="fa fa-chevron-down"></i>
        </button>
      </div>
    </div>
  );
};

export default aboutSection;
