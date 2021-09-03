import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import LakeContext from "../../utils/LakeContext";
import styles from "./LakeCard.module.css";

export default function LakeCard(props) {
  let currLake = props.currLake;

  console.log(currLake);

  return (
    <Card style={{ width: "18rem" }} className={styles["imgContainer"]}>
      {currLake ? (
        <Card.Img src={currLake.img} />
      ) : (
        <i className="fa fa-spinner fa-spin" aria-hidden="true" />
      )}
    </Card>
  );
}
