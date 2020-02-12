import React from "react";

import classes from "./QuoteSection.module.css";

const aboutSection = () => {
  return (
    <div className={classes.QuoteSection}>
      <h3 className={classes.Title}>QUOTES</h3>
      <div className={classes.Container}>
        <p>
          "Zen does not confuse spirituality with thinking about God while one
          is peeling potatoes. Zen spirituality is just to peel the potatoes."
        </p>
      </div>
      <button>CHECK OUT HIS BOOKS</button>
    </div>
  );
};

export default aboutSection;
