import { createSlice, current } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

export const tableValuesSlice = createSlice({
  name: 'tableValues',
  initialState: {
    texture: 'ash - frassino.webp',
    selectedModel: 'Ltable',
    resinColor: 'blue', 
    resinWidth: 30,
    edgeType: 'duz', 
  },
  reducers: {
    setTexture: (state, action) => {
      state.texture = action.payload;
      console.log("Texture: " + state.texture);
    },
    setSelectedModel: (state, action) => {
      const newState = current(state);
      // Eğer yeni model Ltable ve kenar türü oval ise, kenar türünü düz yap
      if (action.payload === 'Ltable' && newState.edgeType === 'oval') {
        state.edgeType = 'duz';
        toast.error("L-table model, edge type cannot be 'oval'", { duration: 3000 });
      }
      state.selectedModel = action.payload;
      console.log("Selected Model: " + state.selectedModel);
    },
    setEdgeType: (state, action) => {
      state.edgeType = action.payload;
      console.log("Edge Type: " + state.edgeType);
    },
    setResinColor: (state, action) => {
      state.resinColor = action.payload;
      console.log("Resin Color: " + state.resinColor);
    },
    setResinWidth: (state, action) => {
      state.resinWidth = action.payload;
      console.log("Resin Width: " + state.resinWidth);
    }
  },
});

export const { setTexture, setSelectedModel, setResinColor, setResinWidth, setEdgeType } = tableValuesSlice.actions;
export default tableValuesSlice.reducer;
