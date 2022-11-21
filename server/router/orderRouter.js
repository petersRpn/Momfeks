import express from "express";
import { deleteOrder, getMineOrder, getOrder, orderDeliver, postOrder, putOrder } from "../controllers/OrderController.js";
import { orderSummary } from "../controllers/ProductController.js";
import { isAdmin, isAuth } from "../utils.js";

const orderRouter = express.Router();

orderRouter.post('/', isAuth, postOrder);
orderRouter.get('/:id', isAuth, getOrder);
orderRouter.put('/:id/pay', isAuth, putOrder);
orderRouter.get('/mine',isAuth, getMineOrder);
orderRouter.delete('/:id', isAuth, isAdmin, deleteOrder);
orderRouter.put('/:id/deliver', isAuth, isAdmin, orderDeliver);
orderRouter.get('/summary', isAuth, isAdmin, orderSummary)


export default orderRouter;