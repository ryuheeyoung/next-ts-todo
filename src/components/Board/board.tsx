import {
  BoardBox,
  BoardContent,
  BoardTitle,
} from "components/Board/board.styled";

interface BoardProps {
  title: string;
  children?: React.ReactNode;
}

const Board = ({ title, children }: BoardProps) => {
  return (
    <BoardBox>
      <BoardTitle>{title}</BoardTitle>
      <BoardContent>{children || "hello"}</BoardContent>
    </BoardBox>
  );
};

export default Board;
