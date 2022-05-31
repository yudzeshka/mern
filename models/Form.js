const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  recipient: { type: String, required: true },
  inn: { type: String, required: true },
  kpp: { type: String, required: true },
  recipientAcc: { type: String, required: true },
  bik: { type: String, required: true },
  checkbox: { type: Boolean, required: true },
  owner: { type: Types.ObjectId, ref: "User" },
  date: { type: Number, default: Date.now },
});

module.exports = model("Form", schema);
