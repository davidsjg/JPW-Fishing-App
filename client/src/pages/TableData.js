import React, { useState, useEffect } from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import API from "../utils/API";
import Container from "react-bootstrap/esm/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import Table from "react-bootstrap/Table";

export default function TableData() {
  const [lake, setLake] = useState([]);

  let tempLake = [];
  let tempArr = ["peanuts", "salty", "yum"];

  useEffect(() => {
    loadLakes();
  }, []);

  let lakeArr;

  function loadLakes() {
    API.getLakes()
      .then((lake) => {
        setLake([lake.data]);
        console.log(lake);

        lake.data.map((lake) => {
          lakeArr.push(lake);
        });
        console.log(lakeArr);
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
                  <th>Range</th>
                  <th>#BRK</th>
                  <th>Ave. Length</th>
                  <th>Range</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {lakeArr !== []
                  ? tempArr.map((lakeName) => {
                      return alert(lakeName);
                    })
                  : console.log("no data yet")}
                {/* {lakeArr.map((lakeName) => {
                  return alert(lakeName);
                })} */}
              </tbody>
            </Table>
          </Col>
          <Col size="md-2"></Col>
        </Row>
      </Container>
    </>
  );
}
