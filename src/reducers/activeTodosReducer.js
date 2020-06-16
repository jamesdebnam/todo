import {
  FILTER_TODOS,
  ADD_TODO,
  TOGGLE_TODO,
  TOGGLE_STAR,
  REARRANGE_TODOS,
} from "../actions/ACTION_TYPES";

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

    case REARRANGE_TODOS:
      let placeholder = state[action.start];
      state.splice(action.start, 1);
      state.splice(action.end, 0, placeholder);

      return [...state];

    case ADD_TODO:
      // A new todo with all of its needed information is added to the current state
      return [
        ...state,
        {
          item: action.payload,
          ticked: false,
          starred: false,
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
