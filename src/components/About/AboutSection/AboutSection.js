import React from "react";

import classes from "./AboutSection.module.css";
import SectionChanger from "../../UI/SectionChanger/SectionChanger";
import TopSectionChanger from "../../UI/TopSectionChanger/TopSectionChanger";

const main = props => {
  return (
    <section id="about" className={classes.AboutSection}>
      <TopSectionChanger color="black" topPosition={`${props.order}05vh`} />
      <div className={classes.Content}>
        <h3 className={classes.Title} style={{ top: `${props.order}15vh` }}>
          ABOUT
        </h3>
        <div className={classes.Container}>
          <p>
            A prolific author and speaker, Alan Watts was one of the first to
            interpret Eastern wisdom for a Western audience. Born outside London
            in 1915, he discovered the nearby Buddhist Lodge at a young age.
            After moving to the United States in 1938, Alan became an Episcopal
            priest for a time, and then relocated to Millbrook, New York, where
            he wrote his pivotal book The Wisdom of Insecurity: A Message for an
            Age of Anxiety. In 1951 he moved to San Francisco where he began
            teaching Buddhist studies, and in 1956 began his popular radio show,
            “Way Beyond the West.” By the early sixties, Alan’s radio talks
            aired nationally and the counterculture movement adopted him as a
            spiritual spokesperson. He wrote and traveled regularly until his
            passing in 1973.
          </p>
        </div>
      </div>
      <SectionChanger
        to="earlylife"
        color="black"
        topPosition={`${props.order}95vh`}
      />
    </section>
  );
};

export default main;
