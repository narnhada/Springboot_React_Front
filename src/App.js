import React from "react";
import { Route } from "react-router-dom";

import Index2 from "./componentSpring/Index2";
import Posts_save from "./componentSpring/Posts_save";
import Posts_update from "./componentSpring/Posts_update";

function App() {
  return (
    <>
      <Route path="/" exact={true} component={Index2} />
      <Route path="/posts/save" component={Posts_save} />
      <Route path="/posts/update/:id" component={Posts_update} />
    </>
  );
}

export default App;
