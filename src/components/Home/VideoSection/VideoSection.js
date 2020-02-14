import React from "react";

import classes from "./VideoSection.module.css";
import SectionChanger from "../../UI/SectionChanger/SectionChanger";

const videoSection = props => {
  return (
    <div className={classes.VideoSection}>
      <iframe
        className={classes.VideoPlayer}
        src="https://www.youtube.com/embed/mMRrCYPxD0I"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <button style={{ top: `${props.order}82vh` }}>VIEW MORE VIDEOS</button>
      <SectionChanger color="white" topPosition="95vh" />
    </div>
  );
};

export default videoSection;
