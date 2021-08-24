import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";

import "./App.css";

import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route exact path={"/lakes"}>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
