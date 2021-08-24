const mongoose = require("mongoose");
const db = require("../models");

// This file empties the destination collection and inserts the destinations below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/jpwFishingDB");

const lakeSeed = [
  {
    lake: "Heart",
    fish: "Cutthroat",
    distance: 8,
  },
  {
    lake: "Shelf",
    fish: "Cutthroat",
    distance: 5,
  },
  {
    lake: "Chihuahua",
    fish: "Cutthroat",
    distance: 10,
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
