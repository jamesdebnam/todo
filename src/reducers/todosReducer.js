import {
  ADD_TODO,
  TOGGLE_TODO,
  TOGGLE_STAR,
  REARRANGE_TODOS,
  DELETE_GROUP,
} from "../actions/ACTION_TYPES";

export default function todosReducer(state = [], action) {
  let itemPosition;
  switch (action.type) {
    case ADD_TODO:
      // A new todo with all of its needed information is added to the current state
      return [
        ...state,
        {
          item: action.payload,
          ticked: false,
          starred: false,
          key: state.length,
          group: action.group,
        },
      ];

    case REARRANGE_TODOS:
      // As the index shown on the page doesn't encompass all the todos in the store, a bit of logic is required
      // to reorder them.
      let difference = action.start - action.end;
      let startingPoint = state.indexOf(
        state.filter((item) => item.key === action.key)[0]
      );

      let placeholder = state[startingPoint];
      console.log(startingPoint, placeholder);
      state.splice(startingPoint, 1);
      state.splice(startingPoint - difference, 0, placeholder);

      return [...state];

    case TOGGLE_TODO:
      // The toggled todo is grabbed and the ticked value is updated
      itemPosition = state.indexOf(
        state.filter((item) => item.key === action.key)[0]
      );
      return [
        ...state.slice(0, itemPosition),
        {
          ...state[itemPosition],
          ticked: !state[itemPosition].ticked,
        },
        ...state.slice(itemPosition + 1),
      ];

    case TOGGLE_STAR:
      // Same as above, except star value is changed
      itemPosition = state.indexOf(
        state.filter((item) => item.key === action.key)[0]
      );
      return [
        ...state.slice(0, itemPosition),
        {
          ...state[itemPosition],
          starred: !state[itemPosition].starred,
        },
        ...state.slice(itemPosition + 1),
      ];

    case DELETE_GROUP:
      return state.filter((item) => item.group !== action.name);

    default:
      return state;
  }
}
