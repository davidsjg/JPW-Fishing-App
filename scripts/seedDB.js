const mongoose = require("mongoose");
const db = require("../models");

// This file empties the destination collection and inserts the destinations below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/jpwFishingDB");

const lakeSeed = [
  {
    lake: "Arapahoe (Lower)",
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

    distance: 10,
    img: "https://i.imgur.com/7Ur4Wbc.png",
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

    distance: 8,
    img: "https://i.imgur.com/HMZ4YHm.jpg",
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

    distance: 6,
    img: "https://i.imgur.com/aBidlhP.jpg",
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

    distance: 11,
    img: "https://i.imgur.com/0rx1Hwy.jpg",
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

    distance: 11,
    img: "https://protrails.com/protrails/galleries/Iceberg%20Lakes%20Loop%20-%20valley%20tarn.jpg",
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

    distance: 6,
    img: "https://cdn-assets.alltrails.com/uploads/photo/image/39972598/extra_large_a08e572c3e9bb9e65c08d71ecb257486.jpg",
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

    distance: 6,
    img: "https://i.imgur.com/kujnz8E.jpg",
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

    distance: 12,
    img: "https://i.imgur.com/WvcNsBX.jpg",
  },
  {
    lake: "Iceberg North",
    acres: 9,
    year: 2013,
    fish: ["Cutthroat"],
    numCuts: 9,
    cutAvgLength: 9.9,
    cutRange: {
      min: 7.7,
      max: 13.1,
    },
    numBrooks: 0,
    brkAvgLength: 0,
    brkRange: 0,

    distance: 15,
    img: "https://cdn2.apstatic.com/photos/hike/7059263_medium_1559875445.jpg",
  },
  {
    lake: "Iceberg South",
    acres: 6,
    year: 2013,
    fish: ["Cutthroat"],
    numCuts: 0,
    cutAvgLength: 0,
    cutRange: {
      min: 0,
      max: 0,
    },
    numBrooks: 0,
    brkAvgLength: 0,
    brkRange: 0,

    distance: 15,
    img: "https://www.protrails.com/protrails/galleries/Iceberg%20Lakes%20Loop%20-%20first%20icy%20lake%20550.jpg",
  },
  {
    lake: "James Peak Lake",
    acres: 7,
    year: 2013,
    fish: ["Cutthroat"],
    numCuts: 27,
    cutAvgLength: 9.2,
    cutRange: {
      min: 4.5,
      max: 16.1,
    },
    numBrooks: 0,
    brkAvgLength: 0,
    brkRange: 0,

    distance: 15,
    img: "https://cdn-assets.alltrails.com/uploads/photo/image/19174780/extra_large_7d0fe888c28b31d3d992fc1d34de51c6.jpg",
  },
  {
    lake: "Jenny Lake",
    acres: 6,
    year: 2008,
    fish: ["Brook", "Rainbow"],
    numCuts: 0,
    cutAvgLength: 0,
    cutRange: "",
    numBrooks: 8,
    brkAvgLength: 9.6,
    brkRange: {
      min: 7.8,
      max: 10.6,
    },

    distance: 14,
    img: "https://i.imgur.com/OR12Ylf.jpg",
  },
  {
    lake: "Little Echo Lake",
    acres: 11,
    year: 2013,
    fish: ["Brook", "Splake", "Lake"],
    numCuts: 0,
    cutAvgLength: 0,
    cutRange: "",
    numBrooks: 0,
    brkAvgLength: 0,
    brkRange: {
      min: 0,
      max: 0,
    },

    distance: 14,
    img: "http://www.craigfagerness.com/images/DSC09893.JPG",
  },
  {
    lake: "Lost Lake",
    acres: 5,
    year: 2013,
    fish: ["Brook"],
    numCuts: 0,
    cutAvgLength: 0,
    cutRange: "",
    numBrooks: 49,
    brkAvgLength: 9.6,
    brkRange: {
      min: 5.7,
      max: 12.2,
    },

    distance: 14,
    img: "https://dayhikesneardenver.com/wp-content/uploads/2017/09/lost-lake-near-nederland-cc-bfagan.jpg",
  },
  {
    lake: "Roger's Pass Lake",
    acres: 5,
    year: 2012,
    fish: ["Cutthroat"],
    numCuts: 10,
    cutAvgLength: 9.1,
    cutRange: {
      min: 5.9,
      max: 11.6,
    },
    numBrooks: 0,
    brkAvgLength: 0,
    brkRange: 0,

    distance: 13,
    img: "https://www.protrails.com/protrails/galleries/Iceberg%20Lakes%20Loop%20-%20rogers%20peak%20lake%20morning%20550.jpg",
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
