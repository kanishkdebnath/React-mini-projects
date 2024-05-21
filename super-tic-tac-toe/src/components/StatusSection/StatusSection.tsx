import { useAppSelector } from "../../app/hooks";
import { selectSuperBoard } from "../../features/board/boardSlice";
import { TurnType } from "../../features/board/boardTypes";
import {
  selectFirstPlayer,
  selectSecondPlayer,
} from "../../features/players/playersSlice";
import "./StatusSection.css";

const StatusSection = () => {
  const firstPlayer = useAppSelector((state) => selectFirstPlayer(state));
  const secondPlayer = useAppSelector((state) => selectSecondPlayer(state));
  const currentPlayer = useAppSelector((state) => selectSuperBoard(state).turn);
  return (
    <div className="status-section-block">
      <div className="player-board">
        <div className="player-block">
          {firstPlayer} ({TurnType.X})
        </div>
        <div className="vs">VS</div>
        <div className="player-block">
          {secondPlayer} ({TurnType.O})
        </div>
      </div>

      <div className="current-status">Current Player : {currentPlayer}</div>
    </div>
  );
};

export default StatusSection;
