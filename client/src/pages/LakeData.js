import React, { useContext, useEffect } from "react";
import Col from "../components/Col/Col";
import Contain from "../components/Contain/Contain";
import LakeCard from "../components/LakeCard/LakeCard";
import Row from "../components/Row/Row";
import LakeContext from "../utils/LakeContext";

export default function Lakes(props) {
  const { lake, fish, lakeNames, selectedLake } = useContext(LakeContext);

  let localState = localStorage.getItem("lakeState");

  console.log(localState);

  let lakeData = lake.data;

  console.log(lakeData);

  let newLakeData;

  lake.data
    ? (newLakeData = lakeData.filter((data) => data.lake === localState))
    : console.log("no data yet");

  console.log(newLakeData);

  return (
    <Contain>
      <Row>
        <Col size="md-3">1of3</Col>
        <Row />
        <Row />
        <Col size="md-9">
          <LakeCard />
        </Col>
      </Row>
    </Contain>
  );
}
