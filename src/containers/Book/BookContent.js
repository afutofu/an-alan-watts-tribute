import React from "react";

import wisdomOfInsecurityClasses from "./Styles/WisdomOfInsecurity.module.css";
import theBookClasses from "./Styles/TheBook.module.css";

import wisdomOfInsecurityCover from "../../assets/images/books/TheWisdomOfInsecurity.jpg";
import theBookCover from "../../assets/images/books/TheBook.jpg";

export const wisdomOfInsecurity = (
  <React.Fragment>
    <img
      className={wisdomOfInsecurityClasses.BookCover}
      src="https://images-na.ssl-images-amazon.com/images/I/41mlryGPaoL.jpg"
      alt=""
    />
    <div className={wisdomOfInsecurityClasses.BookDesc}>
      <p>
        We live in an age of unprecedented anxiety. Spending all our time trying
        to anticipate and plan for the future and to lamenting the past, we
        forget to embrace the here and now. We are so concerned with tomorrow
        that we forget to enjoy today. Drawing from Eastern philosophy and
        religion, Alan Watts shows that it is only by acknowledging what we do
        not—and cannot—know that we can learn anything truly worth knowing. In
        The Wisdom of Insecurity, he shows us how, in order to lead a fulfilling
        life, we must embrace the present—and live fully in the now.
      </p>
    </div>
  </React.Fragment>
);

export const theBook = (
  <React.Fragment>
    <img className={theBookClasses.BookCover} src={theBookCover} alt="" />
    <div className={theBookClasses.BookDesc}>
      <p>
        At the root of human conflict is our fundamental misunderstanding of who
        we are. The illusion that we are isolated beings, unconnected to the
        rest of the universe, has led us to view the “outside” world with
        hostility, and has fueled our misuse of technology and our violent and
        hostile subjugation of the natural world. To help us understand that the
        self is in fact the root and ground of the universe, Watts has crafted a
        revelatory primer on what it means to be human—and a mind-opening manual
        of initiation into the central mystery of existence.
      </p>
    </div>
  </React.Fragment>
);
