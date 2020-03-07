import React from "react";

import classes from "./SideDrawer.module.css";
import Backdrop from "../UI/Backdrop/Backdrop";
import DrawerNavigation from "./DrawerNavigation/DrawerNavigation";

const sideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <div onClick={props.closed}>
      <Backdrop show={props.open} />
      <div className={attachedClasses.join(" ")}>
        <DrawerNavigation />
      </div>
    </div>
  );
};

export default sideDrawer;
