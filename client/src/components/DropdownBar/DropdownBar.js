import React, { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "./DropdownBar.module.css";
import LakeContext from "../../utils/LakeContext";

export default function DropdownBar() {
  const { lake, fish, lakeNames } = useContext(LakeContext);
  console.log(lakeNames);
  console.log(lake);
  console.log(fish);

  // {lakeNames.map((name, id) => {
  //   return <Dropdown.Item href="#/action">{name}</Dropdown.Item>;
  // })}

  return (
    <Dropdown className={styles["center1"]}>
      <Dropdown.Toggle
        style={{ width: "100%" }}
        variant="secondary"
        id="dropdown-basic"
      >
        SELECT A LAKE!
      </Dropdown.Toggle>
      <Dropdown.Menu
        style={{ width: "100%" }}
        className={styles["ddBar"]}
      ></Dropdown.Menu>
    </Dropdown>
  );
}
