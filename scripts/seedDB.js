const mongoose = require("mongoose");
const db = require("../models");

// This file empties the destination collection and inserts the destinations below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/jpwFishingDB");

const lakeSeed = [
  {
    lake: "Arapahoe",
    acres: 11,
    year: 2008,
    fish: ["Cutthroat"],
    numCuts: 5,
    cutAvgLength: 11.2,
    cutRange: {
      min: 8.5,
      max: 14.4,
    },
    numBrooks: 0,
    brkAvgLength: 0,
    brkRange: 0,
    splake: false,
    distance: 10,
  },
  {
    lake: "Crater Lake - Mid-North",
    acres: 12,
    year: 2012,
    fish: ["Brook"],
    numCuts: 0,
    cutAvgLength: 0,
    cutRange: "",
    numBrooks: 21,
    brkAvgLength: 10,
    brkRange: "6.7-12.5",
    brkRange: {
      min: 6.7,
      max: 12.5,
    },
    splake: false,
    distance: 8,
  },
  {
    lake: "Crater Lake - Mid-South",
    acres: 6,
    year: 2012,
    fish: ["Brook", "Splake"],
    numCuts: 0,
    cutAvgLength: 0,
    cutRange: "",
    numBrooks: 38,
    brkAvgLength: 8.6,
    brkRange: {
      min: 3.7,
      max: 13.2,
    },
    splake: true,
    distance: 6,
  },
  {
    lake: "Crater Lake - Upper",
    acres: 7,
    year: 2012,
    fish: ["Cutthroat"],
    numCuts: 21,
    cutAvgLength: 13.1,
    cutRange: {
      min: 5.4,
      max: 16.9,
    },
    numBrooks: 0,
    brkAvgLength: 0,
    brkRange: 0,
    splake: false,
    distance: 11,
  },
  {
    lake: "Clayton Lake",
    acres: 4,
    year: 2012,
    fish: ["Cutthroat"],
    numCuts: 5,
    cutAvgLength: 8.8,
    cutRange: {
      min: 7.0,
      max: 10.3,
    },
    numBrooks: 0,
    brkAvgLength: 0,
    brkRange: 0,
    splake: false,
    distance: 11,
  },
  {
    lake: "Forest Lake #1",
    acres: 5,
    year: 2008,
    fish: ["Brook"],
    numCuts: 0,
    cutAvgLength: 0,
    cutRange: "",
    numBrooks: 11,
    brkAvgLength: 11.4,
    brkRange: {
      min: 8.5,
      max: 15.7,
    },
    splake: false,
    distance: 6,
  },
  {
    lake: "Forest Lake #3",
    acres: 3,
    year: 2008,
    fish: ["Brook"],
    numCuts: 0,
    cutAvgLength: 0,
    cutRange: "",
    numBrooks: 19,
    brkAvgLength: 9.1,
    brkRange: {
      min: 6.3,
      max: 10.7,
    },
    splake: false,
    distance: 6,
  },
  {
    lake: "Heart Lake",
    acres: 5,
    year: 2012,
    fish: ["Cutthroat"],
    numCuts: 17,
    cutAvgLength: 12.6,
    cutRange: {
      min: 5.8,
      max: 17.1,
    },
    numBrooks: 0,
    brkAvgLength: 0,
    brkRange: 0,
    splake: false,
    distance: 12,
  },
];

db.Lake.remove({})
  .then(() => db.Lake.collection.insertMany(lakeSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
