import React from "react";
import styles from "./Col.module.css";

// This Col component offers us the convenience of being able to set a column's "size" prop instead of its className
// We can also omit the col- at the start of each Bootstrap column class, e.g. size="md-12" instead of className="col-md-12"

function Col(props) {
  const size = props.size
    .split(" ")
    .map((size) => "col-" + size)
    .join(" ");

  const cName = props.cname;

  return (
    <div
      className={`${props.cname} ${size}`}
      // className={styles["colClass"]}
      // className={size}
    >
      {props.children}
    </div>
  );
}

export default Col;
