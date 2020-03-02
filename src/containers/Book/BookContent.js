import React from "react";

import wisdomOfInsecurityClasses from "./Styles/WisdomOfInsecurity.module.css";
import theBookClasses from "./Styles/TheBook.module.css";
import wayOfZenClasses from "./Styles/WayOfZen.module.css";
import BecomeWhatYouAreClasses from "./Styles/BecomeWhatYouAre.module.css";

import wisdomOfInsecurityCover from "../../assets/images/books/TheWisdomOfInsecurity.jpg";
import theBookCover from "../../assets/images/books/TheBook.jpg";
import wayOfZenCover from "../../assets/images/books/WayOfZen.jpg";
import becomeWhatYouAreCover from "../../assets/images/books/BecomeWhatYouAre.jpg";

export const wisdomOfInsecurity = (
  <React.Fragment>
    <img
      className={wisdomOfInsecurityClasses.BookCover}
      src={wisdomOfInsecurityCover}
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

export const wayOfZen = (
  <React.Fragment>
    <img className={wayOfZenClasses.BookCover} src={wayOfZenCover} alt="" />
    <div className={wayOfZenClasses.BookDesc}>
      <p>
        In his definitive introduction to Zen Buddhism, Alan Watts explains the
        principles and practices of this ancient religion to Western readers.
        With a rare combination of freshness and lucidity, he delves into the
        origins and history of Zen to explain what it means for the world today
        with incredible clarity. Watts saw Zen as “one of the most precious
        gifts of Asia to the world,” and in The Way of Zen he gives this gift to
        readers everywhere.
      </p>
    </div>
  </React.Fragment>
);

export const becomeWhatYouAre = (
  <React.Fragment>
    <img
      className={BecomeWhatYouAreClasses.BookCover}
      src={becomeWhatYouAreCover}
      alt=""
    />
    <div className={BecomeWhatYouAreClasses.BookDesc}>
      <p>
        In this collection of writings, including nine new chapters never before
        available in book form, Watts displays the intelligence, playfulness of
        thought, and simplicity of language that has made him so perennially
        popular as an interpreter of Eastern thought for Westerners. He draws on
        a variety of religious traditions, and covers topics such as the
        challenge of seeing one's life "just as it is," the Taoist approach to
        harmonious living, the limits of language in the face of ineffable
        spiritual truth, and the psychological symbolism of Christian thought.
      </p>
    </div>
  </React.Fragment>
);
