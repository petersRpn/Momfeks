import express from "express";
import { deleteProduct, getCategory, getdbProduct, getProduct,
getProductId, postProduct, productReviews, putProduct } from "../controllers/ProductController.js";
import { isAdmin, isAuth } from "../utils.js";

const router = express.Router();

router.get('/seed', getdbProduct)
router.get('/', getProduct)
router.get('/:id', getProductId)
router.post('/', isAuth, isAdmin, postProduct)
router.get('/categories', getCategory);
router.put('/:id',isAuth, isAdmin, putProduct);
router.delete('/:id', isAuth, isAdmin, deleteProduct);
router.post('/:id/reviews', isAuth, productReviews );

    

export default router;