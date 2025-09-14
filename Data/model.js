import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("DataModel", schema);
export default model;