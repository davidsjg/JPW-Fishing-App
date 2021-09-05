import React from "react";
import styles from "./Contain.module.css";

function Contain(props) {
  let img = props.img;

  return (
    <div
      className={`${props.mainContain} container${props.fluid ? "-fluid" : ""}`}
    >
      {props.children}
    </div>
  );
}

export default Contain;
