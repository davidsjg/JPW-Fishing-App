const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lakeSchema = new Schema({
  lake: { type: String, required: true },
  fish: { type: String },
  distance: { type: Number },
});

const Lake = mongoose.model("Lake", lakeSchema);

module.exports = Lake;
