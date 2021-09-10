import React, { useState, useEffect } from "react";
import Col from "../components/Col/Col";
import Contain from "../components/Contain/Contain";
import LakeImage from "../components/LakeImage/LakeImage";
import Row from "../components/Row/Row";
import SelectedContext from "../utils/SelectedContext";
import ImageContainer from "../components/ImageContainer/ImageContainer";
import CutData from "../components/CutData/CutData";
import BrookData from "../components/BrookData/BrookData";
import API from "../utils/API";
import styles from "./LakeData.module.css";
import NavBarLake from "../components/NavBarLake/NavBarLake";
import Button from "react-bootstrap/Button";

export default function Lakes(props) {
  const [selectedLake, setSelectedLake] = useState({});
  const [fish, setFish] = useState([]);
  const [lakeNames, setLakeNames] = useState([]);
  const [lake, setLake] = useState({});

  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);

  let temp;
  let dailyForecast = [];

  useEffect(() => {
    loadLakes();
    loadWeather();
  }, []);

  function handleButtonClick() {
    console.log(forecast);
    console.log(weather);
  }

  function loadWeather() {
    API.getWeather().then((data) => {
      setWeather({ data });
      console.log(data);

      data.data.daily.length > 0
        ? data.data.daily.map((day) => {
            dailyForecast.push(day);
            setForecast(dailyForecast);
          })
        : console.log("youre fucked");
    });
  }

  function loadLakes() {
    let names = [];
    API.getLakes()
      .then((lake) => {
        setLake({ lake });

        // getFish(lake);

        newLakeData = lake.data.filter((data) => data.lake === historyLake);
        temp = newLakeData[0];

        setSelectedLake(temp);

        lake.data.map((lake) => {
          names.push(lake.lake);
        });
        setLakeNames(names);
      })
      .catch((err) => console.log(err));
  }

  let historyLake = props.match.params.lake;

  let newLakeData;
  let tempForecast;
  let tempFiveDay;

  forecast.length > 0 &&
    (tempFiveDay = `http://openweathermap.org/img/w/${forecast[0].weather[0].icon}.png`);
  forecast.length > 0 && console.log(tempFiveDay);

  typeof tempForecast !== "undefined"
    ? (tempForecast = forecast[0].weather[0].icon)
    : console.log("balls");
  // let tempLake;

  // lake
  // ? (newLakeData = lake.filter((data) => data.lake === historyLake))
  //   : console.log("no data yet");
  // console.log(newLakeData);

  // typeof newLakeData !== "undefined"
  //   ? (tempLake = newLakeData[0])
  //   : console.log("no data yet");

  // typeof newLakeData !== "undefined" ? test() : console.log("no data yet");

  return (
    <SelectedContext.Provider
      value={{ selectedLake, lake, fish, lakeNames, weather, forecast }}
    >
      <NavBarLake />
      <Contain>
        <Row cname="topRow">
          <Col size="md-3" cname="align-content-center">
            <disp className={styles["aBorder"]}>
              <disp className={styles["bigDisp"]}>
                Survey Year: {selectedLake.year}
              </disp>
              <br />
            </disp>
          </Col>
          <Col size="md-6" cname="lakeDataDisp">
            <disp className={styles["aBorder"]}>
              <disp className={styles["bigDisp1"]}>{selectedLake.lake}</disp>
              <br></br>
            </disp>
          </Col>
          <Col size="md-3">
            <disp className={styles["aBorder"]} style={{ float: "right" }}>
              <disp className={styles["bigDisp"]}>
                Acres: {selectedLake.acres}
              </disp>
              <br></br>
            </disp>
          </Col>
        </Row>
        <Row>
          <Col size="md-3">
            <Row>
              <CutData lake={lake} fish={fish} selectedLake={selectedLake} />
            </Row>
            <Row>
              <BrookData lake={lake} fish={fish} selectedLake={selectedLake} />
            </Row>
          </Col>

          <Col size="md-8">
            <Row>
              <ImageContainer>
                <LakeImage style={{ float: "left" }} />
              </ImageContainer>
            </Row>
          </Col>
          <Col cname="buttonContain" size="md-1">
            <Row>
              <Button
                className={styles["linkButton"]}
                // href={selectedLake.trail}
                variant="secondary"
                onClick={() => window.open(selectedLake.trail, "_blank")}
              >
                Trail Info
              </Button>
              <Button
                className={styles["linkButton"]}
                onClick={() => window.open(selectedLake.map, "_blank")}
                variant="secondary"
              >
                Weather
              </Button>
              <Button
                className={styles["linkButton"]}
                onClick={() => window.open(selectedLake.map, "_blank")}
                variant="secondary"
                onClick={handleButtonClick}
              >
                GET WEATHER
              </Button>
              <div>
                {forecast.length > 0 && (
                  <span>{forecast[0].weather[0].description}</span>
                )}
                {forecast.length > 0 && console.log(forecast)}
                {forecast.length > 0 && <img src={tempFiveDay} />}
              </div>
            </Row>
          </Col>
        </Row>
      </Contain>
    </SelectedContext.Provider>
  );
}
