import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "./GenCard.module.css";
import Br from "../Br/Br";
import API from "../../utils/API";
import Contain from "../Contain/Contain";

export default function GenCard(props) {
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);
  const [windSpeed, setWindSpeed] = useState();
  const [windDirection, setWindDirection] = useState("");
  const [cloud, setCloud] = useState("");

  let dailyForecast = [];
  let tempFiveDay;
  let tempTomorrow;
  let dayTemp;
  let tempForecast;
  let curTemp;

  useEffect(() => {
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

  return (
    <>
      {/* <Row>
        <Col size="md-4">Test</Col>
        <Col size="md-6">Test 2</Col>

        <Col size="md-2">Test 2</Col>
      </Row> */}
    </>
  );
}

// <Card style={{ width: "18rem" }}>
// <Col size="md-3" cname="align-content-center">
//   <span className={styles["aBorder"]}>
//     <span className={styles["bigDisp"]}>
//       Survey Year: {props.selectedLake.year}
//     </span>
//     <br />
//   </span>
// </Col>
// <Col size="md-6" cname="lakeDataDisp">
//   <span className={styles["aBorder"]}>
//     <span className={styles["bigDisp1"]}>{props.selectedLake.lake}</span>
//     <br></br>
//   </span>
// </Col>
// <Col size="md-3">
//   <span className={styles["aBorder"]} style={{ float: "right" }}>
//     <span className={styles["bigDisp"]}>
//       Acres: {props.selectedLake.acres}
//     </span>
//     <br></br>
//   </span>
// </Col>
// </Card>
