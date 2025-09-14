import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    _id: { type: String, index: false},
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: {
      type: String,
      required: true,
      validate: {
        validator: async function (value) {
          if (this.firstName === "Angela" && value === "Todd") {
            const existing = await mongoose.models.User.findOne({
              firstName: "Angela",
              lastName: "Todd",
              _id: { $ne: this._id },
            });
            return !existing;
          }
          return true;
        },
        message: "A user with the name Angela Todd already exists.",
      },
    },
    access: {
      type: String,
      enum: ["READ-ONLY", "READ-WRITE", "READ-WRITE-DELETE"],
      default: "READ-ONLY",
    },
    numRestsAdded: Number,
    favCuisines: Array
  },
  { collection: "users" }
);
export default userSchema;