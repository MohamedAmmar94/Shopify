import { Router } from "express";
import ClientRouter from "./ClientRoutes.js";
// import UserRouter from "./UserRoutes.js";

const router = Router();

router.use("/clients", ClientRouter);
// router.use("/users", UserRouter);

export default router;
