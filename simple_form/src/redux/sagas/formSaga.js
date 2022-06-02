import { call, put, takeEvery } from "redux-saga/effects";
import { SEND_FORM } from "../actions";
import { storageName } from "../../constants";

const request = async (url, method = "GET", body = null, headers = {}) => {
  try {
    if (body) {
      body = JSON.stringify(body);
      headers["Content-Type"] = "application/json";
    }
    console.log(headers);
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

const sendForm = async (action) => {
  const userData = JSON.parse(localStorage.getItem(storageName));
  console.log(userData);
  console.log(userData.token);
  try {
    const data = action.data;
    const token = userData.token;
    console.log(token);
    const formResponse = await request("api/form", "POST", data, {
      Authorization: `Bearer ${token}`,
    });
    console.log(formResponse.message);
  } catch (e) {}
};

// async function register(action) {
//   try {
//     const data = action.userData;
//     const registerData = await request("api/auth/register", "POST", data);
//     console.log(registerData.message);
//   } catch (e) {}
// }

// async function fetchLoginData(action) {
//   try {
//     const data = action.userData;
//     const loginData = await request("api/auth/login", "POST", data);
//     localStorage.setItem(
//       storageName,
//       JSON.stringify({ userId: loginData.userId, token: loginData.token })
//     );
//     console.log(loginData);
//     return loginData;
//   } catch (e) {}
// }

// function* login(action) {
//   const userData = yield call(fetchLoginData, action);
//   yield put({
//     type: GET_USER_TOKEN,
//     userData: { userId: userData.userId, token: userData.token },
//   });
// }

export default function* formSaga() {
  yield takeEvery(SEND_FORM, sendForm);
}
