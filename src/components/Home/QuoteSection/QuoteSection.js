import React from "react";

import classes from "./QuoteSection.module.css";
import TopSectionChanger from "../../UI/TopSectionChanger/TopSectionChanger";

const aboutSection = props => {
  return (
    <React.Fragment>
      <TopSectionChanger color="white" topPosition={`${props.order}05vh`} />
      <section id="quote" className={classes.QuoteSection}>
        <h3 className={classes.Title} style={{ top: `${props.order}15vh` }}>
          QUOTES
        </h3>
        <div className={classes.Container}>
          <p>
            "Zen does not confuse spirituality with thinking about God while one
            is peeling potatoes. Zen spirituality is just to peel the potatoes."
          </p>
        </div>
        <button>CHECK OUT HIS BOOKS</button>
      </section>
    </React.Fragment>
  );
};

export default aboutSection;
