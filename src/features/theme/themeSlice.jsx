import { createSlice } from "@reduxjs/toolkit";
import counterSlice from "../counter/counterSlice";

const initialState = {
    theme : 'light',
}

const themeSlice = createSlice ({

    name : 'theme',
    initialState,
    reducers : {
        setLightTheme : (state) => {
            state.theme = 'light';
        }, 
        setDarkTheme : (state) => {
            state.theme = 'dark';
        }
    }
});

export const {setLightTheme, setDarkTheme} = themeSlice.actions;
export default themeSlice.reducer;