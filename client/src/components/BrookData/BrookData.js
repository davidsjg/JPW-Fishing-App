import React, { useContext } from "react";
import Card from "react-bootstrap/card";
import ListGroup from "react-bootstrap/ListGroup";
import LakeContext from "../../utils/LakeContext";
import SelectedContext from "../../utils/SelectedContext";

export default function BrookData(props) {
  const { lake, fish, selectedLake } = useContext(SelectedContext);

  console.log(selectedLake);

  console.log(props);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://www.pourvoirielanaudiere.com/wp-content/uploads/2019/02/mosaique-omble-fontaine.jpg"
        />
        <ListGroup variant="flush">
          <ListGroup.Item>
            Number of Brook Trout: {selectedLake.numBrooks}
          </ListGroup.Item>
          <ListGroup.Item>Size Range: {selectedLake.brkRange}"</ListGroup.Item>
          <ListGroup.Item>
            Average Size: {selectedLake.brkAvgLength}""
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}
