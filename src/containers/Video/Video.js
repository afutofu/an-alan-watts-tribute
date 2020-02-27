import React, { Component } from "react";

import { renderSections } from "../../shared/utility";

import {
  nuagesDreams,
  realYou,
  fallingInLove,
  dreamOfLife
} from "./VideoContent";

import videoClasses from "./Styles/VideoSection.module.css";

import background from "../../assets/images/background/home/star-wallpaper.jpg";

class Video extends Component {
  state = {
    sections: [
      {
        id: "home",
        title: "video",
        background,
        backgroundCover: true,
        noTopSectionChanger: true,
        color: "white",
        classes: videoClasses
      },
      {
        id: "nuagesDreams",
        title: "dreams",
        background,
        mainContent: nuagesDreams,
        color: "white",
        classes: videoClasses
      },
      {
        id: "realYou",
        title: "the real you",
        background,
        mainContent: realYou,
        color: "white",
        classes: videoClasses
      },
      {
        id: "fallingInLove",
        title: "falling in love",
        background,
        mainContent: fallingInLove,
        color: "white",
        classes: videoClasses
      },
      {
        id: "dreamOfLife",
        title: "the dream of life",
        background,
        mainContent: dreamOfLife,
        color: "white",
        classes: videoClasses
      }
    ]
  };
  render() {
    return (
      <React.Fragment>{renderSections(this.state.sections)}</React.Fragment>
    );
  }
}

export default Video;
