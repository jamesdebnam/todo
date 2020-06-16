import { ADD_TODO, TOGGLE_TODO, TOGGLE_STAR } from "./ACTION_TYPES";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const toggleTodo = (key) => {
  return {
    type: TOGGLE_TODO,
    payload: key,
  };
};

export const toggleStar = (key) => {
  return {
    type: TOGGLE_STAR,
    payload: key,
  };
};
