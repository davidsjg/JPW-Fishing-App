import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Contain from "./components/Contain/Contain";
import LakeContext from "./utils/LakeContext";
import API from "./utils/API";
import { STATES } from "mongoose";

function App() {
  //empty array as second parameter means it only runs once

  const tempObject = {
    lake: "Heart Lake",
  };

  const [lakeState, setLakeState] = useState({
    lake: { tempObject },
    fish: ["Cutthroat"],
  });
  console.log(lakeState);

  useEffect(() => {
    loadLakes();
  }, []);

  function fishState(fish) {
    setLakeState({ ...lakeState, fish });
  }

  function getFish(res) {
    console.log(res.data[0].fish);
    let tempFish = res.data[0].fish;
    fishState(tempFish);
  }

  function loadLakes() {
    API.getLakes()
      .then((lake) => {
        setLakeState({ ...lakeState, lake });
        // getFish(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <LakeContext.Provider value={lakeState}>
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
    </LakeContext.Provider>
  );
}

export default App;
