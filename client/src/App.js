import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";

import "./App.css";

import Home from "./pages/Home";

function App() {
  // const [lakeState, setLakeState] = useState({
  //   lake: "Heart Lake",
  // });

  // const [fishState, setFishState] = useState(["cutthroat"]);

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
