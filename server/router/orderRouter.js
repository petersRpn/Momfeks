import express from "express";
import { getMineOrder, getOrder, postOrder, putOrder } from "../controllers/OrderController.js";
import { isAuth } from "../utils.js";

const orderRouter = express.Router();

orderRouter.post('/', isAuth, postOrder);
orderRouter.get('/:id', isAuth, getOrder);
orderRouter.put('/:id/pay', isAuth, putOrder);
orderRouter.get('/mine',isAuth,getMineOrder);


export default orderRouter;