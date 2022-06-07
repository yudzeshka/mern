import { SEND_FORM } from "../redux/actions";

export type formDataType = {
  recipient: string;
  inn: number | string;
  kpp: number | string;
  recipientAcc: string;
  bik: number | string;
  date: Date;
  _id: string;
};

export type sendFormDataType = {
  recipient: string;
  inn: number | string;
  kpp: number | string;
  recipientAcc: string;
  bik: number | string;
};

export type formList = formDataType[];

export type userDataType = {
  userId: string;
  token: string;
};

export type sendFormActionType = {
  action: typeof SEND_FORM;
  data: sendFormDataType;
};
