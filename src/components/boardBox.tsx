import styled from "styled-components";
import Board from "components/Board/board";
import Card from "./Card/card";

const BoardContainer = styled.div`
  flex: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  gap: 25px;
  overflow: scroll;
  max-width: 80vw;
`;

const BoardBox = () => {
  return (
    <BoardContainer>
      <Board title={"todo"}>
        <Card></Card>
      </Board>
      <Board title={"doing"}></Board>
      <Board title={"done"}></Board>
    </BoardContainer>
  );
};

export default BoardBox;
