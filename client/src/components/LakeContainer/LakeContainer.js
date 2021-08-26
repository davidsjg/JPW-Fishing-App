import React from "react";
import Row from "../Row/Row";
import Col from "../Col/Col";
import Container from "../Container/Container";
import Card from "../Card/Card";

// import { StyleSheet, Text, View } from 'react-native'

export default function LakeContainer() {
  return (
    <Container>
      <Row>
        <Col size="md-8">
          <Card />
        </Col>
        <Col size="md-4">
          <Card></Card>
        </Col>
      </Row>
    </Container>
  );
}

// const styles = StyleSheet.create({})
