import React from "react";

import classes from "./Navbar.module.css";

const navbar = () => {
  return (
    <div className={classes.Navbar}>
      <div className={classes.Title}>
        <h3>AN ALAN WATTS TRIBUTE</h3>
      </div>
      <div className={classes.Links}>
        <h4>ABOUT</h4>
        <h4>VIDEOS</h4>
        <h4>QUOTES</h4>
        <h4>BOOKS</h4>
      </div>
    </div>
  );
};

export default navbar;
