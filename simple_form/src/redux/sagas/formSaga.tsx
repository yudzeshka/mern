import { takeEvery } from "redux-saga/effects";
import { SEND_FORM } from "../actions";
import { storageName } from "../../constants";
import { sendFormActionType, userDataType } from "../../types/dataTypes";

const request = async (
  url: string,
  method: string = "GET",
  body: any = null,
  headers: any = {}
) => {
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

const sendForm = async (action: sendFormActionType): Promise<void> => {
  const userData: userDataType = JSON.parse(
    localStorage.getItem(storageName) || ""
  );
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

export default function* formSaga() {
  yield takeEvery<any>(SEND_FORM, sendForm); /// to fix
}
