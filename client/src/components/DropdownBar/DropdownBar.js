import React, { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import styles from "./DropdownBar.module.css";
import LakeContext from "../../utils/LakeContext";

export default function DropdownBar() {
  const { lake, fish } = useContext(LakeContext);
  // let lakeData = lake.data;

  let arrTest = ["dog", "cat", "bird", "slap", "fuckbirds"];

  console.log(fish);

  return (
    <Dropdown className={styles["center1"]}>
      <Dropdown.Toggle
        style={{ width: "100%" }}
        variant="secondary"
        id="dropdown-basic"
      >
        SELECT A LAKE!
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ width: "100%" }} className={styles["ddBar"]}>
        {arrTest.map((thing) => (
          <Dropdown.Item value={thing} href="#/action-1">
            {thing}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
