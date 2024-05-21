export enum TurnType {
    X = "X",
    O = "O"
}

export interface BoardType {
    winner: TurnType | null;
    board: TurnType[] | null[];
}

export interface SuperBoardType {
    turn: TurnType;
    settledBoards: Set<number>;
    boards: BoardType[];
    currentBoard: number | null;
    winner: TurnType | null;
}

export const BASE_BOARD = [null, null, null, null, null, null, null, null, null];

export const BASE_BOARD_STATE: BoardType = {
    winner: null,
    board: BASE_BOARD
}

export interface BoardActionPayloadType {
    superBoardIndex: number,
    boardIndex: number,
    turn: TurnType
}


export const WINNING_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]