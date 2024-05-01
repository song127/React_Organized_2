import { css } from "@emotion/react";
import styled from "@emotion/styled";
import COLORS from "@styles/global/globalColor";

export default function Divider({
  column = false,
  color = COLORS.dark_1,
  thick = 1,
  round = 0,
}) {
  // hr
  return styled.div`
    display: flex;

    ${!column
      ? css`
          width: 100%;
          height: ${thick}px;
        `
      : css`
          width: ${thick}px;
          height: 100%;
        `}
    background-color: ${color};
    border-radius: ${round};
  `;
}
