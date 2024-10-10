import { Global, css } from "@emotion/react";

import initSetting from "@/styles/init/initSetting";
import reset from "@/styles/init/reset";

const initCss = css`
  ${reset}
  ${initSetting}
`;

const GlobalStyle = () => {
  return <Global styles={initCss} />;
};

export default GlobalStyle;
