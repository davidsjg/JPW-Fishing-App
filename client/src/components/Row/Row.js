import React from "react";

export default function Row(props) {
  return (
    <div className={`${props.cname} row${props.fluid ? "-fluid" : ""}`}>
      {props.children}
    </div>
  );
}
