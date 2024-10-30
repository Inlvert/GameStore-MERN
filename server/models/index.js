const mongoose = require("mongoose");
const CONSTANTS = require("../constants");
const User = require("./user");
const RefreshToken = require("./refreshToken");
const Product = require("./product");

async function connectToDB() {
  await mongoose.connect(CONSTANTS.DB_URL);
}

connectToDB().catch((err) => console.log(err));

module.exports = {
  User,
  RefreshToken,
  Product,
};
