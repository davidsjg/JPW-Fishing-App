import React, { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import LakeContext from "../../utils/LakeContext";

export default function DropBar() {
  let arrTest = ["dog", "cat", "bird", "slap", "fuckbirds"];

  const { lake } = useContext(LakeContext);
  console.log(lake.data);

  return lake.data.length > 0 ? <a>hello</a> : <a>goodbye</a>;
}

//   return (
//     lake.data.length < 0 ?
//     (  {lake.data.map((lake) => (
//         <Dropdown.Item value={lake} href="#/action-1">
//           {lake}
//         </Dropdown.Item>
//       ) ) : (
//           <h1>asdfklj</h1>
//       )

//   )})
