import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Contain from "./components/Contain/Contain";
import LakeContext from "./utils/LakeContext";
import API from "./utils/API";
import Lakes from "./pages/Lakes";
import SelectedLake from "./pages/SelectedLake";
import LakeContainer from "./components/LakeContainer/LakeContainer";

function App() {
  //empty array as second parameter means it only runs once

  const [lakeState, setLakeState] = useState({
    lake: {},
    fish: ["Cutthroat"],
    lakeNames: ["Heart"],
    selectedLake: {},
  });

  console.log(lakeState);

  let hello = "HELLO BRAH";

  useEffect(() => {
    loadLakes();
  }, []);

  function setCurrentLake(selectedLake) {
    setLakeState({ ...lakeState, selectedLake });
  }

  function loadLakes() {
    API.getLakes()
      .then((lake) => {
        let fish = lake.data[0].fish;

        let lakeNames = [];

        lake.data.map((lake) => {
          lakeNames.push(lake.lake);
        });

        setLakeState({ lake, fish, lakeNames });

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
              component={() => <Home setSingleLake={setCurrentLake} />}
            />
            <Route exact path={"/lakes"} component={Lakes} />
            <Route exact path={"/:lake"} component={SelectedLake} />
          </Switch>
        </Contain>
      </Router>
    </LakeContext.Provider>
  );
}

export default App;
