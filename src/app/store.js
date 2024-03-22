// store.js
import { configureStore } from '@reduxjs/toolkit';
import tableValuesReducer from '../features/tableValuesSlice';
import legValuesReducer from '../features/legValuesSlice';
import sidePanelSlice from '../features/sidePanelSlice';

export const store = configureStore({
  reducer: {
    tableValues: tableValuesReducer,
    legValues: legValuesReducer,
    sidePanel: sidePanelSlice,
  },
});
