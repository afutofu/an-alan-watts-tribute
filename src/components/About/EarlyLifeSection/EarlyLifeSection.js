import React from "react";

import classes from "./EarlyLifeSection.module.css";
import SectionChanger from "../../UI/SectionChanger/SectionChanger";
import TopSectionChanger from "../../UI/TopSectionChanger/TopSectionChanger";

const earlyLifeSection = props => {
  return (
    <section id="earlylife" className={classes.EarlyLifeSection}>
      <TopSectionChanger color="black" topPosition={`${props.order}05vh`} />
      <div className={classes.Content}>
        <h3 className={classes.Title} style={{ top: `${props.order}15vh` }}>
          EARLY LIFE
        </h3>
        <div className={classes.Container}>
          <p>
            Watts was born to middle-class parents in the village of
            Chislehurst, Kent, on 6 January 1915, living at 3 (now 5) Holbrook
            Lane, which was previously lived in by author John Hemming-Clark in
            the early 1900s. Watts' father, Laurence Wilson Watts, was a
            representative for the London office of the Michelin tyre company.
            His mother, Emily Mary Watts, was a housewife whose father had been
            a missionary. With modest financial means, they chose to live in
            pastoral surroundings and Watts, an only child, grew up playing at
            Brookside, learning the names of wildflowers and butterflies.
            Probably because of the influence of his mother's religious family
            the Buchans, an interest in "ultimate things" seeped in. It mixed
            with Watts's own interests in storybook fables and romantic tales of
            the mysterious Far East. Watts also later wrote of a mystical dream
            he experienced while ill with a fever as a child.During this time he
            was influenced by Far Eastern landscape paintings and embroideries
            that had been given to his mother by missionaries returning from
            China. The few Chinese paintings Watts was able to see in England
            riveted him, and he wrote "I was aesthetically fascinated with a
            certain clarity, transparency, and spaciousness in Chinese and
            Japanese art. It seemed to float..." These works of art emphasised
            the participatory relationship of people in nature, a theme that
            stood fast throughout his life and one that he often wrote about.
            (See, for instance, the last chapter in The Way of Zen.)
          </p>
        </div>
      </div>
      <SectionChanger
        to="middleyears"
        color="black"
        topPosition={`${props.order}95vh`}
      />
    </section>
  );
};

export default earlyLifeSection;
