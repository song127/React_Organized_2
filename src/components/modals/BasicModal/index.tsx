import { useEffect, useRef } from "react";

import styled from "@emotion/styled";

import { SpecificModalProps } from "@/commons/types/ModalTypes";
import RectangleBtn from "@/components/commons/btns/RectangleBtn";
import ModalWrapper from "@/components/modals/ModalWrapper";
import Align from "@/components/utils/Align";
import AllFullColumn from "@/components/utils/AllFullColumn";
import SizedBox from "@/components/utils/SizedBox";
import { closeModal } from "@/redux/slice/modalSlice";
import { FadeInKf, TopToBottomKf } from "@/utils/keyframe/BasicKF";
import { LayerAlign } from "@/utils/widget/LayerAlign";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 150px;

  background-color: #fff;
  border-radius: 10px;

  overflow: hidden;

  animation:
    ${TopToBottomKf} 0.3s ease-in-out,
    ${FadeInKf} 0.3s ease-in-out;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

function BasicModal({ title, onClose }: SpecificModalProps<"BASIC">) {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (innerRef.current && !innerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handler);
    // document.addEventListener('touchstart', handler); // 모바일 대응

    return () => {
      document.removeEventListener("mousedown", handler);
      // document.removeEventListener('touchstart', handler); // 모바일 대응
    };
  });

  return (
    <ModalWrapper>
      <Container ref={innerRef}>
        <AllFullColumn main={LayerAlign.start} cross={LayerAlign.start}>
          <Align margin={"10px 10px 0 0"} alignment={LayerAlign.end}>
            <SizedBox w={40} h={40}>
              <RectangleBtn round={"10px"} onClick={closeModal}>
                X
              </RectangleBtn>
            </SizedBox>
          </Align>
          <Title>{title}</Title>
        </AllFullColumn>
      </Container>
    </ModalWrapper>
  );
}

export default BasicModal;
