import React, { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "./DropdownBar.module.css";
import LakeContext from "../../utils/LakeContext";
import Form from "react-bootstrap/Form";

export default function DropdownBar() {
  const { lake, fish, lakeNames } = useContext(LakeContext);

  function handleSelect(lake) {
    console.log(lake);
  }

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
        onSelect={handleSelect("heart")}
        style={{ width: "100%" }}
        className={styles["ddBar"]}
      >
        {lakeNames.map((lakeName) => {
          return (
            <Dropdown.Item
              href={`/lakes/:${lakeName.replace(/\s/g, "")}`}
              // href={"lakes:" + lakeName}
            >
              {lakeName}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

// return (
//   <Dropdown className={styles["center1"]}>
//     <Dropdown.Toggle
//       style={{ width: "100%" }}
//       variant="secondary"
//       id="dropdown-basic"
//     >
//       SELECT A LAKE!
//     </Dropdown.Toggle>
//     <Dropdown.Menu
//       onSelect={handleSelect("heart")}
//       style={{ width: "100%" }}
//       className={styles["ddBar"]}
//     >
// {lakeNames.map((lakeName) => {
//   return (
//     <Dropdown.Item
//       value={lakeName}
//       // href={"lakes:" + lakeName}
//     >
//       {lakeName}
//     </Dropdown.Item>
//   );
// })}
//     </Dropdown.Menu>
//   </Dropdown>
// );
