import React, { useContext } from "react";
import Row from "../Row/Row";
import Col from "../Col/Col";
import Container from "react-bootstrap/esm/Container";

import SelectedContext from "../../utils/SelectedContext";

export default function DataDisplay() {
  const { lake, fish, selectedLake } = useContext(SelectedContext);
  return (
    <Container>
      <Row cname="justify-content-md-center">
        <Col size="md-3" cname="align-content-center"></Col>
        <Col size="md-6" cname="align-content-center">
          test
        </Col>
        <Col size="md-3">test</Col>
      </Row>
    </Container>
  );
}
