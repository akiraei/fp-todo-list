const { Router } = require("express");
const {
  findTodo,
  getTodo,
  updateTodo,
  createTodo,
  deleteTodo,
} = require("../service");

const router = Router();

router.get("/", (req, res) => {
  const { states } = req.query;
  const result = findTodo(states && states.split(","));
  res.send(result);
});

router.post("/", (req, res) => {
  const data = req.body;
  const result = createTodo(data);
  res.send(result);
});

router.get("/:todoId", (req, res) => {
  const { todoId } = req.params;
  const result = getTodo(todoId);
  res.send(result);
});

router.put("/:todoId", (req, res) => {
  const { todoId } = req.params;
  const data = req.body;
  const result = updateTodo(todoId, data);
  res.send(result);
});

router.delete("/:todoId", (req, res) => {
  const { todoId } = req.params;
  const result = deleteTodo(todoId);
  res.send(result);
});

module.exports = router;
