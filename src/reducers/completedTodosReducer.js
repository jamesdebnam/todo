import { TOGGLE_COMPLETED } from "../actions/ACTION_TYPES";

export default function completedTodosReducer(state = [], action) {
  switch (action.type) {
    case TOGGLE_COMPLETED:
      if (action.isToggled) {
        // When isToggled is true, the payload passed is all the active todos, which then can be stored
        // in completedTodos, ready to passed when ToggleCompleted is called again
        return [...action.payload.filter((item) => item.ticked)];
      } else {
        return [];
      }

    default:
      return state;
  }
}
