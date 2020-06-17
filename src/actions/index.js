import {
  ADD_TODO,
  TOGGLE_TODO,
  TOGGLE_STAR,
  FILTER_TODOS,
  REARRANGE_TODOS,
  TOGGLE_COMPLETED,
  ADD_GROUP,
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

export const toggleCompleted = (isToggled) => (dispatch, getState) => {
  // Depending on whether isToggled is true, either the activeTodos or completedTodos
  // is passed to the reducers
  const todos = isToggled ? getState().activeTodos : getState().completedTodos;
  dispatch({
    type: TOGGLE_COMPLETED,
    isToggled,
    payload: todos,
  });
};

export const addGroup = (group) => {
  return {
    type: ADD_GROUP,
    payload: group,
  };
};
