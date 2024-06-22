const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
  text: { type: String, required: true },
});

const Todo = mongoose.model("ToDo", ToDoSchema);

module.exports = Todo;