import React, { Component } from "react";

import classes from "./Home.module.css";
import VideoSection from "../../components/Home/VideoSection/VideoSection";
import AboutSection from "../../components/Home/AboutSection/AboutSection";
import QuoteSection from "../../components/Home/QuoteSection/QuoteSection";
import Footer from "../../components/Home/Footer/Footer";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className={classes.Home}>
        <VideoSection />
        <AboutSection />
        <QuoteSection />
        <Footer />
      </div>
    );
  }
}

export default Home;
