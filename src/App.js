import React from "react";

import { HashRouter, Route } from "react-router-dom";
import Index from "./componentSpring/Index";
import Navigation from "./component/Navigation";
import Home from "./component/Home";
import Posts_save from "./componentSpring/Posts_save";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/index" component={Index} />
      <Route path="/posts/save" component={Posts_save} />
    </HashRouter>
  );
}

export default App;

