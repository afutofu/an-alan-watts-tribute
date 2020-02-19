import React from "react";

import classes from "./Intro.module.css";
import SectionChanger from "../../UI/SectionChanger/SectionChanger";

const main = props => {
  return (
    <section id="intro">
      <div className={classes.IntroSection}>
        <h3 className={classes.Title} style={{ top: `${props.order}15vh` }}>
          ABOUT
        </h3>
        <div className={classes.Container}>
          <p>
            Deserunt in sunt dolore quis. Laborum amet dolore velit eiusmod et
            commodo veniam veniam non elit exercitation. Esse occaecat eu sint
            ad. Nostrud est magna enim velit ad non enim ea laboris dolore velit
            occaecat non ea. In fugiat ut enim pariatur enim officia et et minim
            minim. Cupidatat cupidatat ad esse dolor quis ut excepteur. Amet
            esse excepteur anim voluptate ad quis qui sint proident sit fugiat
            enim minim qui. Do non velit labore labore culpa enim.
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

export default main;
