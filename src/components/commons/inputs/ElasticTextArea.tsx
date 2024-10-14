import { useEffect, useRef } from "react";

import styled from "@emotion/styled";

import COLORS from "@/styles/global/globalColor";

interface BackboardProps {
  w: number;
  h: number;
  round: string;
}

const Backboard = styled.div<BackboardProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: ${({ w }) => w}px;
  height: ${({ h }) => h}px;
  background-color: ${COLORS.gray_4};

  border-radius: ${(props) => props.round};
`;

const Input = styled.textarea`
  border-radius: 16px;

  width: 100%;
  height: 100%;

  padding: 12px 16px;

  color: ${COLORS.dark_1};
  line-height: 110%;

  resize: none;

  overflow-y: scroll;

  ::placeholder {
    color: ${COLORS.gray_1};
  }

  ::-webkit-scrollbar {
    width: 4px;
    background: transparent;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${COLORS.blue_8};
    border-radius: 6px;
  }

  ::-webkit-scrollbar-track {
    margin-top: 12px;
    margin-bottom: 12px;
    background-clip: padding-box;
  }
`;

interface ElasticTextAreaProps {
  type?: string;
  min: number;
  max: number;
  width: number;
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  round?: string;
}

function ElasticTextArea({
  type = "text",
  min,
  max,
  width,
  value,
  setValue,
  placeholder = "Basic Input",
  round = "10px",
}: ElasticTextAreaProps) {
  const backRef = useRef<any>(null);
  const inputRef = useRef<any>(null);

  useEffect(() => {
    backRef.current.style.height = `${min}px`;
    if (inputRef.current.scrollHeight < 200) {
      inputRef.current.style.overflowY = "hidden";
      backRef.current.style.height = inputRef.current.scrollHeight + "px";
    } else {
      inputRef.current.style.overflowY = "scroll";
      backRef.current.style.height = `${max}px`;
    }
  }, [value]);

  return (
    <Backboard w={width} h={min} round={round} ref={backRef}>
      <Input
        ref={inputRef}
        value={value}
        typeof={type}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </Backboard>
  );
}

export default ElasticTextArea;
