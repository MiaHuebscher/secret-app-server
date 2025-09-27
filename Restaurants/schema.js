import mongoose from "mongoose";
const restaurantsSchema = new mongoose.Schema({
    _id: { type: String, index: false},
    restaurantName: { type: String, required: true},
    cuisine: { type: String, required: true },
    coords: { type: Array, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    source: { type: String, required: true },
    addedBy: { type: String, required: true },
    webLink: String,
    angelasRating: String,
    recommendedDishes: String,
    note: String
  },
  { collection: "restaurants" }
);
export default restaurantsSchema;