import { useEffect, useRef, useState } from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { StateEnum, StateEnumType } from "@/commons/types/StateTypes";
import COLORS from "@/styles/global/globalColor";

interface BackboardProps {
  borderOn: boolean;
  thickness: string;
  round: string;
  state: StateEnum;
}

const Backboard = styled.div<BackboardProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  background-color: ${COLORS.gray_4};

  box-sizing: border-box;

  transition: all 0.2s ease-in-out;

  ${({ borderOn, thickness, round, state }) => css`
    border: ${thickness} solid transparent;
    border-radius: ${round};

    ${borderOn &&
    css`
      border: ${thickness} solid ${border_color[state]};
    `}
  `}
`;

const Input = styled.input`
  border-radius: 50px;

  width: 100%;
  height: 100%;

  padding: 0 16px;

  color: ${COLORS.dark_1};

  &::placeholder {
    color: ${COLORS.gray_1};
  }
`;

const border_color: Record<StateEnumType, string> = {
  [StateEnum.NONE]: COLORS.gray_4,
  [StateEnum.DEFAULT]: COLORS.blue_1,
  [StateEnum.SUCCESS]: COLORS.green_1,
  [StateEnum.WARNING]: COLORS.yellow_4,
  [StateEnum.ERROR]: COLORS.red_1,
};

interface BasicBorderInputProps {
  type?: string;
  value: string;
  setValue: (value: string) => void;
  onChange?: (value: string) => string;
  placeholder?: string;
  round?: string;
  thickness?: string;
}

function BasicBorderInput({
  type = "text",
  value,
  setValue,
  onChange = (value) => {
    return StateEnum.DEFAULT;
  },
  placeholder = "Basic Input",
  round = "12px",
  thickness = "2px",
}: BasicBorderInputProps) {
  const [borderOn, setBorderOn] = useState(false);
  const [state, setState] = useState(StateEnum.DEFAULT);
  const ref = useRef<any>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newState = onChange(e.target.value) as StateEnum;
    setState(newState);
    setValue(e.target.value);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setBorderOn(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <Backboard ref={ref} borderOn={borderOn} state={state} round={round} thickness={thickness}>
      <Input
        ref={ref}
        value={value}
        type={type}
        onChange={onChangeHandler}
        placeholder={placeholder}
        onFocus={() => setBorderOn(true)}
      />
    </Backboard>
  );
}

export default BasicBorderInput;
