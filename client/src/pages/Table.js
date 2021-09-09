import React, { useState, useEffect } from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import API from "../utils/API";
import Container from "react-bootstrap/esm/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";

export default function Table() {
  const [lakeState, setLakeState] = useState({
    lake: {},
    fish: ["Cutthroat"],
    lakeNames: ["Heart"],
    selectedLake: {},
  });

  useEffect(() => {
    loadLakes();
  }, []);

  function setFishArray(fish, selectedLake) {}

  function loadLakes() {
    API.getLakes()
      .then((lake) => {
        let fish = lake.data[0].fish;

        let lakeNames = [];
        let selectedLake = lake.data[0];

        lake.data.map((lake) => {
          lakeNames.push(lake.lake);
        });

        setLakeState({ lake, fish, lakeNames, selectedLake });

        // getFish(lake);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <NavigationBar />
      <Container>
        <Row cname="justify-content-md-center">
          <Col size="md-3"></Col>
          <Col size="md-6" cname="align-content-center"></Col>
          <Col size="md-3"></Col>
        </Row>
      </Container>
    </>
  );
}
