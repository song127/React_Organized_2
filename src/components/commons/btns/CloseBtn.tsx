import styled from "@emotion/styled";

import Close from "@/assets/icons/ic-close.svg";
import ImageLoader from "@/components/utils/ImageLoader";

const IconButton = styled.button<{ size: "small" | "medium" | "large" }>`
  width: ${({ size }) => (size === "small" ? "1rem" : size === "medium" ? "1.5rem" : "2rem")};
  height: ${({ size }) => (size === "small" ? "1rem" : size === "medium" ? "1.5rem" : "2rem")};

  background-color: transparent;
  border: none;
  cursor: pointer;
`;

interface CloseButtonProps {
  size: "small" | "medium" | "large";
  onClick: () => void;
}

export const CloseButton = ({ size = "small", onClick }: CloseButtonProps) => {
  return (
    <IconButton size={size} onClick={onClick}>
      <ImageLoader w={"100%"} h={"100%"} src={Close} />
    </IconButton>
  );
};
