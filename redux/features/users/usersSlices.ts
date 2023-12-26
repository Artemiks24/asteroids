import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IusersProps, UsersState } from "../../../helper/types";

const initialState: UsersState = {
  isAuth: false,
  email: '',
  token: '',
  id: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    toggleAuth: (state) => {
      state.isAuth = !state.isAuth;
    },
    setUser(state, action: PayloadAction<IusersProps>) {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
    },
    removeUser(state) {
      state.email = '';
      state.id = '';
      state.token = '';
    }
  },

});

export const { setUser, removeUser, toggleAuth } = usersSlice.actions;
export default usersSlice.reducer;