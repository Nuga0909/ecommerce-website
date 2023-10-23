import Product from "../model/product.model.js";
import { validationResult } from "express-validator";
import sanitizeHtml from "sanitize-html";

export const getAllProducts = async (req, res) => {
  try {
    let products = await Product.find();

    if (products.length === 0) {
      return res.status(200).json({
        message: "There are currently no products in the database",
        status: "success",
      });
    }

    return res.status(200).json({
      message: "operation successful",
      status: "success",
      data: products,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal service error, could not fetch data",
      status: "failed",
    });
  }
};

export const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "No product found with the provided ID",
        status: "failed",
      });
    }

    return res.status(200).json({
      message: "Operation successful",
      status: "success",
      data: product,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal service error, could not fetch data",
      status: "failed",
    });
  }
};

export const postProduct = async (req, res) => {
  // Validate and sanitize input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const sanitizedDescription = sanitizeHtml(req.body.description);

  try {
    const product = new Product({
      category: req.body.category,
      brand: req.body.brand,
      model: req.body.model,
      image: req.file.location,
      price: req.body.price,
      inStock: req.body.inStock,
      description: sanitizedDescription,
    });

    await product.save();

    res.status(201).json({
      message: "Product registered successfully",
      productId: product._id,
    });
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).json({
      error: "Failed to register product",
      details: error.message,
    });
  }
};
