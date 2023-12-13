import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: "light",
}

// With reduxjs toolkit, is able create reducers with actions
export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeToDark: (state) => {
            // The document of the react in https://redux.js.org/tutorials/essentials/part-2-app-structure show for us that the safe mode to change state is with spread, as it make copy of object.

            // The other way to change the state, but dangerous, is changing the self state, as the example below:
            // state.value = "dark"
            return {
                ...state,
                value: "dark"
            }
        },
        changeToLight: (state) => {
            return {
                ...state,
                value: "light"
            }
        },
        changeWithPayLoad: (state, action) => {
            return {
                ...state,
                value: action.payload
            }
        }
    }
})

export const { changeToDark, changeToLight, changeWithPayLoad } = themeSlice.actions

export const selectTheme = (state) => state.theme.value

export default themeSlice.reducer