import React, { Component } from "react";

import { renderSections } from "../../shared/utility";

import homeBackground from "../../assets/images/background/book-grass.jpg";

import homeClasses from "./Styles/HomeSection.module.css";

class Book extends Component {
  state = {
    section: [
      {
        id: "home",
        title: "books",
        background: homeBackground,
        noTopSectionChanger: true,
        color: white,
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
