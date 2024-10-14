import styled from "@emotion/styled";

import { initVwViewport } from "../../styles/global/globalScreen";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  width: 100%;
  height: 100%;

  max-width: ${initVwViewport}px;

  background-color: transparent;

  transition: all 0.2s ease-in-out;
`;

interface InnerLayoutProps {
  children: React.ReactNode;
}

function InnerLayout({ children, ...props }: InnerLayoutProps) {
  return <Container {...props}>{children}</Container>;
}

export default InnerLayout;
