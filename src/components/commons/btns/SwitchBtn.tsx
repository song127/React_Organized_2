import { css } from "@emotion/react";
import styled from "@emotion/styled";

import COLORS from "@/styles/global/globalColor";

interface ContainerProps {
  isOn: boolean;
  backColor: string;
}

const Container = styled.button`
  cursor: pointer;
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: start;

  align-items: center;

  width: 100%;
  height: 100%;

  padding: 4px;

  border-radius: 180px;

  ${({ isOn, backColor }: ContainerProps) => css`
    background-color: ${isOn ? backColor : "grey"};
  `}

  transition: all 0.2s ease-in-out;
`;

interface CircleProps {
  isOn: boolean;
  circleColor: string;
}

const Circle = styled.div`
  position: relative;

  width: 18px;
  height: 18px;
  border-radius: 100%;

  ${({ isOn, circleColor }: CircleProps) => css`
    background-color: ${circleColor};
    ${isOn && "transform: translateX(24px)"};
  `}

  transition: all 0.2s ease-in-out;
`;

interface SwitchBtnProps {
  backColor?: string;
  circleColor?: string;
  disabled?: boolean;
  isOn: boolean;
  setIsOn?: (isOn: boolean) => void;
  onChange?: (isOn: boolean) => void;
}

function SwitchBtn({
  backColor = COLORS.black.hex,
  circleColor = "white",
  disabled = false,
  isOn,
  setIsOn,
  onChange,
}: SwitchBtnProps) {
  return (
    <Container
      disabled={disabled}
      isOn={isOn}
      backColor={backColor}
      onClick={() => {
        if (setIsOn) {
          setIsOn(!isOn);
        }
        if (onChange) {
          onChange(!isOn);
        }
      }}>
      <Circle isOn={isOn} circleColor={circleColor} />
    </Container>
  );
}

export default SwitchBtn;
