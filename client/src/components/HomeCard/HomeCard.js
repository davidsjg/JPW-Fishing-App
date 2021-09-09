import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./HomeCard.module.css";

export default function HomeCard() {
  return (
    <Card className={styles["homeCard"]} style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>JAMES PEAK WILDNERESS LAKE FINDER</Card.Title>
        <Card.Text>Please select a lake from the dropdown below!</Card.Text>
      </Card.Body>
    </Card>
  );
}
