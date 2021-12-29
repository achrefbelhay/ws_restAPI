const mongoose = require("mongoose");
const config = require("config");
const connectDB = () => {
  mongoose.connect(
    config.get("MONGOURI"),
    () => {
      console.log("Database Conncted");
    },
    () => {
      console.log("Failed");
    }
  );
};

module.exports = connectDB;
