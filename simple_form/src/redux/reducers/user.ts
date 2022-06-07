import { GET_USER_DATA, CLEAR_USER_DATA } from "../actions";
import {
  getUserDataActionType,
  clearUserDataActionType,
  initialStateType,
} from "../../types/common";

const initialState: initialStateType = {
  userData: null,
};

type actionTypes = getUserDataActionType | clearUserDataActionType;

export default function user(state = initialState, action: actionTypes) {
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
