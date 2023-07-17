import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    client: { toggleForm: false }
}

export const ReducerSlice = createSlice({
    name: "users-app",
    initialState,
    reducers: {
        toggleChangeAction: (state) => {
            state.client.toggleForm = !state.client.toggleForm || false;
        }
    }
})

export const { toggleChangeAction } = ReducerSlice.actions

export default ReducerSlice.reducer;