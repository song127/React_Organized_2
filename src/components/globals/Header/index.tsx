import styled from "@emotion/styled";

import { SCREEN } from "@/commons/constants";
import LeftSection from "@/components/globals/Header/LeftSection";
import RightSection from "@/components/globals/Header/RightSection";
import Spacer from "@/components/utils/Spacer";
import COLORS from "@/styles/global/globalColor";
import { initVwViewport } from "@/styles/global/globalScreen";
import { pxToRem } from "@/utils/helper";

const Container = styled.header`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: ${pxToRem(SCREEN.HEADER_HEIGHT)};

  background-color: ${COLORS.blue_1};
  color: ${COLORS.dark_1};
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: ${pxToRem(initVwViewport.toString())};
  height: 100%;
`;

export default function Header() {
  return (
    <Container>
      <Inner>
        <LeftSection />

        <Spacer />
        <RightSection />
      </Inner>
    </Container>
  );
}
