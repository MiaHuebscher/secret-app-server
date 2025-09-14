import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("RestaurantsModel", schema);
export default model;