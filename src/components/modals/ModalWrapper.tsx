import { useEffect } from "react";

import styled from "@emotion/styled";
import { createPortal } from "react-dom";

import { useAppDispatch } from "@/redux/hook/useAppDispatch";
import { closeAllModals } from "@/redux/slice/modalSlice";
import { FadeInKf } from "@/utils/keyframe/BasicKF";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);

  z-index: 1000;
  overflow: hidden;

  animation: ${FadeInKf} 0.3s ease-in-out;
`;

interface ModalWrapperProps {
  children: React.ReactNode;
}

const ModalWrapper = ({ ...props }: ModalWrapperProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dispatch(closeAllModals());
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [dispatch]);

  return createPortal(
    // 모달을 렌더링할 위치를 지정 / 부모 컴포넌트에 영향을 받지 않음
    <Container>{props.children}</Container>,
    document.body, // 모달을 body에 렌더링
  );
};

export default ModalWrapper;
