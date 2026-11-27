import express from "express";
import cors from "cors";
//دي طريقة مختصرة لتشغيل مكتبة dotenv وتحميل المتغيرات الموجودة في ملف .env إلى:
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "node:url";
import appError from "./exceptions/appError.js";
import { errorHandler } from "./exceptions/globalExceptionHandler.js";
import router from "./routes/index.js";
import connectDB from "./config/database.js";
//get current path
const __filename = fileURLToPath(import.meta.url);
//get current directory
const __dirname = path.dirname(__filename);
const app = express();
// Adds headers: Access-Control-Allow-Origin: *
app.use(cors());
// help us to read json in request body
app.use(express.json());
const startServer = async () => {
  try {
    await connectDB();
    app.listen(5000, () => {
      console.log("Server running");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
app.use("/api", router);

//handle unkown apis links
app.use((req, res, next) => {
  return next(new appError("not found", 404));
});
app.use(errorHandler);

startServer();
