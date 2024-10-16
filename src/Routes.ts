import { createRoutes } from "@/utils/customObjects/CustomRoute";

export const ROUTES = createRoutes({
  MAIN: "/",
  MODAL: "/modal",
  VALIDATION: "/validation",
  SNACKBAR: "/snackbar",
  // INPUT: "/input",
  // BUTTON: "/button",
  // SPECIAL: "/special",
  // PROFILE: {
  //   BASE: "/profile",
  //   LOGIN: "/login",
  //   REGISTER: "/register",
  // },
  // TEST: "/test",
  NOT_FOUND: "*",
});
