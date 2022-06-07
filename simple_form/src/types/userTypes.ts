import { GET_USER_DATA, LOGIN_USER } from "../redux/actions";
import { userDataType } from "./dataTypes";

export type authFormValuesType = {
  email: string;
  password: string;
};

export type registerActionType = {
  type: typeof GET_USER_DATA;
  userData: userDataType;
};

export type fetchLoginDataActionType = {
  type: typeof LOGIN_USER;
  userData: userDataType;
};
