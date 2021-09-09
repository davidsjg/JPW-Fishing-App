import React from "react";
import Row from "../Row/Row";
import Col from "../Col/Col";
import Contain from "../Contain/Contain";
import DropdownCard from "../DropdownCard/DropdownCard";
import LakeImage from "../LakeImage/LakeImage";
import Br from "../Br/Br";
import Container from "react-bootstrap/Container";

import styles from "./LakeContainer.module.css";
import DropdownBar from "../DropdownBar/DropdownBar";
import HomeCard from "../HomeCard/HomeCard";

export default function LakeContainer(props) {
  return (
    <Contain mainContain="mainContain">
      <Container>
        <Row cname="justify-content-md-center">
          <Col size="md-3"></Col>
          <Col size="md-6" cname="align-content-center">
            <HomeCard />
          </Col>
          <Col size="md-3"></Col>
        </Row>
      </Container>
      <Row>
        <Col size="md-3"></Col>
        <Col size="md-6">
          <DropdownCard props={props} />
        </Col>
        <Col size="md-3"></Col>
      </Row>
      <Row>
        <Col size="md-3"></Col>
        <Col size="md-6"></Col>
        <Col size="md-3"></Col>
      </Row>
    </Contain>
  );
}

// const styles = StyleSheet.create({})
