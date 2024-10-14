import { css } from "@emotion/react";
import styled from "@emotion/styled";

import COLORS from "@/styles/global/globalColor";
import { OpacityPopKf } from "@/utils/keyframe/BasicKF";

const Container = styled.div<{ backColor: string }>`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: auto;

  padding: 0.5rem 1rem;
  /* margin: 0.5rem 0.5rem; */

  border-radius: 0.5rem;

  animation: ${OpacityPopKf} 0.5s ease-in-out;
  transition: all 0.2s ease-in-out;

  ${({ backColor }) => css`
    background-color: ${backColor};
  `}
`;

interface CustomTextProps {
  color?: string;
  children: React.ReactNode;
}

function CustomTag({ color = COLORS.blue_1, children }: CustomTextProps) {
  return <Container backColor={color}>{children}</Container>;
}

export default CustomTag;
