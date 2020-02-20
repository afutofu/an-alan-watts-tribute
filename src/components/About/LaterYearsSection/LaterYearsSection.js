import React from "react";

import classes from "./LaterYearsSection.module.css";
import SectionChanger from "../../UI/SectionChanger/SectionChanger";
import TopSectionChanger from "../../UI/TopSectionChanger/TopSectionChanger";

const laterYearsSection = props => {
  return (
    <section id="lateryears" className={classes.LaterYearsSection}>
      <TopSectionChanger color="black" topPosition={`${props.order}05vh`} />
      <div className={classes.Content}>
        <h3 className={classes.Title} style={{ top: `${props.order}15vh` }}>
          LATER YEARS
        </h3>
        <div className={classes.Container}>
          <p>
            In his writings of the 1950s, he conveyed his admiration for the
            practicality in the historical achievements of Chán (Zen) in the Far
            East, for it had fostered farmers, architects, builders, folk
            physicians, artists, and administrators among the monks who had
            lived in the monasteries of its lineages. In his mature work, he
            presents himself as "Zennist" in spirit as he wrote in his last
            book, Tao: The Watercourse Way. Child rearing, the arts, cuisine,
            education, law and freedom, architecture, sexuality, and the uses
            and abuses of technology were all of great interest to him.
          </p>

          <p>
            Though known for his discourses on Zen, he was also influenced by
            ancient Hindu scriptures, especially Vedanta. He spoke extensively
            about the nature of the divine reality which Man misses: how the
            contradiction of opposites is the method of life and the means of
            cosmic and human evolution, how our fundamental Ignorance is rooted
            in the exclusive nature of mind and ego, how to come in touch with
            the Field of Consciousness and Light, and other cosmic principles.
            These are discussed in great detail in dozens of hours of audio that
            are in part captured in the 'Out of Your Mind' series.
          </p>

          <p>
            Watts sought to resolve his feelings of alienation from the
            institutions of marriage and the values of American society, as
            revealed in his classic comments on love relationships in "Divine
            Madness" and on perception of the organism-environment in "The
            Philosophy of Nature". In looking at social issues he was quite
            concerned with the necessity for international peace, for tolerance
            and understanding among disparate cultures.
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

export default laterYearsSection;
