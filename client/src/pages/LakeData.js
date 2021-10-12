import React, { useState, useEffect } from "react";
import Col from "../components/Col/Col";
import Br from "../components/Br/Br";
import Contain from "../components/Contain/Contain";
import LakeImage from "../components/LakeImage/LakeImage";
import Row from "../components/Row/Row";
import SelectedContext from "../utils/SelectedContext";
import ImageContainer from "../components/ImageContainer/ImageContainer";
import CutData from "../components/CutData/CutData";
import BrookData from "../components/BrookData/BrookData";
import API from "../utils/API";
import styles from "./LakeData.module.css";
import Button from "react-bootstrap/Button";
import NavBarLakes from "../components/NavBarLakes/NavBarLakes";
import GenCard from "../components/GenCard/GenCard";

export default function Lakes(props) {
  const [selectedLake, setSelectedLake] = useState({});
  const [fish, setFish] = useState([]);
  const [lakeNames, setLakeNames] = useState([]);
  const [lake, setLake] = useState({});

  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);
  const [windSpeed, setWindSpeed] = useState();
  const [windDirection, setWindDirection] = useState("");
  const [cloud, setCloud] = useState("");

  let temp;
  let dailyForecast = [];

  console.log("process.env.node_env below");
  console.log(process.env.NODE_ENV);

  useEffect(() => {
    loadLakes();
    loadWeather();
  }, []);

  function loadWeather() {
    let windSpeed;
    let cloud;

    API.getWeather().then((data) => {
      setWeather({ data });

      data.data.daily.map((day) => {
        dailyForecast.push(day);
      });
      setForecast(dailyForecast);
      windSpeed = data.data.daily[0].wind_speed;
      setWindSpeed(windSpeed);
      cloud = data.data.daily[0].weather[0].main;
      setCloud(cloud);

      calcWind(data.data.daily[0].wind_deg, data.data.daily[0].wind_speed);
    });
  }

  // function handleButtonClick() {
  //   loadWeather();
  //   console.log("SUP You CLICKED THAT BOOTAHN");
  // }

  function calcWind(direction, speed) {
    setWindSpeed(speed.toFixed(0));

    {
      if (direction > 270) {
        setWindDirection("NW");
      } else if (direction < 270 && direction > 180) {
        setWindDirection("SW");
      } else if (direction > 180 && direction > 90) {
        setWindDirection("SE");
      } else setWindDirection("NE");
    }
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
  let tempTomorrow;
  let dayTemp;
  let curTemp;

  forecast.length > 0 &&
    (tempFiveDay = `http://openweathermap.org/img/w/${forecast[0].weather[0].icon}.png`);
  forecast.length > 0 && console.log(tempFiveDay);
  forecast.length > 0 &&
    (tempTomorrow = `http://openweathermap.org/img/w/${forecast[1].weather[0].icon}.png`);
  forecast.length > 0 && console.log(tempFiveDay);

  forecast.length > 0 && (dayTemp = forecast[0].temp.day);
  forecast.length > 0 && console.log(dayTemp);

  forecast.length > 0 &&
    dayTemp !== undefined &&
    (curTemp = (dayTemp - 273) * 1.8 + 32);

  typeof tempForecast !== "undefined"
    ? (tempForecast = forecast[0].weather[0].icon)
    : console.log();

  console.log("wind direction =" + windDirection);
  console.log("wind speed =" + windSpeed);

  return (
    <SelectedContext.Provider
      value={{
        selectedLake,
        lake,
        fish,
        lakeNames,
        weather,
        forecast,
        windSpeed,
        windDirection,
      }}
    >
      <NavBarLakes lakeNames={lakeNames} />
      <Contain>
        <GenCard selectedLake={selectedLake} />

        <Row>
          <Col size="md-8">
            <Row>
              <ImageContainer>
                <LakeImage style={{ float: "left" }} />
              </ImageContainer>
            </Row>
          </Col>
          <Col size="md-3">
            <Row>
              <CutData lake={lake} fish={fish} selectedLake={selectedLake} />
            </Row>
            <Row>
              <BrookData lake={lake} fish={fish} selectedLake={selectedLake} />
            </Row>
          </Col>

          <Col cname="buttonContain" size="md-1">
            <Row>
              <Br />
              <Br />
              <Br />
              <div
                className={styles["weather"]}
                style={{ textAlign: "center" }}
              >
                <i style={{ textAlign: "center", textDecoration: "underline" }}>
                  Current Weather
                </i>
                <Br />
                {forecast.length > 0 && console.log(forecast)}
                {forecast.length > 0 && <img src={tempFiveDay} />}
                {cloud}
                <Br />
                <Br />
                Temp:
                <Br />
                {forecast.length > 0 && <span>{curTemp.toFixed(0)}F</span>}
                <Br />
                <Br />
                Wind:
                <Br />
                {forecast.length > 0 && (
                  <span>
                    {windSpeed} MPH, {windDirection}
                  </span>
                )}
                <Br />
                <Br />
                Tomorrow:
                <Br />
                {forecast.length > 0 && <img src={tempTomorrow} />}
              </div>
              {/* <Button
                className={styles["linkButton"]}
                onClick={() => window.open(selectedLake.map, "_blank")}
                variant="secondary"
                onClick={handleButtonClick}
              >
                GET WEATHER
              </Button> */}
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
                Trail Map
              </Button>
            </Row>
          </Col>
        </Row>
      </Contain>
    </SelectedContext.Provider>
  );
}
