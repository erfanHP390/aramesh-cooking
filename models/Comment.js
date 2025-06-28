const mongoose = require("mongoose");
require("./Blog");

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isAnswer: {
      type: Boolean,
      default: false,
    },
    hasAnswer: {
      type: Boolean,
      default: false,
    },
    isAccept: {
      type: Boolean,
      default: false,
    },
    blogID: {
      type: mongoose.Types.ObjectId,
      ref: "Blog",
    },
    mainComment: {
      type: mongoose.Types.ObjectId,
      ref: "Comment",
      required: false,
    },
  },
  { timestamps: true }
);

const model = mongoose.models.Comment || mongoose.model("Comment", schema);
export default model;
