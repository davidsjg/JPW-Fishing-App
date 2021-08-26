import React from "react";
import Row from "../Row/Row";
import Col from "../Col/Col";
import Contain from "../Contain/Contain";
import Card from "../Card/Card";

// import { StyleSheet, Text, View } from 'react-native'

export default function LakeContainer() {
  return (
    <Contain>
      <Row>
        <Col size="md-6">
          <Card />
        </Col>
        <Col size="md-6">
          <Card></Card>
        </Col>
      </Row>
    </Contain>
  );
}

// const styles = StyleSheet.create({})
