import styled from "@emotion/styled";

export default function Position({ top = 0, right = 0, bottom = 0, left = 0 }) {
  return styled.div`
    position: absolute;
    top: ${top};
    right: ${right};
    bottom: ${bottom};
    left: ${left};
  `;
}
