import React, { useState, useEffect } from "react";
import Col from "../components/Col/Col";
import Contain from "../components/Contain/Contain";
import LakeCard from "../components/LakeImage/LakeImage";
import Row from "../components/Row/Row";
import SelectedContext from "../utils/SelectedContext";
import ImageContainer from "../components/ImageContainer/ImageContainer";
import CutData from "../components/CutData/CutData";
import BrookData from "../components/BrookData/BrookData";
import API from "../utils/API";
import styles from "./LakeData.module.css";
import LakeDropdown from "../components/LakeDropdown/LakeDropdown";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import NavBarLake from "../components/NavBarLake/NavBarLake";

export default function Lakes(props) {
  const [selectedLake, setSelectedLake] = useState({});
  const [fish, setFish] = useState([]);
  const [lakeNames, setLakeNames] = useState([]);
  const [lake, setLake] = useState({});

  let temp;

  useEffect(() => {
    loadLakes();
  }, []);

  function loadLakes() {
    let names = [];
    API.getLakes()
      .then((lake) => {
        setLake({ lake });

        // getFish(lake);
        console.log(lake);
        newLakeData = lake.data.filter((data) => data.lake === historyLake);
        temp = newLakeData[0];
        console.log(newLakeData[0]);
        setSelectedLake(temp);

        lake.data.map((lake) => {
          names.push(lake.lake);
        });
        setLakeNames(names);
      })
      .catch((err) => console.log(err));
  }

  let historyLake = props.match.params.lake;

  let newLakeData;
  let tempLake;

  console.log(selectedLake);

  // lake
  // ? (newLakeData = lake.filter((data) => data.lake === historyLake))
  //   : console.log("no data yet");
  // console.log(newLakeData);

  typeof newLakeData !== "undefined"
    ? (tempLake = newLakeData[0])
    : console.log("no data yet");

  // typeof newLakeData !== "undefined" ? test() : console.log("no data yet");

  return (
    <SelectedContext.Provider value={{ selectedLake, lake, fish, lakeNames }}>
      <NavBarLake />
      <Contain>
        <Row>
          <Col size="md-3">
            <Row>
              {/* <LakeInfoCard /> */}
              <disp className={styles["aBorder"]}>
                <disp className={styles["bigDisp"]}>{selectedLake.lake}</disp>
                <br></br>
                <disp className={styles["smallDisp"]}>
                  Acres: {selectedLake.acres} Survey Year: {selectedLake.year}
                </disp>
              </disp>
              {/* <disp className={styles["aBorder"]}>
                Acres: {selectedLake.acres}
              </disp>
              <disp className={styles["aBorder"]}>
                Year Stocked: {selectedLake.year}
              </disp> */}
            </Row>
            <Row>
              <CutData lake={lake} fish={fish} selectedLake={selectedLake} />
            </Row>
            <Row>
              <BrookData lake={lake} fish={fish} selectedLake={selectedLake} />
            </Row>
          </Col>

          <Col size="md-9">
            <Row>
              <ImageContainer>
                <LakeCard />
              </ImageContainer>
            </Row>
          </Col>
        </Row>
      </Contain>
    </SelectedContext.Provider>
  );
}
