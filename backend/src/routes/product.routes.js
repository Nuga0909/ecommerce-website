import express from "express";
import {
  getAllProducts,
  getSingleProduct,
  postProduct,
  updateProduct,
  deleteProduct,
} from "../controller/products.controller.js";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "cloudinary";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, "../../config/.env");
dotenv.config({ path: envPath });

console.log(process.env.CLOUDINARY_API_SECRET);

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: {
    folder: "ooja images", // Replace with your folder name
    format: async (req, file) => "png", // or the format you will be using
    public_id: (req, file) => {
      const fullFileName =
        new Date().toISOString().replace(/:/g, "-") + file.originalname;
      req.fullFileName = fullFileName;
      return fullFileName;
    },
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

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