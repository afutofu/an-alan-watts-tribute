import React, { Component } from "react";

import { renderSections } from "../../shared/utility";

import homeBackground from "../../assets/images/background/book-grass.jpg";

import homeClasses from "./Styles/HomeSection.module.css";

class Book extends Component {
  state = {
    sections: [
      {
        id: "home",
        title: "books",
        background: homeBackground,
        backgroundCover: true,
        noTopSectionChanger: true,
        color: "white",
        classes: homeClasses
      }
    ]
  };
  render() {
    return (
      <React.Fragment>{renderSections(this.state.sections)}</React.Fragment>
    );
  }
}

export default Book;
