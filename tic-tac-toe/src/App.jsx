import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const baseGrid = [null, null, null, null, null, null, null, null, null];
const X = "X";
const O = "O";
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const disableBoxStyle = { cursor: "not-allowed" };
const enablePointer = { cursor: "pointer" };

const checkWinner = (player, grid) => {
  let winCombo = null;
  WINNING_COMBINATIONS.forEach(([a, b, c]) => {
    if (grid[a] !== null && grid[a] === grid[b] && grid[c] === grid[b]) {
      winCombo = [a, b, c];
    }
  });

  return winCombo;
};

function App() {
  const [grid, setGrid] = useState(baseGrid);
  const [currentPlayer, setCurrentPlayer] = useState(O);
  const [winner, setWinner] = useState(null);
  const [winCombo, setWinCombo] = useState(null);
  const handleReset = () => {
    setGrid(baseGrid);
    setCurrentPlayer(O);
    setWinner(null);
  };

  const handleBoxClick = (index) => {
    if (grid[index] === null && winner === null) {
      let currentGrid = [...grid];
      currentGrid[index] = currentPlayer;
      setGrid(currentGrid);
    }
  };

  const getPointerStyle = (index) => {
    if (grid[index]) {
      return disableBoxStyle;
    } 

    return enablePointer;
  }

  useEffect(() => {
    const winCombo = checkWinner(currentPlayer, grid);
    if (winCombo) {
      setWinner(currentPlayer);
      setWinCombo(winCombo);
    } else {
      if (currentPlayer === X) {
        setCurrentPlayer(O);
      } else {
        setCurrentPlayer(X);
      }
    }
  }, [grid]);

  return (
    <div className="container">
      <h1 className="title">Tic Tac Toe</h1>
      {winner ? (
        <h3 className="winner">Winner : {winner}</h3>
      ) : (
        <h3 className="text">
          Current player : <span className="turn">{currentPlayer}</span>
        </h3>
      )}
      <div className="board">
        <div className="row">
          <div
            className="box"
            onClick={() => {
              handleBoxClick(0);
            }}
            style={getPointerStyle(0)}
          >
            {grid[0]}
          </div>
          <div
            className="box"
            onClick={() => {
              handleBoxClick(1);
            }}
            style={getPointerStyle(1)}
          >
            {grid[1]}
          </div>
          <div
            className="box"
            onClick={() => {
              handleBoxClick(2);
            }}
            style={getPointerStyle(2)}
          >
            {grid[2]}
          </div>
        </div>
        <div className="row">
          <div
            className="box"
            onClick={() => {
              handleBoxClick(3);
            }}
            style={getPointerStyle(3)}
          >
            {grid[3]}
          </div>
          <div
            className="box"
            onClick={() => {
              handleBoxClick(4);
            }}
            style={getPointerStyle(4)}
          >
            {grid[4]}
          </div>
          <div
            className="box"
            onClick={() => {
              handleBoxClick(5);
            }}
            style={getPointerStyle(5)}
          >
            {grid[5]}
          </div>
        </div>
        <div className="row">
          <div
            className="box"
            onClick={() => {
              handleBoxClick(6);
            }}
            style={getPointerStyle(6)}
          >
            {grid[6]}
          </div>
          <div
            className="box"
            onClick={() => {
              handleBoxClick(7);
            }}
            style={getPointerStyle(7)}
          >
            {grid[7]}
          </div>
          <div
            className="box"
            onClick={() => {
              handleBoxClick(8);
            }}
            style={getPointerStyle(8)}
          >
            {grid[8]}
          </div>
        </div>
      </div>
      <button className="reset" type="button" onClick={handleReset}>
        Play Again
      </button>
    </div>
  );
}

export default App;
