import React, { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import styles from "./LakeDropdown.module.css";

export default function LakeDropdown(props) {
  let lakeNames = props.props.lakeNames;
  function handleClick() {
    console.log(props);
  }

  return (
    <>
      <Dropdown className={styles["center1"]} style={{ marginTop: 1 }}>
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
          // onSelect={handleSelect}
        >
          {lakeNames.map((lakeName, i) => {
            return (
              <Dropdown.Item eventKey={lakeName} key={i} href={"/" + lakeName}>
                {lakeName}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
