import { createSlice } from '@reduxjs/toolkit';

export const tableValuesSlice = createSlice({
  name: 'tableValues',
  initialState: {
    texture: '4',
    selectedModel: 'Ltable',
    resinColor: '',
    resinWidth: 30,
    edgeType: 'duz', 
  },
  reducers: {
    setTexture: (state, action) => {
      state.texture = action.payload;
      console.log(state.texture);
    },
    setSelectedModel: (state, action) => {
      state.selectedModel = action.payload;
      console.log(state.selectedModel);

    },
    setResinColor: (state, action) => {
      state.resinColor = action.payload;
      console.log(state.resinColor);

    },
    setResinWidth: (state, action) => {
      state.resinWidth = action.payload;
      console.log(state.resinWidth);

    },
    setEdgeType: (state, action) => {
      state.edgeType = action.payload;
      console.log(state.edgeType);

    }

  },
});

export const { setTexture, setSelectedModel, setResinColor, setResinWidth , setEdgeType } = tableValuesSlice.actions;
export default tableValuesSlice.reducer;