import React from "react";

import classes from "./Navbar.module.css";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const navbar = props => {
  return (
    <nav className={classes.Navbar}>
      <h3 className={classes.Title}>AN ALAN WATTS TRIBUTE</h3>
      <div className={classes.Links}>
        <h4>ABOUT</h4>
        <h4>VIDEOS</h4>
        <h4>QUOTES</h4>
        <h4>BOOKS</h4>
        <DrawerToggle clicked={props.clicked} />
      </div>
    </nav>
  );
};

export default navbar;
