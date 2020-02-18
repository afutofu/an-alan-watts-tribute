import React from "react";

import classes from "./AboutSection.module.css";
import SectionChanger from "../../UI/SectionChanger/SectionChanger";
import TopSectionChanger from "../../UI/TopSectionChanger/TopSectionChanger";

const aboutSection = props => {
  return (
    <React.Fragment>
      <TopSectionChanger color="black" topPosition={`${props.order}05vh`} />
      <section id="about" className={classes.AboutSection}>
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
        <button>MORE ABOUT ALAN WATTS</button>
      </section>
      <SectionChanger
        to="video"
        color="black"
        topPosition={`${props.order}95vh`}
      />
    </React.Fragment>
  );
};

export default aboutSection;
