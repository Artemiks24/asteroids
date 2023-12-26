import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { IpostProps, PostsState } from "../../../helper/types";

const initialState: PostsState = {
  favoritePosts: {},
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    toggleFavorites: (state, action: PayloadAction<IpostProps>) => {
      const postId = action.payload.id;
      if (state.favoritePosts[postId]) {
        delete state.favoritePosts[postId];
      } else {
        state.favoritePosts[postId] = action.payload;
      }
    },
    unCart: (state, action: PayloadAction<string>) => {
      if (state.favoritePosts[action.payload]) {
        delete state.favoritePosts[action.payload];
      }
    }
  },

});

export const { toggleFavorites, unCart } = postsSlice.actions;
export default postsSlice.reducer;

