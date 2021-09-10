import React from "react";

const SelectedContext = React.createContext({
  selectedLake: {},
  fish: [],
  lake: {},
  lakeNames: [],

  weather: {},
  forecast: [],
});

// const LakeConsumer = LakeContext.Consumer;

export default SelectedContext;
