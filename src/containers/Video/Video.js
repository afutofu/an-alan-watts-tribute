import React, { Component } from "react";

import { renderSections } from "../../shared/utility";

import {
  nuagesDreams,
  realYou,
  fallingInLove,
  dreamOfLife
} from "./VideoContent";

import homeClasses from "./Styles/HomeSection.module.css";
import videoClasses from "./Styles/VideoSection.module.css";

import homeBackground from "../../assets/images/background/horizon-paint.jpg";
import realYouackground from "../../assets/images/background/star-wallpaper.jpg";
import nuagesDreamsBackground from "../../assets/images/background/dream-paint.jpg";
import fallingInLoveBackground from "../../assets/images/background/love-tree.jpg";
import dreamOfLifeBackground from "../../assets/images/background/sky-fantasy.jpg";

class Video extends Component {
  state = {
    sections: [
      {
        id: "home",
        title: "videos",
        background: homeBackground,
        backgroundCover: true,
        noTopSectionChanger: true,
        color: "white",
        classes: homeClasses
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
        id: "dreamOfLife",
        title: "the dream of life",
        background: dreamOfLifeBackground,
        mainContent: dreamOfLife,
        color: "black",
        classes: videoClasses
      },
      {
        id: "fallingInLove",
        title: "falling in love",
        background: fallingInLoveBackground,
        backgroundCover: true,
        mainContent: fallingInLove,
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
