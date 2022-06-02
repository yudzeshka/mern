import { GET_USER_DATA, CLEAR_USER_DATA } from "../actions";

const initialState = {
  userData: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
        userData: action.userData,
      };
    case CLEAR_USER_DATA:
      return {
        ...state,
        userData: null,
      };

    default:
      return state;
  }
}
