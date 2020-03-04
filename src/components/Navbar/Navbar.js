import React from "react";

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
          <a href="/about">ABOUT</a>
        </h4>
        <h4>
          <a href="/videos">VIDEOS</a>
        </h4>
        <h4>
          <a href="/books">BOOKS</a>
        </h4>
        <DrawerToggle clicked={props.clicked} />
      </div>
    </nav>
  );
};

export default navbar;
