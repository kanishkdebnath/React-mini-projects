import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { markBoard } from "../../features/board/boardSlice";
import { TurnType } from "../../features/board/boardTypes";
import "./Cell.css";

interface CellProps {
  cell: TurnType | null;
  cellIndex: number;
  boardIndex: number;
}

const Cell = ({ cell, cellIndex, boardIndex }: CellProps) => {
  const dispatch = useAppDispatch();
  const currentPlayer = useAppSelector((state) => state.board.turn);
  const handleClickCell = () => {
    dispatch(
      markBoard({
        superBoardIndex: boardIndex,
        boardIndex: cellIndex,
        turn: currentPlayer,
      })
    );
  };

  return (
    <div className="cell" onClick={handleClickCell}>
      {cell}
    </div>
  );
};

export default Cell;
