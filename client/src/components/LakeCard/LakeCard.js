import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import LakeContext from "../../utils/LakeContext";

export default function LakeCard() {
  const { lake, fish, lakeNames, selectedLake } = useContext(LakeContext);

  console.log(selectedLake);

  let lakeImage = selectedLake.lake;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" />
    </Card>
  );
}
