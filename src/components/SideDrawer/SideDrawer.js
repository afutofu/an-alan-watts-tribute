import React from "react";

import classes from "./SideDrawer.module.css";
import Backdrop from "../UI/Backdrop/Backdrop";

const sideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}></div>
    </React.Fragment>
  );
};

export default sideDrawer;
