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
    setUser(state, action: PayloadAction<IusersProps>) {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.isAuth = true;
    },
    removeUser(state) {
      state.email = '';
      state.id = '';
      state.token = '';
      state.isAuth = false;
    }
  },

});

export const { setUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;