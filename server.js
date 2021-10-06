require("dotenv").config({ path: "./config.env" });
const path = require("path");
const express = require("express");
const connectDB = require("./config/db");
const routes = require("./routes");

connectDB();

const app = express();

app.use(express.json());

app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send(alert("API RUNNING JENNAYYY"));
  });
}

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// // Define middleware here
// app.use(express.urlencoded({ extended: true }));

// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// // // Add API routes

// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/jpwFishingDB");

// // Start the API server
// app.listen(PORT, function () {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
