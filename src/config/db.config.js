const mongoose = require("mongoose");
const { ATLAS_DB_URL, NODE_ENV } = require("./server.config");

async function connectToDb() {
  try {
    if (NODE_ENV == "development") {
      await mongoose.connect(ATLAS_DB_URL); //diff db for diff env prod, testing etc.
    }
  } catch (error) {
    console.log("Unable to connect to the DB server");
    console.log(error);
  }
}

module.exports = connectToDb;
