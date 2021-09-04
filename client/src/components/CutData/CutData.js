import React, { useContext } from "react";
import Card from "react-bootstrap/card";
import ListGroup from "react-bootstrap/ListGroup";
import LakeContext from "../../utils/LakeContext";
import SelectedContext from "../../utils/SelectedContext";

export default function CutData(props) {
  const { lake, fish, selectedLake } = useContext(SelectedContext);

  console.log(selectedLake);

  console.log(props);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="" />
        <ListGroup variant="flush">
          <ListGroup.Item>
            Number of Cutthroat Trout: {selectedLake.numCuts}
          </ListGroup.Item>
          <ListGroup.Item>Cutthroat Size Range:</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}
