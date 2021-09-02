import React, { useContext } from "react";
import Col from "../components/Col/Col";
import Contain from "../components/Contain/Contain";
import ContainTest from "../components/ContainTest/ContainTest";
import Row from "../components/Row/Row";
import LakeContext from "../utils/LakeContext";

export default function Lakes() {
  const { lake, fish, lakeNames, selectedLake } = useContext(LakeContext);

  console.log(lake);

  return (
    <Contain>
      <Row>
        <Col size="md-3">1of3</Col>
        <Row />
        <Row />
        <Col size="md-9">2of3</Col>
      </Row>
    </Contain>
  );
}
