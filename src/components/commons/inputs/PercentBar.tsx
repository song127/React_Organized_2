// TODO:

import { Slider } from "@chakra-ui/react";
import styled from "@emotion/styled";

import SizedBox from "@/components/utils/SizedBox";
import COLORS from "@/styles/global/globalColor";

const BackBoard = styled.div`
  display: flex;
  align-items: center;

  justify-content: start;

  width: 100%;
  height: 16px;
  padding-left: 8px;
  box-sizing: border-box;

  border-radius: 32px;
  background: linear-gradient(270deg, #ff6262 0%, #f9cc8a 51.04%, #69caa1 100%);
`;

interface PercentBarProps {
  step: number;
  min?: number;
  max?: number;
  value: number;
  onChange: (value: number) => void;
}

function PercentBar({ step, min = 0, max = 50, value, onChange, ...props }: PercentBarProps) {
  return (
    <BackBoard>
      <SizedBox w={"50%"}>
        <SizedBox h={2.5} />
        <Slider
          aria-label={"Volume"}
          value={value}
          onChange={(value: number) => onChange(value)}
          defaultValue={0}
          min={min}
          max={50}
          step={1}
          sx={{
            backgroundColor: "transparent",
            "& .MuiSlider-thumb": {
              width: 14,
              height: 14,
              border: `solid ${COLORS.white} 2px`,
              borderRadius: "100%",
              backgroundColor: COLORS.black,
              boxShadow: "none",
            },
            "& .MuiSlider-rail": {
              backgroundColor: "transparent",
            },
            "& .MuiSlider-track": {
              border: "none",
              backgroundColor: "transparent",
            },
          }}
        />
      </SizedBox>
    </BackBoard>
  );
}

export default PercentBar;
