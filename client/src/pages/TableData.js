import React, { useState, useEffect } from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import API from "../utils/API";
import Container from "react-bootstrap/esm/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import Table from "react-bootstrap/Table";

export default function TableData() {
  const [lake, setLake] = useState([]);
  const [lakeArr, setLakeArr] = useState([]);

  let tempLake = [];

  let testTrue = true;

  useEffect(() => {
    loadLakes();
  }, []);

  function loadLakes() {
    let lakeArr = [];
    API.getLakes()
      .then((lake) => {
        setLake([lake.data]);
        console.log(lake);

        {
          lake.data.length > 0 &&
            lake.data.map((lake) => {
              lakeArr.push(lake);
            });
        }
        console.log(lakeArr);
        setLakeArr(lakeArr);
      })

      .catch((err) => console.log(err));
  }

  return (
    <>
      <NavigationBar />
      <Container>
        <Row cname="justify-content-md-center">
          <Col size="md-3"></Col>
          <Col size="md-6" cname="topHeading">
            James Peak Wilderness Fishing Data
          </Col>
          <Col size="md-3"></Col>
        </Row>
        <Row cname="justify-content-md-center">
          <Col size="md-2"></Col>
          <Col size="md-8" cname="dataTable">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Lake</th>
                  <th>S. Acres</th>
                  <th>Year</th>
                  <th>#CUTTs</th>
                  <th>Ave. Length</th>
                  <th>Cutt Range</th>
                  <th>#BRK</th>
                  <th>Ave. Length</th>
                  <th>Brook Range</th>
                </tr>
                {/* {lakeArr.length > 0 && */}

                {lakeArr.map((lake) => {
                  return (
                    <tr>
                      <th>
                        <a href={"/" + lake.lake}>{lake.lake}</a>
                      </th>
                      <th>{lake.acres === 0 ? "-" : lake.acres}</th>
                      <th>{lake.year === 0 ? "-" : lake.year}</th>
                      <th>{lake.numCuts === 0 ? "-" : lake.numCuts}</th>
                      <th>
                        {lake.cutAvgLength === 0 ? "-" : lake.cutAvgLength}
                      </th>
                      <th>{lake.cutRange === "" ? "-" : lake.cutRange}</th>
                      <th>{lake.numBrooks === 0 ? "-" : lake.numBrooks}</th>
                      <th>
                        {lake.brkAvgLength === 0 ? "-" : lake.brkAvgLength}
                      </th>
                      <th>{lake.brkRange === "0" ? "-" : lake.brkRange}</th>
                    </tr>
                  );
                })}
              </thead>
              <tbody></tbody>
            </Table>
          </Col>
          <Col size="md-2"></Col>
        </Row>
      </Container>
    </>
  );
}
