import { Fragment } from "react";

import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import RectangleBtn from "@/components/commons/btns/RectangleBtn";
import Gap from "@/components/utils/Gap";
import { ROUTES } from "@/Routes";
import { pxToRem } from "@/utils/helper";
import { EdgeInset } from "@/utils/widget/EdgeInset";

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export default function LeftSection() {
  const navigate = useNavigate();

  return (
    <Container>
      {Object.keys(ROUTES).map((key: any) => (
        <Fragment key={key}>
          <RectangleBtn
            isFit
            padding={EdgeInset.direction(10, 20)}
            round={pxToRem("10px")}
            key={key}
            onClick={() => navigate(ROUTES[key])}>
            {key}
          </RectangleBtn>
          <Gap w={10} />
        </Fragment>
      ))}
    </Container>
  );
}
