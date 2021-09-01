import React, { useContext } from "react";

import LakeContainer from "../components/LakeContainer/LakeContainer";

function Home(props) {
  //by calling useState, it gives us access two fishState and setFishState that we are destructuring from an array

  return <LakeContainer props={props} />;
}

export default Home;
