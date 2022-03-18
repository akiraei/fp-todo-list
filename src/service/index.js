const io = require("../io");
const memory = require("../memory");
const R = require("../ramda");

const getTodo = R.curry(io.get)(memory);
const updateTodo = R.curry(io.update)(memory);
const createTodo = R.curry(io.create)(memory);
const deleteTodo = R.curry(io.del)(memory);
const findTodo = R.curry(io.find)(memory);

module.exports = { findTodo, getTodo, updateTodo, createTodo, deleteTodo };
