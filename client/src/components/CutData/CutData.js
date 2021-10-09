import React, { useContext, useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";
import LakeContext from "../../utils/LakeContext";
import SelectedContext from "../../utils/SelectedContext";
import API from "../../utils/API";

export default function CutData(props) {
  const { lake, fish, selectedLake, lakeNames } = useContext(SelectedContext);
  return (
    <>
      <Card style={{ width: "18rem" }} style={{ marginTop: 5 }}>
        <Card.Img
          variant="top"
          src="http://westernnativetrout.org/wp-content/uploads/2019/07/greenback-cutthroat.jpg"
        />
        <Table bordered>
          <tbody style={{ fontSize: 13 }}>
            <tr>
              <td>Number of Cutthroat Trout:</td>
              <td style={{ textAlign: "center" }}>{selectedLake.numCuts}</td>
            </tr>
            <tr>
              <td>Size Range:</td>
              <td style={{ textAlign: "center" }}>{selectedLake.cutRange}</td>
            </tr>
            <tr>
              <td>Average Size:</td>
              <td style={{ textAlign: "center" }}>
                {selectedLake.cutAvgLength}
              </td>
            </tr>
          </tbody>
        </Table>
        {/* <ListGroup variant="flush">
          <ListGroup.Item>
            Number of Cutthroat Trout: {selectedLake.numCuts}
          </ListGroup.Item>
          <ListGroup.Item>Size Range: {selectedLake.cutRange}"</ListGroup.Item>
          <ListGroup.Item>
            Average Size: {selectedLake.cutAvgLength}""
          </ListGroup.Item>
        </ListGroup> */}
      </Card>
    </>
  );
}
