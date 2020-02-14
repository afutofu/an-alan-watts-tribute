import React from "react";

import classes from "./QuoteSection.module.css";
import TopSectionChanger from "../../UI/TopSectionChanger/TopSectionChanger";

const order = 2;

const aboutSection = props => {
  return (
    <div className={classes.QuoteSection}>
      <TopSectionChanger color="white" topPosition={`${order}05vh`} />
      <h3 className={classes.Title} style={{ top: `${order}20vh` }}>
        QUOTES
      </h3>
      <div className={classes.Container}>
        <p>
          "Zen does not confuse spirituality with thinking about God while one
          is peeling potatoes. Zen spirituality is just to peel the potatoes."
        </p>
      </div>
      <button style={{ top: `${order}75vh` }}>CHECK OUT HIS BOOKS</button>
    </div>
  );
};

export default aboutSection;
