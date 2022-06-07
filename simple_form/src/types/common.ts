import rootReducer from "../redux/reducers";
import { GET_USER_DATA, CLEAR_USER_DATA } from "../redux/actions";
import { userDataType } from "./dataTypes";

export type rootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<rootReducerType>;

export type getUserDataActionType = {
  type: typeof GET_USER_DATA;
  userData: userDataType;
};

export type clearUserDataActionType = {
  type: typeof CLEAR_USER_DATA;
  userData: userDataType;
};

export type initialStateType = {
  userData: userDataType | null;
};
