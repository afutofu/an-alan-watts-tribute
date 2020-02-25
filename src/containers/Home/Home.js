import React, { Component } from "react";

import classes from "./Home.module.css";
import HomeSection from "../../components/HomeSection/HomeSection";
import AboutSection from "../../components/Home/AboutSection/AboutSection";
import VideoSection from "../../components/Home/VideoSection/VideoSection";
import BookSection from "../../components/Home/BookSection/BookSection";
import QuoteSection from "../../components/Home/QuoteSection/QuoteSection";
import Footer from "../../components/Footer/Footer";

import background from "../../assets/images/background/alan-watts.jpg";

const aboutSection = <p></p>;

class Home extends Component {
  state = {
    aboutSection: {
      order: "1",
      background,
      id: "about",
      title: "about",
      color: "black",
      mainContent: aboutSection,
      link: "/about",
      linkText: "more about alan watts",
      nextSection: "video"
    }
  };
  render() {
    return (
      <React.Fragment className={classes.Home}>
        <HomeSection order="0" />
        <AboutSection order="1" />
        <VideoSection order="2" />
        <BookSection order="3" />
        <QuoteSection order="4" />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
