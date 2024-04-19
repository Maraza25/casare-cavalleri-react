import { createSlice } from '@reduxjs/toolkit';

export const legValuesSlice = createSlice({
  name: 'legValues',
  initialState: {
    legColor: '#000000',
    legModel: 'leg9'
  },
  reducers: {
    setLegColor: (state, action) => {
      state.legColor = action.payload;
      console.log("Leg Color: " + state.legColor);
    },
    setLegModel: (state, action) => {
      state.legModel = action.payload;
      console.log("Leg Model: " + state.legModel);
    }
  },
});

export const { setLegColor, setLegModel } = legValuesSlice.actions;
export default legValuesSlice.reducer;