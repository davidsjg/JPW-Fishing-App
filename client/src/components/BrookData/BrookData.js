import React, { useContext } from "react";
import Card from "react-bootstrap/card";
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";
import LakeContext from "../../utils/LakeContext";
import SelectedContext from "../../utils/SelectedContext";

export default function BrookData(props) {
  const { lake, fish, selectedLake, lakeNames } = useContext(SelectedContext);

  console.log(lakeNames);

  console.log(props);

  return (
    <>
      <Card style={{ width: "18rem" }} style={{ marginTop: 5 }}>
        <Card.Img
          variant="top"
          src="https://www.pourvoiries.com/wp-content/uploads/2010/11/OmbleFontaine.jpg"
        />
        <Table bordered>
          <tbody style={{ fontSize: 13 }}>
            <tr>
              <td>Number of Brook Trout:</td>
              <td style={{ textAlign: "center" }}>{selectedLake.numBrooks}</td>
            </tr>
            <tr>
              <td>Size Range:</td>
              <td style={{ textAlign: "center" }}>{selectedLake.brkRange}</td>
            </tr>
            <tr>
              <td>Average Size:</td>
              <td style={{ textAlign: "center" }}>
                {selectedLake.brkAvgLength}
              </td>
            </tr>
          </tbody>
        </Table>
        {/* <ListGroup variant="flush">
          <ListGroup.Item>
            Number of Brook Trout: {selectedLake.numBrooks}
          </ListGroup.Item>
          <ListGroup.Item>Size Range: {selectedLake.brkRange}"</ListGroup.Item>
          <ListGroup.Item>
            Average Size: {selectedLake.brkAvgLength}""
          </ListGroup.Item>
        </ListGroup> */}
      </Card>
    </>
  );
}
