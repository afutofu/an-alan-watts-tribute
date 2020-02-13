import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./containers/Home/Home";
import Navbar from "./components/Navbar/Navbar";

const app = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default app;
