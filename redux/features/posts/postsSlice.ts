import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentDate } from "../../../helper/date";

const formattedDate: string = getCurrentDate();

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${formattedDate}&api_key=a1ihh4BLJWaSwt11csJ3TMSWdLUcJVcuKtIwRskQ`);
    const data = await response.json();
    return data;
  }
);

const initialState = {
  isAuth: false,
  status: 'idle',
  posts: {},
  error: null
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    toggleAuth: (state) => {
      state.isAuth = !state.isAuth;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = 'idle';
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.posts = action.payload.near_earth_objects;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  },
  
});

export const { toggleAuth } = postsSlice.actions;
export default postsSlice.reducer;