import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import activeTodosReducer from "./activeTodosReducer";

export default combineReducers({
  todos: todosReducer,
  activeTodos: activeTodosReducer,
});
