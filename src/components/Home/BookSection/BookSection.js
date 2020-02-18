import React from "react";

import classes from "./BookSection.module.css";

const bookSection = props => {
  return (
    <section id="book" className={classes.BookSection}>
      <TopSectionChanger color="black" topPosition={`${props.order}05vh`} />
      <h3 className={classes.Title} style={{ top: `${props.order}15vh` }}>
        BOOKS
      </h3>
      <div className={classes.Container}>
        <img src="../../../assets/images/books/TheWisdomOfInsecurity.jpg" />
      </div>
      <button>MORE ABOUT ALAN WATTS</button>
      <SectionChanger
        to="quote"
        color="black"
        topPosition={`${props.order}95vh`}
      />
    </section>
  );
};

export default bookSection;
