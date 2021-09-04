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
        <Card.Img
          variant="top"
          src="http://westernnativetrout.org/wp-content/uploads/2019/07/greenback-cutthroat.jpg"
        />
        <ListGroup variant="flush">
          <ListGroup.Item>
            Number of Cutthroat Trout: {selectedLake.numCuts}
          </ListGroup.Item>
          <ListGroup.Item>Size Range: {selectedLake.cutRange}"</ListGroup.Item>
          <ListGroup.Item>
            Average Size: {selectedLake.cutAvgLength}""
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}
