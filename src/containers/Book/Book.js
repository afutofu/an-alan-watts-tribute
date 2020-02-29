import React, { Component } from "react";

import { renderSections } from "../../shared/utility";

import { wisdomOfInsecurity } from "./BookContent";

import homeBackground from "../../assets/images/background/book-grass.jpg";
import wisdomOfInsecurityBackground from "../../assets/images/background/books.jpg";

import homeClasses from "./Styles/HomeSection.module.css";
import wisdomOfInsecurityClasses from "./Styles/WisdomOfInsecurity.module.css";

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
      },
      {
        id: "wisdomOfInsecurity",
        title: "the wisdom of insecurity",
        background: wisdomOfInsecurityBackground,
        color: "black",
        mainContent: wisdomOfInsecurity,
        classes: wisdomOfInsecurityClasses,
        link:
          "https://www.amazon.com/Wisdom-Insecurity-Message-Age-Anxiety/dp/0307741206/ref=sr_1_1?crid=3309VHJD1MNFF&keywords=the+wisdom+of+insecurity+alan+watts&qid=1582942402&sprefix=the+wisdom+of+insec%2Caps%2C382&sr=8-1",
        linkText: "click here to order now",
        linkNewWindow: true
      },
      {
        id: "wisdomOfInsecurity",
        title: "the wisdom of insecurity",
        background: wisdomOfInsecurityBackground,
        color: "black",
        mainContent: wisdomOfInsecurity,
        classes: wisdomOfInsecurityClasses,
        link:
          "https://www.amazon.com/Wisdom-Insecurity-Message-Age-Anxiety/dp/0307741206/ref=sr_1_1?crid=3309VHJD1MNFF&keywords=the+wisdom+of+insecurity+alan+watts&qid=1582942402&sprefix=the+wisdom+of+insec%2Caps%2C382&sr=8-1",
        linkText: "click here to order now",
        linkNewWindow: true
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
