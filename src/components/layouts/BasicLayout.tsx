import { css } from "@emotion/react";
import styled from "@emotion/styled";

import Gap from "@/components/utils/Gap";
import { GlobalModalManager } from "@/redux/global/GlobalModalManager";
import COLORS from "@/styles/global/globalColor";
import { LayerAlign } from "@/utils/widget/LayerAlign";

interface LayoutProps {
  main?: LayerAlign;
  cross?: LayerAlign;
  backColor?: string;
}

const Layout = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  min-height: 100vh;

  max-height: max-content;

  padding-bottom: 50px;

  transition: all 0.5s ease-in-out;

  ${({ main, cross, backColor }) => css`
    justify-content: ${main};
    align-items: ${cross};
    background-color: ${backColor};
  `}
`;

interface BasicLayoutProps extends LayoutProps {
  children: React.ReactNode;
}

function BasicLayout({
  main = LayerAlign.start,
  cross = LayerAlign.center,
  children,
  ...props
}: BasicLayoutProps) {
  return (
    <Layout
      main={main}
      cross={cross}
      //   backColor={useDarkModeValue(COLORS.blue_15, COLORS.dark_2)}
      backColor={COLORS.blue_15}
      {...props}>
      {/* Header Margin */}
      <Gap h={70} />
      <GlobalModalManager />
      {children}
    </Layout>
  );
}

export default BasicLayout;
