import mongoose from "mongoose";

// Create a schema for the shoe
const productSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: "Category is required",
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      require: "Image is required",
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    inStock: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create a Mongoose model from the schema
const Product = mongoose.model("Product", productSchema);

export default Product;
