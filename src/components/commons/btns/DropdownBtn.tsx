import { useEffect, useRef, useState } from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

import DownArrow from "@/assets/icons/ic-open_eye.svg?react";
import Spacer from "@/components/utils/Spacer";
import COLORS from "@/styles/global/globalColor";

interface ContainerProps {
  disabled: boolean;
}

const Container = styled.button<ContainerProps>`
  pointer-events: ${({ disabled }) => (disabled ? "auto" : "pointer")};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  position: relative;

  border-radius: 10px;
`;

const SelectedValue = styled.div`
  cursor: pointer;
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 50px;

  line-height: 50px;
  font-size: 14px;
  text-align: left;

  padding-left: 16px;
  border-radius: 10px;
  border: none;

  background: ${COLORS.gray_4};

  transition: 0.2s;

  &:hover {
    background: ${COLORS.gray_3};
  }
`;

const DownArrowC = styled(DownArrow)<{ active: boolean }>`
  top: -4px;
  transition: 0.2s;
  transform: rotate(${({ active }) => (active ? "0deg" : "-180deg")});
`;

const OptionWrapper = styled.div<{ active: boolean }>`
  width: 100%;
  max-height: 0;

  opacity: 0;
  overflow: auto;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: white;
  transition: 0.2s;
  position: absolute;
  top: 50px;

  ::-webkit-scrollbar {
    width: 3.5px;
    background: transparent;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${COLORS.blue_8};
    border-radius: 6px;
  }

  ::-webkit-scrollbar-track {
    margin-top: 3px;
    margin-bottom: 3px;
    background-clip: padding-box;
  }

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      max-height: calc(100% * 3);
      z-index: 1;
    `}
`;

const OptionItem = styled.div<{ selected: boolean }>`
  cursor: pointer;

  display: flex;
  align-items: center;
  flex-direction: row;

  width: calc(100%);
  height: 50px;
  padding-left: 16px;
  background-color: ${({ selected }) => (selected ? COLORS.gray_3 : "transparent")};

  line-height: 43px;
  font-size: 14px;
  color: #000000;
  text-align: left;

  transition: 0.2s;

  &:hover {
    background-color: ${COLORS.gray_3};
  }
`;

function DropdownBtn({ list = [], index = 0, setIndex = (idx: number) => {}, disabled = false }) {
  const [active, setActive] = useState(false);
  const ref = useRef<any>(null);

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
    <Container ref={ref} disabled={disabled}>
      <SelectedValue ref={ref} onClick={() => setActive(!active)}>
        {list[index]}
        <Spacer />
        <DownArrowC active={active} />
      </SelectedValue>
      <OptionWrapper active={active}>
        {list.map((value, idx) => (
          <OptionItem key={idx} selected={index === idx} onClick={() => setIndex(idx)}>
            {value}
          </OptionItem>
        ))}
      </OptionWrapper>
    </Container>
  );
}

export default DropdownBtn;
