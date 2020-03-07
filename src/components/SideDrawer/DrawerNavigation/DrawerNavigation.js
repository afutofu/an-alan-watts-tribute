import React from "react";
import { Link } from "react-router-dom";

import classes from "./DrawerNavigation.module.css";

const drawerNavigation = props => {
  const renderDrawerNavigation = () => {
    return (
      <div className={classes.DrawerNavigation}>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/videos">videos</Link>
        <Link to="/books">books</Link>
      </div>
    );
  };

  return renderDrawerNavigation();
};

export default drawerNavigation;
