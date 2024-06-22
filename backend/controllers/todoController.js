
const ToDo = require("../models/todo");

const getToDos = async (req, res) => {
  try {
    const todos = await ToDo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addToDo = async (req, res) => {
  try {
    const newToDo = new ToDo({
      text: req.body.text,
    });
    await newToDo.save();
    res.json(newToDo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteToDo = async (req, res) => {
  try {
    await ToDo.findByIdAndDelete(req.params.id);
    res.json({ message: "ToDo deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getToDos, addToDo, deleteToDo };
