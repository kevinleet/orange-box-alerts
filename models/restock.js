const { Schema } = require("mongoose");

const restockSchema = new Schema(
  {
    date_unix: { type: String, required: true },
    quantity: { type: Number, required: true },
    products: [{ type: Object, required: true }],
  },
  { timestamps: true }
);

module.exports = restockSchema;
