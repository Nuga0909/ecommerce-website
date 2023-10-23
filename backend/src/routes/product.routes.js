import express from "express";
const router = express.Router();
import {
  getAllProducts,
  getSingleProduct,
  postProduct,
  updateProduct,
  deleteProduct
} from "../controller/products.controller.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/all", getAllProducts);

router.get("/single/:id", getSingleProduct);

router.post("/post-product", upload.single("image"), postProduct);

router.put("/edit-product/:id", upload.single("image"), updateProduct);

router.delete("/delete-product/:id", deleteProduct);

router.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    res.status(500).json({ message: err.message });
  } else {
    next(err);
  }
});

export default router;
