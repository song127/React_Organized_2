import styled from "@emotion/styled";

interface PositionProps {
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
  children?: React.ReactNode;
}

const Container = styled.div<PositionProps>`
  position: absolute;
  ${({ top }) => (top ? `top: ${top};` : "")}
  ${({ right }) => (right ? `right: ${right};` : "")}
  ${({ bottom }) => (bottom ? `bottom: ${bottom};` : "")}
  ${({ left }) => (left ? `left: ${left};` : "")}
`;

export default function Position({ top, right, bottom, left, children }: PositionProps) {
  return (
    <Container top={top} right={right} bottom={bottom} left={left}>
      {children}
    </Container>
  );
}
