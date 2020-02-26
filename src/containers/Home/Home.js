import React, { Component } from "react";

import { renderSections } from "../../shared/renderSections";

import { about, video, book, quote } from "./HomeContent";

import homeClasses from "./Styles/HomeSection.module.css";
import aboutClasses from "./Styles/AboutSection.module.css";
import videoClasses from "./Styles/VideoSection.module.css";
import bookClasses from "./Styles/BookSection.module.css";
import quoteClasses from "./Styles/QuoteSection.module.css";

import homeBackground from "../../assets/images/background/home/earth.jpg";
import aboutBackground from "../../assets/images/background/alan-watts.jpg";
import videoBackground from "../../assets/images/background/home/star-wallpaper.jpg";
import bookBackground from "../../assets/images/background/home/books.jpg";
import quoteBackground from "../../assets/images/background/home/nature2.png";

class Home extends Component {
  state = {
    sections: [
      {
        id: "home",
        title: "home",
        background: homeBackground,
        color: "white",
        link: "/about",
        linkText: "more about alan watts",
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
        id: "video",
        title: "video",
        background: videoBackground,
        color: "white",
        mainContent: video,
        link: "/video",
        linkText: "view more videos",
        classes: videoClasses
      },
      {
        id: "book",
        title: "book",
        background: bookBackground,
        color: "black",
        mainContent: book,
        link: "/book",
        linkText: "check out his books",
        classes: bookClasses
      },
      {
        id: "quote",
        title: "quote",
        background: quoteBackground,
        color: "white",
        mainContent: quote,
        link: "/quote",
        linkText: "more quotes",
        classes: quoteClasses
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
