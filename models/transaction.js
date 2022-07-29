const { Schema, model } = require("mongoose");
const Joi = require("joi");

const transactionSchema = Schema(
  {
    date: {
      tupe: Date,
      required: [true, "Set date of transaction"],
    },
    type: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      required: [true, "Set a category"],
    },
    comment: {
      type: String,
      default: "",
    },
    amount: {
      type: Number,
      required: [true, "Amount should be at lest 0.01"],
      min: 0.01,
    },
    balance: {
      type: Number,
      default: 0,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const joiCreateSchema = Joi.object({
  date: Joi.date().required(),
  type: Joi.boolean(),
  category: Joi.string(),
  comment: Joi.string().min(0).max(40),
  amount: Joi.number().min(0.01).required(),
});

const Transaction = model("transaction", transactionSchema);

module.export = {
  Transaction,
  schemas: {
    create: joiCreateSchema,
  },
};
