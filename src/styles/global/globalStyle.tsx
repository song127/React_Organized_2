import { Global, css } from "@emotion/react";
import reset from "@styles/init/reset";
import initSetting from "@styles/init/initSetting";

const initCss = css`
    ${reset}
    ${initSetting}
`;

const GlobalStyle = () => {
    return <Global styles={initCss} />;
};

export default GlobalStyle;
