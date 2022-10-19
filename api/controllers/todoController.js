const Todo = require("../models/Todo");

// @desc  Get todos
// @route  GET /todos
// @access  Private
const getTodos = async (req, res) => {
  const todos = await Todo.find();

  res.status(200).json(todos);
};

// @desc  Set todo
// @route  POST /todo/new
// @access  Private
const setTodo = async (req, res) => {
  if (!req.body.text) {
    res.status(400).json({ message: "Please add a text field" });
    /* res.status(400);
    throw new Error("Please add a text"); */
  }
  const todo = await Todo.create({
    text: req.body.text,
  });

  res.status(200).json(todo);
};

// @desc  toggle complete
// @route  GET /todo/complete/:id
// @access  Private
const toggleComplete = async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(400).json({ message: "Todo not found with the provided id" });
    /* res.status(400);
    throw new Error("Please add a text"); */
  }

  const updatedTodo = await Todo.findByIdAndUpdate(
    req.params.id,
    { complete: !todo.complete },
    {
      new: true,
    }
  );

  res.status(200).json(updatedTodo);
};

// @desc  Delete todo
// @route  DELETE /todo/delete/:id
// @access  Private
const deleteTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(400).json({ message: "Todo not found" });
  }

  const response = await Todo.findByIdAndDelete(req.params.id);

  res.status(200).json(response);
};

module.exports = {
  getTodos,
  setTodo,
  toggleComplete,
  deleteTodo,
};
