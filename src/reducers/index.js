import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import activeTodosReducer from "./activeTodosReducer";
import completedTodosReducer from "./completedTodosReducer";
import isToggledReducer from "./isToggledReducer";

export default combineReducers({
  todos: todosReducer,
  activeTodos: activeTodosReducer,
  completedTodos: completedTodosReducer,
  isToggled: isToggledReducer,
});
