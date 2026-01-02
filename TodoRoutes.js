const express = require("express");
const router = express.Router();
const TodoController = require("../controllers/TodoController");

router.post("/add", TodoController.addTodo);
router.get("/", TodoController.getTodos);
router.get("/:id", TodoController.getTodoById);
router.put("/:id", TodoController.updateTodo);
router.delete("/:id", TodoController.deleteTodo);

module.exports = router;
