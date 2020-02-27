import React, { Component } from "react";

import { renderSections } from "../../shared/utility";

import {
  nuagesDreams,
  realYou,
  fallingInLove,
  dreamOfLife
} from "./VideoContent";

import videoClasses from "./Styles/VideoSection.module.css";

import homeBackground from "../../assets/images/background/video/horizon-paint.jpg";
import realYouackground from "../../assets/images/background/home/star-wallpaper.jpg";
import nuagesDreamsBackground from "../../assets/images/background/video/dream-paint.jpg";
import fallingInLoveBackground from "../../assets/images/background/video/love-tree.jpg";
import dreamOfLifeBackground from "../../assets/images/background/video/sky-fantasy.jpg";

class Video extends Component {
  state = {
    sections: [
      {
        id: "home",
        title: "video",
        background: homeBackground,
        backgroundCover: true,
        noTopSectionChanger: true,
        color: "white",
        classes: videoClasses
      },
      {
        id: "nuagesDreams",
        title: "dreams",
        background: nuagesDreamsBackground,
        backgroundCover: true,
        mainContent: nuagesDreams,
        color: "black",
        classes: videoClasses
      },
      {
        id: "realYou",
        title: "the real you",
        background: realYouackground,
        mainContent: realYou,
        color: "white",
        classes: videoClasses
      },
      {
        id: "fallingInLove",
        title: "falling in love",
        background: fallingInLoveBackground,
        backgroundCover: true,
        mainContent: fallingInLove,
        color: "black",
        classes: videoClasses
      },
      {
        id: "dreamOfLife",
        title: "the dream of life",
        background: dreamOfLifeBackground,
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
