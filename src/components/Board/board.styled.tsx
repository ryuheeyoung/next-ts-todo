import styled from "styled-components";

const BoardBox = styled.div`
  flex: 1 0 250px;
  background: ${({ theme }) => theme.colors.outline};
  border-radius: 5px;
  box-sizing: border-box;
  padding: 0.5em;
`;

const BoardTitle = styled.h3`
  height: 25px;
  margin: 0;
  cursor: default;
  padding-bottom: 5px;
  text-align: center;
`;

const BoardContent = styled.div`
  height: calc(100% - 30px);
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap 5px;
  width: 100%;
`;

export { BoardBox, BoardTitle, BoardContent };
