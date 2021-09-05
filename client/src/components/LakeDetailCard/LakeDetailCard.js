import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import SelectedContext from "../../utils/SelectedContext";

export default function LakeDetailCard(props) {
  const { lake, fish, lakeNames, selectedLake, LakesArray } =
    useContext(SelectedContext);
  console.log(props.props);
  return (
    <Card
      style={{ width: "18rem" }}
      style={{ justifyContent: "center" }}
      style={{ marginBottom: 5 }}
    >
      <Card.Img variant="top" src={props.props.img} />
      <Card.Body
        // style={{ textAlign: "center" }}
        style={{ backgroundColor: "orange", textAlign: "center" }}
      >
        <Card.Title>{props.props.lake}</Card.Title>
        <Card.Text></Card.Text>
        <Button href={"/" + props.props.lake} variant="secondary">
          View Lake
        </Button>
      </Card.Body>
    </Card>
  );
}
