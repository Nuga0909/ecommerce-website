import express from 'express';
const router = express.Router();
import { getAllProducts, getSingleProduct, postProduct } from '../controller/products.controller.js';

router.get('/all', getAllProducts);

router.get('/single/:id', getSingleProduct);

router.post("/post-product", upload.single("image"), postProduct);

export default router;