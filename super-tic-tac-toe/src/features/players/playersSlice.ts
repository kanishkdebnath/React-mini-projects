import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface PlayersState {
  firstPlayer: string;
  secondPlayer: string;
  isFirstPlayerTurn: boolean;
}

// Define the initial state using that type
const initialState: PlayersState = {
  firstPlayer: "",
  secondPlayer: "",
  isFirstPlayerTurn: true,
}

export const playersSlice = createSlice({
  name: 'players',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleTurn: (state) => {
      state.isFirstPlayerTurn = !state.isFirstPlayerTurn;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    addPlayers: (state, action: PayloadAction<string[]>) => {
      state.firstPlayer = action.payload[0];
      state.secondPlayer = action.payload[1]
    },
  },
})

export const { toggleTurn, addPlayers} = playersSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectFirstPlayer = (state: RootState) => state.players.firstPlayer
export const selectSecondPlayer = (state: RootState) => state.players.secondPlayer
export const selectIsFirstPlayerTurn = (state: RootState) => state.players.isFirstPlayerTurn

export default playersSlice.reducer