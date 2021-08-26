import React from "react";
import Row from "../Row/Row";
import Col from "../Col/Col";
import Contain from "../Contain/Contain";

import styles from "./LakeContainer.module.css";
import DropdownBar from "../Dropdown/DropdownBar";

// import { StyleSheet, Text, View } from 'react-native'

function handleInputChange(event) {
  const { name, value } = event.target;
  console.log(name, value);
}

export default function LakeContainer() {
  return (
    <Contain>
      <Row>
        <Col size="md-3"></Col>
        <Col
          className={styles["colClass"]}
          style={{ alignItems: "center" }}
          size="md-6"
        >
          <DropdownBar id={styles["ddBar"]} />
        </Col>
        <Col size="md-3"></Col>
      </Row>
    </Contain>
  );
}

// const styles = StyleSheet.create({})
