import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import {
  BASE_BOARD_STATE,
  BoardActionPayloadType,
  BoardType,
  SuperBoardType,
  TurnType,
  WINNING_COMBOS,
} from "./boardTypes";
import { RootState } from "../../app/store";

// Define the initial state using that type
const initialState: SuperBoardType = {
  settledBoards: new Set(),
  turn: TurnType.X,
  currentBoard: null,
  winner: null,
  boards: [
    BASE_BOARD_STATE,
    BASE_BOARD_STATE,
    BASE_BOARD_STATE,
    BASE_BOARD_STATE,
    BASE_BOARD_STATE,
    BASE_BOARD_STATE,
    BASE_BOARD_STATE,
    BASE_BOARD_STATE,
    BASE_BOARD_STATE,
  ],
};

// Helper functions
const evaluateBoardWinner = (board: TurnType[] | null[]) => {
  for (let [first, second, third] of WINNING_COMBOS) {
    if (
      board[first] &&
      board[first] === board[second] &&
      board[second] === board[third]
    ) {
      return board[first];
    }
  }

  return null;
};

const evaluateSuperBoardWinner = (board: BoardType[]) => {
  for (let [first, second, third] of WINNING_COMBOS) {
    if (
      board[first].winner &&
      board[first].winner === board[second].winner &&
      board[second].winner === board[third].winner
    ) {
      return board[first].winner;
    }
  }

  return null;
};

export const boardSlice = createSlice({
  name: "super-board",
  initialState,
  reducers: {
    markBoard: (state, action: PayloadAction<BoardActionPayloadType>) => {
      
      const { superBoardIndex, boardIndex, turn } = action.payload;
      state.boards[superBoardIndex].board[boardIndex] = turn;

      const boardWinner = evaluateBoardWinner(
        state.boards[superBoardIndex].board
      );
      state.boards[superBoardIndex].winner = boardWinner;

      if (boardWinner) {
        state.settledBoards.add(superBoardIndex);
      }

      const superBoardWinner = evaluateSuperBoardWinner(state.boards);
      state.winner = superBoardWinner;

      if (state.settledBoards.has(boardIndex)) {
        state.currentBoard = null;
      } else {
        state.currentBoard = boardIndex;
      }

      state.turn = state.turn === TurnType.X ? TurnType.O : TurnType.X;
    },
    resetBoard: (state) => {
      state = initialState
    }
  },
});

export const { markBoard, resetBoard } = boardSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSuperBoard = (state: RootState) => state.board

export default boardSlice.reducer;
