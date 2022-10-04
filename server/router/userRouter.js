import express  from "express";
import { getUser, postRegister, postSignin } from "../controllers/userController.js";

const userRouter = express.Router()
userRouter.get('/seed', getUser);
userRouter.post('/signin', postSignin);
userRouter.post('/register', postRegister);

export default userRouter;