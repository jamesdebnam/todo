import { ADD_GROUP } from "../actions/ACTION_TYPES";

export default function groupsReducer(state = [], action) {
  switch (action.type) {
    case ADD_GROUP:
      return [...state, { name: action.payload, key: state.length }];

    default:
      return state;
  }
}
