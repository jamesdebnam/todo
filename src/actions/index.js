import {
  ADD_TODO,
  TOGGLE_TODO,
  TOGGLE_STAR,
  FILTER_TODOS,
  REARRANGE_TODOS,
} from "./ACTION_TYPES";

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

export const filterTodos = (term) => (dispatch, getState) => {
  const todos = getState().todos;

  dispatch({
    type: FILTER_TODOS,
    payload: todos,
    term: term,
  });
};

export const rearrangeTodos = (input) => {
  return {
    type: REARRANGE_TODOS,
    start: input.start,
    end: input.end,
  };
};
