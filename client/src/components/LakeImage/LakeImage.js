import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import LakeContext from "../../utils/LakeContext";
import Image from "react-bootstrap/Image";
import styles from "./LakeImage.module.css";

export default function LakeCard(props) {
  let currLake = props.currLake;

  return (
    <>
      {currLake ? (
        <Image
          src={currLake.img}
          fluid
          rounded
          className={styles["imgContain"]}
        />
      ) : (
        <i className="fa fa-spinner fa-spin" aria-hidden="true" />
      )}
    </>
  );
}
