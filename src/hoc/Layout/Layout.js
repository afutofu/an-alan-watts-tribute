import React, { Component } from "react";

import classes from "./Layout.module.css";
import Navbar from "../../components/Navbar/Navbar";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Footer from "../../components/Footer/Footer";

class Layout extends Component {
  state = { showSideDrawer: false };

  drawerToggleClicked = () => {
    this.setState({ showSideDrawer: true });
  };

  drawerClicked = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    return (
      <div className={classes.Layout}>
        <Navbar clicked={this.drawerToggleClicked} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.drawerClicked}
        />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
