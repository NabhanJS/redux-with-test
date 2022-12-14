import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increaseBy1(state) {
      state.count++;
    },
    decreaseBy1(state) {
      state.count--;
    }
  }
})

export const { increaseBy1, decreaseBy1 } = counterSlice.actions
export default counterSlice.reducer