const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URL, {});

const db = mongoose.connection;

db.on("error", (error) => {
  console.log("Error in connection", error);
});

db.on("open", () => {
  console.log("Connected to MongoDB");
});

db.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

module.exports = mongoose;
