import React, { useState, useEffect, useContext } from "react";
import Col from "../components/Col/Col";
import Contain from "../components/Contain/Contain";
import ContainTest from "../components/ContainTest/ContainTest";
import Row from "../components/Row/Row";
import LakeDetailCard from "../components/LakeDetailCard/LakeDetailCard";
import API from "../utils/API";
import NavBarLake from "../components/NavBarLake/NavBarLake";

export default function Lakes() {
  const [selectedLake, setSelectedLake] = useState({});
  const [fish, setFish] = useState([]);
  const [lakeNames, setLakeNames] = useState([]);
  const [lake, setLake] = useState({});
  const [lakesArray, setLakesArray] = useState([]);

  let temp;
  let historyLake;
  let newLakeData;
  let tempLake;
  let allLakes = [];

  useEffect(() => {
    loadLakes();
  }, []);

  function loadLakes() {
    let names = [];
    API.getLakes()
      .then((lake) => {
        setLake({ lake });

        // getFish(lake);
        console.log(lake);
        newLakeData = lake.data.filter((data) => data.lake === historyLake);
        temp = newLakeData[0];
        console.log(newLakeData[0]);
        setSelectedLake(temp);

        lake.data.map((lake) => {
          names.push(lake.lake);
        });

        lake.data.map((lake) => {
          allLakes.push(lake);
        });
        setLakesArray(allLakes);
        setLakeNames(names);
      })
      .catch((err) => console.log(err));
  }

  // console.log(allLakes);

  return (
    <>
      <NavBarLake />
      <Contain>
        <Row>
          {lakesArray.map((lake, index) => {
            return (
              <>
                <Col
                  size="md-4"
                  style={{ justifyContent: "center" }}
                  style={{ display: "flex" }}
                  key={lake.id}
                >
                  <LakeDetailCard key={lake} props={lake} />
                </Col>
              </>
            );
          })}
        </Row>
      </Contain>
    </>
  );
}
