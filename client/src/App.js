import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";

import Contain from "./components/Contain/Contain";

import Lakes from "./pages/Lakes";
import LakeData from "./pages/LakeData";
import TableData from "./pages/TableData";

function App() {
  //empty array as second parameter means it only runs once

  return (
    <Router>
      <Contain>
        <Switch>
          <Route exact path={"/"} render={(props) => <Home {...props} />} />
          <Route path={"/table"} component={TableData} />
          <Route path={"/lakes"} component={Lakes} />
          <Route
            exact
            path={"/:lake"}
            render={(props) => <LakeData {...props} />}
          />
        </Switch>
      </Contain>
    </Router>
  );
}

export default App;
