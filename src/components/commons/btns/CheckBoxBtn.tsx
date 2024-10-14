import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

import Check from "@/assets/icons/ic-round_check.svg?react";
import Gap from "@/components/utils/Gap";

const Container = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  width: max-content;
  height: max-content;

  color: black;
`;

const Draw = keyframes`
    to {
        stroke-dashoffset: 0;
    }
`;

const Fill = keyframes`
    to {
        fill-opacity: 1;
    }
`;

interface BoxContainerProps {
  isCheck: boolean;
}

const BoxContainer = styled.div<BoxContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 1.5625rem; // should be odd number because of the border padding: ;
  height: 1.5625rem;

  border-radius: 0.1875rem;
  border: 0.0625rem solid black;

  transition: all 6s ease;

  path {
    fill-opacity: 0;
  }

  ${({ isCheck }) => css`
    ${isCheck &&
    css`
      path {
        stroke: black;
        stroke-dasharray: 250;
        stroke-dashoffset: 250;
        stroke-linecap: round;
        animation:
          ${Draw} 0.4s ease forwards,
          ${Fill} 0.4s 0.4s ease forwards;
      }
    `}
  `}
`;

const CheckIcon = styled(Check)`
  width: 1.125rem;
  height: 1.125rem;
`;

interface CheckBoxBtnProps {
  isCheck: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  children: React.ReactNode;
}

function CheckBoxBtn({ isCheck, onClick, children }: CheckBoxBtnProps) {
  return (
    <Container onClick={onClick}>
      <BoxContainer isCheck={isCheck}>
        <CheckIcon />
      </BoxContainer>
      <Gap w={4} />
      {children}
    </Container>
  );
}

export default CheckBoxBtn;
