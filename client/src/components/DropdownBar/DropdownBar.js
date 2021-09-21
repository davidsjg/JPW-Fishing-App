import React, { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import styles from "./DropdownBar.module.css";
import LakeContext from "../../utils/LakeContext";

export default function DropdownBar(props) {
  const { lake, fish, lakeNames, selectedLake } = useContext(LakeContext);

  return (
    <>
      <Dropdown className={styles["center2"]}>
        <Dropdown.Toggle
          style={{ width: "100%" }}
          variant="secondary"
          id="dropdown-basic"
          style={{ backgroundColor: "white", color: "black", width: "100%" }}
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
