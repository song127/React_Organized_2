import { useState } from "react";

import { CircularProgress } from "@chakra-ui/react";

import RectangleBtn from "@/components/commons/btns/RectangleBtn";
import COLORS from "@/styles/global/globalColor";

interface ClickToLoadingBtnProps {
  children: React.ReactNode;
  onClick?: () => Promise<void>;
  active?: boolean;
  backColor?: string;
  textColor?: string;
  fontSize?: number;
  round?: string;
  progressSize?: number;
}

function ClickToLoadingBtn({
  children,
  onClick = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  },

  active = true,
  backColor = "black",
  textColor = "white",
  fontSize = 16,
  round = "0rem",
}: ClickToLoadingBtnProps) {
  const [localLoading, setLocalLoading] = useState(false);

  const handleClick = async () => {
    setLocalLoading(true);
    await onClick();
    setLocalLoading(false);
  };

  return (
    <RectangleBtn
      onClick={handleClick}
      active={active}
      backColor={backColor}
      textColor={textColor}
      fontSize={fontSize}
      round={round}>
      {localLoading ? (
        <CircularProgress
          style={{ width: "45px", height: "45px" }}
          isIndeterminate
          capIsRound
          size={40}
          color={COLORS.black.hex}
        />
      ) : (
        children
      )}
    </RectangleBtn>
  );
}

export default ClickToLoadingBtn;
