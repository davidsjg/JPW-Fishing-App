import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  // const [lakeState, setLakeState] = useState({
  //   lake: "Heart Lake",
  // });

  // const [fishState, setFishState] = useState(["cutthroat"]);

  return (
    <Router>
      <div>
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
    </Router>
  );
}

export default App;
