import axios from "axios";

export const getTodos = async () => {
  return axios.get("http://localhost:4001/todos")
};

export const createTodo = async (formData) => {
  return axios.post("http://localhost:4001/todos", formData)
};

export const deleteTodo = async (todoId) => {
  return axios.delete(`http://localhost:4001/todos/${todoId}`)
};
