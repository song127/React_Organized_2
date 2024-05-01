import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface EmptyImgProps {
  w: number;
  h: number;
  round: number;
}

const EmptyImg = styled.div<EmptyImgProps>`
  background-color: #e0e0e0;

  ${({ w, h, round }) => css`
    width: "${w}px";
    height: "${h}px";

    border-radius: ${round};
  `}
`;

export default function ImageLoader({ w = 0, h = 0, src = "", round = 0 }) {
  if (src === "" || src === undefined || src === null) {
    return (
      <EmptyImg
        w={w}
        h={h}
        round={round}
      />
    );
  }
  return (
    <img
      style={{ width: w, height: h, borderRadius: round }}
      src={src}
    />
  );
}
