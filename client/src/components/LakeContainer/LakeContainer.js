import React from "react";
import Row from "../Row/Row";
import Col from "../Col/Col";
import Contain from "../Contain/Contain";
import DropdownCard from "../DropdownCard/DropdownCard";
import LakeImage from "../LakeImage/LakeImage";
import Br from "../Br/Br";

import styles from "./LakeContainer.module.css";
import DropdownBar from "../DropdownBar/DropdownBar";

export default function LakeContainer(props) {
  return (
    <Contain mainContain="mainContain">
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
