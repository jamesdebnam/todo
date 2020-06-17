import { FILTER_TODOS, TOGGLE_COMPLETED } from "../actions/ACTION_TYPES";

export default function activeTodosReducer(state = [], action) {
  switch (action.type) {
    case FILTER_TODOS:
      // grabs the key to sort by from the action object
      let filterKey = Object.keys(action.term)[0];
      // the entire todo list state is passed in from the todos store
      return action.payload.filter(
        // filters by the passed in parameter
        (item) => item[filterKey] === action.term[filterKey]
      );

    case TOGGLE_COMPLETED:
      return action.isToggled
        ? // If isToggled is true, then the ticked items are filtered out of the shown todos
          [...state.filter((item) => item.ticked === false)]
        : // When isToggled is false, the payload is taken from the completedTodos store and appended to the list
          [...state, ...action.payload];
    default:
      return state;
  }
}
