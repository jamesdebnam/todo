import { TOGGLE_COMPLETED } from "../actions/ACTION_TYPES";

export default function isToggledReducer(state = false, action) {
  switch (action.type) {
    case TOGGLE_COMPLETED:
      return action.isToggled;

    default:
      return state;
  }
}
