import React, { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
// import MenuItem from "react-bootstrap/MenuItem";
import styles from "./DropdownBar.module.css";
import LakeContext from "../../utils/LakeContext";
import Form from "react-bootstrap/Form";
import { Alert, MenuItem } from "bootstrap";

export default function DropdownBar(props) {
  const { lake, fish, lakeNames, selectedLake } = useContext(LakeContext);

  {
    console.log(lake);
  }

  // let currFishState = props.props.props.setFishArray;

  let lakeSelect = "";

  function handleSelect(e) {
    // let newLakeData = lakeNames.filter((lake) => lake === e);

    let newLakeData = lakeNames.filter((lake) => lake === e);

    lakeSelect = newLakeData.join();

    // let lakeData = lakeNames.find((lake) => {
    //   let newLakeData = lakeNames.filter((lake) => lake === e);

    //   lakeSelect = newLakeData.join();

    //   return newLakeData === e;
    // });
    console.log(lakeSelect);

    newFunction();
  }

  function newFunction() {
    var found = lakeNames.find(function (data, index) {
      if (data.lake === lakeSelect) return true;
    });
    getLake();
  }

  function getLake() {
    var newFound = lake.data.find(function (data, index) {
      if ((lake.data[0].lake = lakeSelect)) return true;
    });

    let selectedFish = newFound.fish;
    console.log(newFound);

    // currLakeState(newFound);
    // currFishState(selectedFish, newFound);

    return console.log(newFound);
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
