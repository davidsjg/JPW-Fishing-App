import React from "react";
// import { StyleSheet } from "react-native";

export default function Card() {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>{props.heading}</h2>
      </div>
      <div className="card-body">{props.children}</div>
    </div>
  );
}

// const styles = StyleSheet.create({});
