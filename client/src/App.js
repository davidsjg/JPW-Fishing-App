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
        // var data = {
        //   records: [
        //     { empid: 1, fname: "X", lname: "Y" },
        //     { empid: 2, fname: "A", lname: "Y" },
        //     { empid: 3, fname: "B", lname: "Y" },
        //     { empid: 4, fname: "C", lname: "Y" },
        //     { empid: 5, fname: "C", lname: "Y" },
        //   ],
        // };
        // var empIds = "name";
        // var filteredArray = lake.data.filter(function (itm) {
        //   return empIds.indexOf(itm.empid) > -1;
        // });

        // filteredArray = { lakes: filteredArray };
        // console.log(filteredArray);

        // const ids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

        // let newData = lake.data.filter((i) => ids.includes(i.lake));

        // console.log(newData);

        // console.log(lake.data[0].lake);

        let people = [
          { name: "Alice", age: 21 },
          { name: "Max", age: 20 },
          { name: "Jane", age: 20 },
        ];

        function groupBy(objectArray, property) {
          return objectArray.reduce(function (acc, obj) {
            let key = obj[property];
            if (!acc[key]) {
              acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
          }, {});
        }

        let lakeNames = groupBy(lake.data, "lake");

        console.log(lakeNames);

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
