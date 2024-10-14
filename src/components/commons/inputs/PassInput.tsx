import { useState } from "react";

import styled from "@emotion/styled";

import CloseEye from "@/assets/icons/ic-close_eye.svg?react";
import OpenEye from "@/assets/icons/ic-open_eye.svg?react";
import Gap from "@/components/utils/Gap";
import COLORS from "@/styles/global/globalColor";
import { FadeInKf } from "@/utils/keyframe/BasicKF";

const Backboard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  background-color: ${COLORS.gray_4};

  border-radius: 50px;
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

const OpenEyeIcon = styled(OpenEye)`
  cursor: pointer;
  width: 24px;
  height: 24px;

  animation: ${FadeInKf} 0.5s;
`;

const CloseEyeIcon = styled(CloseEye)`
  cursor: pointer;
  width: 24px;
  height: 24px;

  animation: ${FadeInKf} 0.5s;
`;

interface PassInputProps {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
}

function PassInput({ value, setValue, placeholder = "Pass Input" }: PassInputProps) {
  const [isShow, setIsShow] = useState(false);

  return (
    <Backboard>
      <Input
        type={isShow ? "text" : "password"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
      {isShow ? (
        <OpenEyeIcon onClick={() => setIsShow(!isShow)} />
      ) : (
        <CloseEyeIcon onClick={() => setIsShow(!isShow)} />
      )}
      <Gap w={16} />
    </Backboard>
  );
}

export default PassInput;
