import React, { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
// import MenuItem from "react-bootstrap/MenuItem";
import styles from "./DropdownBar.module.css";
import LakeContext from "../../utils/LakeContext";
import Form from "react-bootstrap/Form";
import { Alert, MenuItem } from "bootstrap";

export default function DropdownBar() {
  const { lake, fish, lakeNames } = useContext(LakeContext);

  function handleSelect(e) {
    // what am I suppose to write in there to get the value?

    let temp = ["horse", "loose", "hospital course"];
    console.log(temp);

    let newVal = temp.find((word) => {
      return word === "hospital course";
    });

    console.log(newVal);
    console.log(lakeNames);

    alert(e);
    let lakeData = lakeNames.find((lake) => {
      console.log(e);
      return lake === e;
    });
    console.log(lakeData);
  }

  return (
    <>
      <Dropdown onSelect={handleSelect} className={styles["center1"]}>
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
          onSelect={handleSelect}
        >
          {lakeNames.map((lakeName) => {
            return (
              <Dropdown.Item
                // href={"lakes:" + lakeName}
                eventKey={lakeName}
              >
                {lakeName}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
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
