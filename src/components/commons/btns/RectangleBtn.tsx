import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface ContainerProps {
  disabled: boolean;
  backColor: string;
  textColor: string;
  fontSize: number;
  round: string;
  isFit: boolean;
}

const Container = styled.button`
  cursor: pointer;
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  transition: all 0.2s ease-in-out;

  ${({ disabled, backColor, textColor, fontSize, round, isFit }: ContainerProps) => css`
    cursor: ${disabled ? "auto" : "pointer"};

    width: ${isFit ? "max-content" : "100%"};
    height: ${isFit ? "max-cotent" : "100%"};

    background-color: ${backColor};
    border-radius: ${round};

    color: ${textColor};
    font-size: ${fontSize}px;
  `}

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    ${({ disabled, round }) => css`
      border-radius: ${round};
      background-color: ${disabled ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0)"};
    `}
  }
`;

interface RectangleBtnProps {
  onClick: () => void;
  active?: boolean;
  backColor?: string;
  textColor?: string;
  fontSize?: number;
  round?: string;
  isFit?: boolean;
  padding?: string;
  children: React.ReactNode;
}

function RectangleBtn({
  onClick,
  active = true,
  backColor = "black",
  textColor = "white",
  fontSize = 16,
  round = "0",
  isFit = false,
  padding,
  children,
}: RectangleBtnProps) {
  return (
    <Container
      onClick={onClick}
      disabled={!active}
      backColor={backColor}
      textColor={textColor}
      fontSize={fontSize}
      round={round}
      isFit={isFit}
      style={{ padding }}>
      {children}
    </Container>
  );
}

export default RectangleBtn;
