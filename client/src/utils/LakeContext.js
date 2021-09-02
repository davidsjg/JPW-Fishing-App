import React from "react";

const LakeContext = React.createContext({
  lake: {},
  fish: [],
  lakeNames: [],
  selectedLake: {},
});

// const LakeConsumer = LakeContext.Consumer;

export default LakeContext;
