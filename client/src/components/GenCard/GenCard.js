import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "./GenCard.module.css";

export default function GenCard(props) {
  return (
    <Row>
      <Card
        className={styles["headerCard"]}
        style={{ width: "18rem" }}
        style={{ alignItems: "center" }}
      >
        <Col size="md-6" cname="lakeDataDisp">
          <span>
            <span>{props.selectedLake.lake}</span>
            <br></br>
          </span>
        </Col>
        <Col size="md-3" cname="align-content-center">
          <span>
            <span>Survey Year: {props.selectedLake.year}</span>
            <br />
          </span>
        </Col>
        <Col size="md-3">
          <span style={{ float: "right" }}>
            <span>Acres: {props.selectedLake.acres}</span>
            <br></br>
          </span>
        </Col>
      </Card>
    </Row>
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
