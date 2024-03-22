import { createSlice } from '@reduxjs/toolkit';

export const legValuesSlice = createSlice({
  name: 'legValues',
  initialState: {
    legColor: '#1c6c7b',
    legModel: 'leg1'
  },
  reducers: {
    setLegColor: (state, action) => {
      state.legColor = action.payload;
    },
    setLegModel: (state, action) => {
      state.legModel = action.payload;
    }
  },
});

export const { setLegColor, setLegModel } = legValuesSlice.actions;
export default legValuesSlice.reducer;