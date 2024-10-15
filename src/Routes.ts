import { createRoutes } from "@/utils/customObjects/CustomRoute";

export const ROUTES = createRoutes({
  MAIN: "/",
  TEST: "/test",
  BUTTON: "/button",
  INPUT: "/input",
  MODAL: "/modal",
  SNACKBAR: "/snackbar",
  SPECIAL: "/special",
  VALIDATION: "/validation",
  PROFILE: {
    BASE: "/profile",
    LOGIN: "/login",
    REGISTER: "/register",
  },
  NOT_FOUND: "*",
});
