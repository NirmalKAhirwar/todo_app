
const express = require("express");
const router = express.Router();
const {
  getToDos,
  addToDo,
  deleteToDo,
} = require("../controllers/todoController");

router.get("/todos", getToDos);
router.post("/todos", addToDo);
router.delete("/todos/:id", deleteToDo);

module.exports = router;
