import React, { Component } from "react";

import classes from "./Home.module.css";
import Section from "../../hoc/Section/Section";
import HomeSection from "../../components/HomeSection/HomeSection";
import AboutSection from "../../components/Home/AboutSection/AboutSection";
import VideoSection from "../../components/Home/VideoSection/VideoSection";
import BookSection from "../../components/Home/BookSection/BookSection";
import QuoteSection from "../../components/Home/QuoteSection/QuoteSection";
import Footer from "../../components/Footer/Footer";

import background from "../../assets/images/background/alan-watts.jpg";

const aboutSection = (
  <p>
    A prolific author and speaker, Alan Watts was one of the first to interpret
    Eastern wisdom for a Western audience. Born outside London in 1915, he
    discovered the nearby Buddhist Lodge at a young age. After moving to the
    United States in 1938, Alan became an Episcopal priest for a time, and then
    relocated to Millbrook, New York, where he wrote his pivotal book The Wisdom
    of Insecurity: A Message for an Age of Anxiety. In 1951 he moved to San
    Francisco where he began teaching Buddhist studies, and in 1956 began his
    popular radio show, “Way Beyond the West.” By the early sixties, Alan’s
    radio talks aired nationally and the counterculture movement adopted him as
    a spiritual spokesperson. He wrote and traveled regularly until his passing
    in 1973.
  </p>
);

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
        <Section {...this.state.aboutSection} />
        <VideoSection order="2" />
        <BookSection order="3" />
        <QuoteSection order="4" />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
