import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { IpostProps, PostsState } from "../../../helper/types";

const initialState: PostsState = {
  favoritePosts: {},
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addFavorites: (state, action: PayloadAction<IpostProps>) => {
      const postId = action.payload.id;
      state.favoritePosts[postId] = action.payload;
    },
    deleteFavorites: (state, action: PayloadAction<IpostProps>) => {
      const postId = action.payload.id;
      delete state.favoritePosts[postId];
    },
    unCart: (state, action: PayloadAction<string>) => {
      if (state.favoritePosts[action.payload]) {
        delete state.favoritePosts[action.payload];
      }
    }
  },

});

export const { addFavorites, deleteFavorites, unCart } = postsSlice.actions;
export default postsSlice.reducer;

