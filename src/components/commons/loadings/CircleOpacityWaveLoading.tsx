import { css } from "@emotion/react";
import styled from "@emotion/styled";

import Gap from "@/components/utils/Gap";
import COLORS from "@/styles/global/globalColor";
import { FadeInOutKf } from "@/utils/keyframe/BasicKF";

const BigCircle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 134px;
  height: 134px;
  border-radius: 100%;

  background-color: ${COLORS.simple_blue_1.withOpacity(0.15)};
`;

const SmallCircle = styled.div<{ delay: number }>`
  width: 12px;
  width: 12px;
  border-radius: 100%;

  background-color: ${COLORS.simple_blue_1};

  animation: ${FadeInOutKf} 1.2s ease-in-out infinite alternate;
  ${({ delay }) => css`
    animation-delay: ${delay}ms;
  `}
`;
function CircleOpacityWaveLoading() {
  return (
    <BigCircle>
      <SmallCircle delay={0}></SmallCircle>
      <Gap w={10} />
      <SmallCircle delay={200}></SmallCircle>
      <Gap w={10} />
      <SmallCircle delay={400}></SmallCircle>
    </BigCircle>
  );
}

export default CircleOpacityWaveLoading;
