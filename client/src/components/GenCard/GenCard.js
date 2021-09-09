import React from "react";
import Car from "react-bootstrap/Card";

export default function GenCard() {
  return (
    <Card style={{ width: "18rem" }}>
      {props.image && <Card.Img variant="top" src={props.image} />}

      <Card.Body>
        {props.title && <Card.Title>{props.title}</Card.Title>}
        {props.text && <Card.Text>{props.text}</Card.Text>}
        {
          (props.button = true && (
            <Button variant="primary">Go somewhere</Button>
          ))
        }
      </Card.Body>
    </Card>
  );
}
