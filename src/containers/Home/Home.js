import React, { Component } from "react";

import classes from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import VideoSection from "../../components/Home/VideoSection/VideoSection";
import AboutSection from "../../components/Home/AboutSection/AboutSection";
import QuoteSection from "../../components/Home/QuoteSection/QuoteSection";
import Footer from "../../components/Home/Footer/Footer";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className={classes.Home}>
        <Navbar />
        <VideoSection />
        <AboutSection />
        <QuoteSection />
        <Footer />
      </div>
    );
  }
}

export default Home;
