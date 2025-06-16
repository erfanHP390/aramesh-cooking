const mongoose = require("mongoose");
require("./Category")

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    category: {
          type: mongoose.Types.ObjectId,
          ref: "Category",
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.models.Product || mongoose.model("Product" , schema)
export default model