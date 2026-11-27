import { Router } from "express";
import {
  getAllClients,
  storeClient,
  //   register,
  //   login,
} from "../controllers/ClientController.js";
// import {
//   userRegisterValidation,
//   userLoginValidation,
// } from "../middlewares/validation.js";
import multer from "multer";
import crypto from "crypto";
const ClientRouter = Router();
const upload = multer();
ClientRouter.route("/")
  .get(getAllClients)
  .post(upload.single("avatar"), storeClient);
export default ClientRouter;
