import express from "express";
import { getdbProduct, getProduct, getProductId } from "../controllers/ProductController.js";

const router = express.Router();

router.get('/seed', getdbProduct)
router.get('/', getProduct)
router.get('/:id', getProductId)
export default router;