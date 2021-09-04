import React from "react";
import styles from "./ImageContainer.module.css";

function ImageContainer(props) {
  return (
    <div className={`container${props.fluid ? "-fluid" : ""}`}>
      {props.children}
    </div>
  );
}

export default ImageContainer;
