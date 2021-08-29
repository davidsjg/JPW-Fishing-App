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
  });

  useEffect(() => {
    let name = "name";
    loadLakes();
    // getLakeNames(name);
  }, []);

  console.log(lakeState);

  function loadLakes() {
    API.getLakes()
      .then((lake) => {
        let fish = lake.data[0].fish;
        setLakeState({ lake, fish });
        console.log(lake.data);

        //need to map over data
        var obj = lake.data;

        console.log(lake.data[0].lake);

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
