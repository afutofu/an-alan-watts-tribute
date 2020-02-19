import React from "react";
import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const navbar = props => {
  return (
    <nav className={classes.Navbar}>
      <a href="/" className={classes.Title}>
        <h3>AN ALAN WATTS TRIBUTE</h3>
      </a>

      <div className={classes.Links}>
        <h4>
          <a href="#about">ABOUT</a>
        </h4>
        <h4>
          <a href="#video">VIDEOS</a>
        </h4>
        <h4>
          <a href="#quote">QUOTES</a>
        </h4>
        <h4>
          <a href="#book">BOOKS</a>
        </h4>
        <DrawerToggle clicked={props.clicked} />
      </div>
    </nav>
  );
};

export default navbar;
