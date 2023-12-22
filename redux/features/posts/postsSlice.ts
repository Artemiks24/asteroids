import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { IpostProps, PostsState } from "../../../helper/types";

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
    toggleFavorites: (state, action: PayloadAction<IpostProps>) => {
      const postId = action.payload.id; 
      if (state.favoritePosts[postId]) {
        delete state.favoritePosts[postId];
      } else {
        state.favoritePosts[postId] = action.payload;
      }
    },
    unCart: (state,action: PayloadAction<string>) => {
      if(state.favoritePosts[action.payload]) {
          delete state.favoritePosts[action.payload]
        }
    }
  },
 
});

export const { toggleAuth, toggleFavorites, unCart } = postsSlice.actions;
export default postsSlice.reducer;

