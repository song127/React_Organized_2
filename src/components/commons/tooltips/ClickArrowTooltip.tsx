import { useEffect, useRef, useState } from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

import Icon from "@/assets/icons/ic-tootip_info.svg?react";
import { FadeInKf } from "@/utils/keyframe/BasicKF";
import { PositionAlign } from "@/utils/widget/PositionAlign";

const Wrapper = styled.div`
  position: relative;
`;

const ArrowContainer = styled.div<{ align: PositionAlign }>`
  position: absolute;
  z-index: 100;

  ${({ align }) => {
    switch (align) {
      case PositionAlign.top:
        return css`
          top: 0;
          left: 50%;
          transform: translateX(-50%) translateY(-110%);
        `;
      case PositionAlign.bottom:
        return css`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) translateY(110%);
        `;
      case PositionAlign.right:
        return css`
          top: 50%;
          right: 0;
          transform: translateX(110%) translateY(-50%);
        `;
      case PositionAlign.left:
        return css`
          top: 50%;
          left: 0;
          transform: translateX(-110%) translateY(-50%);
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

  ::after {
    content: " ";
    position: absolute;
    ${({ align }) => {
      switch (align) {
        case PositionAlign.top:
          return css`
            top: 100%;
            left: 50%;
            border-color: #000 transparent transparent transparent;
          `;
        case PositionAlign.bottom:
          return css`
            bottom: 100%;
            left: 50%;
            border-color: transparent transparent #000 transparent;
          `;
        case PositionAlign.right:
          return css`
            top: 50%;
            right: 100%;
            transform: translateY(-50%);
            border-color: transparent #000 transparent transparent;
          `;
        case PositionAlign.left:
          return css`
            top: 50%;
            left: 100%;
            transform: translateY(-50%) translateX(50%);
            border-color: transparent transparent transparent #000;
          `;
        default:
          return css`
            top: 100%;
            left: 50%;
            border-color: #000 transparent transparent transparent;
          `;
      }
    }};
    margin-left: -8px;
    border-width: 8px;
    border-style: solid;
  }
`;

interface ClickArrowTooltipProps {
  align?: PositionAlign;
  onClick?: () => void;
  children: React.ReactNode;
}

function ClickArrowTooltip({
  align = PositionAlign.left,
  onClick,
  children,
}: ClickArrowTooltipProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const clickEvent = (e: MouseEvent) => {
    if (ref.current != null) {
      if (!ref.current.contains(e.target as Node)) {
        setActive(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("click", clickEvent);

    return () => {
      window.removeEventListener("click", clickEvent);
    };
  }, []);

  return (
    <Wrapper ref={ref}>
      <Icon
        style={{ cursor: "pointer" }}
        width={"16px"}
        height={"16px"}
        onClick={() => {
          setActive(!active);
          if (onClick) {
            onClick();
          }
        }}
      />

      {active && <ArrowContainer align={align}>{children}</ArrowContainer>}
    </Wrapper>
  );
}

export default ClickArrowTooltip;
