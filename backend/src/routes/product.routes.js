import express from "express";
import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import { v4 as uuidv4 } from "uuid";
import { check, validationResult } from "express-validator";

const router = express.Router();
const s3 = new aws.S3({
  region: process.env.AWS_REGION,
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "your-bucket-name",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, uuidv4() + "-" + file.originalname);
    },
  }),
});

// Validation middleware for posting a product
const validateProductPost = [
  check("category").not().isEmpty().trim().escape(),
  check("brand").not().isEmpty().trim().escape(),
  check("model").not().isEmpty().trim().escape(),
  check("price").isNumeric(),
  check("inStock").isNumeric(),
  // You can add more checks as needed
];

router.get("/all", getAllProducts);
router.get("/single/:id", getSingleProduct);
router.post(
  "/post-product",
  validateProductPost,
  upload.single("image"),
  postProduct
);

router.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    res.status(500).json({ message: err.message });
  } else {
    next(err);
  }
});

export default router;
