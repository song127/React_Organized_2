import { useEffect, useRef } from "react";

import styled from "@emotion/styled";

import Close from "@/assets/icons/ic-close.svg";
import RectangleBtn from "@/components/commons/btns/RectangleBtn";
import ModalWrapper from "@/components/modals/ModalWrapper";
import Align from "@/components/utils/Align";
import AllFullColumn from "@/components/utils/AllFullColumn";
import Gap from "@/components/utils/Gap";
import ImageLoader from "@/components/utils/ImageLoader";
import Position from "@/components/utils/Position";
import SizedBox from "@/components/utils/SizedBox";
import { useAppDispatch } from "@/redux/hook/useAppDispatch";
import { closeModal, openModal } from "@/redux/slice/modalSlice";
import COLORS from "@/styles/global/globalColor";
import { ModalPropsMap, ModalType, SpecificModalProps } from "@/types/domain/ModalTypes";
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

function BasicModal({ title, onClose }: SpecificModalProps<ModalType.BASIC>) {
  const dispatch = useAppDispatch();
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
        <AllFullColumn main={LayerAlign.start} cross={LayerAlign.center}>
          <Align isAbsolute margin={"10px 10px 0 0"} alignment={LayerAlign.end}>
            <SizedBox w={16} h={16}>
              <RectangleBtn round={".2rem"} onClick={() => dispatch(closeModal())}>
                <ImageLoader w={"100%"} h={"100%"} src={Close} alt={"close"} />
              </RectangleBtn>
            </SizedBox>
          </Align>

          <Gap h={10} />
          <Title>{title}</Title>
        </AllFullColumn>
      </Container>
    </ModalWrapper>
  );
}

export default BasicModal;
