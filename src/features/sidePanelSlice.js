import { createSlice } from '@reduxjs/toolkit';

export const sidePanelSlice = createSlice({
    name: 'legValues',
    initialState: {
        tabValue: "1",
    },
    reducers: {
        setTabValue: (state, action) => {
            state.tabValue = action.payload;
        },

    },
});

export const { setTabValue } = sidePanelSlice.actions;
export default sidePanelSlice.reducer;