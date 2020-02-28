import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Video from "./containers/Video/Video";
import Book from "./containers/Book/Book";

const app = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/about" exact component={About} />
        <Route path="/video" exact component={Video} />
        <Route path="/book" exact component={Book} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
};

export default app;
