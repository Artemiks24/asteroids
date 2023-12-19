import { createSlice, } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    toggleAuth: (state) => {
      state.isAuth = !state.isAuth;
    },
  },
  
});

export const { toggleAuth } = postsSlice.actions;
export default postsSlice.reducer;