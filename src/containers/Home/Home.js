import React, { Component } from "react";

import { renderSections } from "../../shared/utility";

import { about, video, book } from "./HomeContent";

import homeClasses from "./Styles/HomeSection.module.css";
import aboutClasses from "./Styles/AboutSection.module.css";
import videoClasses from "./Styles/VideoSection.module.css";
import bookClasses from "./Styles/BookSection.module.css";

import homeBackground from "../../assets/images/background/earth.jpg";
import aboutBackground from "../../assets/images/background/alan-watts.jpg";
import videoBackground from "../../assets/images/background/star-wallpaper.jpg";
import bookBackground from "../../assets/images/background/books.jpg";

class Home extends Component {
  state = {
    sections: [
      {
        id: "home",
        title: "welcome",
        background: homeBackground,
        noTopSectionChanger: true,
        backgroundCover: true,
        color: "white",
        classes: homeClasses
      },
      {
        id: "about",
        title: "about",
        background: aboutBackground,
        color: "black",
        mainContent: about,
        link: "/about",
        linkText: "more about alan watts",
        classes: aboutClasses
      },
      {
        id: "videos",
        title: "videos",
        background: videoBackground,
        color: "white",
        mainContent: video,
        link: "/videos",
        linkText: "view more videos",
        classes: videoClasses
      },
      {
        id: "books",
        title: "books",
        background: bookBackground,
        color: "black",
        mainContent: book,
        link: "/books",
        linkText: "check out his books",
        classes: bookClasses
      }
    ]
  };
  render() {
    return (
      <React.Fragment>{renderSections(this.state.sections)}</React.Fragment>
    );
  }
}

export default Home;
