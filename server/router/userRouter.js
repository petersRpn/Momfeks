import express  from "express";
import { deleteUser, getdbUser, getUser, getUserId, postRegister, postSignin, putUser, userProfile } from "../controllers/userController.js";
import { isAdmin, isAuth } from "../utils.js";

const userRouter = express.Router()
userRouter.get('/seed', getdbUser);
userRouter.post('/signin', postSignin);
userRouter.post('/register', postRegister);
userRouter.get('/', isAuth, isAdmin, getUser);
userRouter.delete('/:id', isAuth, isAdmin, deleteUser);
userRouter.put('/:id', isAuth, isAdmin, putUser);
userRouter.get( '/:id', getUserId);
userRouter.put('/profile', isAuth, userProfile);



export default userRouter; 