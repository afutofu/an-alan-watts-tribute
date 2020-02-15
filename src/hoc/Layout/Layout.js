import React, { Component } from "react";

import Navbar from "../../components/Navbar/Navbar";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Footer from "../../components/Footer/Footer";

class Layout extends Component {
  state = { showSideDrawer: false };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <SideDrawer />
        <main>{this.props.children}</main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;
