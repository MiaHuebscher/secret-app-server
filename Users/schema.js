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
        // Custom validator for (firstName, lastName) pair
        validator: async function (value) {
          // Only run the check if the name pair is "Angela Todd"
          if (this.firstName === "Angela" && value === "Todd") {
            const existing = await mongoose.models.User.findOne({
              firstName: "Angela",
              lastName: "Todd",
              _id: { $ne: this._id }, // exclude current doc on updates
            });
            return !existing; // valid only if no existing match
          }
          return true; // for all other names, allow
        },
        message: "A user with the name Angela Todd already exists.",
      },
    },
    access: {
      type: String,
      enum: ["READ-ONLY", "READ-WRITE"],
      default: "READ-ONLY",
    },
    numRestsAdded: Number,
    favCuisines: Array
  },
  { collection: "users" }
);
export default userSchema;