// 겹치는 부분 변수화
// 리팩토링 및 사양 변경 시 수정이 용이하도록 변수화
// const FRAMEWORK_ENV_KEY = "REACT_APP";
const FRAMEWORK_ENV_KEY = "VITE";

const getEnv = (key: string): string => {
  if (FRAMEWORK_ENV_KEY === "VITE") {
    return import.meta.env[`${FRAMEWORK_ENV_KEY}_${key}`] ?? "";
  } else {
    return process.env[`${FRAMEWORK_ENV_KEY}_${key}`] ?? "";
  }
};

export const ENVS = {
  // SYSTEM
  NODE_ENV: getEnv("NODE_ENV"),
  // SERVER
  APP_URL: getEnv("APP_URL"),
  API_URL: getEnv("API_URL"),
  WEBSOCKET_URL: getEnv("WEBSOCKET_URL"),
};
