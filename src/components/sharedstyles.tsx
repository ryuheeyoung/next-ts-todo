import styled from "styled-components";

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
  background: ${(props) => props.theme.colors.base};
`;
const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  margin: 0 0 1.25em 0;
`;
const Content = styled.div`
  flex: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  gap: 50px;
  width: 100vw;
  padding: 1.25em;
`;

export { Container, Main, Title, Content };
