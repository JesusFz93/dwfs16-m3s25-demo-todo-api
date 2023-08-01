const { Schema, model } = require("mongoose");

const TaskSchema = Schema({
  name: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    unique: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

TaskSchema.methods.toJSON = function () {
  const { __v, _id, ...rest } = this.toObject();
  rest.id = _id;
  return rest;
};

module.exports = model("task", TaskSchema, "tasks");
