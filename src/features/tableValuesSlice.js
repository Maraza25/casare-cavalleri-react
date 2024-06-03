import { createSlice, current } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

export const tableValuesSlice = createSlice({
  name: 'tableValues',
  initialState: {
    texture: 'ashfrassino.webp',
    selectedModel: 'rectangle',
    resinColor: 'blue',
    resinWidth: 30,
    resinOpacity: 0.5,
    edgeType: 'duz',
    measurements: {
      length: '',
      width: '',
      side1: '',
      side2: '',
      diameter: '',
      majorAxis: '',
      minorAxis: '',
      length1: '',
      length2: '',
      length3: ''
    }
  },
  reducers: {
    setTexture: (state, action) => {
      state.texture = action.payload;
      console.log('Texture: ' + state.texture);
    },
    setSelectedModel: (state, action) => {
      const newState = current(state);
      if (action.payload === 'Ltable' && newState.edgeType === 'oval') {
        state.edgeType = 'duz';
        toast.error("L-table model, edge type cannot be 'oval'", { duration: 3000 });
      }
      state.selectedModel = action.payload;
      console.log('Selected Model: ' + state.selectedModel);
    },
    setEdgeType: (state, action) => {
      state.edgeType = action.payload;
      console.log('Edge Type: ' + state.edgeType);
    },
    setResinColor: (state, action) => {
      state.resinColor = action.payload;
      console.log('Resin Color: ' + state.resinColor);
    },
    setResinWidth: (state, action) => {
      state.resinWidth = action.payload;
      console.log('Resin Width: ' + state.resinWidth);
    },
    setResinOpacity: (state, action) => {
      state.resinOpacity = action.payload;
      console.log('Resin Opacity: ' + state.resinOpacity);
    },
    setMeasurements: (state, action) => {
      state.measurements = { ...state.measurements, ...action.payload };
      console.log('Measurements:', state.measurements);
    }
  }
});

export const {
  setTexture,
  setSelectedModel,
  setEdgeType,
  setResinColor,
  setResinWidth,
  setResinOpacity,
  setMeasurements
} = tableValuesSlice.actions;

export default tableValuesSlice.reducer;
