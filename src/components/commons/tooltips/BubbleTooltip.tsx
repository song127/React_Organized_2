import { useState } from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

import Icon from "@/assets/icons/ic-tootip_info.svg?react";
import { FadeInKf } from "@/utils/keyframe/BasicKF";
import { PositionAlign } from "@/utils/widget/PositionAlign";

const Wrapper = styled.div`
  position: relative;
`;

const BubbleContainer = styled.div<{ align: PositionAlign }>`
  position: absolute;
  z-index: 300;

  ${({ align }) => {
    switch (align) {
      case PositionAlign.top:
        return css`
          top: 0;
          left: 50%;
          transform: translateX(-50%) translateY(-105%);
        `;
      case PositionAlign.bottom:
        return css`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) translateY(105%);
        `;
      case PositionAlign.right:
        return css`
          top: 50%;
          right: 0;
          transform: translateX(105%) translateY(-50%);
        `;
      case PositionAlign.left:
        return css`
          top: 50%;
          left: 0;
          transform: translateX(-105%) translateY(-50%);
        `;
      default:
        return css`
          top: -100%;
          left: 50%;
          transform: translateX(-50%);
        `;
    }
  }}

  display: flex;
  flex-direction: column;

  width: 120px;
  height: 80px;

  background-color: #000;
  border-radius: 8px;

  animation: ${FadeInKf} 0.3s ease-in-out;
`;

interface BubbleTooltipProps {
  align?: PositionAlign;
  children: React.ReactNode;
}

function BubbleTooltip({ align = PositionAlign.left, children }: BubbleTooltipProps) {
  const [active, setActive] = useState(false);

  return (
    <Wrapper onMouseOver={() => setActive(true)} onMouseOut={() => setActive(false)}>
      <Icon width={"16px"} height={"16px"} />

      {active && <BubbleContainer align={align}>{children}</BubbleContainer>}
    </Wrapper>
  );
}

export default BubbleTooltip;
