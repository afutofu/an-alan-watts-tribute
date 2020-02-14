import React from "react";

import classes from "./AboutSection.module.css";
import SectionChanger from "../../UI/SectionChanger/SectionChanger";
import TopSectionChanger from "../../UI/TopSectionChanger/TopSectionChanger";

const order = 1;

const aboutSection = () => {
  return (
    <div className={classes.AboutSection}>
      <TopSectionChanger color="black" topPosition={`${order}05vh`} />
      <h3 className={classes.Title} style={{ top: `${order}20vh` }}>
        ABOUT
      </h3>
      <div className={classes.Container}>
        <p>
          Deserunt in sunt dolore quis. Laborum amet dolore velit eiusmod et
          commodo veniam veniam non elit exercitation. Esse occaecat eu sint ad.
          Nostrud est magna enim velit ad non enim ea laboris dolore velit
          occaecat non ea. In fugiat ut enim pariatur enim officia et et minim
          minim. Cupidatat cupidatat ad esse dolor quis ut excepteur. Amet esse
          excepteur anim voluptate ad quis qui sint proident sit fugiat enim
          minim qui. Do non velit labore labore culpa enim.
        </p>
      </div>
      <button style={{ top: `${order}75vh` }}>MORE ABOUT ALAN WATTS</button>
      <SectionChanger color="black" topPosition={`${order}95vh`} />
    </div>
  );
};

export default aboutSection;
