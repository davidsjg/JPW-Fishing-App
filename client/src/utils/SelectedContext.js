import React from "react";

const SelectedContext = React.createContext({
  selectedLake: {},
  fish: [],
  lake: {},
  lakeNames: [],
});

// const LakeConsumer = LakeContext.Consumer;

export default SelectedContext;
