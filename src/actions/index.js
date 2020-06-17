import {
  ADD_TODO,
  TOGGLE_TODO,
  TOGGLE_STAR,
  FILTER_TODOS,
  REARRANGE_TODOS,
  TOGGLE_COMPLETED,
  ADD_GROUP,
  DELETE_GROUP,
  SELECT_GROUP,
} from "./ACTION_TYPES";

export const addTodo = (todo) => (dispatch, getState) => {
  const group = getState().groups.group;

  dispatch({
    type: ADD_TODO,
    payload: todo,
    group: group,
  });
};

export const toggleTodo = (key) => {
  return {
    type: TOGGLE_TODO,
    key,
  };
};

export const toggleStar = (key) => {
  return {
    type: TOGGLE_STAR,
    key,
  };
};

export const filterTodos = (term) => (dispatch, getState) => {
  const todos = getState().todos;
  if (!term) term = getState().groups.filter;
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
    key: Number(input.key),
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

export const deleteGroup = (key, name) => {
  return {
    type: DELETE_GROUP,
    payload: key,
    name,
  };
};

export const selectGroup = (name) => {
  return {
    type: SELECT_GROUP,
    payload: name,
  };
};
