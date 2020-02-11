import React, { Component } from "react";

import classes from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import VideoSection from "../../components/VideoSection/VideoSection";
import AboutSection from "../../components/AboutSection/AboutSection";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className={classes.Home}>
        <Navbar />
        <VideoSection />
        <AboutSection />
      </div>
    );
  }
}

export default Home;
