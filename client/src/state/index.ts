import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// set functions to boolean
export interface InitialStateTypes {
    isSidebarCollapsed: boolean;
    isDarkMode: boolean;
}

// initial state of sidebar and dark mode (off)
const initialState: InitialStateTypes = {
    isSidebarCollapsed: false,
    isDarkMode: false,
}

export const globalSlice = createSlice({
    name: "global",
    initialState,

    // function for if sidebar is collapsed or not, or dark or not
    // function defines how the state should change in response to action
    reducers: {
        // (current stae, action is boolean payload type)
        setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
            // updates the isSideBarCollapsed property of the state with value of action's payload
            state.isSidebarCollapsed = action.payload;
        },
        setIsDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
        },
    },
});

export const { setIsSidebarCollapsed, setIsDarkMode } = globalSlice.actions;

export default globalSlice.reducer;