import React, { useContext } from "react";
import Card from "react-bootstrap/card";
import ListGroup from "react-bootstrap/ListGroup";
import LakeContext from "../../utils/LakeContext";
import SelectedContext from "../../utils/SelectedContext";

export default function BrookData(props) {
  const { lake, fish, selectedLake, lakeNames } = useContext(SelectedContext);

  console.log(lakeNames);

  console.log(props);

  return (
    <>
      <Card style={{ width: "18rem" }} style={{ marginTop: 5 }}>
        <Card.Img
          variant="top"
          src="https://www.pourvoiries.com/wp-content/uploads/2010/11/OmbleFontaine.jpg"
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
