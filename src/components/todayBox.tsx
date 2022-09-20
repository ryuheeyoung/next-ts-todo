import styled from "styled-components";
import { BoardBox, BoardTitle } from "./Board/board.styled";

const TodayContainer = styled(BoardBox)`
  flex: 1 0 20vw;
  background: ${({ theme }) => theme.colors.outline};
  padding: 0.5em;
  border-radius: 5px;
  max-width: 20vw;
  min-width: 200px;
`;

const TodayBox = () => {
  return (
    <TodayContainer>
      <BoardTitle>Today</BoardTitle>
    </TodayContainer>
  );
};

export default TodayBox;
