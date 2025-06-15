const mongoose = require("mongoose");
require("./Department")

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default: "فاقد ایمیل",
    },
    phone: {
      type: String,
      default: "فاقد موبایل",
    },
    department: {
      type: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Department",
        },
      ],
    },
  },
  { timestamps: true }
);

const model = mongoose.models.Contact || mongoose.model("Contact" , schema)
export default model