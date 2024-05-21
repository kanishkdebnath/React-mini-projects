import { useAppSelector } from "../../app/hooks";
import { selectSuperBoard } from "../../features/board/boardSlice";
import Board from "../Board/Board";
import "./SuperBoard.css";

const SuperBoard = () => {
  const superBoard = useAppSelector((state) => selectSuperBoard(state));

  return (
    <div className="super-board">
      {superBoard.boards.map((board, index) => (
        <Board key={index} board={board} boardIndex={index} />
      ))}
    </div>
  );
};

export default SuperBoard;
