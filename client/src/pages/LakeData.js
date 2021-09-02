import React, { useContext, useEffect } from "react";
import Col from "../components/Col/Col";
import Contain from "../components/Contain/Contain";
import LakeCard from "../components/LakeCard/LakeCard";
import Row from "../components/Row/Row";
import LakeContext from "../utils/LakeContext";

export default function Lakes(props) {
  const { lake, fish, lakeNames, selectedLake } = useContext(LakeContext);

  let currLakeState = localStorage.getItem("lakeState");

  // console.log(props.setCurrentLake);

  // let updateState = props.setCurrentLake;

  // let currLake = JSON.parse(currLakeState);

  // useEffect(() => {
  //   updateState(currLake);
  // }, []);

  // console.log(selectedLake);

  console.log(currLakeState);

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
