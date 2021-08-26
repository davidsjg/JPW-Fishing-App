import React from "react";
import DropdownBar from "../Dropdown/DropdownBar";
import styles from "./Card.module.css";
// import { StyleSheet } from "react-native";

export default function Card(props) {
  return (
    <div className="card text-center" className={styles["myCard"]}>
      <DropdownBar id={styles["ddBar"]} />
    </div>
  );
}

// const styles = StyleSheet.create({});
