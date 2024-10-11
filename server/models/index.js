const mongoose = require("mongoose");
const CONSTANTS = require("../constants");

async function connectToDB() {
  await mongoose.connect(CONSTANTS.DB_URL);
}

