import { css } from "@emotion/react";
import styled from "@emotion/styled";

import RectangleBtn from "@/components/commons/btns/RectangleBtn";
import COLORS from "@/styles/global/globalColor";

const BackBoard = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  border-radius: 48px;

  background-color: ${COLORS.white};
  border-radius: 48px;
`;

const BackBoardInner = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  height: 100%;

  margin: 2px;

  background-color: ${COLORS.white};
  border-radius: 48px;
`;

const ButtonWrapper = styled.div<{ length: number; index: number }>`
  position: absolute;

  height: calc(100% - 4px);

  border-radius: 48px;

  transition: all 0.4s;

  ${({ length, index }) => css`
    width: ${100 / length}%;
    left: ${index * (100 / length)}%;
  `}
`;

const EmptyRoundBtn = styled.button<{ length: number }>`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: ${({ length }) => `${100 / length}%`};

  border-radius: 48px;
  border: none;
  background-color: transparent;

  font-size: 14px;
  color: ${COLORS.black};
`;

interface RoundTabProps {
  titleList: string[];
  index: number;
  setIndex: (index: number) => void;
}

function RoundTab({ titleList = [], index = 0, setIndex }: RoundTabProps) {
  return (
    <BackBoard>
      <BackBoardInner>
        {titleList.map((value, idx) => (
          <EmptyRoundBtn key={idx} length={titleList.length} onClick={() => setIndex(idx)}>
            {value}
          </EmptyRoundBtn>
        ))}
        <ButtonWrapper length={titleList.length} index={index}>
          <RectangleBtn backColor={COLORS.simple_blue_2} round="48px" onClick={() => {}}>
            {titleList[index]}
          </RectangleBtn>
        </ButtonWrapper>
      </BackBoardInner>
    </BackBoard>
  );
}

export default RoundTab;
