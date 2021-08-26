import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import styles from "./DropdownBar.module.css";

export default function DropdownBar() {
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
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
