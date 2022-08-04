import express  from "express";
import { getUser } from "../controllers/userController.js";

const userRouter = express.Router()
userRouter.get('/seed', getUser)

export default userRouter;