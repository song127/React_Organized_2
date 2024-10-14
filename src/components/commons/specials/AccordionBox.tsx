import { useCallback, useRef } from "react";

import styled from "@emotion/styled";

import Row from "@/components/utils/Row";
import Spacer from "@/components/utils/Spacer";
import COLORS from "@/styles/global/globalColor";

interface AccordionBoxProps {
  selected: boolean;
  setSelected: (selected: boolean) => void;
  title: string;
  children: React.ReactNode;
}

const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: max-content;

  border-top: 1px solid ${COLORS.blue_10};
  border-bottom: 1px solid ${COLORS.blue_10};
`;

const Header = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  height: max-content;

  padding: 12px 0 12px 0;
`;

const ContentsWrapper = styled.div`
  cursor: pointer;
  height: 0;
  width: inherit;
  overflow: hidden;
  transition: height 0.35s ease;
`;

const Contents = styled.div`
  padding: 5px 0 12px 0;
`;

function AccordionBox({ selected, setSelected, title, children }: AccordionBoxProps) {
  const parentRef = useRef<any>();
  const childRef = useRef<any>();
  // const arrowRef = useRef();

  const handleExpand = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = "0";
        // arrowRef.current.style.transform = "rotate(0deg)";
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
        // arrowRef.current.style.transform = "rotate(-180deg)";
      }
      setSelected(!selected);
    },
    [selected],
  );

  return (
    <Container>
      <Header onClick={handleExpand}>
        <Row fullWidth>
          {title}
          <Spacer />
        </Row>
      </Header>
      <ContentsWrapper ref={parentRef} onClick={handleExpand}>
        <Contents ref={childRef}>{children}</Contents>
      </ContentsWrapper>
    </Container>
  );
}

export default AccordionBox;
