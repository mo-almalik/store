import { createSlice } from "@reduxjs/toolkit"; 

    const navbarSlice = createSlice({
        name: "navbar",
        initialState: {
            isMenuOpen: true,
        },
        reducers: {
            toggleMenu(state) {
                state.isMenuOpen =!state.isMenuOpen;
            },
        },
    })

    export const { toggleMenu } = navbarSlice.actions;
    export default navbarSlice.reducer;

