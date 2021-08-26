import React, { useEffect } from "react";
import LakeContainer from "../components/LakeContainer/LakeContainer";

import API from "../utils/API";

function Home() {
  useEffect(() => {
    loadLakes();
  }, []);

  function loadLakes() {
    API.getLakes()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <LakeContainer />
    </>
  );
}

export default Home;
