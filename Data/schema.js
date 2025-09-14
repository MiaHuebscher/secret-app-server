import mongoose from "mongoose";
const optionsSchema = new mongoose.Schema({
    _id: { type: String, index: false},
    states: { type: Array, required: true},
    cuisines: { type: Array, required: true },
    angelasRating: { type: Array, required: true },
    country: { type: Array, required: true },
    source: { type: Array, required: true }
  },
  { collection: "options" }
);
export default optionsSchema;