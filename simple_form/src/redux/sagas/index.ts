import { all } from "redux-saga/effects";
import authSaga from "./authSaga";
import formSaga from "./formSaga";

export default function* rootSaga() {
  yield all([authSaga(), formSaga()]);
}
