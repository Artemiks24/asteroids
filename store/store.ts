import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../slice/postsSlice'

export function makeStore() {
    return configureStore({
        reducer: {
            posts: postReducer,
        }
    })
}

export const store = makeStore()

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;