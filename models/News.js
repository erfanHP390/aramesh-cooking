const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    email: {
        type: String,
        required: true
    }
  },
  {
    timestamps: true,
  }
);

const model = mongoose.models.News || mongoose.model("News" , schema)
export default model