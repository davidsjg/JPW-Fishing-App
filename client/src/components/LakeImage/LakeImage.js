import React, { useContext } from "react";

import SelectedContext from "../../utils/SelectedContext";
import Image from "react-bootstrap/Image";
import styles from "./LakeImage.module.css";

export default function LakeImage(props) {
  const { lake, fish, selectedLake } = useContext(SelectedContext);
  console.log(selectedLake);
  return (
    <>
      <Image
        src={selectedLake.img}
        // style={{ height: 250 }}
        // style={{ width: "80%" }}
        rounded
        className={styles["imgContain"]}
      />
    </>
  );
}
