const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://babrerushabh1:deOepbf3Bkw8yNvC@kidzpay.mpx6qmd.mongodb.net/?retryWrites=true&w=majority&appName=KidzPay', {});

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
