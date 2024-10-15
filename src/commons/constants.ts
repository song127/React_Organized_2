import { ErrorEnum } from "@/types/domain/ErrorTypes";

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

export const DEFAULTS = {
  INTERVAL: second,
  FAKE_LOADING_DURATION: 2 * second,
  PAGE_LIMIT: 10,
  PREVENT_WEBSOCKET_NOT_CONNECT_INTERVAL: 60 * second,
  TOKEN_EXPIRE: 30 * day,
  TOKEN_REFRESH_INTERVAL: 5 * minute,
  TYPING_WAITING_TIME: second,
};

export const ERR_MSGS = {
  [ErrorEnum.INVALID_TOKEN]: "Invalid Token",
  [ErrorEnum.INVALID_REFRESH_TOKEN]: "Invalid Refresh Token",
  [ErrorEnum.INVALID_USER]: "Invalid User",
  [ErrorEnum.INVALID_PASSWORD]: "Invalid Password",
  [ErrorEnum.INVALID_EMAIL]: "Invalid Email",
  [ErrorEnum.WEBSOCKET_ERROR]: "Websocket Error",
};

export const SNACKBAR_MSGS = {
  SUCCESS: "Success",
  FAILED: "Failed",
  PENDING: "Pending",
};
