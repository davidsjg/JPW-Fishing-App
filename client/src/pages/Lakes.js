import React, { useContext } from "react";
import Col from "../components/Col/Col";
import Contain from "../components/Contain/Contain";
import Row from "../components/Row/Row";

export default function Home() {
  return (
    <Contain>
      <Row>
        <Col size="md-6">1of3</Col>
        <Col size="md-6">2of3</Col>
      </Row>
      <Row>
        <Col size="md-3">1</Col>
        <Col size="md-6">2</Col>
        <Col size="md-3">3</Col>
      </Row>
    </Contain>
  );
}
