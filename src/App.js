import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";

const app = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/about" exact component={About} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
};

export default app;
