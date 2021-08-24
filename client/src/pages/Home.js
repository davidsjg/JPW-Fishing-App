import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
      <Link to={"/lakes"}></Link>
      HELLO FROM HOME PAGE
    </>
  );
}

export default Home;
