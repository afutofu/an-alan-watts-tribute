import React, { Component } from "react";

import { renderSections } from "../../shared/utility";

import {
  wisdomOfInsecurity,
  theBook,
  wayOfZen,
  becomeWhatYouAre
} from "./BookContent";

import homeBackground from "../../assets/images/background/book-grass.jpg";
import wisdomOfInsecurityBackground from "../../assets/images/background/books.jpg";
import theBookBackground from "../../assets/images/background/library-dim.jpg";
import wayOfZenBackground from "../../assets/images/background/nature-clean.jpg";
import becomeWhatYouAreBackground from "../../assets/images/background/sunset-dim.jpg";

import homeClasses from "./Styles/HomeSection.module.css";
import wisdomOfInsecurityClasses from "./Styles/WisdomOfInsecurity.module.css";
import theBookClasses from "./Styles/TheBook.module.css";
import wayOfZenClasses from "./Styles/WayOfZen.module.css";
import becomeWhatYouAreClasses from "./Styles/BecomeWhatYouAre.module.css";

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
          "https://www.amazon.com/Wisdom-Insecurity-Message-Age-Anxiety/dp/0307741206/ref=sr_1_1?crid=3309VHJD1MNFF&qid=1582942402&sprefix=the+wisdom+of+insec%2Caps%2C382&sr=8-1",
        linkText: "order the wisdom of insecurity",
        linkNewWindow: true
      },
      {
        id: "theBook",
        title: "the book: on the taboo against knowing who you are",
        background: theBookBackground,
        color: "white",
        mainContent: theBook,
        classes: theBookClasses,
        link:
          "https://www.amazon.com/Book-Taboo-Against-Knowing-Who/dp/0679723005/ref=sr_1_4?crid=1I5W0J1BG6ZUQ&qid=1583109620&sprefix=alan+watts%2Caps%2C382&sr=8-4",
        linkText: "order the book",
        linkNewWindow: true
      },
      {
        id: "wayOfZen",
        title: "the way of zen",
        background: wayOfZenBackground,
        color: "black",
        mainContent: wayOfZen,
        classes: wayOfZenClasses,
        link:
          "https://www.amazon.com/Way-Zen-Alan-W-Watts/dp/0375705104/ref=sr_1_5?crid=1I5W0J1BG6ZUQ&qid=1583109620&sprefix=alan+watts%2Caps%2C382&sr=8-5",
        linkText: "order the way of zen",
        linkNewWindow: true
      },
      {
        id: "becomeWhatYouAre",
        title: "become what you are",
        background: becomeWhatYouAreBackground,
        color: "white",
        mainContent: becomeWhatYouAre,
        classes: becomeWhatYouAreClasses,
        link:
          "https://www.amazon.com/Become-What-You-Alan-Watts/dp/1570629404/ref=sr_1_7?crid=1I5W0J1BG6ZUQ&qid=1583109620&sprefix=alan+watts%2Caps%2C382&sr=8-7",
        linkText: "order become what you are",
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
