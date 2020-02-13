import React from "react";

import classes from "./AboutSection.module.css";
import SectionChanger from "../../UI/SectionChanger/SectionChanger";
import TopSectionChanger from "../../UI/TopSectionChanger/TopSectionChanger";

const aboutSection = () => {
  return (
    <div className={classes.AboutSection}>
      <TopSectionChanger color="black" topPosition="105vh" />
      <h3 className={classes.Title}>ABOUT</h3>
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
      <button>MORE ABOUT ALAN WATTS</button>
      <SectionChanger color="black" topPosition="195vh" />
    </div>
  );
};

export default aboutSection;
