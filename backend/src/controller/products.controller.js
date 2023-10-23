import Product from "../model/product.model.js";
import { productValidationSchema } from "../validation/productValidation.js";
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
  // Validate using Joi
  const { error } = productValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const sanitizedDescription = sanitizeHtml(req.body.description);

  try {
    const product = new Product({
      category: req.body.category,
      productName: req.body.productName,
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

export const updateProduct = async (req, res) => {
  // Validate using Joi
  const { error } = productValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const sanitizedDescription = sanitizeHtml(req.body.description);

  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "No product found with the provided ID",
        status: "failed",
      });
    }

    product.category = req.body.category;
    product.productName = req.body.productName;
    product.image = req.file.location;
    product.price = req.body.price;
    product.inStock = req.body.inStock;
    product.description = sanitizedDescription;

    await product.save();
    res.status(200).json({
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({
      error: "Failed to update product",
      details: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "No product found with the provided ID",
        status: "failed",
      });
    }

    await Product.deleteOne({ _id: req.params.id });
    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({
      error: "Failed to delete product",
      details: error.message,
    });
  }
};
