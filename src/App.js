import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Text = styled.span`
  font-size: 30px;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  ${Text} {
    &:hover {
      font-size: 50px;
    }
  }
`;

function App() {
  return (
    <Container>
      <Box>
        <Text>hello</Text>
      </Box>
    </Container>
  );
}

export default App;
