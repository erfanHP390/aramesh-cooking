const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      default: "کاربر",
    },
    email: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
    subscription: {
      type: String,
      required: false,
      default: "فاقد کد",
    },
    role: {
      type: String,
      default: "USER",
    },

    refreshToken: String,
  },
  { timestamps: true }
);


const model = mongoose.models.User || mongoose.model("User" , schema)
export default model