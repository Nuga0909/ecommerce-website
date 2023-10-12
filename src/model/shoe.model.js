import mongoose from "mongoose";

// Create a schema for the shoe
const shoeSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
    trim: true,
  },
  model: {
    type: String,
    required: true,
    trim: true,
  },
  size: {
    type: Number,
    required: true,
    min: 1,
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
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

// Create a Mongoose model from the schema
const Shoe = mongoose.model("Shoe", shoeSchema);

export default Shoe;
