import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Btn = styled.button`
  background-color: tomato;
  color: #fff;
`;
const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

function App() {
  return (
    <Container>
      <Btn />
      <Btn as="a" />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Container>
  );
}

export default App;
