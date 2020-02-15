import React, { Component } from "react";

import Navbar from "../../components/Navbar/Navbar";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Footer from "../../components/Footer/Footer";

class Layout extends Component {
  state = { showSideDrawer: false };

  drawerToggleClicked = () => {
    this.setState({ showSideDrawer: true });
  };

  backdropClicked = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar clicked={this.drawerToggleClicked} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.backdropClicked}
        />
        <main>{this.props.children}</main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;
