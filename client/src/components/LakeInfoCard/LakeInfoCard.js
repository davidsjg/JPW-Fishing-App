import React, { useContext } from "react";
import Card from "react-bootstrap/card";
import ListGroup from "react-bootstrap/ListGroup";
import LakeContext from "../../utils/LakeContext";
import SelectedContext from "../../utils/SelectedContext";

export default function LakeInfoCard(props) {
  const { lake, fish, selectedLake } = useContext(SelectedContext);

  console.log(selectedLake);

  console.log(props);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Title>
          <strong>{selectedLake.lake}</strong>
        </Card.Title>
      </Card>
    </>
  );
}
