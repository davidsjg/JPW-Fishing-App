import React, { useState, useEffect } from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import API from "../utils/API";
import Container from "react-bootstrap/esm/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import NavBarLakes2 from "../components/NavBarLakes2/NavBarLakes2";

export default function TableData() {
  const [lake, setLake] = useState([]);
  const [lakeArr, setLakeArr] = useState([]);
  const [lakeNames, setLakeNames] = useState([]);

  let tempLake = [];

  let testTrue = true;
  let tempArr = [];

  useEffect(() => {
    loadLakes();
  }, []);

  function handleClick() {
    console.log(lakeNames);
  }

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
              tempArr.push(lake.lake);
            });
        }
        console.log(lakeArr);
        setLakeArr(lakeArr);
        setLakeNames(tempArr);

        // lakeArr.map((lakeName) => {
        //   tempArr.push(lakeName.lake);
        // });
      })

      .catch((err) => console.log(err));
  }

  return (
    <>
      <NavBarLakes2 lakeNames={lakeNames} />
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

                {lakeArr.map((lake, index) => {
                  return (
                    <tr key={index}>
                      <th key={19}>
                        <a href={"/" + lake.lake}>{lake.lake}</a>
                      </th>
                      <th key={10}>{lake.acres === 0 ? "-" : lake.acres}</th>
                      <th key={11}>{lake.year === 0 ? "-" : lake.year}</th>
                      <th key={12}>
                        {lake.numCuts === 0 ? "-" : lake.numCuts}
                      </th>
                      <th key={13}>
                        {lake.cutAvgLength === 0 ? "-" : lake.cutAvgLength}
                      </th>
                      <th key={14}>
                        {lake.cutRange === "" ? "-" : lake.cutRange}
                      </th>
                      <th key={15}>
                        {lake.numBrooks === 0 ? "-" : lake.numBrooks}
                      </th>
                      <th key={16}>
                        {lake.brkAvgLength === 0 ? "-" : lake.brkAvgLength}
                      </th>
                      <th key={17}>
                        {lake.brkRange === "0" ? "-" : lake.brkRange}
                      </th>
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
      <Button onClick={handleClick}>Click Me</Button>
    </>
  );
}
