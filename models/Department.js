const mongoose = require("mongoose");

const schema = mongoose.Schema({
    title : {
        type: String,
        required: true
    }
}, { timestamps: true });

const model = mongoose.models.Department || mongoose.model("Department" , schema)
export default model