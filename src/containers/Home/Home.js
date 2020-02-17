import React, { Component } from "react";

import classes from "./Home.module.css";
import HomeSection from "../../components/Home/HomeSection/HomeSection";
import VideoSection from "../../components/Home/VideoSection/VideoSection";
import AboutSection from "../../components/Home/AboutSection/AboutSection";
import QuoteSection from "../../components/Home/QuoteSection/QuoteSection";
import Footer from "../../components/Footer/Footer";

class Home extends Component {
  state = {};
  render() {
    return (
      <main className={classes.Home}>
        <HomeSection order="0" />
        <AboutSection order="1" />
        <VideoSection order="2" />
        <QuoteSection order="3" />
        <Footer />
      </main>
    );
  }
}

export default Home;
