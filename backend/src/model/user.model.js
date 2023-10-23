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
    emailAddress: {
      type: String,
      unique: true,
      required: "email address is required",
    },
    password: {
      type: String,
      required: "passWord is required",
    },
    
  },
  {
    timestamps: true,
  }
);

// Create a Mongoose model from the schema
const User = mongoose.model("User", userSchema);

export default User;
