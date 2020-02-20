import React from "react";

import classes from "./MiddleYearsSection.module.css";
import SectionChanger from "../../UI/SectionChanger/SectionChanger";
import TopSectionChanger from "../../UI/TopSectionChanger/TopSectionChanger";

const middleYearsSection = props => {
  return (
    <section id="middleyears" className={classes.MiddleYearsSection}>
      <TopSectionChanger color="black" topPosition={`${props.order}05vh`} />
      <div className={classes.Content}>
        <h3 className={classes.Title} style={{ top: `${props.order}15vh` }}>
          MIDDLE YEARS
        </h3>
        <div className={classes.Container}>
          <p>
            Watts left the faculty for a career in the mid-1950s. In 1953, he
            began what became a long-running weekly radio program at Pacifica
            Radio station KPFA in Berkeley. Like other volunteer programmers at
            the listener-sponsored station, Watts was not paid for his
            broadcasts. These weekly broadcasts continued until 1962, by which
            time he had attracted a "legion of regular listeners".
          </p>

          <p>
            In 1957 Watts, then 42, published one of his best known books, The
            Way of Zen, which focused on philosophical explication and history.
            Besides drawing on the lifestyle and philosophical background of Zen
            in India and China, Watts introduced ideas drawn from general
            semantics (directly from the writings of Alfred Korzybski) and also
            from Norbert Wiener's early work on cybernetics, which had recently
            been published. Watts offered analogies from cybernetic principles
            possibly applicable to the Zen life. The book sold well, eventually
            becoming a modern classic, and helped widen his lecture circuit.
          </p>

          <p>
            Though never affiliated for long with any one academic institution,
            he was Professor of Comparative Philosophy at the California
            Institute of Integral Studies (as mentioned above), had a fellowship
            at Harvard University (1962–1964), and was a Scholar at San Jose
            State University (1968). He also lectured to many college and
            university students as well as the general public. His lectures and
            books gave him far-reaching influence on the American intelligentsia
            of the 1950s–1970s, but he was often seen as an outsider in
            academia. When questioned sharply by students during his talk at
            University of California, Santa Cruz, in 1970, Watts responded, as
            he had from the early sixties, that he was not an academic
            philosopher but rather "a philosophical entertainer".
          </p>
        </div>
      </div>
      <SectionChanger
        to="video"
        color="black"
        topPosition={`${props.order}95vh`}
      />
    </section>
  );
};

export default middleYearsSection;
