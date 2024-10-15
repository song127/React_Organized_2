import { useEffect } from "react";

import styled from "@emotion/styled";

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

  return <Container>{props.children}</Container>;
};

export default ModalWrapper;
