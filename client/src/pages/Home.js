import React, { useState, useEffect } from "react";
import API from "../utils/API";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import styles from "./Home.module.css";

import LakeContainer from "../components/LakeContainer/LakeContainer";
import LakeContext from "../utils/LakeContext";
import Br from "../components/Br/Br";
function Home(props) {
  const [lakeState, setLakeState] = useState({
    lake: {},
    fish: ["Cutthroat"],
    lakeNames: ["Heart"],
    selectedLake: {},
  });

  useEffect(() => {
    loadLakes();
  }, []);

  function setFishArray(fish, selectedLake) {}

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

  //by calling useState, it gives us access two fishState and setFishState that we are destructuring from an array

  return (
    <>
      <NavigationBar />

      <div className={styles["homeContain"]}>
        <LakeContext.Provider value={lakeState}>
          <LakeContainer setFishArray={setFishArray} />
        </LakeContext.Provider>
        <Br />
        <Br />
        <Br />
        <Br />
        <Br />
        <Br />
        <Br />
        <Br />
        <Br />
        <Br />
        <Br />
        <Br />
        <Br />
        <Br />
        <Br />
        <Br />
        <Br />
        <Br />
      </div>
    </>
  );
}

export default Home;
