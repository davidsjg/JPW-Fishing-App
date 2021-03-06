import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import styles from "./BrookData.module.css";

import SelectedContext from "../../utils/SelectedContext";

export default function BrookData(props) {
  const { lake, fish, selectedLake, lakeNames } = useContext(SelectedContext);

  console.log(selectedLake.acres);

  function handleClick() {
    console.log(selectedLake.acres);
  }

  return (
    <>
      <Card style={{ width: "18rem" }} style={{ marginTop: 5 }}>
        <Card.Img
          variant="top"
          src="https://www.pourvoiries.com/wp-content/uploads/2010/11/OmbleFontaine.jpg"
        />

        {selectedLake.brkAvgLength === 0 ? (
          <p className={styles["noData"]}>No Brook Trout Data</p>
        ) : (
          <Table bordered>
            <tbody style={{ fontSize: 13 }}>
              <tr>
                <td style={{ textAlign: "center" }}>Number of Brook Trout:</td>
                <td style={{ textAlign: "center" }}>
                  {selectedLake.numBrooks}
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>Size Range:</td>
                <td style={{ textAlign: "center" }}>{selectedLake.brkRange}</td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}>Average Size:</td>
                <td style={{ textAlign: "center" }}>
                  {selectedLake.brkAvgLength}
                </td>
              </tr>
            </tbody>
          </Table>
        )}
      </Card>
      {/* <Button onClick={handleClick}>Click Me </Button> */}
    </>
  );
}
