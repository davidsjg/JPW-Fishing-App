import React, { useContext, useEffect } from "react";
import Col from "../components/Col/Col";
import Contain from "../components/Contain/Contain";
import LakeCard from "../components/LakeCard/LakeCard";
import Row from "../components/Row/Row";
import LakeContext from "../utils/LakeContext";

import Space from "../components/Space/Space";

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
          1of3
          <Row>
            <Space />
          </Row>
          <Row>
            <Space />
          </Row>
        </Col>

        <Col size="md-9">
          <LakeCard currLake={tempLake} />
        </Col>
      </Row>
    </Contain>
  );
}
