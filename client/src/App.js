import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Contain from "./components/Contain/Contain";
import LakeContext from "./utils/LakeContext";
import API from "./utils/API";
import Lakes from "./pages/Lakes";
import LakeData from "./pages/LakeData";

function App() {
  //empty array as second parameter means it only runs once

  const [lakeState, setLakeState] = useState({
    lake: {},
    fish: ["Cutthroat"],
    lakeNames: ["Heart"],
    selectedLake: {},
  });

  console.log(lakeState);

  useEffect(() => {
    loadLakes();
  }, []);

  function setCurrentLake(selectedLake) {
    setLakeState({ selectedLake });
    localStorage.setItem("lakeState", JSON.stringify(lakeState));
  }

  function setFishArray(fish, selectedLake) {
    setLakeState({ ...lakeState, fish, selectedLake });
  }

  function loadLakes() {
    API.getLakes()
      .then((lake) => {
        let fish = lake.data[0].fish;

        let lakeNames = [];
        let selectedLake = lake.data[0];

        lake.data.map((lake) => {
          lakeNames.push(lake.lake);
        });

        setLakeState({ lake, fish, lakeNames, selectedLake });

        // getFish(lake);
      })
      .catch((err) => console.log(err));
  }

  return (
    <LakeContext.Provider value={lakeState}>
      <Router>
        <Contain>
          <NavigationBar />
          <Switch>
            <Route
              exact
              path={"/"}
              render={(props) => (
                <Home {...props} setFishArray={setFishArray} />
              )}
            />
            <Route path={"/lakes"} component={Lakes} />
            <Route
              exact
              path={"/:lake"}
              render={(props) => (
                <LakeData {...props} setCurrentLake={setCurrentLake} />
              )}
            />
          </Switch>
        </Contain>
      </Router>
    </LakeContext.Provider>
  );
}

export default App;
