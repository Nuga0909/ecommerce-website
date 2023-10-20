import mongoose from "mongoose";

// Create a schema for the shoe
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: "firstName is required",
    },
    lastName: {
      type: String,
      required: "lastName is required",
    },
    userName: {
      type: String,
      required: "Category is required",
    },
    passWord: {
      type: String,
      required: "passWord is required",
    },
    age: {
      type: Number,
      required: true,
      min: 0,
    },
    houseAddress: {
      type: String,
      required: "houseAddress is required",
    },
    city: {
      type: String,
      required: "city is required",
    },
    nationality: {
      type: String,
      required: "nationality is required",
    },
  },
  {
    timestamps: true,
  }
);

// Create a Mongoose model from the schema
const User = mongoose.model("User", userSchema);

export default User;
