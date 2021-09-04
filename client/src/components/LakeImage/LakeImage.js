import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import SelectedContext from "../../utils/SelectedContext";
import Image from "react-bootstrap/Image";
import styles from "./LakeImage.module.css";

export default function LakeImage(props) {
  const { lake, fish, selectedLake } = useContext(SelectedContext);
  return (
    <>
      <Image
        src={selectedLake.img}
        fluid
        rounded
        className={styles["imgContain"]}
      />
    </>
  );
}
