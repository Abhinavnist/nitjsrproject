import mongoose from "mongoose"

const photoSchema = new mongoose.Schema({
  photo: {
    type: String,
    required: true,
  },
  signature: {
    type: String,
    required: true,
  },
})

const Photo = mongoose.model("photo", photoSchema)

export default Photo
