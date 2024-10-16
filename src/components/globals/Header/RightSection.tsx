import styled from "@emotion/styled";

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export default function RightSection() {
  return (
    <Container>
      <p>RightSection</p>
    </Container>
  );
}
