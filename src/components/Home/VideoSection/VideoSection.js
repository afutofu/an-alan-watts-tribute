import React from "react";

import classes from "./VideoSection.module.css";
import SectionChanger from "../../UI/SectionChanger/SectionChanger";

const order = 0;

const videoSection = () => {
  return (
    <div className={classes.VideoSection}>
      <iframe
        className={classes.VideoPlayer}
        src="https://www.youtube.com/embed/mMRrCYPxD0I"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <button style={{ top: `${order}75vh` }}>VIEW MORE VIDEOS</button>
      <SectionChanger color="white" topPosition="95vh" />
    </div>
  );
};

export default videoSection;
