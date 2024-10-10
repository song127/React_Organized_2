import { css } from "@emotion/react";

import COLORS from "@/styles/global/globalColor";

const initSetting = css`
  * {
    box-sizing: border-box;
    transition:
      color 0.3s ease-in-out,
      background-color 0.3s ease-in-out;

    font-family: "Outfit", sans-serif;
    color: ${COLORS.dark_1};
  }

  html {
    width: 100%;
    max-height: max-content;
    min-height: 100vh;
  }

  body {
    width: 100%;
    max-height: max-content;
    min-height: 100vh;
  }

  #root {
    width: 100%;
    max-height: max-content;
    min-height: 100vh;
  }
`;

export default initSetting;
