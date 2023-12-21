import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { PostsState } from "../../../helper/types";

const initialState: PostsState = {
  isAuth: false,
  favoritePosts: {},
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    toggleAuth: (state) => {
      state.isAuth = !state.isAuth;
    },
    toggleFavorites: (state, action: PayloadAction<string>) => {
      const postId = action.payload; 
      if (state.favoritePosts[postId]) {
        delete state.favoritePosts[postId];
      } else {
        state.favoritePosts[postId] = true;
      }
    },
  },
 
});

export const { toggleAuth, toggleFavorites } = postsSlice.actions;
export default postsSlice.reducer;