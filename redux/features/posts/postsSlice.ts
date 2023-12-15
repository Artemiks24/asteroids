'use client';
import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        isAuth: false,
        posts: [],
    },
    reducers:{
        toggleAuth: (state) => {state.isAuth = !state.isAuth;},
    }

});
export const {toggleAuth} = postsSlice.actions;
export default postsSlice.reducer;