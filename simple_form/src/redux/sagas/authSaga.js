import { call, put, takeEvery } from "redux-saga/effects";
import {
  LOGIN_USER,
  REGISTER_USER,
  GET_USER_DATA,
  LOGOUT_USER,
  CLEAR_USER_DATA,
} from "../actions";
import { storageName } from "../../constants";

const request = async (url, method = "GET", body = null, headers = {}) => {
  try {
    if (body) {
      body = JSON.stringify(body);
      headers["Content-Type"] = "application/json";
    }
    const response = await fetch(url, { method, body, headers });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Что-то пошло не так");
    }
    return data;
  } catch (e) {
    throw e;
  }
};

async function register(action) {
  try {
    const data = action.userData;
    const registerData = await request("api/auth/register", "POST", data);
    console.log(registerData.message);
  } catch (e) {}
}

async function fetchLoginData(action) {
  try {
    const data = action.userData;
    const loginData = await request("api/auth/login", "POST", data);
    localStorage.setItem(
      storageName,
      JSON.stringify({ userId: loginData.userId, token: loginData.token })
    );
    console.log(loginData);
    return loginData;
  } catch (e) {}
}

function* login(action) {
  const userData = yield call(fetchLoginData, action);
  yield put({
    type: GET_USER_DATA,
    userData: { userId: userData.userId, token: userData.token },
  });
}

function* logout() {
  localStorage.removeItem(storageName);

  yield put({ type: CLEAR_USER_DATA });
}

export default function* authSaga() {
  yield takeEvery(REGISTER_USER, register);
  yield takeEvery(LOGIN_USER, login);
  yield takeEvery(LOGOUT_USER, logout);
}
