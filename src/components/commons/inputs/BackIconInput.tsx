import styled from "@emotion/styled";

import COLORS from "@/styles/global/globalColor";

interface BackIconInputProps {
  type?: string;
  value: string;
  setValue: (value: string) => void;
  onSearch?: () => void;
  iconComponent: React.ReactNode;
  placeholder?: string;
  round?: string;
}

const Backboard = styled.div<{ round: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  background-color: ${COLORS.gray_4};

  border-radius: ${(props) => props.round};
`;

const Input = styled.input`
  border-radius: 50px;

  width: 100%;
  height: 100%;

  padding: 0 12px 0 16px;

  color: ${COLORS.dark_1};

  &::placeholder {
    color: ${COLORS.gray_1};
  }
`;
function BackIconInput({
  type = "text",
  value,
  setValue,
  onSearch = () => {},
  iconComponent,
  placeholder = "Basic Icon Input",
  round = "50px",
}: BackIconInputProps) {
  return (
    <Backboard round={round}>
      <Input
        value={value}
        type={type}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
      <button onClick={onSearch} style={{ marginRight: 16 }}>
        {iconComponent}
      </button>
    </Backboard>
  );
}

export default BackIconInput;
