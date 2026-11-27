import mongoose from "mongoose";
import "dotenv/config";

const db_uri = process.env.MONGO_URI;
console.log(db_uri);
const connectDB = async () => {
  try {
    console.log(db_uri);

    await mongoose.connect(db_uri);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    // process.exit(1);
    throw error;
  }
};

export default connectDB;
