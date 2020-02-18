import React from "react";

import classes from "./VideoSection.module.css";
import SectionChanger from "../../UI/SectionChanger/SectionChanger";
import TopSectionChanger from "../../UI/TopSectionChanger/TopSectionChanger";

const videoSection = props => {
  return (
    <React.Fragment>
      <TopSectionChanger color="white" topPosition={`${props.order}05vh`} />
      <section id="video" className={classes.VideoSection}>
        <h3 className={classes.Title} style={{ top: `${props.order}15vh` }}>
          VIDEOS
        </h3>
        <iframe
          className={classes.VideoPlayer}
          src="https://www.youtube.com/embed/mMRrCYPxD0I"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <button style={{ top: `${props.order}82vh` }}>VIEW MORE VIDEOS</button>
      </section>
      <SectionChanger
        to="book"
        color="white"
        topPosition={`${props.order}95vh`}
      />
    </React.Fragment>
  );
};

export default videoSection;
