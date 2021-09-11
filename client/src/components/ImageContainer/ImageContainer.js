import React from "react";

function ImageContainer(props) {
  return (
    <div className={`container${props.fluid ? "-fluid" : ""}`}>
      {props.children}
    </div>
  );
}

export default ImageContainer;
