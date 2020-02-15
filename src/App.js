import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./containers/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";

const app = () => {
  return (
    <div>
      <Navbar />
      <SideDrawer />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default app;
