import { createSlice } from '@reduxjs/toolkit';

export const sidePanelSlice = createSlice({
    name: 'legValues',
    initialState: {
        tabValue: "1",
        loading: true,
        progress: 0,

    },
    reducers: {
        setTabValue: (state, action) => {
            state.tabValue = action.payload;
            console.log("Tab Value: " + state.tabValue);
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
            console.log("Loading: " + state.loading);
        },
        setProgress: (state, action) => {
            state.progress = action.payload;
          },

    },
});
 
export const { setTabValue , setLoading , setProgress } = sidePanelSlice.actions;
export default sidePanelSlice.reducer;