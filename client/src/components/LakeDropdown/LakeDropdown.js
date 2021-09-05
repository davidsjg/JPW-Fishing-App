import React, { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import styles from "./DropdownBar.module.css";
import LakeContext from "../../utils/LakeContext";

export default function LakeDropdown(props) {
  const { lake, fish, lakeNames, selectedLake } = useContext(LakeContext);

  return (
    <>
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
          // onSelect={handleSelect}
        >
          {lakeNames.map((lakeName) => {
            return (
              <Dropdown.Item eventKey={lakeName} href={"/" + lakeName}>
                {lakeName}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
