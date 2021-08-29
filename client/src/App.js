import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Contain from "./components/Contain/Contain";
import LakeContext from "./utils/LakeContext";
import API from "./utils/API";

function App() {
  //empty array as second parameter means it only runs once

  const [lakeState, setLakeState] = useState({
    lake: {},
    fish: ["Cutthroat"],
    lakeNames: ["Heart"],
  });

  console.log(lakeState);

  useEffect(() => {
    let name = "name";
    loadLakes();
    // getLakeNames(name);
  }, []);

  function loadLakes() {
    API.getLakes()
      .then((lake) => {
        let fish = lake.data[0].fish;

        let lakeNomers = [];

        lake.data.map((lake) => {
          lakeNomers.push(lake.lake);
        });

        setLakeState({ lake, fish, lakeNomers });

        // getFish(lake);
      })
      .catch((err) => console.log(err));
  }

  // function getLakeNames(name) {
  //   let tempArr = [];
  //   API.getLakeNames(name).then((data) => {
  //     console.log(data);
  //   });
  // }

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
