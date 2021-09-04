import React, { useContext, useEffect } from "react";
import Col from "../components/Col/Col";
import Contain from "../components/Contain/Contain";
import LakeCard from "../components/LakeImage/LakeImage";
import Row from "../components/Row/Row";
import LakeContext from "../utils/LakeContext";
import styles from "./LakeData.module.css";
import ImageContainer from "../components/ImageContainer/ImageContainer";
import FishData from "../components/CutData/CutData";
import CutData from "../components/CutData/CutData";
import BrookData from "../components/BrookData/BrookData";

export default function Lakes(props) {
  const { lake, fish, lakeNames, selectedLake } = useContext(LakeContext);

  let historyLake = props.match.params.lake;
  let lakeData = lake.data;
  let newLakeData;
  let tempLake;

  lakeData
    ? (newLakeData = lakeData.filter((data) => data.lake === historyLake))
    : console.log("no data yet");

  typeof newLakeData !== "undefined"
    ? (tempLake = newLakeData[0])
    : console.log("no data yet");

  // typeof newLakeData !== "undefined" ? test() : console.log("no data yet");

  return (
    <Contain>
      <Row>
        <Col size="md-3">
          <Row>
            <CutData currLake={tempLake} />
          </Row>
          <Row>
            <BrookData currLake={tempLake} />
          </Row>
        </Col>

        <Col size="md-9">
          <ImageContainer>
            <LakeCard currLake={tempLake} />
          </ImageContainer>
        </Col>
      </Row>
    </Contain>
  );
}
