import React from "react";

import classes from "./VideoSection.module.css";

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
      <button>VIEW MORE VIDEOS</button>
      <button>
        <i className="fa fa-chevron-down"></i>
      </button>
    </div>
  );
};

export default videoSection;
