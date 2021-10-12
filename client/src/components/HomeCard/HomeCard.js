import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./HomeCard.module.css";

export default function HomeCard() {
  return (
    <Card className={styles["homeCard"]} style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>JAMES PEAK WILDNERESS LAKE FINDER </Card.Title>
        <Card.Title> </Card.Title>
        <Card.Text>WELCOME!</Card.Text>
        <Card.Text>
          Every so often, Colorado Parks and Wildlife conducts a fish survey on
          Colorado lakes. Pick a lake to see the results of it's fish survey!
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
