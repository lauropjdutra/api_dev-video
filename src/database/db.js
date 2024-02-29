import mongoose from "mongoose"
import * as dotenv from "dotenv"

export const connectDatabase = async () => {
  mongoose.set("strictQuery", true)

  const apiKey = dotenv.config().parsed.MONGO_API_KEY

  return await mongoose.connect(apiKey)
}