import React, { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import styles from "./DropdownBar.module.css";
import LakeContext from "../../utils/LakeContext";
import DropBar from "../DropBar/DropBar";

export default function DropdownBar() {
  const { lake, fish } = useContext(LakeContext);
  // let lakeData = lake.data;
  // <Dropdown.Menu style={{ width: "100%" }} className={styles["ddBar"]}>
  // {arrTest.map((thing) => (
  //   <Dropdown.Item value={thing} href="#/action-1">
  //     {thing}
  //   </Dropdown.Item>
  // ))}

  // {lake.data.map((name) => {
  //   return ( lake.data.length ? (
  //     <Dropdown.Item value={name} href="#/action-1">
  //       {name}
  //     </Dropdown.Item>
  //   ) : (
  //     <h3>You haven't added any favorites yet!</h3>
  //   )
  //   )
  // })}

  console.log(lake.data);

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
        <DropBar />
      </Dropdown.Menu>
    </Dropdown>
  );
}
