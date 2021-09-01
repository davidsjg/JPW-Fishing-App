import React from "react";
import DropdownBar from "../DropdownBar/DropdownBar";
import styles from "./DropdownCard.module.css";
// import { StyleSheet } from "react-native";

export default function DropdownCard(props) {
  return (
    <div className="card text-center" className={styles["myCard"]}>
      <DropdownBar props={props} id={styles["ddBar1"]} />
    </div>
  );
}

// const styles = StyleSheet.create({});
