import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Contain from "./components/Contain/Contain";
import LakeContext from "./utils/LakeContext";
import API from "./utils/API";

function App() {
  //by calling useState, it gives us access two fishState and setFishState that we are destructuring from an array
  const [lakeState, setLakeState] = useState({});
  console.log(lakeState);

  const [fishState, setFishState] = useState(["Cutthroat"]);
  console.log(fishState);

  useEffect(() => {
    loadLakes();
  }, []);

  function getFish(res) {
    console.log(res.data[0].fish);
    setFishState(res.data[0].fish);
  }

  function loadLakes() {
    API.getLakes()
      .then((res) => {
        setLakeState(res);
        setFishState(res.data[0].fish);
        getFish(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Router>
      <Contain>
        <div className="imageDiv">
          <NavigationBar />
          <Switch>
            <Route exact path={"/"}>
              <div>
                <Home />
              </div>
            </Route>
            <Route exact path={"/lakes"}>
              <div>
                <Home />
              </div>
            </Route>
          </Switch>
        </div>
      </Contain>
    </Router>
  );
}

export default App;
