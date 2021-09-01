import React, { useContext } from "react";
import Col from "../components/Col/Col";
import Contain from "../components/Contain/Contain";
import ContainTest from "../components/ContainTest/ContainTest";
import Row from "../components/Row/Row";
import LakeContext from "../utils/LakeContext";

export default function Lakes() {
  const { lake, fish, lakeNames } = useContext(LakeContext);

  console.log(lake);

  return (
    <Contain>
      <Row>
        <Col size="md-6">1of3</Col>
        <Col size="md-6">2of3</Col>
      </Row>
      <Row>
        <Col size="md-3">1</Col>
        <Col size="md-6">
          <ContainTest />
        </Col>
        <Col size="md-3">3</Col>
      </Row>
    </Contain>
  );
}
