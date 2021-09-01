import React, { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
// import MenuItem from "react-bootstrap/MenuItem";
import styles from "./DropdownBar.module.css";
import LakeContext from "../../utils/LakeContext";
import Form from "react-bootstrap/Form";
import { Alert, MenuItem } from "bootstrap";

export default function DropdownBar(props) {
  const { lake, fish, lakeNames } = useContext(LakeContext);

  let currLakeState = props.props.props.props.setSingleLake;
  console.log(currLakeState);

  function handleSelect(e) {
    let selectedLake = "";

    let newLakeData = lakeNames.filter((lake) => lake === e);

    let lakeData = lakeNames.find((lake) => {
      let newLakeData = lakeNames.filter((lake) => lake === e);

      selectedLake = newLakeData.join();

      return newLakeData === e;
    });
    console.log(selectedLake);
    currLakeState(selectedLake);
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
