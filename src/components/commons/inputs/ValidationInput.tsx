import { useEffect, useRef, useState } from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { StateEnum } from "@/types/StateTypes";
import Gap from "@/components/utils/Gap";
import COLORS from "@/styles/global/globalColor";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  background-color: transparent;

  transition: all 0.2s ease-in-out;
`;

interface BackboardProps {
  w: string;
  h: string;
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

  background-color: ${COLORS.gray_4};

  box-sizing: border-box;

  transition: all 0.2s ease-in-out;

  ${({ w, h, borderOn, thickness, round, state }) => css`
    width: ${w};
    height: ${h};

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

interface MessageProps {
  round: string;
  state: StateEnum;
}

const Message = styled.p<MessageProps>`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;

  ${({ round, state }) => css`
    margin-left: ${round};
    color: ${border_color[state]};
  `}
`;

const border_color: Record<StateEnum, string> = {
  [StateEnum.NONE]: COLORS.blue_1,
  [StateEnum.DEFAULT]: COLORS.blue_1,
  [StateEnum.SUCCESS]: COLORS.green_1,
  [StateEnum.WARNING]: COLORS.yellow_4,
  [StateEnum.ERROR]: COLORS.red_1,
};

interface ValidationInputProps {
  type?: string;
  width: string;
  height: string;
  value: string;
  setValue: (value: string) => void;
  onChange?: (value: string) => [StateEnum, string];
  placeholder?: string;
  round?: string;
  thickness?: string;
}

function ValidationInput({
  type = "text",
  width,
  height,
  value,
  setValue,
  onChange = (_: string) => {
    return [StateEnum.DEFAULT, ""];
  },
  placeholder = "Basic Input",
  round = "12px",
  thickness = "2px",
}: ValidationInputProps) {
  const [borderOn, setBorderOn] = useState(false);
  const [state, setState] = useState<StateEnum>(StateEnum.DEFAULT);
  const [validText, setValidText] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [newState, newValidText] = onChange(e.target.value);
    setState(newState);
    setValidText(newValidText);
    setValue(e.target.value);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setBorderOn(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <Wrapper>
      <Backboard
        ref={ref}
        w={width}
        h={height}
        borderOn={borderOn}
        state={state}
        round={round}
        thickness={thickness}>
        <Input
          ref={ref}
          value={value}
          type={type}
          onChange={onChangeHandler}
          placeholder={placeholder}
          onFocus={() => setBorderOn(true)}
        />
      </Backboard>

      <Gap h={5} />
      {validText === "" ? (
        <br />
      ) : (
        <Message round={round} state={state}>
          {validText}
        </Message>
      )}
    </Wrapper>
  );
}

export default ValidationInput;
