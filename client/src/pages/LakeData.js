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

export default function Lakes(props) {
  const [selectedLake, setSelectedLake] = useState({});
  const [fish, setFish] = useState([]);
  const [lake, setLake] = useState({});

  let temp;

  useEffect(() => {
    loadLakes();
  }, []);

  function loadLakes() {
    API.getLakes()
      .then((lake) => {
        setLake({ lake });

        // getFish(lake);
        console.log(lake);
        newLakeData = lake.data.filter((data) => data.lake === historyLake);
        temp = newLakeData[0];
        console.log(newLakeData[0]);
        setSelectedLake(temp);
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
    <SelectedContext.Provider value={{ selectedLake, lake, fish }}>
      <Contain>
        <Row>
          <Col size="md-3">
            <Row>
              <CutData lake={lake} fish={fish} selectedLake={selectedLake} />
            </Row>
            <Row>
              <BrookData />
            </Row>
          </Col>

          <Col size="md-9">
            <ImageContainer>
              <LakeCard currLake={tempLake} />
            </ImageContainer>
          </Col>
        </Row>
      </Contain>
    </SelectedContext.Provider>
  );
}
