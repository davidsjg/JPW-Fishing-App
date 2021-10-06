const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lakeSchema = new Schema({
  lake: { type: String, required: true },
  acres: { type: Number },
  year: { type: Number },
  fish: { type: Array },
  numCuts: { type: Number },
  cutAvgLength: { type: Number },
  cutRange: { type: String },
  numBrooks: { type: Number },
  brkAvgLength: { type: Number },
  brkRange: { type: String },
  distance: { type: Number },
  img: { type: String },
  trail: { type: String },
  map: { type: String },
});

const Lake = mongoose.model("Lake", lakeSchema);

module.exports = Lake;
