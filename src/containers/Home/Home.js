import React, { Component } from "react";

import classes from "./Home.module.css";
import HomeSection from "../../components/HomeSection/HomeSection";
import AboutSection from "../../components/Home/AboutSection/AboutSection";
import VideoSection from "../../components/Home/VideoSection/VideoSection";
import BookSection from "../../components/Home/BookSection/BookSection";
import QuoteSection from "../../components/Home/QuoteSection/QuoteSection";
import Footer from "../../components/Footer/Footer";

class Home extends Component {
  state = {};
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
