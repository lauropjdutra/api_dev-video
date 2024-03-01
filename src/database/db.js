const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDatabase = async () => {
  mongoose.set("strictQuery", true);

  const apiKey = process.env.MONGO_API_KEY;

  return await mongoose.connect(apiKey);
};

module.exports = { connectDatabase };