import { useSelector } from "react-redux";
import { BoardType } from "../../features/board/boardTypes";
import Cell from "../Cell/Cell";
import "./Board.css";
import { useAppSelector } from "../../app/hooks";

interface BoardProps {
  board: BoardType;
  boardIndex: number;
}

const Board = ({ board, boardIndex }: BoardProps) => {
  const currentBoard = useAppSelector((state) => state.board.currentBoard);
  let isActive = true;
  if (currentBoard && currentBoard == boardIndex) {
    isActive = true;
  }
  return (
    <div className={`board ${isActive ? "active" : ""}`}>
      {board.board.map((cell, index) => (
        <Cell
          cell={cell}
          key={index}
          cellIndex={index}
          boardIndex={boardIndex}
        />
      ))}
    </div>
  );
};

export default Board;
