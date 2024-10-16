import styled from "@emotion/styled";

import { SCREEN } from "@/commons/constants";
import COLORS from "@/styles/global/globalColor";
import { pxToRem } from "@/utils/helper";

const Container = styled.footer`
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${pxToRem(SCREEN.FOOTER_HEIGHT)};
  background-color: ${COLORS.blue_1};
  color: ${COLORS.dark_1};
`;

export default function Footer() {
  return (
    <Container>
      <p>Footer</p>
    </Container>
  );
}
