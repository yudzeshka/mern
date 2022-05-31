const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  forms: [{ type: Types.ObjectId, ref: "Form" }],
});

module.exports = model("User", schema);
