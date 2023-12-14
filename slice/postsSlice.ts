import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import exp from "constants";

export const fetchPosts = createAsyncThunk('posts/getAll', async (thunkApi) => {
    const response = await fetch('');
    const data = await response.json();
    return data;
})

const initialState = {
    entities : []
}

const postsSLice = createSlice ({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (buiilder) => {
        buiilder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.entities.push(...action.payload)
        })
    }
})

export default postsSLice.reducer