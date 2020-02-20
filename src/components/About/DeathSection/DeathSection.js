import React from "react";

import classes from "./DeathSection.module.css";
import SectionChanger from "../../UI/SectionChanger/SectionChanger";
import TopSectionChanger from "../../UI/TopSectionChanger/TopSectionChanger";

const deathSection = props => {
  return (
    <section id="death" className={classes.DeathSection}>
      <TopSectionChanger color="black" topPosition={`${props.order}05vh`} />
      <div className={classes.Content}>
        <h3 className={classes.Title} style={{ top: `${props.order}15vh` }}>
          DEATH
        </h3>
        <div className={classes.Container}>
          <p>
            In October 1973, Watts returned from a European lecture tour to his
            cabin in Druid Heights, California. Friends of Watts had been
            concerned about him for some time over his alcoholism. On 16
            November 1973, at age 58, he died in his sleep. He was reported to
            have been under treatment for a heart condition. His body was
            cremated very shortly thereafter. His ashes were split, with half
            buried near his library at Druid Heights and half at the Green Gulch
            Monastery.
          </p>

          <p>
            A personal account of Watts' last years and approach to death is
            given by Al Chung-liang Huang in Tao: The Watercourse Way. His son
            Mark Watts has prepared a biographical documentary that details
            questions surrounding his father's death and performed ritual
            cremation on a nearby beach. His father's ashes were returned to the
            cabin where he had died.
          </p>

          <p>
            Since Watts' death, his lectures have found posthumous popularity on
            the internet, specifically YouTube.
          </p>
        </div>
      </div>
      <SectionChanger
        to="death"
        color="black"
        topPosition={`${props.order}95vh`}
      />
    </section>
  );
};

export default deathSection;
