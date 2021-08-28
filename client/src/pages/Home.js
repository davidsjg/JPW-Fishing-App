import React, { useContext } from "react";
import LakeContext from "../utils/LakeContext";
import LakeContainer from "../components/LakeContainer/LakeContainer";

import API from "../utils/API";

function Home() {
  //by calling useState, it gives us access two fishState and setFishState that we are destructuring from an array

  const { lake } = useContext(LakeContext);

  return <LakeContainer />;
}

export default Home;
