import React from "react";
import Card from "react-bootstrap/card";
import ListGroup from "react-bootstrap/ListGroup";

export default function CutData(props) {
  // console.log(props.currLake.acres);

  let currLake = props.currLake;

  // {
  //   currLake ? console.log(currLake.acres) : console.log("no fucking data");
  // }

  // let numCutties = currLake.numCuts;

  return (
    <>
      {currLake ? (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="" />
          <ListGroup variant="flush">
            <ListGroup.Item>
              Number of Cutthroat Trout: {currLake.numCuts}
            </ListGroup.Item>

            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>
      ) : (
        <i className="fa fa-spinner fa-spin" aria-hidden="true" />
      )}
    </>
  );
}
