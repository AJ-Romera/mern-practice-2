const express = require("express");
const router = express.Router();
const {
  getTodos,
  setTodo,
  toggleComplete,
  deleteTodo,
} = require("../controllers/todoController");

/* router.route("/").get(getGoals).post(setGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal); */

router.get("/todos", getTodos);

router.post("/todo/new", setTodo);

router.get("/todo/complete/:id", toggleComplete);

router.delete("/todo/delete/:id", deleteTodo);

module.exports = router;
