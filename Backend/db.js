const mongoose = require("mongoose");
require("dotenv").config();

const myURI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(myURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`mongodb is successfully connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error is: ${error.message}`);
    process.exit();
  }
};
module.exports = connectDB;
