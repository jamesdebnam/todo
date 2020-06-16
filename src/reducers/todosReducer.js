import { ADD_TODO, TOGGLE_TODO, TOGGLE_STAR } from "../actions/ACTION_TYPES";

export default function todosReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      // A new todo with all of its needed information is added to the current state
      return [
        ...state,
        {
          item: action.payload,
          ticked: false,
          starred: false,
          date: Date.now(),
          key: state.length,
        },
      ];

    case TOGGLE_TODO:
      // The toggled todo is grabbed and the ticked value is updated

      return [
        ...state.slice(0, action.payload),
        {
          ...state[action.payload],
          ticked: !state[action.payload].ticked,
        },
        ...state.slice(action.payload + 1),
      ];

    case TOGGLE_STAR:
      // Same as above, except star value is changed
      return [
        ...state.slice(0, action.payload),
        {
          ...state[action.payload],
          starred: !state[action.payload].starred,
        },
        ...state.slice(action.payload + 1),
      ];

    default:
      return state;
  }
}
