import {
  ADD_GROUP,
  DELETE_GROUP,
  SELECT_GROUP,
  FILTER_TODOS,
} from "../actions/ACTION_TYPES";

export default function groupsReducer(
  state = { group: "", filter: {}, groupList: [] },
  action
) {
  switch (action.type) {
    case ADD_GROUP:
      return {
        ...state,
        groupList: [
          ...state.groupList,
          { name: action.payload, key: state.groupList.length },
        ],
      };

    case DELETE_GROUP:
      return {
        ...state,
        groupList: [
          ...state.groupList.filter((item) => item.key !== action.payload),
        ],
      };
    case SELECT_GROUP:
      return {
        ...state,
        group: action.payload,
      };
    case FILTER_TODOS:
      return {
        ...state,
        filter: { ...action.term },
      };
    default:
      return state;
  }
}
