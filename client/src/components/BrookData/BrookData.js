import React from "react";
import Card from "react-bootstrap/card";
import ListGroup from "react-bootstrap/ListGroup";

export default function CutData(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" />
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
