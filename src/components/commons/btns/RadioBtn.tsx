import styled from "@emotion/styled";

import Gap from "@/components/utils/Gap";
import { CenterToPopKf } from "@/utils/keyframe/BasicKF";

const Container = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  width: max-content;
  height: max-content;

  color: black;
`;

const CircleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 25px; // should be odd number because of the border padding
  height: 25px;

  border-radius: 100%;
  border: 1px solid black;
`;

const Circle = styled.div`
  display: flex;

  width: 81%;
  height: 81%;

  border-radius: 100%;

  background-color: black;

  animation: ${CenterToPopKf} 0.2s ease-in-out;
`;

interface RadioBtnProps {
  index: number;
  currentIndex: number;
  setIndex: (index: number) => void;
  children: React.ReactNode;
}

function RadioBtn({ index, currentIndex, setIndex, children }: RadioBtnProps) {
  return (
    <Container onClick={() => setIndex(index)}>
      <CircleContainer>{index === currentIndex && <Circle />}</CircleContainer>
      <Gap w={4} />
      {children}
    </Container>
  );
}

export default RadioBtn;
