import mongoose from "mongoose"
// const mongoose = require("mongoose")

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please provide unique Username"],
    unique: [true, " username Exist"],
  },
  password: {
    type: String,
    required: [true, "please provide a password"],
    unique: false,
  },
  email: {
    type: String,
    required: [true, "please provide a unique email"],
    unique: true,
  },
  firstName: { type: String },
  lastName: { type: String },
  mobile: { type: Number },
  address: { type: String },
  profile: { type: String },
})

export default mongoose.model.Users || mongoose.model("user", UserSchema)
